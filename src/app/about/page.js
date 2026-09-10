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
  "Website Development",
  "SEO",
  "Meta Ads",
  "Google Ads",
];

export const metadata = {
  title: "About SKSyntax | Web Development, SEO & Digital Growth",
  description:
    "Learn more about SKSyntax and our approach to website development, SEO, Meta Ads, and Google Ads for businesses that want to grow online.",
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
    <main className="min-h-screen bg-[#05070a] pt-20 text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* Background Glows */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="absolute right-[5%] top-[35%] -z-0 h-[300px] w-[300px] rounded-full bg-blue-600/[0.04] blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              About SKSyntax
            </p>

            {/* Heading */}
            <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Building digital experiences
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                that move businesses forward.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              SKSyntax helps businesses build a stronger online presence
              through modern websites, search engine optimization, and paid
              advertising.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute bottom-[-100px] left-[-100px] -z-0 h-[320px] w-[320px] rounded-full bg-indigo-500/[0.035] blur-[140px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              More than just
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}
                a website.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            <p>
              SKSyntax is focused on helping businesses create a professional
              and effective digital presence.
            </p>

            <p>
              A website should not only look good. It should communicate what
              a business offers, provide a smooth experience for visitors, and
              create a clear path toward meaningful action.
            </p>

            <p>
              That's why our approach combines development, search visibility,
              and digital advertising instead of treating them as completely
              separate pieces.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute right-[-100px] top-[20%] -z-0 h-[350px] w-[350px] rounded-full bg-cyan-400/[0.03] blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              Our Principles
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              How we approach
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}
                our work.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-8"
              >
                {/* Card Glow */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-30px] top-[-30px] h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="relative text-xs font-semibold tracking-[0.16em] text-white/20 transition-colors duration-300 group-hover:text-cyan-400/70 sm:text-sm">
                  {value.number}
                </span>

                <h3 className="relative mt-6 text-2xl font-semibold tracking-[-0.025em] text-white transition-transform duration-300 group-hover:translate-x-1">
                  {value.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50 sm:text-base">
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

      {/* ================= SERVICES ================= */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-[10%] top-[10%] -z-0 h-[300px] w-[300px] rounded-full bg-blue-500/[0.035] blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              One digital partner.
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                Multiple capabilities.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] sm:px-8"
              >
                {/* Moving Light */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:left-[130%]"
                />

                <span className="relative text-base font-medium text-white/75 transition-colors duration-300 group-hover:text-white sm:text-lg">
                  {service}
                </span>

                {/* Accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20 sm:left-8"
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-all duration-300 hover:text-cyan-300"
            >
              <span>Explore all services</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:px-12 sm:py-20">
          {/* CTA Glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[-120px] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[100px]"
          />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
              Let's build something
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}
                meaningful.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Have an idea, a business, or a project that needs a stronger
              digital presence?
            </p>

            <Link
              href="/contact"
              className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-400 hover:-translate-y-[2px] hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[0_12px_40px_rgba(22,130,255,0.18)]"
            >
              {/* Moving Light */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">Get in Touch</span>

              <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Bottom Accent */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>
      </section>
    </main>
  );
}