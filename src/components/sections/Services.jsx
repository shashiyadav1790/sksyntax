import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive, and conversion-focused websites built to deliver a strong user experience and support business growth.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Strategic SEO services that improve search visibility, attract relevant organic traffic, and build long-term online growth.",
    href: "/services/seo",
  },
  {
    number: "03",
    title: "Meta Ads",
    description:
      "Targeted Facebook and Instagram advertising campaigns designed to reach the right audience, generate leads, and drive conversions.",
    href: "/services/meta-ads",
  },
  {
    number: "04",
    title: "Google Ads",
    description:
      "Performance-driven Google Ads campaigns that connect your business with high-intent customers and measurable opportunities.",
    href: "/services/google-ads",
  },
];

export default function Services() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#0B0E12] py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-140px] top-[8%] h-[380px] w-[380px] rounded-full bg-cyan-400/[0.035] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-160px] top-[35%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.025] blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
            Our Digital Growth Services
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#F0F4F7] sm:text-5xl">
            Website Development, SEO
            <span className="block bg-gradient-to-r from-[#65d9ee] via-[#438cff] to-[#7bb7ff] bg-clip-text text-transparent sm:inline">
              {" "}
              & Paid Advertising.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#AEB8C2] sm:text-lg sm:leading-8">
            SKSyntax provides website development, SEO, Meta Ads, and Google
            Ads services to help businesses build a stronger online presence,
            reach the right audience, and grow.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/[0.18] hover:bg-white/[0.035] sm:p-4"
            >
              <div className="relative overflow-hidden rounded-2xl ">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.65)]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#AEB8C2]/60">
                      Service
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#AEB8C2]/40">
                    {service.number}
                  </span>
                </div>

                <div className="px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300/50">
                        SKSyntax
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#F0F4F7] transition-colors duration-300 group-hover:text-cyan-100 sm:text-[26px]">
                        {service.title}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-sm text-[#AEB8C2]/50 transition-all duration-500 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.06] group-hover:text-cyan-200">
                      ↗
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#AEB8C2]/80 transition-colors duration-300 group-hover:text-[#AEB8C2] sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-white/[0.05] bg-[#10161c] px-3 py-2.5">
                      <span className="block text-[9px] uppercase tracking-wider text-[#AEB8C2]/40">
                        Reach
                      </span>
                      <span className="mt-1 block text-xs text-[#F0F4F7]/80">
                        Targeted
                      </span>
                    </div>

                    <div className="rounded-lg border border-white/[0.05] bg-[#10161c] px-3 py-2.5">
                      <span className="block text-[9px] uppercase tracking-wider text-[#AEB8C2]/40">
                        Focus
                      </span>
                      <span className="mt-1 block text-xs text-[#F0F4F7]/80">
                        Growth
                      </span>
                    </div>

                    <div className="rounded-lg border border-white/[0.05] bg-[#10161c] px-3 py-2.5">
                      <span className="block text-[9px] uppercase tracking-wider text-[#AEB8C2]/40">
                        Status
                      </span>
                      <span className="mt-1 block text-xs text-cyan-300/80">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="text-xs text-[#AEB8C2]/45">
                      Digital growth solution
                    </span>

                    <span className="text-sm font-medium text-cyan-200/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-200">
                      Explore service →
                    </span>
                  </div>
                </div>

                <span className="absolute bottom-0 left-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70 transition-all duration-500 group-hover:w-32 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}