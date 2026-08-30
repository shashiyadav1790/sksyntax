"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          SK<span className="text-violet-500">Syntax</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

        <Link
  href="/contact"
  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
>
  <span className="text-black">Get Started</span>
</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {isOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}