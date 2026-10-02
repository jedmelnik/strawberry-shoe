import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-ink text-white">
      <div className="site-wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8 md:py-14">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/images/logo-strawberry.png"
              alt=""
              width={40}
              height={38}
              className="h-9 w-auto"
            />
            <span className="font-display text-lg leading-tight tracking-tight">
              <span className="block font-semibold">{site.shortName}</span>
              <span className="block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-brand-soft">
                &amp; Watch Repair
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {site.address.street}
            <br />
            {site.address.suite}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </p>
          <p className="mt-3 text-sm text-white/65">{site.hoursSummary}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.phoneHref}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-wrap flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Strawberry Village · Mill Valley, CA</p>
        </div>
      </div>
    </footer>
  );
}
