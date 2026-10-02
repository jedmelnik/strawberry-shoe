import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import {
  brandLinks,
  heroes,
  homeServices,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        size="home"
        kicker="Strawberry Village · Mill Valley"
        title={
          <>
            Strawberry Shoe
            <br />
            &amp; Watch Repair
          </>
        }
        lede="For over 30 years, we have repaired just about everything made of leather - plus watches, keys, and comfort footwear."
        image={heroes.home}
        actions={
          <>
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="bg-brand text-white hover:bg-brand/90"
            >
              <Phone className="size-4" />
              {site.phone}
            </Button>
            <Button
              render={<Link href="/services" />}
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              Our services
            </Button>
          </>
        }
      />

      <section className="site-wrap py-14 md:py-18">
        <div className="max-w-2xl animate-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Who we are
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
            Craft care for shoes, leather, and watches
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75 md:text-lg">
            We specialize in orthopedic, comfort, and functional shoes - and we
            handle the everyday repairs that keep your favorite leather goods
            in rotation.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((item, index) => (
            <li
              key={item.title}
              className={`animate-rise border-t border-ink/15 pt-5 ${
                index === 1
                  ? "animate-rise-delay"
                  : index >= 2
                    ? "animate-rise-delay-2"
                    : ""
              }`}
            >
              <Link href={item.href} className="group block">
                <h3 className="font-display text-xl text-ink transition-colors group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {item.blurb}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-ink/10 bg-ink text-white">
        <div className="site-wrap grid items-center gap-10 py-14 md:grid-cols-2 md:gap-12 md:py-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/section-watch.jpg"
              alt="Wristwatch with a leather strap"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
              Watch bench
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              Batteries, bands, and high-end service
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              From a quick battery swap to repairs on Rolex, Tag Heuer, Cartier,
              and other fine watches - bring it in and we will take a look.
            </p>
            <Button
              render={<Link href="/services#watch-repair" />}
              className="mt-6 bg-brand text-white hover:bg-brand/90"
            >
              Watch repair details
            </Button>
          </div>
        </div>
      </section>

      <section className="site-wrap py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Visit the shop
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Strawberry Village Shopping Center
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75">
              {site.address.landmark}
            </p>
            <dl className="mt-8 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <div>
                  <dt className="text-sm font-semibold text-ink">Address</dt>
                  <dd className="mt-1 text-sm text-ink/75">
                    {site.address.full}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
                <div>
                  <dt className="text-sm font-semibold text-ink">Hours</dt>
                  <dd className="mt-1 text-sm text-ink/75">
                    {site.hoursSummary}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                <div>
                  <dt className="text-sm font-semibold text-ink">Phone</dt>
                  <dd className="mt-1 text-sm text-ink/75">
                    <a href={site.phoneHref} className="hover:text-brand">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Star className="mt-0.5 size-5 shrink-0 text-brand" />
                <div>
                  <dt className="text-sm font-semibold text-ink">On Yelp</dt>
                  <dd className="mt-1 text-sm text-ink/75">
                    {site.yelpRating} stars from {site.yelpReviews} reviews -{" "}
                    <a
                      href={site.yelpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand hover:underline"
                    >
                      read reviews
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/contact" />}
                className="bg-brand text-white hover:bg-brand/90"
              >
                Contact &amp; directions
              </Button>
              <Button
                render={
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                className="border-ink/20"
              >
                Open in Maps
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-ink/10 bg-card shadow-sm">
            <iframe
              title="Map to Strawberry Shoe & Watch Repair"
              src={site.mapsEmbed}
              className="h-72 w-full border-0 md:h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-card/60 py-12 md:py-14">
        <div className="site-wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Comfort brands we know
          </p>
          <p className="mt-2 max-w-xl text-sm text-ink/65">
            External brand sites - not part of strawberryshoe.com. We work on
            orthopedic, comfort, and functional footwear every day.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {brandLinks.map((brand) => (
              <li key={brand.name}>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink/80 underline-offset-4 hover:text-brand hover:underline"
                >
                  {brand.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
