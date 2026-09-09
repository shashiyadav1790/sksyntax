import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Search Campaigns",
    description:
      "Reach potential customers when they are actively searching for products or services relevant to your business.",
  },
  {
    number: "02",
    title: "Keyword Strategy",
    description:
      "Build keyword targeting around relevant search intent, business goals, and the products or services you offer.",
  },
  {
    number: "03",
    title: "Ad Copy",
    description:
      "Create clear, relevant ad messaging that communicates your offer and encourages qualified users to take action.",
  },
  {
    number: "04",
    title: "Campaign Optimization",
    description:
      "Monitor performance and refine campaigns based on search terms, conversions, budgets, and available campaign data.",
  },
];

const process = [
  {
    number: "01",
    title: "Research",
    description:
      "Understand your business, customers, services, competitors, search landscape, and advertising goals.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Develop campaign and keyword structures around relevant search intent and desired business outcomes.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Prepare campaigns, keywords, ad copy, landing pages, tracking, and required settings before launch.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Review performance and continuously refine campaigns using available data and search behavior.",
  },
];

const faqs = [
  {
    question: "What are Google Ads?",
    answer:
      "Google Ads is Google's advertising platform. Search campaigns can allow businesses to show ads when people search for relevant products, services, or information.",
  },
  {
    question: "Are Google Ads good for generating leads?",
    answer:
      "Google Ads can be effective for lead generation when campaigns target relevant search intent and the offer, landing page, conversion experience, and tracking are properly aligned.",
  },
  {
    question: "What is keyword targeting?",
    answer:
      "Keyword targeting helps advertisers connect campaigns with relevant search queries. The goal is to focus advertising on searches that are meaningful to the business rather than simply targeting large volumes of traffic.",
  },
  {
    question: "How much should I spend on Google Ads?",
    answer:
      "The right budget depends on factors such as search demand, competition, location, industry, customer value, and business goals. Budget decisions should be based on the economics and available campaign data.",
  },
  {
    question: "Can you help with conversion tracking?",
    answer:
      "Yes. Where appropriate, conversion tracking can be part of the campaign setup so performance can be evaluated against meaningful actions such as inquiries, calls, or other business goals.",
  },
];

export const metadata = {
  title: "Google Ads Services | Search Advertising | SKSyntax",
  description:
    "SKSyntax provides Google Ads services focused on search campaigns, keyword strategy, ad copy, conversion tracking, and campaign optimization.",
  alternates: {
    canonical: "/services/google-ads",
  },
  openGraph: {
    title: "Google Ads Services | Search Advertising | SKSyntax",
    description:
      "Reach high-intent customers with strategy-focused Google Ads campaigns built around relevant search intent.",
    url: "https://www.sksyntax.com/services/google-ads",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] pt-20">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Ambient Glows */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 -z-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-blue-500/[0.10] blur-[150px] animate-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute left-[5%] top-[30%] -z-10 h-[260px] w-[260px] rounded-full bg-cyan-400/[0.045] blur-[130px] animate-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-[5%] -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/[0.05] blur-[140px] animate-pulse"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
                Google Ads Services
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Be there when
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                customers are searching.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Build search-focused Google Ads campaigns that connect your
              business with people actively looking for relevant products and
              services.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[2px] hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_rgba(22,130,255,0.18)] sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">
                  Discuss Google Ads
                </span>

                <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services/paid-advertising"
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] px-7 py-3.5 text-center text-sm font-semibold text-white/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-[2px] hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_10px_35px_rgba(34,211,238,0.10)] sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">
                  Paid Advertising
                </span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Google Ads built around
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}search intent.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg">
              Search advertising works best when the keyword, ad, landing page,
              and conversion goal are connected.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045] hover:shadow-[0_20px_50px_rgba(22,130,255,0.08)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]"
                />

                <div className="relative">
                  <span className="text-sm font-medium text-cyan-400/80">
                    {service.number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/45">
                    {service.description}
                  </p>

                  <div className="mt-7 h-px w-8 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Google */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Why Google Ads
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Connect with
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                high-intent searches.
              </span>
            </h2>
          </div>

          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-10">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/[0.06] blur-[90px]"
            />

            <div className="relative space-y-6 text-base leading-8 text-white/45 sm:text-lg">
              <p>
                Search advertising can put your business in front of people at
                the moment they are actively looking for a relevant solution.
              </p>

              <p>
                That makes keyword selection, search intent, ad relevance, and
                landing-page experience important parts of the campaign.
              </p>

              <p>
                We focus on creating campaigns that are aligned with the
                business objective rather than simply maximizing clicks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              From search research to
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}optimization.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045] hover:shadow-[0_20px_50px_rgba(22,130,255,0.08)]"
              >
                <div className="relative">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-2 text-xs font-semibold text-cyan-300">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/45">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Google Ads FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Common questions.
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className={`group ${
                  index !== faqs.length - 1
                    ? "border-b border-white/[0.08]"
                    : ""
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-left text-base font-medium text-white transition-colors hover:text-cyan-300 sm:px-8 sm:text-lg">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-xl font-light text-white/40 transition-all duration-300 group-open:rotate-45 group-open:border-cyan-400/20 group-open:text-cyan-300"
                  >
                    +
                  </span>
                </summary>

                <p className="px-6 pb-6 pr-14 leading-7 text-white/45 sm:px-8 sm:pb-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[140px] animate-pulse"
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-12 sm:py-20">

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            />

            <h2 className="relative text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Ready to reach
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                more customers?
              </span>
            </h2>

            <p className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Let's discuss your business, search opportunities, goals, and
              Google Ads strategy.
            </p>

            <Link
              href="/contact"
              className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[2px] hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[0_12px_40px_rgba(22,130,255,0.18)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">
                Start a Conversation
              </span>

              <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}