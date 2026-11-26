"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business, contact, navItems } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${isHome ? " is-home" : ""}${menuOpen ? " is-menu-open" : ""}`}>
      <Link
        aria-hidden={isHome}
        aria-label={`${business.name} home`}
        className="wordmark"
        href="/"
        tabIndex={isHome ? -1 : undefined}
      >
        <img alt="" className="wordmark-mark" height="34" src="/logo-dark.svg" width="34" />
        <span>{business.shortName}</span>
      </Link>
      <button
        aria-controls="site-nav"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>
      <nav aria-label="Main navigation" className="site-nav" id="site-nav">
        <Link className="nav-home" href="/">
          Home
        </Link>
        {navItems.map((item) => (
          <Link aria-current={pathname === item.href ? "page" : undefined} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <a className="nav-phone" href={contact.phoneHref}>
          {contact.phone}
        </a>
      </nav>
      <a
        aria-hidden={isHome}
        className="header-contact"
        href={contact.phoneHref}
        tabIndex={isHome ? -1 : undefined}
      >
        {contact.phone}
      </a>
    </header>
  );
}
