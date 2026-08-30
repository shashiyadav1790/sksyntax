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
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            From idea to
            <span className="text-violet-500"> growth.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A clear and straightforward process designed to keep your project
            focused, efficient, and moving forward.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid gap-0 border-l border-white/10 lg:grid-cols-4 lg:border-l-0 lg:border-t">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative border-b border-white/10 py-8 pl-8 lg:border-b-0 lg:border-r lg:py-10 lg:pl-8 lg:first:border-l"
            >
              {/* Step Number */}
              <span className="text-sm font-medium text-violet-400">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}