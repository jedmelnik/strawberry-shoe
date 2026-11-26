"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { business, contact, images } from "@/lib/site";
import { glue } from "@/lib/glue";

export function HomeHero() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const mobile = window.matchMedia("(max-width: 840px)");
    const portrait = window.matchMedia("(orientation: portrait)");
    let frame;

    const apply = () => {
      if (!mobile.matches) {
        root.style.removeProperty("--hero-initial");
        return;
      }
      root.style.setProperty("--hero-initial", `${window.innerHeight}px`);
    };

    const applyAfterRotate = () => {
      cancelAnimationFrame(frame);
      // Safari swaps viewport dimensions a frame late after rotation.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(apply);
      });
    };

    apply();
    mobile.addEventListener("change", apply);
    portrait.addEventListener("change", applyAfterRotate);
    return () => {
      mobile.removeEventListener("change", apply);
      portrait.removeEventListener("change", applyAfterRotate);
      cancelAnimationFrame(frame);
      root.style.removeProperty("--hero-initial");
    };
  }, []);

  const hero = images.homeHero;

  return (
    <section className="home-hero">
      {/* Focal: the brogue on the last and the pocket watch, right of the lockup */}
      <div
        className="hero-media-plane"
        style={{ "--hero-focal": hero.focal, "--hero-focal-mobile": hero.mobileFocal }}
      >
        <Image alt={hero.alt} className="hero-settle" fill priority sizes="100vw" src={hero.src} />
        <div className="hero-scrim" />
      </div>
      <div className="site-wrap hero-lockup">
        <h1>
          <span>Strawberry Shoe</span>
          <span>&amp; Watch Repair</span>
        </h1>
        <p className="tagline">{business.tagline}</p>
        <p>{glue("Shoes, boots, purses, luggage, watches, and keys, at the back of Strawberry Village in Mill Valley.")}</p>
        <div className="button-row">
          <a className="button button-primary" href={contact.phoneHref}>
            Call {contact.phone}
          </a>
          <Link className="button button-secondary" href="/contact">
            Hours &amp; directions
          </Link>
        </div>
      </div>
    </section>
  );
}
