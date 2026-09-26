import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, modern websites built around your business goals, user experience, and performance.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Technical SEO, on-page optimization, content strategy, and search visibility designed for sustainable organic growth.",
    href: "/services/seo",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description:
      "Performance-focused Meta Ads and Google Ads campaigns designed to reach the right audience and generate qualified opportunities.",
    href: "/services/paid-advertising",
  },
];

export const metadata = {
  title: "Website Development, SEO & Paid Advertising Services | SKSyntax",
  description:
    "Explore SKSyntax services including website development, SEO, Meta Ads, and Google Ads to build visibility, reach customers, and grow your business online.",
  alternates: {
    canonical: "https://www.sksyntax.com/services",
  },
  openGraph: {
    title: "Website Development, SEO & Paid Advertising Services | SKSyntax",
    description:
      "Explore SKSyntax services including website development, SEO, Meta Ads, and Google Ads.",
    url: "https://www.sksyntax.com/services",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0E12] pt-[72px] text-white sm:pt-20">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0B0E12]" />
          <div className="absolute left-1/2 top-[15%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/[0.03] blur-[150px] sm:h-[560px] sm:w-[560px] lg:h-[680px] lg:w-[680px]" />
          <div className="absolute -left-[220px] top-[40%] h-[430px] w-[430px] rounded-full bg-cyan-400/[0.02] blur-[150px]" />
          <div className="absolute -right-[220px] bottom-[-60px] h-[470px] w-[470px] rounded-full bg-blue-500/[0.02] blur-[160px]" />
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0B0E12] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B0E12] to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 backdrop-blur-xl sm:mb-7 sm:px-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,217,238,0.7)]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                Our Services
              </p>
            </div>

            <h1 className="font-[var(--font-space-grotesk)] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Digital services built
              <span className="mt-2 block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent sm:mt-3">
                for business growth.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#AEB8C2] sm:mt-7 sm:text-lg sm:leading-8">
              SKSyntax combines high-performance websites, SEO, and targeted
              advertising to help businesses build visibility, reach customers,
              and grow online.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#F0F4F7] px-7 text-sm font-semibold !text-[#0B0E12] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                <span className="!text-[#0B0E12]">Start a Project</span>
                <span className="!text-[#0B0E12] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.015] px-7 text-sm font-medium text-white/65 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.03] hover:text-white sm:w-auto"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-white/35 sm:mt-10 sm:text-xs">
              <span><span className="mr-1 text-cyan-300">✓</span>Modern Websites</span>
              <span><span className="mr-1 text-cyan-300">✓</span>SEO Ready</span>
              <span><span className="mr-1 text-cyan-300">✓</span>Performance Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.02] blur-[150px]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90 sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-4 font-[var(--font-space-grotesk)] text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl">
              Everything you need to
              <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                grow online.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#AEB8C2] sm:mt-6 sm:text-lg sm:leading-8">
              From your digital foundation to search visibility and paid
              advertising, every service is designed around practical business goals.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035]"
              >
                <div className="relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-white/[0.05] bg-[#151B22]/80 p-5 sm:min-h-[350px] sm:p-6">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                        Service
                      </span>
                    </div>
                    <span className="font-mono text-xs text-white/30">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300/50">
                          SKSyntax
                        </p>
                        <h3 className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[#F0F4F7] transition-colors group-hover:text-cyan-100">
                          {service.title}
                        </h3>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-sm text-white/40 transition-all group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.06] group-hover:text-cyan-200">
                        ↗
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#AEB8C2]/75 transition-colors group-hover:text-[#AEB8C2] sm:text-[15px]">
                      {service.description}
                    </p>

                    <div className="mt-auto grid grid-cols-3 gap-2 pt-7">
                      {[
                        ["Reach", "Targeted"],
                        ["Focus", "Growth"],
                        ["Status", "Active"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-lg border border-white/[0.05] bg-[#10161c]/70 px-2.5 py-2.5"
                        >
                          <span className="block text-[9px] uppercase tracking-wider text-white/30">
                            {label}
                          </span>
                          <span className="mt-1 block text-[11px] text-white/75">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <span className="text-xs text-white/30">
                        Digital growth solution
                      </span>
                      <span className="text-sm font-medium text-cyan-200/60 transition-all group-hover:translate-x-1 group-hover:text-cyan-200">
                        Explore service →
                      </span>
                    </div>
                  </div>

                  <span className="absolute bottom-0 left-5 h-px w-16 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-28" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90 sm:text-sm">
              Our Approach
            </p>
            <h2 className="mt-4 font-[var(--font-space-grotesk)] text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl">
              Build the foundation.
              <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                Then grow from it.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-[#AEB8C2] sm:space-y-6 sm:text-lg sm:leading-8">
            <p>A strong online presence starts with the right foundation. Your website needs to be fast and useful, your content needs to be discoverable, and your advertising needs to reach the right people.</p>
            <p>SKSyntax brings these areas together to create a more consistent digital experience for your business and your customers.</p>
            <p>Instead of treating each service as a separate activity, we focus on how your website, search visibility, and advertising can work together toward clear business objectives.</p>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section
        aria-labelledby="services-insights-heading"
        className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90 sm:text-sm">
                From the SKSyntax Blog
              </p>
              <h2 id="services-insights-heading" className="mt-4 font-[var(--font-space-grotesk)] text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl">
                Practical insights to help you
                <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                  grow online.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#AEB8C2] sm:text-lg sm:leading-8">
                Explore practical guides covering websites, SEO, Meta Ads, and
                Google Ads to better understand the digital strategies behind online growth.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white/70 backdrop-blur-xl transition-all hover:border-cyan-400/20 hover:text-white"
            >
              View all articles <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01","Web Development","How to Build a Professional Website for Your Business","Learn what makes a professional business website effective, from structure and design to performance, SEO, and user experience.","/blog/how-to-build-a-professional-business-website"],
              ["02","SEO","How SEO Helps Businesses Get Found on Google","Understand SEO, search visibility, useful content, technical optimization, and the foundations of long-term organic growth.","/blog/how-seo-helps-businesses-get-found-on-google"],
              ["03","Paid Advertising","How Meta Ads Help Businesses Generate Leads and Customers","Learn how Meta Ads can help businesses reach relevant audiences, generate enquiries, and build a more focused advertising strategy.","/blog/how-meta-ads-help-businesses-generate-leads"],
            ].map(([number, category, title, description, href]) => (
              <Link
                key={number}
                href={href}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/30">{number}</span>
                  <span className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.035] px-3 py-1.5 text-[11px] text-cyan-300/90">{category}</span>
                </div>
                <div className="mt-6 h-px bg-white/[0.06]" />
                <h3 className="mt-6 text-xl font-semibold leading-8 tracking-[-0.025em] text-white transition-colors group-hover:text-cyan-100">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/40">{description}</p>
                <div className="mt-7 text-sm font-semibold text-white/50 transition-colors group-hover:text-cyan-300">
                  Read article <span className="ml-1">→</span>
                </div>
                <div className="absolute bottom-0 left-6 h-px w-12 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all group-hover:w-[calc(100%-3rem)]" />
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/blog/how-google-ads-help-businesses-reach-high-intent-customers"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-cyan-300"
            >
              Also read: How Google Ads Help Businesses Reach High-Intent Customers
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] px-5 py-14 text-center shadow-[0_25px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:px-10 sm:py-20 lg:px-12">
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90 sm:text-sm">
              Ready to Grow?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-[var(--font-space-grotesk)] text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Build a stronger
              <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                digital presence.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#AEB8C2] sm:text-lg">
              Tell us what you're building and let's find the right digital solution for your business.
            </p>

           <div className="mt-10">
  <Link
    href="/contact"
    className="
      group
      relative
      inline-flex
      items-center
      gap-2
      overflow-hidden
      rounded-full
      border
      border-white/[0.12]
      bg-[#F0F4F7]
      px-7
      py-3.5
      text-sm
      font-semibold
      text-[#0B0E12]
      shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      transition-all
      duration-300
      hover:-translate-y-[2px]
      hover:border-white/20
      hover:bg-white
      hover:shadow-[0_14px_40px_rgba(56,189,248,0.14)]
      active:translate-y-0
    "
  >
    {/* Moving Light */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-y-0
        -left-1/2
        w-1/2
        -skew-x-12
        bg-gradient-to-r
        from-transparent
        via-cyan-400/20
        to-transparent
        transition-transform
        duration-700
        group-hover:translate-x-[320%]
      "
    />

    <span className="relative z-10 !text-[#0B0E12]">
      Start a Conversion
    </span>

    {/* Arrow */}
    <span
      className="
        relative
        z-10
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-[#0B0E12]
        text-[11px]
        text-white
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      →
    </span>
  </Link>
</div>
          </div>
        </div>
      </section>
    </main>
  );
}