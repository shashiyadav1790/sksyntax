"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY + 4) {
        setHidden(true);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY - 4) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50  bg-[#0B0E12]/85 backdrop-blur-[22px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

{/* Logo */}
<Link
  href="/"
  onClick={() => setIsOpen(false)}
  aria-label="SKSyntax Home"
  className="group flex min-w-0 shrink-0 items-center"
>
  <div className="flex min-w-0 items-center gap-[-2px] sm:gap-0">
    <Image
      src="/sklogo.png"
      alt="SKSyntax logo"
      width={680}
      height={564}
      priority
      className="h-[54px] w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[66px] md:h-[68px]"
    />

    <div className="-ml-2 flex min-w-0 items-center translate-y-[4px] sm:-ml-2 sm:translate-y-[5px]">
      <div className="whitespace-nowrap text-[18px] font-bold leading-none tracking-[-0.02em] sm:text-[24px] sm:tracking-[-0.025em] md:text-[25px]">
        <span className="text-[#F0F4F7]">SK</span>
        <span className="bg-gradient-to-r from-[#65d9ee] via-[#68cce8] to-[#7bb7ff] bg-clip-text text-transparent">
          Syntax
        </span>
      </div>
    </div>
  </div>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide text-[#AEB8C2] transition-all duration-300 hover:bg-white/[0.035] hover:text-[#F0F4F7]"
            >
              <span className="relative z-10">{item.label}</span>

              <span
                aria-hidden="true"
                className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 blur-[0.5px] transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
              />
            </Link>
          ))}

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group relative ml-3 flex items-center gap-2 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.045] px-[18px] py-[10px] text-[13px] font-semibold text-[#F0F4F7] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[1px] hover:border-cyan-400/25 hover:bg-white/[0.07] hover:shadow-[0_10px_35px_rgba(79,182,214,0.12)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">Get Started</span>

            <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#65d9ee] to-[#7bb7ff] text-[11px] text-[#0B0E12] transition-transform duration-300 group-hover:translate-x-1">
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
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-[#AEB8C2] transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06] hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(79,182,214,0.10)] lg:hidden"
        >
          {isOpen ? (
            <span className="text-[25px] font-light leading-none">×</span>
          ) : (
            <span className="text-[19px] leading-none">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/[0.06] bg-[#0B0E12]/95 px-4 py-5 backdrop-blur-[24px] sm:px-6 sm:py-6 lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative rounded-xl px-4 py-3.5 text-[15px] font-medium text-[#AEB8C2] transition-all duration-300 hover:bg-white/[0.035] hover:text-[#F0F4F7]"
              >
                {item.label}

                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-gradient-to-b from-[#65d9ee] to-[#7bb7ff] transition-all duration-300 group-hover:h-6"
                />
              </Link>
            ))}

            <Link
  href="/contact"
  onClick={() => setIsOpen(false)}
  className="group relative mt-4 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F0F4F7] px-5 py-3.5 text-center text-sm font-semibold text-[#0B0E12] shadow-[0_10px_35px_rgba(79,182,214,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_12px_40px_rgba(79,182,214,0.18)]"
>
  <span className="!text-[#0B0E12]">Get Started</span>
  <span className="!text-[#0B0E12] transition-transform duration-300 group-hover:translate-x-1">→</span>
</Link>
          </div>
        </div>
      )}
    </header>
  );
}