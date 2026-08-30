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
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Why SKSyntax
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              More than a website.
              <span className="block text-violet-500">
                Built for growth.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              We combine development, SEO, and digital advertising to create
              digital experiences that dont just look good — they work for
              your business.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="border-t border-white/10 pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-600">
                    {benefit.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}