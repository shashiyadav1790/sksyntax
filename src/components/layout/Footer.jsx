
import Link from "next/link";

const services = [
  {
    label: "Web Development",
    href: "/services/web-development",
  },
  {
    label: "SEO",
    href: "/services/seo",
  },
  {
    label: "Paid Advertising",
    href: "/services/paid-advertising",
  },
];

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a]">

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-160px] right-[5%] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.045] blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">

            {/* Logo */}
            <Link
              href="/"
              className="group relative inline-block font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.04em]"
            >
              <span className="text-white transition-opacity duration-300 group-hover:opacity-90">
                SK
              </span>

              <span className="ml-[1px] bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent transition-all duration-500 group-hover:drop-shadow-[0_0_14px_rgba(61,170,255,0.45)]">
                Syntax
              </span>

              {/* Logo Accent */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
            </Link>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Building fast, responsive, and search-ready digital experiences
              for businesses that want to grow online.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-all duration-300 hover:text-cyan-300"
            >
              <span>Start a project</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Quick Links
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative w-fit text-sm text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{link.label}</span>

                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Services
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative w-fit text-sm text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{service.label}</span>

                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative mt-16 flex flex-col gap-4 border-t border-white/[0.07] pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} SKSyntax. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="transition-colors duration-300 hover:text-white/60">
              Privacy Policy
            </span>

            <span className="transition-colors duration-300 hover:text-white/60">
              Terms
            </span>
          </div>

          {/* Bottom Gradient Accent */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}

