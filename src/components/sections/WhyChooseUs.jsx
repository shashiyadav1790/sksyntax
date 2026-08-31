
const benefits = [
  {
    number: "01",
    title: "Performance First",
    description:
      "We build fast, lightweight websites designed to deliver a smooth experience across devices.",
  },
  {
    number: "02",
    title: "SEO Ready",
    description:
      "Our websites are built with a strong technical SEO foundation from the beginning.",
  },
  {
    number: "03",
    title: "Business Focused",
    description:
      "Every section has a purpose — building trust, communicating value, or turning visitors into leads.",
  },
  {
    number: "04",
    title: "Built to Grow",
    description:
      "Clean and scalable architecture makes it easier to expand your website and digital presence over time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-24 sm:py-32">

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-[-100px] top-[15%] -z-0 h-[350px] w-[350px] rounded-full bg-cyan-400/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] right-[5%] -z-0 h-[380px] w-[380px] rounded-full bg-indigo-500/[0.045] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Heading */}
          <div>

            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 transition-colors duration-500 hover:text-cyan-300 sm:text-sm">
              Why SKSyntax
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
              More than a website.
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                Built for growth.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              We combine development, SEO, and digital advertising to create
              digital experiences that dont just look good — they work for
              your business.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid gap-5 sm:grid-cols-2">

            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
              >

                {/* Card Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-30px] top-[-30px] h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-[65px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Top Row */}
                <div className="relative flex items-center justify-between">

                  <span className="text-xs font-semibold tracking-[0.16em] text-white/20 transition-colors duration-300 group-hover:text-cyan-400/70 sm:text-sm">
                    {benefit.number}
                  </span>

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.45)]" />
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-xl font-semibold tracking-[-0.02em] text-white transition-transform duration-300 group-hover:translate-x-1">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50 sm:text-base">
                  {benefit.description}
                </p>

                {/* Bottom Accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-24"
                />

                {/* Corner Glow */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-70px] right-[-70px] h-36 w-36 rounded-full bg-blue-500/[0.04] blur-[65px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

