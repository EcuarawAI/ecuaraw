"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || menuOpen;

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-offwhite/95 backdrop-blur-sm border-b border-charcoal-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className={`font-serif-display text-xl tracking-[0.18em] transition-colors ${
            solid ? "text-forest-900" : "text-offwhite"
          }`}
        >
          ECUARAW
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`eyebrow transition-colors ${
                  solid
                    ? active
                      ? "text-forest-900"
                      : "text-charcoal-700 hover:text-forest-900"
                    : active
                    ? "text-offwhite"
                    : "text-offwhite/75 hover:text-offwhite"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`eyebrow inline-flex items-center justify-center border px-6 py-3 transition-colors ${
              solid
                ? "border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-offwhite"
                : "border-offwhite text-offwhite hover:bg-offwhite hover:text-forest-900"
            }`}
          >
            Book Your Tour
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex flex-col gap-1.5 lg:hidden ${
            solid ? "text-forest-900" : "text-offwhite"
          }`}
        >
          <span
            className={`block h-px w-7 bg-current transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-7 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-7 bg-current transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-charcoal-900/10 bg-offwhite px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow text-lg tracking-wide text-charcoal-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="eyebrow inline-flex items-center justify-center border border-forest-900 px-6 py-3.5 text-forest-900"
            >
              Book Your Tour
            </Link>
          </nav>
        </div>
      )}
      <div className="sr-only">{siteConfig.tagline}</div>
    </header>
  );
}
