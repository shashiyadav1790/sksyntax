
const trustPoints = [
  {
    number: "01",
    title: "Performance",
    description:
      "Fast, responsive experiences built with performance in mind from the start.",
  },
  {
    number: "02",
    title: "Visibility",
    description:
      "A strong SEO foundation helps your website become easier to discover through search.",
  },
  {
    number: "03",
    title: "Conversion",
    description:
      "Clear messaging and focused calls to action turn more visitors into potential customers.",
  },
];

export default function Trust() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-24 sm:py-32">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-[10%] top-[15%] -z-0 h-[340px] w-[340px] rounded-full bg-cyan-400/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] right-[8%] -z-0 h-[360px] w-[360px] rounded-full bg-blue-600/[0.05] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-10 lg:p-16">

          {/* Inner Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.04] blur-[120px]"
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* Content */}
            <div>

              {/* Eyebrow */}
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 transition-colors duration-500 hover:text-cyan-300 sm:text-sm">
                The SKSyntax Approach
              </p>

              {/* Heading */}
              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
                Built for performance.
                <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  Designed for growth.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                We bring development, search visibility, and digital
                advertising together to create a stronger online presence for
                your business.
              </p>
            </div>

            {/* Points */}
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-5">

              {trustPoints.map((point) => (
                <div
                  key={point.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] sm:p-6"
                >
                  {/* Card Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-cyan-400/[0.045] blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Number */}
                  <span className="relative text-xs font-semibold tracking-[0.16em] text-white/20 transition-colors duration-300 group-hover:text-cyan-400/70 sm:text-sm">
                    {point.number}
                  </span>

                  {/* Title */}
                  <h3 className="relative mt-5 text-xl font-semibold tracking-[-0.02em] text-white transition-transform duration-300 group-hover:translate-x-1">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/50">
                    {point.description}
                  </p>

                  {/* Bottom Accent */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-5 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-20 sm:left-6"
                  />
                </div>
              ))}

            </div>
          </div>

          {/* Outer Accent */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-12 h-px w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent opacity-60"
          />
        </div>
      </div>
    </section>
  );
}

