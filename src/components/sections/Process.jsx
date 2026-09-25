const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, target audience, goals, and requirements to create the right website development and digital growth strategy.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We turn the strategy into a fast, responsive, and professional website designed around your brand, users, and business goals.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We refine website performance, technical SEO, user experience, and conversion points to improve search visibility and results.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Once everything is live, we focus on improving online visibility, generating leads, and supporting long-term digital growth.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-20 sm:py-28 lg:py-32">

      {/* ==================== AMBIENT BACKGROUND ==================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[10%] h-[320px] w-[320px] rounded-full bg-cyan-400/[0.045] blur-[140px] sm:h-[420px] sm:w-[420px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] right-[5%] h-[360px] w-[360px] rounded-full bg-blue-600/[0.05] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.025] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==================== HEADER ==================== */}

        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/[0.12] bg-cyan-400/[0.035] px-3.5 py-2 backdrop-blur-xl">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.75)]"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs">
              Our Digital Growth Process
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            From strategy to
            <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
              digital growth.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/45 sm:text-base sm:leading-8 lg:text-lg">
            A clear and straightforward process for website development, SEO,
            and digital marketing projects — keeping every stage focused,
            efficient, and aligned with your business goals.
          </p>
        </div>

        {/* ==================== PROCESS ==================== */}

        <div className="relative mt-12 sm:mt-16">

          {/* Desktop Connecting Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[7%] right-[7%] top-[52px] hidden h-px bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-indigo-500/20 lg:block"
          />

          {/* Cards */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-4">

            {processSteps.map((step, index) => (
              <div
                key={step.number}
           className="
  group relative overflow-hidden rounded-2xl
  border border-white/[0.08]
  bg-white/[0.025]
  p-6
  shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.25)]
  backdrop-blur-xl
  transition-all duration-500

  hover:-translate-y-2
  hover:border-cyan-400/20
  hover:bg-white/[0.04]
  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_70px_rgba(0,0,0,0.35)]

  sm:p-7
"
              >


                {/* ==================== NUMBER ==================== */}

                <div className="relative flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/[0.14]
                        bg-gradient-to-br
                        from-cyan-400/[0.10]
                        to-blue-500/[0.05]
                        text-[11px]
                        font-bold
                        tracking-[0.12em]
                        text-cyan-300/90
                        shadow-[0_0_25px_rgba(34,211,238,0.06)]
                        transition-all
                        duration-500
                        group-hover:border-cyan-400/30
                        group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                      "
                    >
                      {step.number}
                    </span>

                    {/* Desktop connector dot */}
                    <span
                      aria-hidden="true"
                      className="
                        hidden
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400/50
                        shadow-[0_0_10px_rgba(34,211,238,0.5)]
                        lg:block
                      "
                    />
                  </div>

                  {/* Step indicator */}
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      opacity-60
                      shadow-[0_0_10px_rgba(34,211,238,0.35)]
                      transition-all
                      duration-500
                      group-hover:scale-150
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* ==================== TITLE ==================== */}

                <h3
                  className="
                    relative
                    mt-7
                    text-[22px]
                    font-semibold
                    tracking-[-0.025em]
                    text-white
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-cyan-50
                  "
                >
                  {step.title}
                </h3>

                {/* ==================== DESCRIPTION ==================== */}

                <p
                  className="
                    relative
                    mt-3
                    text-[14px]
                    leading-7
                    text-white/40
                    transition-colors
                    duration-300
                    group-hover:text-white/55
                    sm:text-[15px]
                  "
                >
                  {step.description}
                </p>

                {/* ==================== STEP PROGRESS ==================== */}

                <div className="relative mt-7 h-px w-full overflow-hidden bg-white/[0.06]">

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-1/3
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      opacity-70
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />
                </div>

                {/* ==================== BOTTOM LABEL ==================== */}

                <div className="relative mt-4 flex items-center justify-between">

                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/20">
                    Step {step.number}
                  </span>

                  <span
                    className="
                      text-xs
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-cyan-300/80
                    "
                  >
                    →
                  </span>
                </div>

                {/* Bottom Accent */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-6
                    h-px
                    w-20
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-transparent
                    opacity-40
                    transition-all
                    duration-500
                    group-hover:w-[70%]
                    group-hover:opacity-100
                    sm:left-7
                    lg:left-8
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