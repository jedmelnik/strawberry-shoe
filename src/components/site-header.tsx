"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const forceSolid = variant === "solid";
  const solid = forceSolid || scrolled || menuOpen;

  useEffect(() => {
    if (forceSolid) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        solid
          ? "border-b border-border/70 bg-[#f3efe9]/95 shadow-[0_8px_24px_rgba(26,18,20,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="site-wrap flex items-center justify-between gap-3 py-3 md:gap-4 md:py-3.5">
        <Link
          href="/"
          className="relative flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo-strawberry.png"
            alt=""
            width={48}
            height={45}
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span
            className={cn(
              "font-display text-[1.05rem] leading-tight tracking-tight sm:text-lg",
              solid ? "text-ink" : "text-white",
            )}
          >
            <span className="block font-semibold">{site.shortName}</span>
            <span
              className={cn(
                "block text-[0.65rem] font-medium uppercase tracking-[0.14em] sm:text-[0.7rem]",
                solid ? "text-brand" : "text-white/75",
              )}
            >
              &amp; Watch Repair
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="hidden items-center gap-1 lg:flex xl:gap-2"
            aria-label="Primary"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-2 py-1.5 text-[0.8rem] font-medium transition-colors xl:px-2.5 xl:text-sm",
                  solid
                    ? "text-ink/80 hover:bg-ink/5 hover:text-ink"
                    : "text-white/85 hover:bg-white/10 hover:text-white",
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Button
            render={<a href={site.phoneHref} />}
            size="sm"
            className={cn(
              "hidden sm:inline-flex",
              solid
                ? "bg-brand text-white hover:bg-brand/90"
                : "bg-white text-ink hover:bg-white/90",
            )}
          >
            <Phone className="size-3.5" />
            Call
          </Button>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md lg:hidden",
              solid
                ? "text-ink hover:bg-ink/5"
                : "text-white hover:bg-white/10",
            )}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!menuOpen}
        className="border-t border-border/60 bg-[#f3efe9] lg:hidden"
      >
        <nav className="site-wrap flex flex-col gap-1 py-3" aria-label="Mobile">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2.5 text-base font-medium text-ink hover:bg-ink/5"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="mt-1 inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2.5 text-base font-medium text-white"
            onClick={() => setMenuOpen(false)}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
