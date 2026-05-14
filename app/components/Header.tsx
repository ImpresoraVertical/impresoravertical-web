"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { WIX_IMAGES } from "../data/images";

const NAV_ITEMS = [
  { label: "Series", href: "/series" },
  { label: "Configurador", href: "/configurador" },
  { label: "I-TECH Pro", href: "/itech-pro" },
  { label: "Perfiles ICC", href: "/perfiles-icc" },
  { label: "Casos", href: "/casos-cliente" },
  { label: "Sobre I-Tech", href: "/sobre-itech" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-lg border-b border-stone/15"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="I-TECH España">
          <Image
            src={WIX_IMAGES.logoBlanc}
            alt="Impresora Vertical · I-TECH España"
            width={292}
            height={85}
            priority
            unoptimized
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-body-sm uppercase tracking-wider text-ink hover:text-cobalto-700 transition-colors link-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contacto" className="hidden md:inline-flex btn-primary">
            Pedir demo
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-stone/15">
          <nav className="container-page py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-body uppercase tracking-wider text-ink py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 self-start"
            >
              Pedir demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
