import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, and conversion-focused websites built to deliver a strong user experience and support business growth.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Strategic SEO services that improve search visibility, attract relevant organic traffic, and build long-term online growth.",
    href: "/services/seo",
  },
  {
    number: "03",
    title: "Meta Ads",
    description:
      "Targeted Facebook and Instagram advertising campaigns designed to reach the right audience, generate leads, and drive conversions.",
    href: "/services/meta-ads",
  },
  {
    number: "04",
    title: "Google Ads",
    description:
      "Performance-driven Google Ads campaigns that connect your business with high-intent customers and measurable opportunities.",
    href: "/services/google-ads",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-16 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-100px] top-[15%] h-[320px] w-[320px] rounded-full bg-cyan-400/[0.045] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-[360px] w-[360px] rounded-full bg-blue-600/[0.055] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
            Our Digital Growth Services
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            Website Development, SEO
            <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent sm:inline">
              {" "}
              & Paid Advertising.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            SKSyntax provides website development, SEO, Meta Ads, and Google
            Ads services to help businesses build a stronger online presence,
            reach the right audience, and grow.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="
                group relative overflow-hidden rounded-2xl
                border border-cyan-400/[0.10]
                bg-gradient-to-br
                from-cyan-400/[0.055]
                via-white/[0.025]
                to-blue-500/[0.045]
                p-6
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_15px_50px_rgba(0,0,0,0.20)]
                backdrop-blur-xl
                transition-all duration-500

                hover:-translate-y-1
                hover:border-cyan-300/25
                hover:from-cyan-400/[0.08]
                hover:via-white/[0.04]
                hover:to-blue-500/[0.08]
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_25px_70px_rgba(0,0,0,0.35)]

                sm:p-8
              "
            >
              {/* Permanent soft glow */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  left-[-70px] top-[-70px]
                  h-44 w-44 rounded-full
                  bg-cyan-400/[0.055]
                  blur-[65px]
                "
              />

              {/* Bottom blue glow */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  bottom-[-90px] right-[-70px]
                  h-48 w-48 rounded-full
                  bg-blue-500/[0.06]
                  blur-[75px]
                "
              />

              {/* Top shine */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  inset-x-8 top-0 h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-300/40
                  to-transparent
                "
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-xs font-semibold tracking-[0.2em]
                      text-cyan-300/65
                      transition-colors duration-300
                      group-hover:text-cyan-300
                      sm:text-sm
                    "
                  >
                    {service.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      border border-cyan-300/[0.12]
                      bg-cyan-300/[0.045]
                      text-base text-cyan-200/60
                      shadow-[0_0_25px_rgba(34,211,238,0.05)]
                      transition-all duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-cyan-300/30
                      group-hover:bg-cyan-300/[0.10]
                      group-hover:text-cyan-200
                      group-hover:shadow-[0_0_30px_rgba(34,211,238,0.14)]
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-10
                    text-2xl font-semibold
                    tracking-[-0.025em]
                    text-white
                    transition-transform duration-500
                    group-hover:translate-x-1
                    sm:mt-12 sm:text-[26px]
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4 max-w-md
                    text-sm leading-7
                    text-white/50
                    transition-colors duration-500
                    group-hover:text-white/65
                    sm:text-base
                  "
                >
                  {service.description}
                </p>

                {/* Explore */}
                <div
                  className="
                    mt-8 inline-flex
                    items-center gap-2
                    text-sm font-medium
                    text-cyan-200/65
                    transition-colors duration-300
                    group-hover:text-cyan-200
                  "
                >
                  <span>Explore service</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <span
                aria-hidden="true"
                className="
                  absolute bottom-0 left-6
                  h-[2px] w-24
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-indigo-500
                  shadow-[0_0_15px_rgba(34,211,238,0.35)]
                  transition-all duration-500
                  group-hover:w-36
                  sm:left-8
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}