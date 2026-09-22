import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Performance",
    description:
      "We care about building digital experiences that feel fast, responsive, and reliable.",
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "Every project should have a clear purpose, understandable messaging, and an intuitive user experience.",
  },
  {
    number: "03",
    title: "Growth",
    description:
      "Web development, SEO, and paid advertising should work together around meaningful business goals.",
  },
];

const services = [
  {
    title: "Website Development",
    href: "/services/web-development",
  },
  {
    title: "SEO",
    href: "/services/seo",
  },
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
  },
  {
    title: "Google Ads",
    href: "/services/google-ads",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, and requirements before starting the work.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We turn the strategy into a fast, responsive, and professional digital experience.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We refine performance, SEO, user experience, and conversion points to make everything work better.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We focus on improving visibility, generating relevant traffic, and supporting long-term digital growth.",
  },
];

export const metadata = {
  title: "About SKSyntax | Web Development, SEO & Digital Growth",
  description:
    "Learn more about SKSyntax, a digital solutions agency based in Sindoor, Hazaribagh, Jharkhand, focused on website development, SEO, Meta Ads, and Google Ads.",
  alternates: {
    canonical: "https://www.sksyntax.com/about",
  },
  openGraph: {
    title: "About SKSyntax | Web Development, SEO & Digital Growth",
    description:
      "Learn more about SKSyntax and our approach to website development, SEO, Meta Ads, and Google Ads.",
    url: "https://www.sksyntax.com/about",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] pt-20 text-white">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Background Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-100px] -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-[120px] sm:h-[420px] sm:w-[420px] sm:blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-120px] top-[30%] -z-10 h-[260px] w-[260px] rounded-full bg-blue-600/[0.045] blur-[120px] sm:right-[5%] sm:h-[320px] sm:w-[320px] sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
              About SKSyntax
            </p>

            {/* Heading */}
            <h1 className="mt-5 max-w-4xl text-[2.6rem] font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building digital foundations
              <span className="mt-1 block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                that move businesses forward.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/45 sm:mt-7 sm:text-lg sm:leading-8">
              SKSyntax, also known as SK Syntax, is a digital solutions brand
              helping businesses build a stronger online presence through
              modern website development, search engine optimization, and
              paid advertising.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-100px] left-[-100px] -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/[0.035] blur-[130px] sm:h-[360px] sm:w-[360px] sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
              Who We Are
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              More than just
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}
                a website.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-white/45 sm:space-y-6 sm:text-lg sm:leading-8">
            <p>
              SKSyntax is a digital solutions agency based in Sindoor,
              Hazaribagh, Jharkhand, India, focused on helping businesses
              create a professional and effective digital presence.
            </p>

            <p>
              A website should not only look good. It should communicate what
              a business offers, provide a smooth experience for visitors, and
              create a clear path toward meaningful action.
            </p>

            <p>
              That&apos;s why our approach connects website development, search
              visibility, and digital advertising instead of treating them as
              completely separate pieces.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-120px] top-[10%] -z-10 h-[320px] w-[320px] rounded-full bg-blue-500/[0.035] blur-[130px] sm:h-[380px] sm:w-[380px] sm:blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
                Founder
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                The person behind
                <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  SKSyntax.
                </span>
              </h2>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:rounded-3xl sm:p-8 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-70px] top-[-70px] h-48 w-48 rounded-full bg-cyan-400/[0.045] blur-[80px] transition-all duration-500 group-hover:bg-cyan-400/[0.07]"
              />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/80 sm:text-xs sm:tracking-[0.2em]">
                  Founder & Digital Solutions Specialist
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
                  Shashi Surya
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-white/65 sm:text-xs">
                    Web Development
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-white/65 sm:text-xs">
                    SEO
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-white/65 sm:text-xs">
                    Digital Technologies
                  </span>
                </div>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/45 sm:mt-7 sm:text-lg sm:leading-8">
                  Shashi Yadav is the founder of SKSyntax, focused on building
                  modern websites and practical digital solutions that help
                  businesses strengthen their online presence.
                </p>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/45 sm:text-lg sm:leading-8">
                  Based in Sindoor, Hazaribagh, Jharkhand, he works across
                  website development, SEO, and digital advertising with a
                  focus on performance, clarity, and meaningful business
                  outcomes.
                </p>
              </div>

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-28 sm:left-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY SKSYNTAX ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-[20%] -z-10 h-[280px] w-[280px] rounded-full bg-cyan-400/[0.025] blur-[130px] sm:h-[320px] sm:w-[320px] sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
              Why SKSyntax
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Built with a simple
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                purpose.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-white/45 sm:space-y-6 sm:text-lg sm:leading-8">
            <p>
              SKSyntax was created to help businesses build a stronger digital
              presence through practical and connected digital solutions.
            </p>

            <p>
              Instead of looking at a website, search visibility, and
              advertising as completely separate activities, we focus on how
              they can work together around clear business goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[10%] top-[10%] -z-10 h-[280px] w-[280px] rounded-full bg-blue-500/[0.035] blur-[130px] sm:h-[320px] sm:w-[320px] sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              One digital partner.
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                Multiple capabilities.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] sm:px-7 sm:py-6 md:px-8"
              >
                {/* Moving Light */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:left-[130%]"
                />

                <span className="relative flex min-h-8 items-center justify-between gap-4">
                  <span className="text-[15px] font-medium text-white/75 transition-colors duration-300 group-hover:text-white sm:text-lg">
                    {service.title}
                  </span>

                  <span className="shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                    →
                  </span>
                </span>

                {/* Accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-5 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20 sm:left-7 md:left-8"
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/services"
              className="group inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-white/60 transition-all duration-300 hover:text-cyan-300"
            >
              <span>Explore all services</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-100px] top-[15%] -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/[0.03] blur-[130px] sm:h-[350px] sm:w-[350px] sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              From idea
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}
                to growth.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 md:gap-5 lg:mt-16 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-7"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-white/20 transition-colors duration-300 group-hover:text-cyan-400/70 sm:text-sm">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-white sm:mt-6">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40 sm:mt-4 sm:text-base">
                  {step.description}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-5 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-20 sm:left-7"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-100px] top-[20%] -z-10 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.03] blur-[140px] sm:h-[380px] sm:w-[380px] sm:blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
              Our Principles
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              How we approach
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}
                our work.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 md:gap-5 md:mt-16">
            {values.map((value) => (
              <div
                key={value.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-8"
              >
                {/* Card Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-30px] top-[-30px] h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="relative text-xs font-semibold tracking-[0.16em] text-white/20 transition-colors duration-300 group-hover:text-cyan-400/70 sm:text-sm">
                  {value.number}
                </span>

                <h3 className="relative mt-5 text-2xl font-semibold tracking-[-0.025em] text-white transition-transform duration-300 group-hover:translate-x-1 sm:mt-6">
                  {value.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50 sm:mt-4 sm:text-base">
                  {value.description}
                </p>

                {/* Bottom Accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-24 sm:left-8"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE HELP ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-100px] top-[15%] -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/[0.03] blur-[130px] sm:h-[340px] sm:w-[340px] sm:blur-[140px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/90 sm:text-xs md:text-sm">
              Who We Help
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Helping businesses
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                grow online.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-white/45 sm:space-y-6 sm:text-lg sm:leading-8">
            <p>
              SKSyntax works with businesses that want to build a professional
              online presence and create a stronger foundation for digital
              growth.
            </p>

            <p>
              Whether the goal is launching a new website, improving search
              visibility, reaching potential customers through paid
              advertising, or connecting these efforts together, the focus
              remains on practical digital solutions and meaningful business
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[110px] sm:h-[300px] sm:w-[300px] sm:blur-[130px]"
        />

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:rounded-3xl sm:px-10 sm:py-16 md:px-12 md:py-20">
          {/* CTA Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-120px] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[90px] sm:h-[260px] sm:w-[260px] sm:blur-[100px]"
          />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
              Let&apos;s build something
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}
                meaningful.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/45 sm:mt-6 sm:text-lg sm:leading-8">
              Have an idea, a business, or a project that needs a stronger
              digital presence?
            </p>

            <Link
              href="/contact"
              className="group relative mt-8 inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[2px] hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[0_12px_40px_rgba(22,130,255,0.18)] sm:mt-10 sm:px-6 sm:py-3.5"
            >
              {/* Moving Light */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">Get in Touch</span>

              <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Bottom Accent */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent sm:w-28"
          />
        </div>
      </section>
    </main>
  );
}