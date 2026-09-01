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
    label: "Meta Ads",
    href: "/services/meta-ads",
  },
    {
    label: "Google Ads",
    href: "/services/google-ads",
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
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#040609]">

      {/* ==================== BACKGROUND ==================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[-160px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-400/[0.045]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-140px]
          bottom-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-indigo-500/[0.055]
          blur-[160px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[220px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.018]
          blur-[120px]
        "
      />

      {/* ==================== CONTENT ==================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">

          {/* ==================== BRAND ==================== */}

          <div className="max-w-sm">

            {/* Logo */}

            <Link
              href="/"
              aria-label="SKSyntax Home"
              className="
                group
                relative
                inline-flex
                items-center
                font-[family-name:var(--font-space-grotesk)]
                text-[25px]
                font-bold
                tracking-[-0.045em]
              "
            >
              <span className="text-white">
                SK
              </span>

              <span
                className="
                  ml-[2px]
                  bg-gradient-to-r
                  from-[#35e7ff]
                  via-[#438cff]
                  to-[#7c5cff]
                  bg-clip-text
                  text-transparent
                  transition-all
                  duration-500
                  group-hover:drop-shadow-[0_0_16px_rgba(53,231,255,0.35)]
                "
              >
                Syntax
              </span>

              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-8
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </Link>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-sm
                text-[14px]
                leading-7
                text-white/45
                sm:text-[15px]
                sm:leading-7
              "
            >
              Building fast, responsive, and search-ready digital experiences
              for businesses that want to grow online.
            </p>

            {/* CTA */}

            <Link
              href="/contact"
              className="
                group
                relative
                mt-7
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-cyan-400/15
                bg-white/[0.035]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white/75
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.06]
                hover:text-cyan-300
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.10]
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">
                Start a project
              </span>

              <span
                aria-hidden="true"
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            {/* ==================== SOCIAL LINKS ==================== */}

            <div className="mt-6 flex items-center gap-3">

              {/* Instagram */}

              <Link
                href="https://www.instagram.com/sksyntax/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SKSyntax on Instagram"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  text-white/50
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.08]
                  hover:text-cyan-300
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="
                    h-[17px]
                    w-[17px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </Link>

              {/* Facebook */}

              <Link
                href="https://www.facebook.com/sksyntax/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SKSyntax on Facebook"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  text-white/50
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.08]
                  hover:text-cyan-300
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="
                    h-[17px]
                    w-[17px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.66.34-1 1-1z" />
                </svg>
              </Link>

            </div>
          </div>

          {/* ==================== QUICK LINKS ==================== */}

          <div>
            <h2
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-cyan-400/75
                sm:text-xs
              "
            >
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col gap-3.5"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    relative
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[14px]
                    text-white/45
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-white/20
                      transition-all
                      duration-300
                      group-hover:bg-cyan-400
                      group-hover:shadow-[0_0_10px_rgba(34,211,238,0.7)]
                    "
                  />

                  <span>
                    {link.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-1
                      left-3
                      h-px
                      w-0
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* ==================== SERVICES ==================== */}

          <div>
            <h2
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-cyan-400/75
                sm:text-xs
              "
            >
              Services
            </h2>

            <nav
              aria-label="Footer services"
              className="mt-6 flex flex-col gap-3.5"
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="
                    group
                    relative
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[14px]
                    text-white/45
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-white/20
                      transition-all
                      duration-300
                      group-hover:bg-cyan-400
                      group-hover:shadow-[0_0_10px_rgba(34,211,238,0.7)]
                    "
                  />

                  <span>
                    {service.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-1
                      left-3
                      h-px
                      w-0
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ==================== BOTTOM ==================== */}

        <div
          className="
            relative
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            pt-7
            text-xs
            text-white/30
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:pt-8
          "
        >
          {/* Copyright */}

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/55">
              SKSyntax
            </span>
            . All rights reserved.
          </p>

          {/* Legal Links */}

          <div className="flex items-center justify-center gap-6 sm:justify-end">

            <Link
              href="/privacy-policy"
              className="
                transition-colors
                duration-300
                hover:text-white/60
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                transition-colors
                duration-300
                hover:text-white/60
              "
            >
              Terms
            </Link>

          </div>

          {/* Bottom Accent */}

          <span
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-1/2
              h-px
              w-20
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
              opacity-70
              sm:left-0
              sm:translate-x-0
            "
          />
        </div>

      </div>
    </footer>
  );
}