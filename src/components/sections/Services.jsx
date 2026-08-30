import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, and conversion-focused websites built for modern businesses.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Strategic SEO that improves search visibility, organic traffic, and long-term growth.",
    href: "/services/seo",
  },
  {
    number: "03",
    title: "Meta Ads",
    description:
      "Targeted Facebook and Instagram campaigns designed to generate leads and conversions.",
    href: "/services/meta-ads",
  },
  {
    number: "04",
    title: "Google Ads",
    description:
      "Performance-driven Google Ads campaigns that put your business in front of high-intent customers.",
    href: "/services/google-ads",
  },
];

export default function Services() {
  return (
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to
            <span className="text-violet-500"> grow online.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From high-performance websites to SEO and paid advertising,
            SKSyntax helps businesses build, reach, and grow their digital
            presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group bg-[#0d0d0d] p-8 transition-colors hover:bg-[#111111] sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-zinc-600">
                  {service.number}
                </span>

                <span className="text-xl text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-zinc-400">
                {service.description}
              </p>

              <span className="mt-8 inline-block text-sm font-medium text-black">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}