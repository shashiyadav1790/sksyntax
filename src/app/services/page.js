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
  title: "Website Development, SEO & Paid Advertising Services | SKSyntax",
  description:
    "Explore SKSyntax services including website development, SEO, Meta Ads, and Google Ads to build visibility, reach customers, and grow your business online.",
  alternates: {
    canonical: "https://www.sksyntax.com/services",
  },
  openGraph: {
    title: "Website Development, SEO & Paid Advertising Services | SKSyntax",
    description:
      "Explore SKSyntax services including website development, SEO, Meta Ads, and Google Ads.",
   url: "https://www.sksyntax.com/services",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] pt-[72px] text-white sm:pt-20">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[15%] -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/[0.10] blur-[110px] sm:h-[430px] sm:w-[430px] sm:blur-[140px] lg:h-[560px] lg:w-[560px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-[45%] -z-10 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.045] blur-[100px] sm:left-[5%] sm:h-[280px] sm:w-[280px] sm:blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-[-50px] -z-10 h-[240px] w-[240px] rounded-full bg-violet-500/[0.045] blur-[110px] sm:right-[5%] sm:h-[300px] sm:w-[300px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5 backdrop-blur-xl sm:mb-7 sm:px-4">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
              />

              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 sm:text-xs sm:tracking-[0.22em]">
                Our Services
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-[42px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Digital services built
              <span className="mt-2 block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent sm:mt-3">
                for business growth.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/50 sm:mt-7 sm:text-lg sm:leading-8">
              SKSyntax combines high-performance websites, SEO, and targeted
              advertising to help businesses build visibility, reach customers,
              and grow online.
            </p>

            {/* CTA */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">

              <Link
                href="/contact"
                className="group relative inline-flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.07] px-7 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.11] hover:shadow-[0_15px_45px_rgba(34,211,238,0.12)] sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.15] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">
                  Start a Project
                </span>

                <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="group relative inline-flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] px-7 text-sm font-semibold text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">
                  View Projects
                </span>
              </Link>

            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-white/35 sm:mt-10 sm:gap-x-8 sm:text-xs">
              <span>✓ Modern Websites</span>
              <span>✓ SEO Ready</span>
              <span>✓ Performance Focused</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="relative border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-[120px] sm:h-[500px] sm:w-[500px]"
        />

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              Everything you need to
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                grow online.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/45 sm:mt-6 sm:text-lg sm:leading-8">
              From your digital foundation to search visibility and paid
              advertising, every service is designed around practical
              business goals.
            </p>

          </div>

          {/* Service Cards */}
          <div className="mt-10 grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] shadow-[0_20px_80px_rgba(0,0,0,0.30)] md:mt-14 md:grid-cols-3">

            {services.map((service, index) => (
              <Link
                key={service.number}
                href={service.href}
                className="group relative min-h-[310px] overflow-hidden border-b border-white/[0.07] bg-[#080b10] p-6 transition-all duration-500 last:border-b-0 hover:bg-[#0b1017] sm:min-h-[330px] sm:p-9 md:min-h-[380px] md:border-b-0 md:border-r md:border-white/[0.07] md:last:border-r-0"
              >

                {/* Always visible glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] ${
                    index === 0
                      ? "bg-cyan-400/[0.07]"
                      : index === 1
                        ? "bg-blue-500/[0.07]"
                        : "bg-violet-500/[0.07]"
                  }`}
                />

                {/* Animated hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-cyan-400/[0.08] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex h-full flex-col">

                  {/* Top */}
                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold tracking-[0.18em] text-white/35 transition-colors duration-300 group-hover:text-cyan-400/80">
                      {service.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.035] text-sm text-white/45 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.08] group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                      ↗
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-12 text-[23px] font-semibold tracking-[-0.025em] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-200 sm:mt-14 sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-md text-[14px] leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/60 sm:text-[15px]">
                    {service.description}
                  </p>

                  {/* Explore */}
                  <div className="mt-auto pt-8">

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors duration-300 group-hover:text-cyan-300">
                      Explore service
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>

                  </div>

                  {/* Bottom accent — always visible on mobile */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full"
                  />

                  {/* Inner border glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-none border border-transparent transition-colors duration-500 group-hover:border-cyan-400/[0.10]"
                  />

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-blue-600/[0.055] blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.025] blur-[100px]"
        />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-sm">
              Our Approach
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              Build the foundation.
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                Then grow from it.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-white/45 sm:space-y-6 sm:text-lg sm:leading-8">

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
              focus on how your website, search visibility, and advertising
              can work together toward clear business objectives.
            </p>

          </div>
        </div>
      </section>

            {/* =========================================================
          INSIGHTS
      ========================================================= */}
      <section
        aria-labelledby="services-insights-heading"
        className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-[130px] sm:h-[500px] sm:w-[500px]"
        />

        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-sm">
                From the SKSyntax Blog
              </p>

              <h2
                id="services-insights-heading"
                className="mt-4 text-[36px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl"
              >
                Practical insights to help you
                <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  grow online.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/45 sm:text-lg sm:leading-8">
                Explore practical guides covering websites, SEO, Meta Ads,
                and Google Ads to better understand the digital strategies
                behind online growth.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white/75 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.05] hover:text-white"
            >
              <span>View all articles</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Article Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Web Development */}
            <Link
              href="/blog/how-to-build-a-professional-business-website"
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/[0.055] blur-[65px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/30">
                    01
                  </span>

                  <span className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.045] px-3 py-1.5 text-[11px] font-medium text-cyan-300/90">
                    Web Development
                  </span>
                </div>

                <div className="mt-6 h-px bg-white/[0.06]" />

                <h3 className="mt-6 text-xl font-semibold leading-8 tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan-100">
                  How to Build a Professional Website for Your Business
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  Learn what makes a professional business website effective,
                  from structure and design to performance, SEO, and user
                  experience.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors duration-300 group-hover:text-cyan-300">
                  Read article
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-px w-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-[calc(100%-3rem)]"
              />
            </Link>

            {/* SEO */}
            <Link
              href="/blog/how-seo-helps-businesses-get-found-on-google"
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/[0.06] blur-[65px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/30">
                    02
                  </span>

                  <span className="rounded-full border border-blue-400/10 bg-blue-400/[0.045] px-3 py-1.5 text-[11px] font-medium text-blue-300/90">
                    SEO
                  </span>
                </div>

                <div className="mt-6 h-px bg-white/[0.06]" />

                <h3 className="mt-6 text-xl font-semibold leading-8 tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan-100">
                  How SEO Helps Businesses Get Found on Google
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  Understand SEO, search visibility, useful content, technical
                  optimization, and the foundations of long-term organic
                  growth.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors duration-300 group-hover:text-cyan-300">
                  Read article
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-px w-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-[calc(100%-3rem)]"
              />
            </Link>

            {/* Paid Advertising */}
            <Link
              href="/blog/how-meta-ads-help-businesses-generate-leads"
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/[0.055] blur-[65px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/30">
                    03
                  </span>

                  <span className="rounded-full border border-violet-400/10 bg-violet-400/[0.045] px-3 py-1.5 text-[11px] font-medium text-violet-300/90">
                    Paid Advertising
                  </span>
                </div>

                <div className="mt-6 h-px bg-white/[0.06]" />

                <h3 className="mt-6 text-xl font-semibold leading-8 tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan-100">
                  How Meta Ads Help Businesses Generate Leads and Customers
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  Learn how Meta Ads can help businesses reach relevant
                  audiences, generate enquiries, and build a more focused
                  advertising strategy.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors duration-300 group-hover:text-cyan-300">
                  Read article
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-px w-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-[calc(100%-3rem)]"
              />
            </Link>
          </div>

          {/* Google Ads secondary link */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/blog/how-google-ads-help-businesses-reach-high-intent-customers"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors duration-300 hover:text-cyan-300"
            >
              <span>
                Also read: How Google Ads Help Businesses Reach High-Intent
                Customers
              </span>

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[440px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[120px]"
        />

        <div className="mx-auto max-w-4xl">

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-white/[0.018] px-5 py-14 text-center shadow-[0_25px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-18 lg:px-12 lg:py-20">

            {/* Top accent */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-sm">
              Ready to Grow?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-[36px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Build a stronger
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                digital presence.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/45 sm:mt-6 sm:text-lg">
              Tell us what you're building and let's find the right digital
              solution for your business.
            </p>

            <Link
              href="/contact"
              className="group relative mt-8 inline-flex min-h-[52px] items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.07] px-7 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.11] sm:mt-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">
                Start a Conversation
              </span>

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