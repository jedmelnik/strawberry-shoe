import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { heroes, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Shoe repair, watch repair, orthopedic adjustments, key duplication, leather conditioning, zipper replacement, and more in Mill Valley.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="Repair services"
        lede="Beyond a full range of shoe repair, we also offer watch work, key duplication, orthopedic adjustments, and leather restoration."
        image={heroes.services}
        actions={
          <Button
            render={<a href={site.phoneHref} />}
            className="bg-brand text-white hover:bg-brand/90"
          >
            <Phone className="size-4" />
            Ask about a repair
          </Button>
        }
      />

      <section className="site-wrap py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm leading-relaxed text-ink/75">
            Apart from the services you would expect from a shoe repair shop, we
            also offer the following. Call{" "}
            <a href={site.phoneHref} className="font-medium text-brand">
              {site.phone}
            </a>{" "}
            with questions about your item.
          </p>
        </div>

        <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-t border-ink/15 pt-5"
            >
              <h2 className="font-display text-xl text-ink md:text-2xl">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 md:text-[0.95rem]">
                {service.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-ink/15 pt-8">
          <Button
            render={<Link href="/products" />}
            className="bg-brand text-white hover:bg-brand/90"
          >
            Browse products
          </Button>
          <Button
            render={<Link href="/contact" />}
            variant="outline"
            className="border-ink/20"
          >
            Visit or contact us
          </Button>
        </div>
      </section>
    </>
  );
}
