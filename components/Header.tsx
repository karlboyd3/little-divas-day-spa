"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Birthday Packages", href: "/packages" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-blush shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display font-bold text-diva-pink text-lg sm:text-xl tracking-tight">
              Little Divas
            </span>
            <span className="font-sans text-plum/60 text-xs tracking-widest uppercase">
              Day Spa
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-semibold text-plum hover:text-diva-pink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Book CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/packages"
              className="hidden sm:inline-flex font-sans text-sm font-bold bg-diva-pink text-white px-5 py-2 rounded-full hover:bg-plum transition-colors"
            >
              Book a Party
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg text-plum hover:bg-blush transition-colors"
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-white border-t border-blush px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm font-semibold text-plum hover:text-diva-pink px-3 py-2 rounded-lg hover:bg-blush/50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/packages"
              onClick={() => setOpen(false)}
              className="mt-2 font-sans text-sm font-bold bg-diva-pink text-white px-5 py-2.5 rounded-full text-center hover:bg-plum transition-colors"
            >
              Book a Party
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
