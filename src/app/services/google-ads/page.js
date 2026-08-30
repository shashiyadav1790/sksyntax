
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
    url: "https://sksyntax.com/services/google-ads",
  },
};

export default function GoogleAdsPage() {
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
              Google Ads Services
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Be there when
              <span className="block text-violet-500">
                customers are searching.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Build search-focused Google Ads campaigns that connect your
              business with people actively looking for relevant products and
              services.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Discuss Google Ads
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
              Google Ads built around
              <span className="text-violet-500"> search intent.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Search advertising works best when the keyword, ad, landing page,
              and conversion goal are connected.
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

      {/* Why Google */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Why Google Ads
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Connect with
              <span className="block text-violet-500">
                high-intent searches.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
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
      </section>

      {/* Process */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From search research to
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
              Google Ads FAQ
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
            Ready to reach
            <span className="text-violet-500"> more customers?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Lets discuss your business, search opportunities, goals, and
            Google Ads strategy.
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
