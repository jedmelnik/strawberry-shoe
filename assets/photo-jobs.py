import concurrent.futures as cf
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRIPT = r"C:\Users\jedme\.cursor\skills\website-rebuild\scripts\gpt_image.py"
ORIG = ROOT / "assets" / "original"

STYLE = (
    "Editorial color photograph inside a small, old-fashioned neighborhood cobbler's shop: "
    "warm late-afternoon window light, a dark walnut workbench, deep bottle-green walls, brass details, "
    "worn leather, calm and uncluttered, shallow depth of field."
)
END = "No text, no logos, no watermarks."
LEFT = "The subject sits in the right half of the frame; the left half stays quiet and softly lit for a title."
NO_PEOPLE = "No people in the frame."


def banner(subject):
    return f"{STYLE} {subject} {LEFT} {END}"


def product(subject):
    return (
        f"{STYLE} Close product photograph of {subject}, resting on the walnut workbench, centered, "
        f"the whole product in frame with generous space around it, sharp and detailed. {END}"
    )


def edit(what):
    return (
        f"Keep {what} exactly: the same shape, proportions, materials, and colors. "
        "Place it on a dark walnut workbench in warm late-afternoon window light, centered with generous space "
        "around it, sharp and detailed at this size. Remove all packaging, cards, and printed text. "
        "Add nothing that is not in the photo."
    )


