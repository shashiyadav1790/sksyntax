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
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-10 sm:py-20 lg:py-25"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-[10%] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.035] blur-[130px] sm:h-[380px] sm:w-[380px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-blue-600/[0.045] blur-[140px] sm:h-[420px] sm:w-[420px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Glass Container */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.08]
            bg-white/[0.025]
            p-5
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_70px_rgba(0,0,0,0.28)]
            backdrop-blur-xl
            sm:rounded-[30px]
            sm:p-8
            md:p-10
            lg:p-14
          "
        >
          {/* Premium Top Gradient Line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-[55%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400/70
              to-transparent
              opacity-80
            "
          />

          {/* Inner Ambient Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[-100px]
              top-[-100px]
              h-[260px]
              w-[260px]
              rounded-full
              bg-cyan-400/[0.045]
              blur-[110px]
            "
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            {/* Content */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_12px_rgba(34,211,238,0.8)]
                  "
                />

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80 sm:text-xs sm:tracking-[0.25em]">
                  The SKSyntax Approach
                </p>
              </div>

              {/* Heading */}
              <h2
                id="trust-heading"
                className="
                  mt-5
                  max-w-xl
                  text-[34px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  lg:text-[52px]
                "
              >
                Built for performance.
                <span className="mt-1 block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  Designed for growth.
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-xl
                  text-[14px]
                  leading-7
                  text-white/50
                  sm:mt-6
                  sm:text-base
                  sm:leading-8
                  lg:text-lg
                "
              >
                We bring development, search visibility, and digital
                advertising together to create a stronger online presence for
                your business.
              </p>
            </div>

            {/* Trust Points */}
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
              {trustPoints.map((point) => (
                <article
                  key={point.number}
                className="
  group
  relative
  overflow-hidden
  rounded-2xl
  border
  border-white/[0.08]
  bg-white/[0.025]
  p-5
  shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.25)]
  backdrop-blur-xl
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-cyan-400/20
  hover:bg-white/[0.04]
  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_70px_rgba(0,0,0,0.35)]
  active:scale-[0.99]
  sm:p-6
"
                >
              

                  {/* Number + Indicator */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        tracking-[0.18em]
                        text-cyan-300/45
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300/80
                        sm:text-xs
                      "
                    >
                      {point.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        relative
                        flex
                        h-2
                        w-2
                      "
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/25" />
                      <span
                        className="
                          relative
                          h-2
                          w-2
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-300
                          to-blue-500
                          shadow-[0_0_12px_rgba(34,211,238,0.55)]
                        "
                      />
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      relative
                      mt-5
                      text-lg
                      font-semibold
                      tracking-[-0.025em]
                      text-white
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-cyan-50
                      sm:text-xl
                    "
                  >
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      relative
                      mt-3
                      text-[13px]
                      leading-6
                      text-white/45
                      transition-colors
                      duration-300
                      group-hover:text-white/60
                      sm:text-sm
                    "
                  >
                    {point.description}
                  </p>

                  {/* Permanent Bottom Accent */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-5
                      h-px
                      w-10
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      opacity-70
                      transition-all
                      duration-500
                      group-hover:w-24
                      group-hover:opacity-100
                      sm:left-6
                    "
                  />

            
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Outer Accent */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-[35%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-500/50
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}