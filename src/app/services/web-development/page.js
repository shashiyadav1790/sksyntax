
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
    <main className="min-h-screen overflow-hidden bg-black pt-20 text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[150px] animate-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute left-[15%] top-32 -z-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-[80px] motion-safe:animate-pulse"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="animate-[fadeInUp_0.7s_ease-out_both] text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Website Development Services
            </p>

            <h1 className="mt-5 animate-[fadeInUp_0.8s_ease-out_0.1s_both] text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Websites built to
              <span className="block bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                perform and convert.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both] text-lg leading-8 text-zinc-400 sm:text-xl">
              SKSyntax builds fast, responsive, modern websites that give your
              business a professional digital presence and create a better
              experience for your customers.
            </p>

            <div className="mt-10 flex animate-[fadeInUp_0.8s_ease-out_0.3s_both] flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
              >
                <span className="relative z-10">Start Your Website</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-600/5 blur-[120px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Website development for
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}
                different business needs.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-zinc-400">
              Whether you need a simple business website or a more customized
              digital experience, the website is planned around your goals,
              audience, content, and functionality requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((type, index) => (
              <div
                key={type}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b] px-6 py-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-[#101010] hover:shadow-[0_15px_50px_rgba(139,92,246,0.08)]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-violet-400 to-fuchsia-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <span className="text-base font-medium transition-colors duration-300 group-hover:text-violet-200">
                    {type}
                  </span>

                  <span className="translate-x-1 text-violet-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[130px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Website Development Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built with the
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}
                right foundations.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className="group relative border-t border-white/10 pt-6 transition-all duration-500 hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${index * 0.1}s both`,
                }}
              >
                <span className="text-sm font-medium text-violet-400 transition-colors duration-300 group-hover:text-fuchsia-400">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold transition-colors duration-300 group-hover:text-violet-200">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {feature.description}
                </p>

                <div className="mt-5 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Development Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From concept to
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}
                launch.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent md:block"
            />

            {process.map((step, index) => (
              <div
                key={step.number}
                className="group relative border-t border-white/10 pt-6 transition-all duration-500 hover:-translate-y-1 md:border-t-0"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="mb-5 hidden h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.7)] transition-all duration-300 group-hover:scale-150 group-hover:bg-fuchsia-400 md:block" />

                <span className="text-sm text-violet-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold transition-colors duration-300 group-hover:text-violet-200">
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
      <section className="relative border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-medium transition-colors duration-300 hover:text-violet-300 sm:text-lg">
                  {faq.question}

                  <span
                    aria-hidden="true"
                    className="text-2xl text-zinc-500 transition-all duration-300 group-open:rotate-45 group-open:text-violet-400"
                  >
                    +
                  </span>
                </summary>

                <p className="pb-6 pr-10 leading-7 text-zinc-400 animate-[fadeInUp_0.35s_ease-out_both]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px] animate-pulse"
        />

        <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-16 text-center shadow-[0_0_80px_rgba(139,92,246,0.05)] transition-all duration-500 hover:border-violet-500/30 hover:shadow-[0_0_100px_rgba(139,92,246,0.10)] sm:px-12">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/70 to-transparent opacity-70"
          />

          <h2 className="relative text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to build your
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}
              website?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us about your business, requirements, and what you want to
            build.
          </p>

          <Link
            href="/contact"
            className="group/button relative mt-10 inline-flex overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
          >
            <span className="relative z-10">Start a Project</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-transform duration-500 group-hover/button:translate-x-0" />
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}