JOBS = [
    # id, mode, size, quality, prompt, source
    ("home-hero", "generate", "1920x1088", "high", banner(
        "A cobbler's walnut workbench by the shop window: a pair of polished oxblood leather brogues, one on a "
        "cast-iron shoe last mid-resole, waxed linen thread, a brass-headed hammer and awls, and an open pocket "
        "watch with a jeweler's loupe beside it."), None),
    ("services-hero", "generate", "2400x800", "high", banner(
        "Close view of a cobbler's hands stitching a new leather sole onto a brown leather boot at the walnut "
        "bench, an awl and waxed thread in hand. Only the hands and forearms are in frame, cropped below the "
        "elbows; no face, no head, no shoulders."), None),
    ("products-hero", "generate", "2400x800", "high", banner(
        "A wooden shop shelf holding unlabeled round tins of shoe cream and wax polish, coiled leather and cotton "
        "laces, cedar shoe trees, and horsehair brushes. " + NO_PEOPLE), None),
    ("birkenstock-hero", "generate", "2400x800", "high", banner(
        "A pair of contoured natural cork footbed insoles with suede tops lying on the walnut bench beside a "
        "brown leather sandal."), None),
    ("spenco-hero", "generate", "2400x800", "high", banner(
        "An assortment of cushioned insoles, gel heel cups, and arch supports laid out neatly in a row on the "
        "walnut workbench. " + NO_PEOPLE), None),
    ("policy-hero", "generate", "2400x800", "high", banner(
        "A tidy stack of plain brown cardboard shoe boxes on the shop counter, with a few blank paper claim "
        "tickets on a brass spike beside them. " + NO_PEOPLE), None),
    ("contact-hero", "generate", "2400x800", "high", banner(
        "The shop's front counter seen from the doorway: a brass counter bell, a round vintage wall clock, "
        "and shelves of repaired shoes tagged with blank paper tickets waiting for pickup. " + NO_PEOPLE), None),
    ("home-leather", "generate", "1024x1280", "high", f"{STYLE} A leather handbag being restitched at the "
        "walnut bench, its strap and a brass buckle beside it, a spool of waxed thread and an awl. " + END, None),
    ("panel-services", "generate", "1536x1024", "medium", f"{STYLE} A men's leather dress shoe on a cast-iron "
        "cobbler's last with a new heel being fitted, tools beside it. " + END, None),
    ("panel-watch", "generate", "1536x1024", "medium", f"{STYLE} An open wristwatch with its back removed on a "
        "small green leather mat, fine tweezers and a jeweler's loupe beside it. " + END, None),
    ("panel-insoles", "generate", "1536x1024", "medium", f"{STYLE} A contoured cork arch-support insole and a "
        "green cushioned insole side by side on the walnut bench. " + END, None),
    # Birkenstock, all original hotlinks dead
    ("birk-casual", "generate", "1024x1024", "medium", product(
        "a three-quarter length orthotic arch-support insole with a blue suede top over a natural cork base, "
        "a pronounced arch and a deep heel cup, made for flat shoes"), None),
    ("birk-heeled", "generate", "1024x1024", "medium", product(
        "a short, steeply contoured orthotic arch-support insole with a blue suede top over a natural cork base "
        "and a deep heel cup, shaped for shoes with low heels"), None),
    ("birk-air-34", "generate", "1024x1024", "medium", product(
        "a three-quarter length air-cushion insole with a breathable grey-blue woven fabric liner"), None),
    ("birk-air-full", "generate", "1024x1024", "medium", product(
        "a pair of full-length air-cushion insoles with a breathable grey-blue woven fabric liner"), None),
    ("birk-air-ladies", "generate", "1024x1024", "medium", product(
        "a pair of slim women's full-length air-cushion insoles with a smooth tan leather liner"), None),
    # Spenco, originals that still load are edited below
    ("spenco-polysorb-total", "generate", "1024x1024", "medium", product(
        "a pair of full-length athletic insoles with a black fabric top, a firm grey arch support, and a "
        "cushioned heel"), None),
    ("spenco-walker", "generate", "1024x1024", "medium", product(
        "a pair of full-length walking and running insoles with a black fabric top and blue cushioned pads at "
        "the forefoot and heel"), None),
    ("spenco-cross", "generate", "1024x1024", "medium", product(
        "a pair of full-length cross-training insoles with a black fabric top and a wide supportive arch"), None),
    ("spenco-hiker", "generate", "1024x1024", "medium", product(
        "a pair of rugged full-length hiking insoles with a deep heel cup and a dark green fabric top"), None),
    ("spenco-orthotic-full", "generate", "1024x1024", "medium", product(
        "a pair of full-length orthotic arch-support insoles with a firm semi-rigid arch and a green fabric "
        "top"), None),
    ("spenco-orthotic-34", "generate", "1024x1024", "medium", product(
        "a pair of three-quarter length orthotic arch supports with a firm arch and a green fabric top"), None),
    ("spenco-thinsole-full", "generate", "1024x1024", "medium", product(
        "a pair of very thin, low-profile full-length orthotic insoles with a green fabric top"), None),
    ("spenco-thinsole-34", "generate", "1024x1024", "medium", product(
        "a pair of very thin, low-profile three-quarter length orthotic insoles with a green fabric top"), None),
    ("spenco-bof", "generate", "1024x1024", "medium", product(
        "a pair of small green crescent-shaped ball-of-the-foot cushion pads"), None),
    ("spenco-heel", "generate", "1024x1024", "medium", product(
        "a pair of green cushioned heel pads"), None),
    ("spenco-proform", "generate", "1024x1024", "medium", product(
        "a pair of thin full-length grey foam insoles"), None),
    ("spenco-gel-total", "generate", "1024x1024", "medium", product(
        "a pair of full-length insoles with translucent blue gel pads at the heel and forefoot"), None),
    ("spenco-gel-heel-cushion", "generate", "1024x1024", "medium", product(
        "a pair of translucent blue gel heel cushions"), None),
    ("spenco-gel-heel-cup", "generate", "1024x1024", "medium", product(
        "a pair of translucent blue gel heel cups with raised sides"), None),
    ("spenco-gel-bof", "generate", "1024x1024", "medium", product(
        "a pair of translucent blue gel ball-of-the-foot pads"), None),
    ("spenco-liner", "edit", "1024x1024", "medium", edit("these two green-topped insoles"),
        "SB_Liner.222155753_std.jpg"),
    ("spenco-arch-full", "edit", "1024x1024", "medium", edit("only the full-length green and black arch cushion "
        "insole from this package"), "Spenco_Arch_Cushion_full.84153000_std.jpg"),
    ("spenco-arch-34", "edit", "1024x1024", "medium", edit("only the three-quarter length green and black arch "
        "cushion insole from this package"), "Spenco_34_Arch_Cushions.84152747_std.jpg"),
    ("spenco-gel-34", "edit", "1024x1024", "medium", edit("this blue and orange three-quarter length gel insole"),
        "Spenco_Gel_insole_34.84160402_std.jpg"),
]


def run(job):
    id_, mode, size, quality, prompt, src = job
    out = ROOT / "public" / "images" / f"{id_}.jpg"
    if out.exists():
        return id_, 0, "exists"
    cmd = [sys.executable, SCRIPT, mode, "--size", size, "--quality", quality, "--prompt", prompt, "--out", str(out)]
    if src:
        cmd += ["--image", str(ORIG / src)]
    r = subprocess.run(cmd, capture_output=True, text=True)
    return id_, r.returncode, (r.stdout + r.stderr).strip().splitlines()[-1]


if __name__ == "__main__":
    only = set(sys.argv[1:])
    jobs = [j for j in JOBS if not only or j[0] in only]
    with cf.ThreadPoolExecutor(max_workers=6) as pool:
        for id_, code, msg in pool.map(run, jobs):
            print(f"{id_}: exit {code} {msg}", flush=True)
