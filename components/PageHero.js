import Image from "next/image";
import Link from "next/link";
import { glue } from "@/lib/glue";

export function PageHero({ title, lede, image, cta }) {
  const heroStyle = {
    "--hero-focal": image.focal ?? "center",
    "--hero-focal-mobile": image.mobileFocal ?? image.focal ?? "center",
  };

  return (
    <section className="page-hero">
      <div className="hero-media-plane" style={heroStyle}>
        <Image alt={image.alt} fill priority sizes="100vw" src={image.src} />
        <div className="hero-scrim" />
      </div>
      <div className="site-wrap hero-lockup">
        <h1>{title}</h1>
        {lede ? <p>{glue(lede)}</p> : null}
        {cta ? (
          <Link className="button button-primary" href={cta.href}>
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
