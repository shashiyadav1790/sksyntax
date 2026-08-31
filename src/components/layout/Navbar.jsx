"use client";

import { useState } from "react";
import Image from "next/image";
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
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#05070a]/70 backdrop-blur-[22px]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="SKSyntax Home"
          className="group flex items-center"
        >
          <div className="flex items-center gap-2">

            {/* Original SK Mark */}
            <Image
              src="/logo.png"
              alt=""
              width={680}
              height={564}
              priority
              className="h-[42px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[46px]"
            />

            {/* Wordmark + Tagline */}
            <div className="flex flex-col justify-center">

              {/* SKSyntax */}
              <div className="whitespace-nowrap text-[24px] font-bold leading-none tracking-[0.03em] sm:text-[25px]">
                <span className="text-white">
                  SK
                </span>

                <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  Syntax
                </span>
              </div>

              {/* Tagline */}
              <span className="mt-1 whitespace-nowrap text-[6.5px] font-medium uppercase tracking-[0.20em] text-white/75 sm:text-[7px]">
                Full Stack Web Development & Digital Marketing
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide text-white/55 transition-all duration-300 hover:bg-white/[0.045] hover:text-white"
            >
              <span className="relative z-10">
                {item.label}
              </span>

              <span className="absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 blur-[0.5px] transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="group relative ml-4 flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-[18px] py-[10px] text-[13px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_35px_rgba(22,130,255,0.18)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10">
              Get Started
            </span>

            <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)] md:hidden"
        >
          {isOpen ? (
            <span className="text-[25px] font-light leading-none">
              ×
            </span>
          ) : (
            <span className="text-[20px] leading-none">
              ☰
            </span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/[0.06] bg-[#05070a]/95 px-6 py-6 backdrop-blur-[24px] md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative rounded-xl px-4 py-3 text-[15px] font-medium text-white/60 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}

                <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-300 group-hover:h-6" />
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group relative mt-4 flex items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-indigo-500/90 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.20)] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.30)]"
            >
              Get Started

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}