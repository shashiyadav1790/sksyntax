import Link from "next/link";

const seoAreas = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "A technically sound website structure helps search engines crawl, understand, and index your important pages.",
  },
  {
    number: "02",
    title: "On-Page SEO",
    description:
      "We optimize page structure, headings, metadata, internal links, and other on-page elements around relevant search intent.",
  },
  {
    number: "03",
    title: "Content Strategy",
    description:
      "Useful, search-focused content helps your website answer the questions and needs of your target audience.",
  },
  {
    number: "04",
    title: "Performance & UX",
    description:
      "Website speed, responsiveness, accessibility, and a strong user experience contribute to a healthier website.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "Understand the current website, technical issues, content, visibility, and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Prioritize opportunities based on your business goals, audience, competition, and relevant search intent.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "Implement technical, on-page, content, internal-linking, and performance improvements.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Monitor performance and continuously refine the strategy based on data and changing search opportunities.",
  },
];

const faqs = [
  {
    question: "What does SEO include?",
    answer:
      "SEO can include technical SEO, on-page optimization, content strategy, internal linking, performance improvements, and other activities based on the website's specific needs.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term process, and the timeline varies depending on factors such as competition, website history, technical condition, content quality, and the search landscape.",
  },
  {
    question: "Can you do SEO for a new website?",
    answer:
      "Yes. Starting SEO during website development can help establish a strong technical, content, and site architecture foundation from the beginning.",
  },
  {
    question: "Do you guarantee Google rankings?",
    answer:
      "No. Search rankings depend on many factors outside any single agency's control. The focus should be on building a technically strong website and a sustainable search strategy.",
  },
  {
    question: "Can SEO and website development work together?",
    answer:
      "Yes. Combining SEO with website development allows technical SEO, site structure, performance, metadata, and user experience to be considered from the beginning instead of being treated as separate tasks.",
  },
];

export const metadata = {
  title: "SEO Services | Technical SEO & Organic Growth | SKSyntax",
  description:
    "SKSyntax provides SEO services focused on technical SEO, on-page optimization, content strategy, website performance, and sustainable organic growth.",
  alternates: {
    canonical: "https://www.sksyntax.com/services/seo",
  },
  openGraph: {
    title: "SEO Services | Technical SEO & Organic Growth | SKSyntax",
    description:
      "Build stronger search visibility with technical SEO, on-page optimization, content strategy, and performance-focused improvements.",
    url: "https://www.sksyntax.com/services/seo",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function SEOPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0E12] pt-20 text-[#F0F4F7]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute left-1/2 top-20 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[150px]" />
        <div aria-hidden="true" className="absolute right-[5%] top-[35%] -z-10 h-[220px] w-[220px] rounded-full bg-blue-500/[0.035] blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60 sm:text-sm">
                SEO Services
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Get found by the people
              <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                looking for you.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#AEB8C2] sm:text-lg">
              Build stronger search visibility with a practical SEO strategy
              focused on technical foundations, relevant content, user
              experience, and sustainable organic growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F0F4F7] px-7 py-3.5 text-sm font-semibold !text-[#0B0E12] shadow-[0_10px_35px_rgba(240,244,247,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                <span>Discuss SEO</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.045] hover:text-white sm:w-auto"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#AEB8C2]/70 sm:text-sm">
              <span>✓ Technical SEO</span>
              <span>✓ Search Focused</span>
              <span>✓ Sustainable Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO AREAS */}
      <section className="border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              SEO built
              <span className="bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                {" "}with purpose.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-[#AEB8C2] sm:text-lg">
              Effective SEO requires more than adding keywords to a page.
              Technical quality, content, search intent, performance, and user
              experience all work together to create a stronger organic
              presence.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {seoAreas.map((area) => (
              <div
                key={area.number}
                className="group relative bg-[#0B0E12] p-7 transition-all duration-300 hover:bg-white/[0.025] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-white/30">
                    {area.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70 transition-all duration-300 group-hover:scale-150 group-hover:bg-cyan-300" />
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#AEB8C2]/75">
                  {area.description}
                </p>

                <div className="mt-7 h-px w-0 bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SEO */}
      <section className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute right-[-100px] top-1/2 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[130px]" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              Why SEO
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Turn search visibility into
              <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                meaningful growth.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#AEB8C2] sm:text-lg">
            <p>
              Search engines help people discover businesses, products,
              services, and information when they are actively looking for
              something.
            </p>

            <p>
              This makes technical quality, relevant content, search intent,
              website performance, and user experience important parts of a
              successful SEO strategy.
            </p>

            <p>
              Our approach focuses on building a stronger organic foundation
              rather than chasing short-term ranking tricks.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              From SEO audit to
              <span className="bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                {" "}continuous improvement.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-8"
              >
                <div aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/[0.035] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.07]" />

                <span className="relative text-xs font-medium tracking-wider text-cyan-400/70">
                  {step.number}
                </span>

                <h3 className="relative mt-7 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-[#AEB8C2]/75">
                  {step.description}
                </p>

                <div className="relative mt-7 h-px w-0 bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] transition-all duration-500 group-hover:w-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              SEO FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Common SEO questions.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#AEB8C2]/75">
              Clear answers to common questions about search optimization,
              rankings, timelines, and sustainable organic growth.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-left text-base font-medium transition-colors hover:text-cyan-300 sm:px-7 sm:text-lg">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-lg font-light text-white/40 transition-all duration-300 group-open:rotate-45 group-open:border-cyan-400/30 group-open:text-cyan-300"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-3xl px-6 pb-6 pr-12 text-sm leading-7 text-[#AEB8C2]/75 sm:px-7 sm:pb-7 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[130px]" />

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] px-6 py-16 text-center shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              Ready to Grow?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to grow your
              <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                organic presence?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#AEB8C2]/75 sm:text-lg">
              Let's understand your website, goals, and search opportunities.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#F0F4F7] px-8 py-4 text-sm font-semibold !text-[#0B0E12] shadow-[0_10px_40px_rgba(240,244,247,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <span>Start a Conversation</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}