
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Campaign Strategy",
    description:
      "Build Meta campaigns around clear business objectives, audience needs, offers, and measurable actions.",
  },
  {
    number: "02",
    title: "Audience Targeting",
    description:
      "Reach relevant audiences using targeting approaches suited to your business, offer, and customer journey.",
  },
  {
    number: "03",
    title: "Creative Direction",
    description:
      "Develop a clear creative direction for ads that communicates the offer and gives audiences a reason to take action.",
  },
  {
    number: "04",
    title: "Campaign Optimization",
    description:
      "Review campaign performance and refine targeting, creative, budgets, and other campaign elements based on available data.",
  },
];

const process = [
  {
    number: "01",
    title: "Research",
    description:
      "Understand your business, audience, offer, competitors, existing campaigns, and advertising goals.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Create a campaign structure that aligns audiences, objectives, creative, and conversion goals.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Prepare campaigns, audiences, creatives, tracking, and required settings before launching.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Monitor performance and make informed improvements as campaign data becomes available.",
  },
];

const faqs = [
  {
    question: "What are Meta Ads?",
    answer:
      "Meta Ads are paid advertising campaigns that can run across platforms such as Facebook and Instagram. They can be used to reach audiences based on factors such as interests, demographics, behaviors, and other available targeting signals.",
  },
  {
    question: "Are Meta Ads good for generating leads?",
    answer:
      "Meta Ads can be useful for lead generation when the audience, offer, creative, landing experience, and campaign structure are aligned with the business objective.",
  },
  {
    question: "Can you manage Facebook and Instagram ads?",
    answer:
      "Yes. Meta advertising can include campaign strategy, audience targeting, creative direction, campaign setup, monitoring, and optimization across Facebook and Instagram.",
  },
  {
    question: "How much should I spend on Meta Ads?",
    answer:
      "The appropriate advertising budget depends on your market, audience size, offer, competition, goals, and available data. A practical budget should allow enough activity to evaluate campaign performance.",
  },
  {
    question: "Can you help with Meta conversion tracking?",
    answer:
      "Yes. Where appropriate, conversion tracking can be included so campaign performance can be evaluated against meaningful business actions.",
  },
];

export const metadata = {
  title: "Meta Ads Services | Facebook & Instagram Advertising | SKSyntax",
  description:
    "SKSyntax provides Meta Ads services focused on campaign strategy, audience targeting, creative direction, conversion tracking, and ongoing optimization.",
  alternates: {
    canonical: "/services/meta-ads",
  },
  openGraph: {
    title: "Meta Ads Services | Facebook & Instagram Advertising | SKSyntax",
    description:
      "Reach relevant audiences on Facebook and Instagram with strategy-focused Meta Ads campaigns.",
    url: "https://sksyntax.com/services/meta-ads",
  },
};

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-[#05070a] pt-20 text-white">
      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-20 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="absolute right-[5%] top-[35%] -z-10 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.045] blur-[120px]"
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
                Meta Ads Services
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Reach the right
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                audience on Meta.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Build focused Facebook and Instagram advertising campaigns
              around your audience, offer, business goals, and available
              performance data.
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

                <span className="relative z-10">Discuss Meta Ads</span>

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

                <span className="relative z-10">Paid Advertising</span>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/30 sm:text-sm">
              <span>✓ Facebook & Instagram</span>
              <span>✓ Audience Focused</span>
              <span>✓ Performance Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Meta advertising built
              <span className="text-cyan-400"> with purpose.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg">
              Effective paid social campaigns need more than simply creating
              an advertisement. Strategy, audience, creative, tracking, and
              optimization all work together.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative bg-[#090b0f] p-7 transition-all duration-300 hover:bg-[#0d1117] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-white/25">
                    {service.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70 transition-all duration-300 group-hover:scale-150 group-hover:bg-cyan-300" />
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY META ==================== */}
      <section className="relative overflow-hidden border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute right-[-100px] top-1/2 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[130px]"
        />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Why Meta Ads
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Turn attention into
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                meaningful action.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/45 sm:text-lg">
            <p>
              Meta can help businesses reach people before they actively search
              for a product or service.
            </p>

            <p>
              This makes audience understanding, creative quality, messaging,
              and the overall customer journey especially important.
            </p>

            <p>
              Our approach focuses on connecting those elements to a clear
              business objective rather than treating ad spend as the goal.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="border-t border-white/[0.08] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              From audience research to
              <span className="text-cyan-400"> optimization.</span>
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
              Meta Ads FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Common questions.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/40">
              Answers to common questions about Meta advertising, campaigns,
              targeting, and optimization.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
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
              Ready to Grow?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to grow with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Meta Ads?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Lets discuss your audience, offer, goals, and advertising
              opportunities.
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

