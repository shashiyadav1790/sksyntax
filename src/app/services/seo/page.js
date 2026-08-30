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
  title: "SEO Services",
  description:
    "SKSyntax provides SEO services focused on technical SEO, on-page optimization, content strategy, website performance, and sustainable organic growth.",
  alternates: {
    canonical: "/services/seo",
  },
  openGraph: {
    title: "SEO Services | SKSyntax",
    description:
      "Build stronger search visibility with technical SEO, on-page optimization, content strategy, and performance-focused improvements.",
    url: "https://sksyntax.com/services/seo",
  },
};

export default function SEOPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-20 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              SEO Services
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Get found by the people
              <span className="block text-violet-500">
                looking for you.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Build a stronger organic presence with a practical SEO strategy
              focused on technical foundations, relevant content, search
              visibility, and sustainable growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Discuss Your SEO
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Areas */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What We Focus On
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SEO built on
              <span className="text-violet-500"> strong foundations.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              SEO is more than adding keywords to a page. A healthy search
              strategy combines technical quality, useful content, relevant
              search intent, and a good experience for users.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {seoAreas.map((area) => (
              <div
                key={area.number}
                className="border-t border-white/10 pt-6"
              >
                <span className="text-sm font-medium text-violet-400">
                  {area.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{area.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our SEO Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Strategy first.
              <span className="text-violet-500"> Then execution.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-7"
              >
                <span className="text-sm font-medium text-violet-400">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              SEO FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Common SEO questions.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-medium sm:text-lg">
                  {faq.question}

                  <span
                    aria-hidden="true"
                    className="text-2xl text-zinc-500 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="pb-6 pr-10 leading-7 text-zinc-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0d0d0d] px-6 py-16 text-center sm:px-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to grow your
            <span className="text-violet-500"> organic presence?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Lets understand your website, goals, and search opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}