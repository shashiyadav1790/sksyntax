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
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                The SKSyntax Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Built for performance.
                <span className="block text-violet-500">
                  Designed for growth.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                We bring development, search visibility, and digital
                advertising together to create a stronger online presence for
                your business.
              </p>
            </div>

            {/* Points */}
            <div className="grid gap-8 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point.number}
                  className="border-t border-white/10 pt-5"
                >
                  <span className="text-sm font-medium text-zinc-600">
                    {point.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}