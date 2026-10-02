import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { heroes, policyPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "Policy",
  description:
    "Repair guarantees, return windows, and exchange requirements for Strawberry Shoe & Watch Repair in Mill Valley.",
};

export default function PolicyPage() {
  return (
    <>
      <PageHero
        kicker="Shop policy"
        title="Guarantees & returns"
        lede="Straightforward terms for repairs, in-store purchases, and shipped orders."
        image={heroes.policy}
      />

      <section className="site-wrap py-12 md:py-16">
        <ol className="max-w-2xl space-y-5">
          {policyPoints.map((point, index) => (
            <li key={point} className="flex gap-4 border-t border-ink/15 pt-5">
              <span className="font-display text-lg text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-ink/80">{point}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Button
            render={<Link href="/contact" />}
            className="bg-brand text-white hover:bg-brand/90"
          >
            Questions? Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
