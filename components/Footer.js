import Link from "next/link";
import { business, contact, footerNav, hours } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-wrap footer-grid">
        <div className="footer-brand">
          <Link className="footer-wordmark" href="/">
            <img alt="" height="44" src="/logo-dark.svg" width="44" />
            <span>
              <span>Strawberry Shoe</span>
              <span>&amp; Watch Repair</span>
            </span>
          </Link>
          <p>{business.tagline}.</p>
        </div>
        <nav aria-label="Footer navigation">
          {footerNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <address>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.street}</span>
          <span>{contact.city}</span>
        </address>
        <dl className="footer-hours">
          {hours.map((row) => (
            <div key={row.days}>
              <dt>{row.days}</dt>
              <dd>{row.time}</dd>
            </div>
          ))}
        </dl>
      </div>
    </footer>
  );
}
