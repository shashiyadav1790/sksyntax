
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
              Meta Ads Services
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Reach your next
              <span className="block text-violet-500">
                customers on Meta.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Build focused Facebook and Instagram advertising campaigns
              around your audience, offer, business goals, and available
              performance data.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Discuss Meta Ads
              </Link>

              <Link
                href="/services/paid-advertising"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Paid Advertising
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Meta advertising built
              <span className="text-violet-500"> with purpose.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Effective paid social campaigns need more than simply creating
              an advertisement. Strategy, audience, creative, tracking, and
              optimization all work together.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="border-t border-white/10 pt-6"
              >
                <span className="text-sm font-medium text-violet-400">
                  {service.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Meta */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Why Meta Ads
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Turn attention into
              <span className="block text-violet-500">
                meaningful action.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
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

      {/* Process */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From audience research to
              <span className="text-violet-500"> optimization.</span>
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

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

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
              Meta Ads FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Common questions.
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
            Ready to grow with
            <span className="text-violet-500"> Meta Ads?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Lets discuss your audience, offer, goals, and advertising
            opportunities.
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

