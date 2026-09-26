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
    <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#0B0E12] py-20 text-white sm:py-28 lg:py-32">
      {/* ==================== AMBIENT BACKGROUND ==================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[8%] h-[380px] w-[380px] rounded-full bg-cyan-400/[0.03] blur-[150px] sm:h-[420px] sm:w-[420px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-140px] right-[4%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.018] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}

        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/[0.10] bg-cyan-400/[0.025] px-3.5 py-2 backdrop-blur-xl">
            <span
              aria-hidden="true"
              className="
                h-1.5 w-1.5 rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.65)]
              "
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300/75 sm:text-xs">
              Our Digital Growth Process
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#F0F4F7] sm:text-5xl lg:text-6xl">
            From strategy to
            <span className="block bg-gradient-to-r from-[#65d9ee] via-[#438cff] to-[#7bb7ff] bg-clip-text text-transparent">
              digital growth.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#AEB8C2]/80 sm:text-base sm:leading-8 lg:text-lg">
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
            className="
              pointer-events-none absolute
              left-[7%] right-[7%] top-[52px]
              hidden h-px
              bg-gradient-to-r
              from-cyan-400/15
              via-blue-500/25
              to-indigo-500/15
              lg:block
            "
          />

          {/* Cards */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
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

                {/* ==================== NUMBER ==================== */}

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-xl
                        border border-cyan-400/[0.12]
                        bg-gradient-to-br
                        from-cyan-400/[0.08]
                        to-blue-500/[0.035]
                        text-[11px]
                        font-bold
                        tracking-[0.12em]
                        text-cyan-300/85
                        shadow-[0_0_25px_rgba(34,211,238,0.04)]
                        transition-all duration-500
                        group-hover:border-cyan-400/25
                        group-hover:bg-cyan-400/[0.08]
                        group-hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]
                      "
                    >
                      {step.number}
                    </span>

                    {/* Desktop Connector Dot */}
                    <span
                      aria-hidden="true"
                      className="
                        hidden h-1.5 w-1.5
                        rounded-full
                        bg-cyan-400/45
                        shadow-[0_0_10px_rgba(34,211,238,0.4)]
                        lg:block
                      "
                    />
                  </div>

                  {/* Step Indicator */}
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5 w-1.5
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      opacity-60
                      shadow-[0_0_10px_rgba(34,211,238,0.3)]
                      transition-all duration-500
                      group-hover:scale-150
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* ==================== TITLE ==================== */}

                <h3
                  className="
                    relative mt-7
                    text-[22px]
                    font-semibold
                    tracking-[-0.025em]
                    text-[#F0F4F7]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-cyan-50
                  "
                >
                  {step.title}
                </h3>

                {/* ==================== DESCRIPTION ==================== */}

                <p
                  className="
                    relative mt-3
                    text-[14px]
                    leading-7
                    text-[#AEB8C2]/70
                    transition-colors duration-300
                    group-hover:text-[#AEB8C2]
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
                      absolute left-0 top-0
                      h-full w-1/3
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      opacity-60
                      transition-all duration-700
                      group-hover:w-full
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* ==================== BOTTOM LABEL ==================== */}

                <div className="relative mt-4 flex items-center justify-between">
                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/20">
                    Step {step.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      text-xs text-white/20
                      transition-all duration-300
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
                    absolute bottom-0 left-6
                    h-[2px] w-8
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-transparent
                    opacity-60
                    shadow-[0_0_12px_rgba(34,211,238,0.2)]
                    transition-all duration-500
                    group-hover:w-[70%]
                    group-hover:opacity-100
                    sm:left-7
                    lg:left-8
                  "
                />

                {/* Top Edge Highlight */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    inset-x-7 top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    opacity-40
                    transition-opacity duration-500
                    group-hover:opacity-100
                    lg:inset-x-8
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