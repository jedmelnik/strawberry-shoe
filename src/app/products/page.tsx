import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import {
  birkenstockInsoles,
  heroes,
  productCategories,
  spencoInsoles,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Leather care products, Spenco and Birkenstock insoles, laces, stretchers, polishes, and comfort cushions at Strawberry Shoe & Watch Repair.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="In stock"
        title="Products & insoles"
        lede="A full line of leather care products, plus Spenco and Birkenstock insoles, laces, and shoe-related essentials."
        image={heroes.products}
        actions={
          <Button
            render={<Link href="/contact" />}
            className="bg-brand text-white hover:bg-brand/90"
          >
            Ask what is in stock
          </Button>
        }
      />

      <section className="site-wrap py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {productCategories.map((category) => (
            <div key={category.title} className="border-t border-ink/15 pt-5">
              <h2 className="font-display text-2xl text-ink">{category.title}</h2>
              <ul className="mt-4 space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-ink/75">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="birkenstock"
        className="scroll-mt-28 border-y border-ink/10 bg-card/70"
      >
        <div className="site-wrap py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Birkenstock
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink">
            Insoles and inserts with real arch support
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 md:text-base">
            Aside from the sandals, Birkenstock also makes a full line of
            insoles and inserts. Review our stock below, and ask in-store for
            current sizes.
          </p>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {birkenstockInsoles.map((item) => (
              <li
                key={item.name}
                className="border-t border-ink/15 pt-4"
              >
                <h3 className="font-display text-lg text-ink">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {item.details}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="spenco" className="scroll-mt-28 site-wrap py-12 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Spenco
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Cushioning for walking, work, and sport
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">
              We carry Spenco liners, arch cushions, Polysorb supports, heel and
              metatarsal pads, and more. Availability varies - call ahead if you
              need a specific model.
            </p>
            <ul className="mt-6 columns-1 gap-x-10 sm:columns-2">
              {spencoInsoles.map((item) => (
                <li
                  key={item}
                  className="mb-2 break-inside-avoid text-sm text-ink/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/spenco-arch.jpg"
                alt="Spenco arch cushion"
                fill
                className="object-contain p-4"
                sizes="200px"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/spenco-liner.jpg"
                alt="Spenco liner insole"
                fill
                className="object-contain p-4"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
