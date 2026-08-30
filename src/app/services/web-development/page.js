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
  title: "Website Development Services",
  description:
    "SKSyntax builds fast, responsive, SEO-ready websites for businesses, agencies, portfolios, landing pages, and custom digital experiences.",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Website Development Services | SKSyntax",
    description:
      "Fast, responsive, SEO-ready websites built around your business goals and user experience.",
    url: "https://sksyntax.com/services/web-development",
  },
};

export default function WebDevelopmentPage() {
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
              Website Development Services
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Websites built to
              <span className="block text-violet-500">
                perform and convert.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              SKSyntax builds fast, responsive, modern websites that give your
              business a professional digital presence and create a better
              experience for your customers.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Start Your Website
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Website development for
              <span className="text-violet-500"> different business needs.</span>
            </h2>

            <p className="mt-6 leading-7 text-zinc-400">
              Whether you need a simple business website or a more customized
              digital experience, the website is planned around your goals,
              audience, content, and functionality requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((type) => (
              <div
                key={type}
                className="rounded-xl border border-white/10 bg-[#0d0d0d] px-6 py-5"
              >
                <span className="text-base font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Website Development Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built with the
              <span className="text-violet-500"> right foundations.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="border-t border-white/10 pt-6"
              >
                <span className="text-sm font-medium text-violet-400">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {feature.description}
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
              Development Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From concept to
              <span className="text-violet-500"> launch.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-t border-white/10 pt-6"
              >
                <span className="text-sm text-violet-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
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
              Website Development FAQ
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
            Ready to build your
            <span className="text-violet-500"> website?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us about your business, requirements, and what you want to
            build.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}