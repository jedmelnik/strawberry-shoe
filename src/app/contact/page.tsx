import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { directions, heroes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hours, directions, and contact info for Strawberry Shoe & Watch Repair at Strawberry Village in Mill Valley.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Find us"
        title="Contact & directions"
        lede="Stop by Strawberry Village, call the shop, or send a quick message."
        image={heroes.contact}
        ledeOnMobile
        actions={
          <Button
            render={<a href={site.phoneHref} />}
            className="bg-brand text-white hover:bg-brand/90"
          >
            <Phone className="size-4" />
            {site.phone}
          </Button>
        }
      />

      <section className="site-wrap grid gap-12 py-12 md:grid-cols-[1fr_1.05fr] md:py-16">
        <div>
          <h2 className="font-display text-2xl text-ink md:text-3xl">
            Shop details
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
              <div>
                <p className="font-medium text-ink">{site.address.full}</p>
                <p className="mt-1 text-sm text-ink/70">
                  {site.address.landmark}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
              <a href={site.phoneHref} className="font-medium text-ink hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand" />
              <a
                href={site.emailHref}
                className="font-medium text-ink hover:text-brand"
              >
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
              <ul className="space-y-1 text-sm text-ink/80">
                {site.hours.map((row) => (
                  <li key={row.day} className="flex gap-3">
                    <span className="w-24 font-medium text-ink">{row.day}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-md border border-ink/10 bg-card">
            <iframe
              title="Map to Strawberry Shoe & Watch Repair"
              src={site.mapsEmbed}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <Button
            render={
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            className="mt-4 border-ink/20"
          >
            Get directions
          </Button>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink md:text-3xl">
            Send a message
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            For directions, product questions, or service info - or email{" "}
            <a href={site.emailHref} className="text-brand hover:underline">
              {site.email}
            </a>
            .
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-card/60">
        <div className="site-wrap grid gap-10 py-12 md:grid-cols-2 md:py-14">
          <div>
            <h2 className="font-display text-xl text-ink">Northbound on 101</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink/75">
              {directions.northbound.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Southbound on 101</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink/75">
              {directions.southbound.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
