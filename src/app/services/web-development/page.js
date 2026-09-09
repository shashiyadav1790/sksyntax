import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Responsive Design",
    description:
      "A consistent and user-friendly experience across phones, tablets, laptops, and desktops.",
  },
  {
    number: "02",
    title: "Performance Focused",
    description:
      "Lightweight, performance-conscious development designed to deliver a fast and smooth browsing experience.",
  },
  {
    number: "03",
    title: "SEO Ready",
    description:
      "Semantic structure, metadata, and technical foundations that make your website easier for search engines to understand.",
  },
  {
    number: "04",
    title: "Conversion Focused",
    description:
      "Clear messaging, intuitive navigation, and strategic calls to action designed around your business goals.",
  },
];

const websiteTypes = [
  "Business Websites",
  "Landing Pages",
  "Agency Websites",
  "Portfolio Websites",
  "Service Websites",
  "Custom Web Experiences",
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your business, audience, requirements, and goals before development begins.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create a clear visual direction and user experience around your brand and audience.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Turn the approved design into a responsive, performant, and maintainable website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Test the website, make final improvements, and prepare it for a smooth production launch.",
  },
];

const faqs = [
  {
    question: "What type of websites does SKSyntax build?",
    answer:
      "We build modern business websites, landing pages, agency websites, portfolio websites, service websites, and custom web experiences based on your requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Responsive design is a core part of the development process, so the website is designed to work across different screen sizes and devices.",
  },
  {
    question: "Can you build a website with SEO in mind?",
    answer:
      "Yes. We can build the website with a strong technical SEO foundation, including semantic HTML, metadata, performance considerations, and search-friendly architecture.",
  },
  {
    question: "Can the website be customized for my business?",
    answer:
      "Yes. The design, content structure, functionality, and user experience can be tailored around your brand, audience, and business goals.",
  },
  {
    question: "Can you help with the website after launch?",
    answer:
      "Depending on your requirements, we can discuss ongoing improvements, SEO, performance optimization, and other digital services after the website goes live.",
  },
];

export const metadata = {
  title: "Website Development Services | SKSyntax",
description:
  "SKSyntax provides fast, responsive, SEO-ready website development services for businesses, agencies, portfolios, landing pages, and custom digital experiences.",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Website Development Services | SKSyntax",
    description:
      "Fast, responsive, SEO-ready websites built around your business goals and user experience.",
  url: "https://www.sksyntax.com/services/web-development",
   siteName: "SKSyntax",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] pt-20 text-white">

      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">

        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="absolute left-[15%] top-32 -z-10 h-32 w-32 rounded-full bg-cyan-400/[0.06] blur-[80px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
                Website Development Services
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Websites built to
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                perform and convert.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              SKSyntax builds fast, responsive, modern websites that give your
              business a professional digital presence and create a better
              experience for your customers.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.10] sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">
                  Start Your Website
                </span>

                <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-white/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">
                  View Our Work
                </span>
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/30 sm:text-sm">
              <span>✓ Responsive</span>
              <span>✓ Performance Focused</span>
              <span>✓ SEO Ready</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== WHAT WE BUILD ==================== */}
      <section className="relative border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">

        <div
          aria-hidden="true"
          className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-blue-600/[0.06] blur-[120px]"
        />

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Website development for
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}different business needs.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg">
              Whether you need a simple business website or a more customized
              digital experience, the website is planned around your goals,
              audience, content, and functionality requirements.
            </p>

          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">

            {websiteTypes.map((type) => (
              <div
                key={type}
                className="group relative bg-[#090b0f] px-7 py-6 transition-all duration-300 hover:bg-[#0d1117] sm:px-8"
              >
                <div className="flex items-center justify-between">

                  <span className="text-base font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                    {type}
                  </span>

                  <span className="translate-x-1 text-cyan-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>

                </div>

                <div className="mt-5 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="relative border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[130px]"
        />

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Website Development Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Built with the
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                right foundations.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="group relative bg-[#090b0f] p-7 transition-all duration-300 hover:bg-[#0d1117] sm:p-8"
              >

                <span className="text-xs font-medium tracking-wider text-cyan-400/70">
                  {feature.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {feature.description}
                </p>

                <div className="mt-7 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="relative border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">

        <div
          aria-hidden="true"
          className="absolute right-[-100px] top-1/2 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[130px]"
        />

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Development Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              From concept to
              <span className="text-cyan-400">
                {" "}launch.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {process.map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-8"
              >

                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.08]"
                />

                <span className="relative text-xs font-medium tracking-wider text-cyan-400/70">
                  {step.number}
                </span>

                <h3 className="relative mt-7 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-white/40">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Website Development FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Common questions.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/40">
              Answers to common questions about website development,
              performance, SEO, responsive design, and custom websites.
            </p>

          </div>

          <div className="mt-14 divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-left text-base font-medium transition-colors duration-300 hover:text-cyan-300 sm:px-7 sm:text-lg">

                  <span>
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-lg font-light text-white/40 transition-all duration-300 group-open:rotate-45 group-open:border-cyan-400/30 group-open:text-cyan-300"
                  >
                    +
                  </span>

                </summary>

                <p className="max-w-3xl px-6 pb-6 pr-12 text-sm leading-7 text-white/40 sm:px-7 sm:pb-7 sm:text-base">
                  {faq.answer}
                </p>

              </details>
            ))}

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

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Ready to Build?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to build your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                website?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Tell us about your business, requirements, and what you want to
              build.
            </p>

            <Link
              href="/contact"
              className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.10]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">
                Start a Project
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