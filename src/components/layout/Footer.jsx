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
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              SK<span className="text-violet-500">Syntax</span>
            </Link>

            <p className="mt-5 leading-7 text-zinc-400">
              Building fast, responsive, and search-ready digital experiences
              for businesses that want to grow online.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex text-sm font-semibold text-white transition-colors hover:text-violet-400"
            >
              Start a project →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SKSyntax. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}