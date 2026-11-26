import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ClaimTicket } from "@/components/ClaimTicket";
import { brands, contact, images, whoWeAre } from "@/lib/site";
import { glue } from "@/lib/glue";

const panels = [
  {
    href: "/services",
    title: "Shoe & Leather Repair",
    body: "Resoling, heels, stretching, orthopedic adjustment, zippers, dyeing, and purse and luggage repair.",
    image: images.panelServices,
  },
  {
    href: "/services#watch-repair",
    title: "Watch Repair",
    body: "Batteries, bands, and general repair, including high-end lines like Rolex, Cartier, and Longines.",
    image: images.panelWatch,
  },
  {
    href: "/spenco-insoles",
    title: "Insoles & Supports",
    body: "Birkenstock and Spenco insoles, arch supports, and cushions, plus a full line of leather care.",
    image: images.panelInsoles,
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section who-we-are">
        <div className="site-wrap text-split">
          <div className="text-column" data-reveal>
            <h2>Who We Are</h2>
            <p className="lede">{glue(whoWeAre.lede)}</p>
            <ul className="board">
              {whoWeAre.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="text-link" href="/services">
              See all services
            </Link>
          </div>
          <figure className="companion-photo" data-reveal>
            <Image
              alt={images.homeLeather.alt}
              fill
              sizes="(min-width: 841px) 46vw, 100vw"
              src={images.homeLeather.src}
            />
          </figure>
        </div>
      </section>

      <section className="section section-ruled">
        <div className="site-wrap">
          <div className="section-heading" data-reveal>
            <h2>In the Shop</h2>
          </div>
          <div className="link-grid">
            {panels.map((panel) => (
              <Link className="link-panel" data-reveal href={panel.href} key={panel.title}>
                <div className="link-panel-image">
                  <Image alt={panel.image.alt} fill sizes="(min-width: 841px) 33vw, 100vw" src={panel.image.src} />
                </div>
                <div className="link-panel-copy">
                  <strong>{panel.title}</strong>
                  <p>{glue(panel.body)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark brands">
        <div className="site-wrap" data-reveal>
          <h2>Brands</h2>
          <p className="lede">{glue(brands.lede)}</p>
          <ul className="brand-row">
            {brands.names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section visit">
        <div className="site-wrap visit-grid">
          <div className="text-column" data-reveal>
            <h2>Visit</h2>
            <p className="lede">
              {glue("For directions, or information on any of our products or services, call us or stop by the shop.")}
            </p>
            <div className="button-row">
              <a className="button button-primary" href={contact.phoneHref}>
                Call {contact.phone}
              </a>
              <a className="button button-outline-dark" href={contact.mapsHref} rel="noreferrer" target="_blank">
                Get directions
              </a>
            </div>
          </div>
          <div data-reveal>
            <ClaimTicket />
          </div>
        </div>
      </section>
    </>
  );
}
