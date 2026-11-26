(async () => {
  const pages = window.__qaPages || ["/", "/services", "/products", "/birkenstock-insoles", "/spenco-insoles", "/policy", "/contact"];
  const widths = window.__qaWidths || [375, 768, 1280, 1920];
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const out = [];

  const lastLine = (doc, el) => {
    const walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const words = [];
    let node;
    while ((node = walker.nextNode())) {
      const re = /[^\s]+/g;
      let m;
      while ((m = re.exec(node.data))) {
        const range = doc.createRange();
        range.setStart(node, m.index);
        range.setEnd(node, m.index + m[0].length);
        const rects = range.getClientRects();
        if (rects.length) words.push(rects[rects.length - 1]);
      }
    }
    if (words.length < 3) return null;
    const last = words[words.length - 1];
    const onLast = words.filter((r) => Math.abs(r.top - last.top) < 4);
    if (onLast.length === words.length || onLast.length > 2) return null;
    const box = el.getBoundingClientRect();
    const fill = (last.right - onLast[0].left) / box.width;
    return fill < 0.5 ? `${onLast.length} words, ${Math.round(fill * 100)}%` : null;
  };

  for (const width of widths) {
    for (const path of pages) {
      const frame = document.createElement("iframe");
      frame.style.cssText = `position:fixed;left:0;top:0;width:${width}px;height:900px;border:0;opacity:0;pointer-events:none;z-index:-1`;
      document.body.appendChild(frame);
      await new Promise((r) => {
        frame.onload = r;
        frame.src = path;
      });
      await sleep(900);
      const win = frame.contentWindow;
      const doc = frame.contentDocument;
      doc.documentElement.classList.remove("can-reveal");
      doc.querySelectorAll("img[loading=lazy]").forEach((i) => (i.loading = "eager"));
      for (let y = 0; y < doc.documentElement.scrollHeight; y += 700) {
        win.scrollTo(0, y);
        await sleep(120);
      }
      for (let t = 0; t < 40 && [...doc.images].some((i) => !i.complete); t++) await sleep(250);
      const broken = [...doc.images].filter((i) => !i.naturalWidth).map((i) => i.getAttribute("src"));
      const orphans = [];
      doc.querySelectorAll("main p, main h1, main h2, main h3, main li, main dd, main strong, footer p").forEach((el) => {
        if (!el.offsetParent && getComputedStyle(el).position !== "fixed") return;
        if (el.querySelector("li, p, h2")) return;
        const n = lastLine(doc, el);
        if (n) orphans.push(`${el.tagName.toLowerCase()}: "${el.textContent.trim().slice(-48)}" (${n})`);
      });
      const overflow = doc.documentElement.scrollWidth > width + 1;
      const wide = overflow
        ? [...doc.querySelectorAll("body *")]
            .filter((e) => e.getBoundingClientRect().right > width + 1)
            .slice(0, 6)
            .map((e) => `${e.tagName.toLowerCase()}.${e.className} ${Math.round(e.getBoundingClientRect().right)}`)
        : [];
      out.push({ width, path, images: doc.images.length, broken, orphans, overflow, wide });
      frame.remove();
    }
  }
  return JSON.stringify(
    out
      .filter((r) => r.broken.length || r.orphans.length || r.overflow)
      .concat([{ checked: out.length, images: out.reduce((s, r) => s + r.images, 0) }]),
    null,
    1
  );
})();
