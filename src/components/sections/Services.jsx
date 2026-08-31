
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, and conversion-focused websites built for modern businesses.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Strategic SEO that improves search visibility, organic traffic, and long-term growth.",
    href: "/services/seo",
  },
  {
    number: "03",
    title: "Meta Ads",
    description:
      "Targeted Facebook and Instagram campaigns designed to generate leads and conversions.",
    href: "/services/meta-ads",
  },
  {
    number: "04",
    title: "Google Ads",
    description:
      "Performance-driven Google Ads campaigns that put your business in front of high-intent customers.",
    href: "/services/google-ads",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-20 sm:py-25">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-[10%] top-[20%] -z-0 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] right-[8%] -z-0 h-[380px] w-[380px] rounded-full bg-blue-600/[0.05] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 transition-colors duration-500 hover:text-cyan-300 sm:text-sm">
            What We Do
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            Everything you need to
            <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
              {" "}grow online.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            From high-performance websites to SEO and paid advertising,
            SKSyntax helps businesses build, reach, and grow their digital
            presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:mt-16 md:grid-cols-2">

          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative overflow-hidden bg-[#07090d]/90 p-6 transition-all duration-500 hover:bg-white/[0.035] sm:p-10"
            >
              {/* Card Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top Row */}
              <div className="relative flex items-start justify-between">

                <span className="text-xs font-semibold tracking-[0.16em] text-white/20 transition-colors duration-300 group-hover:text-cyan-400/70 sm:text-sm">
                  {service.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-lg text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-cyan-400/25 group-hover:bg-cyan-400/[0.06] group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.10)]">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="relative mt-10 text-2xl font-semibold tracking-[-0.025em] text-white transition-transform duration-300 group-hover:translate-x-1 sm:mt-12">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 max-w-md text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50 sm:text-base">
                {service.description}
              </p>

              {/* Explore */}
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-all duration-300 group-hover:text-cyan-300">
                <span>Explore service</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>

              {/* Bottom Accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-28 sm:left-10"
              />

              {/* Corner Glow */}
              <span
                aria-hidden="true"
                className="absolute bottom-[-80px] right-[-80px] h-40 w-40 rounded-full bg-indigo-500/[0.035] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

