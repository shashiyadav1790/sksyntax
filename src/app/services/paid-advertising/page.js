
import Link from "next/link";

const platforms = [
  {
    number: "01",
    title: "Meta Ads",
    href: "/services/meta-ads",
    description:
      "Reach potential customers across Facebook and Instagram with audience-focused campaigns designed around your business goals.",
    points: [
      "Campaign strategy",
      "Audience targeting",
      "Creative direction",
      "Campaign optimization",
    ],
  },
  {
    number: "02",
    title: "Google Ads",
    href: "/services/google-ads",
    description:
      "Connect with people actively searching for products or services like yours through intent-focused Google advertising campaigns.",
    points: [
      "Search campaign strategy",
      "Keyword targeting",
      "Ad copy",
      "Campaign optimization",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Right Audience",
    description:
      "Reach people based on relevant interests, behaviors, demographics, or search intent.",
  },
  {
    number: "02",
    title: "Clear Strategy",
    description:
      "Campaigns should begin with a clear objective instead of simply spending an advertising budget.",
  },
  {
    number: "03",
    title: "Continuous Optimization",
    description:
      "Campaign performance can be reviewed regularly to identify opportunities for improvement.",
  },
  {
    number: "04",
    title: "Better Decisions",
    description:
      "Performance data helps inform future campaign decisions and budget allocation.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand your business, audience, offer, goals, and existing advertising setup.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We develop a campaign structure based on the platform, audience, offer, and desired outcome.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Campaigns, targeting, creatives, tracking, and other required elements are prepared and launched.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Performance is monitored and campaigns are refined based on the available data.",
  },
];

const faqs = [
  {
    question: "What is the difference between Meta Ads and Google Ads?",
    answer:
      "Meta Ads can help you reach people across platforms such as Facebook and Instagram based on audience characteristics and interests. Google Ads can help you reach people when they are actively searching for relevant products or services.",
  },
  {
    question: "Should I use Meta Ads or Google Ads?",
    answer:
      "It depends on your business, audience, offer, goals, and customer journey. In some cases one platform may be more suitable, while in others using both can make sense.",
  },
  {
    question: "Can you manage both Meta and Google campaigns?",
    answer:
      "Yes. Paid advertising services can include campaign strategy, setup, management, monitoring, and optimization across both platforms.",
  },
  {
    question: "Do you guarantee a specific number of leads or sales?",
    answer:
      "No. Advertising performance depends on factors such as the offer, market, competition, audience, website experience, creative quality, budget, and campaign data. No specific result should be guaranteed in advance.",
  },
  {
    question: "Can you help with conversion tracking?",
    answer:
      "Yes. Where appropriate, conversion tracking can be part of the advertising setup so campaign performance can be measured against meaningful business actions.",
  },
];

export const metadata = {
  title: "Paid Advertising Services | Meta Ads & Google Ads | SKSyntax",
  description:
    "SKSyntax provides paid advertising services across Meta Ads and Google Ads, focused on campaign strategy, audience targeting, conversion tracking, and optimization.",
  alternates: {
    canonical: "/services/paid-advertising",
  },
  openGraph: {
    title: "Paid Advertising Services | Meta Ads & Google Ads | SKSyntax",
    description:
      "Reach the right audience with strategy-focused Meta Ads and Google Ads campaigns built around your business goals.",
    url: "https://sksyntax.com/services/paid-advertising",
  },
};

export default function PaidAdvertisingPage() {
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
              Paid Advertising
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Reach the right people
              <span className="block text-violet-500">
                at the right moment.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Build focused advertising campaigns across Meta and Google with
              a strategy based on your business goals, audience, offer, and
              available data.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Discuss Your Campaign
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

      {/* Platforms */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Advertising Platforms
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Two platforms.
              <span className="block text-violet-500">
                Different opportunities.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Meta and Google work differently. The right platform depends on
              how your customers discover, evaluate, and purchase your offer.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {platforms.map((platform) => (
              <Link
                key={platform.number}
                href={platform.href}
                className="group rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 transition-all hover:border-violet-500/30 hover:bg-[#111111] sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-violet-400">
                    {platform.number}
                  </span>

                  <span className="text-xl text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-semibold tracking-tight">
                  {platform.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {platform.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {platform.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span
                        aria-hidden="true"
                        className="text-violet-400"
                      >
                        ✓
                      </span>

                      {point}
                    </li>
                  ))}
                </ul>

                <span className="mt-8 inline-block text-sm font-medium text-white transition-colors group-hover:text-violet-400">
                  Explore {platform.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Advertising with a
              <span className="text-violet-500"> purpose.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Paid advertising works best when campaign decisions are tied to
              clear business objectives, measurable actions, and continuous
              learning.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="border-t border-white/10 pt-6"
              >
                <span className="text-sm font-medium text-violet-400">
                  {benefit.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Campaign Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From strategy to
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
              Paid Advertising FAQ
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
            Ready to scale your
            <span className="text-violet-500"> advertising?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Lets discuss your goals, audience, offer, and advertising
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
};
