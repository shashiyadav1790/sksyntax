
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, and requirements before starting the work.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We turn the strategy into a fast, responsive, and professional digital experience.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We refine performance, SEO, user experience, and conversion points to make everything work better.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Once everything is live, we focus on improving visibility, generating leads, and supporting long-term growth.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-24 sm:py-32">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/3 top-[15%] -z-0 h-[380px] w-[380px] rounded-full bg-blue-600/[0.05] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] right-[5%] -z-0 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.035] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 transition-colors duration-500 hover:text-cyan-300 sm:text-sm">
            Our Process
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            From idea to
            <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
              {" "}growth.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            A clear and straightforward process designed to keep your project
            focused, efficient, and moving forward.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:mt-16 lg:grid-cols-4">

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group relative border-b border-white/[0.06] p-6 transition-all duration-500 hover:bg-white/[0.035] sm:p-8 lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0"
            >
              {/* Hover Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-cyan-400/[0.045] opacity-0 blur-[45px] transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Step Number */}
              <div className="relative flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.18em] text-cyan-400/80 transition-colors duration-300 group-hover:text-cyan-300 sm:text-sm">
                  {step.number}
                </span>

                {/* Progress Line */}
                {index < processSteps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent lg:block" />
                )}
              </div>

              {/* Title */}
              <h3 className="relative mt-6 text-2xl font-semibold tracking-[-0.02em] text-white transition-transform duration-300 group-hover:translate-x-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50 sm:text-base">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-24 sm:left-8"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

