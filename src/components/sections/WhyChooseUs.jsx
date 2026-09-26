const benefits = [
  {
    number: "01",
    title: "Performance First",
    description:
      "We build fast, lightweight, and responsive websites designed for a smooth user experience across devices.",
  },
  {
    number: "02",
    title: "SEO Ready",
    description:
      "Our websites are built with a strong technical SEO foundation to support search visibility, discoverability, and long-term growth.",
  },
  {
    number: "03",
    title: "Business Focused",
    description:
      "Every section is designed with a clear purpose — building trust, communicating value, and turning website visitors into leads.",
  },
  {
    number: "04",
    title: "Built to Grow",
    description:
      "Clean and scalable website architecture makes it easier to expand your digital presence as your business grows.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#0B0E12] py-16 text-white sm:py-20 lg:py-24">
      {/* Background Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-140px] top-[10%] h-[380px] w-[380px] rounded-full bg-cyan-400/[0.03] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-150px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.025] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[45%] top-[45%] h-[260px] w-[260px] rounded-full bg-indigo-500/[0.018] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-24">
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
              Why Choose SKSyntax
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#F0F4F7] sm:text-5xl">
              Website Development,
              <span className="mt-1 block bg-gradient-to-r from-[#65d9ee] via-[#438cff] to-[#7bb7ff] bg-clip-text text-transparent">
                SEO & Digital Growth.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#AEB8C2]/80 sm:text-lg sm:leading-8">
              SKSyntax combines website development, SEO, and digital
              advertising to create high-performance digital experiences that
              don&apos;t just look good — they work for your business.
            </p>

            {/* Small Visual Indicator */}
            <div className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-px w-12
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  shadow-[0_0_12px_rgba(34,211,238,0.2)]
                "
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                Digital Growth Partner
              </span>
            </div>
          </div>

          {/* ================= BENEFITS ================= */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-xl
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_20px_60px_rgba(0,0,0,0.20)]
                  transition-all duration-500 ease-out

                  hover:-translate-y-1.5
                  hover:border-cyan-300/[0.18]
                  hover:bg-white/[0.035]
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_25px_70px_rgba(0,0,0,0.30)]

                  sm:p-7
                "
              >
                {/* Card Glow */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    h-40 w-40
                    rounded-full
                    bg-cyan-400/[0.045]
                    blur-[70px]
                    opacity-0
                    transition-opacity duration-700
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-xs font-semibold
                        tracking-[0.2em]
                        text-cyan-300/60
                        transition-colors duration-300
                        group-hover:text-cyan-300
                      "
                    >
                      {benefit.number}
                    </span>

                    {/* Status Dot */}
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className="
                          absolute inline-flex
                          h-full w-full
                          animate-ping
                          rounded-full
                          bg-cyan-400/25
                        "
                      />

                      <span
                        className="
                          relative inline-flex
                          h-2.5 w-2.5
                          rounded-full
                          bg-gradient-to-br
                          from-cyan-300
                          to-blue-500
                          shadow-[0_0_14px_rgba(34,211,238,0.35)]
                        "
                      />
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-7
                      text-xl font-semibold
                      tracking-[-0.02em]
                      text-[#F0F4F7]
                      transition-all duration-500
                      group-hover:translate-x-1
                      sm:text-[22px]
                    "
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm leading-7
                      text-[#AEB8C2]/75
                      transition-colors duration-500
                      group-hover:text-[#AEB8C2]
                      sm:text-[15px]
                    "
                  >
                    {benefit.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="
                        h-px w-8
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                        shadow-[0_0_10px_rgba(34,211,238,0.2)]
                        transition-all duration-500
                        group-hover:w-16
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-white/20"
                    />
                  </div>
                </div>

                {/* Shine */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    inset-y-0 left-[-120%]
                    w-[65%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.045]
                    to-transparent
                    transition-transform duration-1000
                    group-hover:translate-x-[280%]
                  "
                />

                {/* Bottom Accent */}
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-0 left-6
                    h-[2px] w-8
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-indigo-500
                    opacity-70
                    shadow-[0_0_12px_rgba(34,211,238,0.2)]
                    transition-all duration-500
                    group-hover:w-16
                    group-hover:opacity-100
                    sm:left-7
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}