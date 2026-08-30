import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, modern websites built around your business goals, user experience, and performance.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Technical SEO, on-page optimization, content strategy, and search visibility designed for sustainable organic growth.",
    href: "/services/seo",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description:
      "Performance-focused Meta Ads and Google Ads campaigns designed to reach the right audience and generate qualified opportunities.",
    href: "/services/paid-advertising",
  },
];

export const metadata = {
  title: "Website Development, SEO & Paid Advertising Services",
  description:
    "Explore SKSyntax services including website development, SEO, Meta Ads, and Google Ads to build visibility, reach customers, and grow your business online.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Website Development, SEO & Paid Advertising Services | SKSyntax",
    description:
      "Explore SKSyntax services including website development, SEO, Meta Ads, and Google Ads.",
    url: "https://sksyntax.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Services
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Website development, SEO &
              <span className="block text-violet-500">
                paid advertising.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              SKSyntax helps businesses build a stronger digital presence
              through high-performance websites, search engine optimization,
              and targeted paid advertising across Meta and Google.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group bg-[#0d0d0d] p-8 transition-colors hover:bg-[#111111] sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-600">
                    {service.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                  >
                    ↗
                  </span>
                </div>

                <h2 className="mt-12 text-2xl font-semibold tracking-tight">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>

                <span className="mt-8 inline-block text-sm font-medium">
                  Explore service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SKSyntax */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Build the foundation.
              <span className="block text-violet-500">
                Then grow from it.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              A strong online presence starts with the right foundation. Your
              website needs to be fast and useful, your content needs to be
              discoverable, and your advertising needs to reach the right
              people.
            </p>

            <p>
              SKSyntax brings these areas together to create a more consistent
              digital experience for your business and your customers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0d0d0d] px-6 py-16 text-center sm:px-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to grow your
            <span className="text-violet-500"> online presence?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us what youre building and lets find the right digital
            solution for your business.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            <span className="text-black">Start a Project</span>
          </Link>
        </div>
      </section>
    </main>
  );
}