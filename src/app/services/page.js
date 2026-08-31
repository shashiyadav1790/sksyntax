
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
    <main className="min-h-screen bg-[#05070a] pt-20 text-white">
      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 -z-10 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="absolute right-[8%] top-[35%] -z-10 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.045] blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="absolute left-[5%] bottom-0 -z-10 h-[180px] w-[180px] rounded-full bg-violet-500/[0.035] blur-[110px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
                Our Services
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Digital services built
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                for business growth.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              SKSyntax helps businesses build a stronger digital presence
              through high-performance websites, search engine optimization,
              and targeted paid advertising across Meta and Google.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.10] sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">Start a Project</span>

                <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services/paid-advertising"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-white/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">Explore Paid Advertising</span>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/30 sm:text-sm">
              <span>✓ Modern Websites</span>
              <span>✓ Search Visibility</span>
              <span>✓ Performance Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="relative border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[130px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Everything you need to
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                grow online.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg">
              From building your digital foundation to improving search
              visibility and reaching customers through paid advertising,
              each service is designed around practical business goals.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group relative bg-[#090b0f] p-8 transition-all duration-300 hover:bg-[#0d1117] sm:p-10"
              >
                {/* Card Glow */}
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.025] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.07]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wider text-white/25">
                      {service.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-sm text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.06] group-hover:text-cyan-300">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-12 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-cyan-300">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/70">
                    <span className="transition-colors duration-300 group-hover:text-cyan-300">
                      Explore service
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-8 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APPROACH ==================== */}
      <section className="relative overflow-hidden border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute right-[-100px] top-1/2 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="absolute left-[-80px] top-0 -z-10 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.025] blur-[120px]"
        />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Build the foundation.
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Then grow from it.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/45 sm:text-lg">
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

            <p>
              Instead of treating each service as a separate activity, we
              focus on how your website, search visibility, and advertising can
              work together toward clear business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative overflow-hidden border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[130px]"
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-white/[0.02] px-6 py-16 text-center shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:px-12 sm:py-20">
            {/* Top Accent */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Ready to Grow?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Build a stronger
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                digital presence.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Tell us what youre building and lets find the right digital
              solution for your business.
            </p>

            <Link
              href="/contact"
              className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.10]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">Start a Conversation</span>

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

