
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B0E12] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#0B0E12]" />

        <div className="absolute left-1/2 top-[32%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/[0.03] blur-[150px] sm:h-[540px] sm:w-[540px] lg:h-[680px] lg:w-[680px]" />

        <div className="absolute -left-[220px] top-[18%] h-[430px] w-[430px] rounded-full bg-cyan-400/[0.02] blur-[150px]" />

        <div className="absolute -right-[220px] top-[25%] h-[470px] w-[470px] rounded-full bg-blue-500/[0.02] blur-[160px]" />

        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0B0E12] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B0E12] to-transparent" />
      </div>

      {/* =========================================================
          MOBILE
      ========================================================== */}
      <div className="mx-auto mt-11 w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-14 lg:hidden">
        {/* SERVICES MARQUEE */}
        <div className="mb-6 overflow-hidden">
          <div className="inline-flex h-8 max-w-full items-center overflow-hidden rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 backdrop-blur-xl">
            <div className="hero-eyebrow-track whitespace-nowrap text-[7px] font-medium tracking-[0.18em] text-white/40">
              <span>
                WEBSITE DEVELOPMENT&nbsp; • &nbsp;SEO&nbsp; • &nbsp;META ADS&nbsp; •
                &nbsp;GOOGLE ADS&nbsp; • &nbsp;
              </span>

              <span aria-hidden="true">
                WEBSITE DEVELOPMENT&nbsp; • &nbsp;SEO&nbsp; • &nbsp;META ADS&nbsp; •
                &nbsp;GOOGLE ADS&nbsp; • &nbsp;
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mx-auto max-w-[620px] text-center">
          {/* BRAND LABEL */}
          <div className="mb-6 text-[15px] font-medium uppercase tracking-[0.18em] text-white/40">
            SKSyntax
          </div>

          {/* H1 */}
          <h1 className="mx-auto w-full text-center font-[var(--font-space-grotesk)] text-[clamp(2rem,9vw,3.8rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
            <span className="block text-[#F0F4F7]">
              Website Development
            </span>

            <span className="mt-4 block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
              SEO &amp; Digital Growth
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-[340px] text-center text-[10px] leading-[1.65] text-[#AEB8C2]">
            SKSyntax builds high-performance websites, improves SEO visibility,
            and runs targeted Meta Ads and Google Ads campaigns to help
            businesses grow online.
          </p>

          {/* CTA */}
          <div className="mx-auto mb-2 mt-5 flex w-full max-w-[340px] flex-col gap-2">
            <Link
              href="/contact"
              className="flex h-11 w-full items-center justify-center rounded-full bg-[#F0F4F7] px-6 text-[12px] font-bold tracking-[-0.01em] !text-[#0B0E12] shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <span className="!text-[#0B0E12]">Get Started</span>

              <span className="ml-2 text-[14px] font-bold !text-[#0B0E12] transition-transform duration-300">
                →
              </span>
            </Link>

            <Link
              href="/services"
              className="mt-2 flex h-9 w-full items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.015] text-[11px] font-medium text-white/65 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.03] hover:text-white"
            >
              Explore Services
              <span className="ml-1.5 text-cyan-300">↗</span>
            </Link>
          </div>

          {/* TRUST */}
          <div className="mx-auto mt-5 flex max-w-[340px] flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[8px] text-white/35">
            <span>
              <span className="mr-1 text-cyan-300">✓</span>
              Fast Websites
            </span>

            <span>
              <span className="mr-1 text-cyan-300">✓</span>
              SEO Ready
            </span>

            <span>
              <span className="mr-1 text-cyan-300">✓</span>
              Performance Focused
            </span>
          </div>
        </div>

        {/* =======================================================
            MOBILE DASHBOARD
        ======================================================== */}
        <div className="relative mt-10 w-full sm:mt-12">
          {/* FLOATING BADGE */}
          <div className="absolute -right-1 -top-3 z-20 rounded-lg border border-cyan-300/15 bg-[#151d24]/95 px-2.5 py-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="text-[7px] uppercase tracking-[0.15em] text-white/30">
              Visibility
            </div>

            <div className="mt-0.5 text-[10px] font-semibold text-cyan-300">
              SEO Ready
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#151B22]/95 shadow-[0_25px_75px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
              <div>
                <div className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                  SKSyntax
                </div>

                <div className="mt-1 text-[13px] font-semibold text-white">
                  Digital Growth
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-400/[0.06] px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                <span className="text-[7px] font-medium uppercase tracking-[0.12em] text-emerald-300">
                  Optimized
                </span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-4">
              {/* Overview */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Performance overview
                  </div>

                  <div className="mt-1 text-sm font-semibold text-white">
                    Analyze
                  </div>
                </div>

                <div className="text-[8px] uppercase tracking-[0.14em] text-cyan-300/80">
                  ↗ Growth
                </div>
              </div>

              <p className="mt-2.5 max-w-[430px] text-[9px] leading-4 text-white/40">
                A connected digital system built for visibility, performance
                and customer growth.
              </p>

              {/* Metrics */}
              <div className="mt-3.5 grid grid-cols-3 gap-2">
                {[
                  {
                    title: "Website",
                    number: "01",
                    value: "Fast",
                    sub: "Responsive",
                    width: "82%",
                  },
                  {
                    title: "SEO",
                    number: "02",
                    value: "Visible",
                    sub: "Search Ready",
                    width: "74%",
                  },
                  {
                    title: "Ads",
                    number: "03",
                    value: "Targeted",
                    sub: "Meta + Google",
                    width: "88%",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="min-w-0 rounded-xl border border-white/[0.07] bg-[#10161c] p-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[7px] uppercase tracking-[0.16em] text-white/30">
                        {item.title}
                      </span>

                      <span className="text-[8px] text-cyan-300/60">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-2.5 truncate text-[13px] font-semibold text-white">
                      {item.value}
                    </div>

                    <div className="mt-1 text-[7px] text-white/30">
                      {item.sub}
                    </div>

                    <div className="mt-2.5 h-px w-full bg-white/[0.06]">
                      <div
                        className="h-px bg-cyan-300/70"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Signals */}
              <div className="mt-3 rounded-xl border border-white/[0.07] bg-[#10161c] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Service Signals
                  </span>

                  <span className="text-[8px] text-emerald-300">
                    4 Active
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Web", "SEO", "Meta Ads", "Google Ads"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[7px] text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="mt-3 rounded-xl border border-white/[0.07] bg-[#10161c] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                      Digital System
                    </div>

                    <div className="mt-1 text-[9px] text-white/60">
                      Website + SEO + Paid Ads
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-cyan-300">
                    78%
                  </div>
                </div>

                <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP
      ========================================================== */}
      <div className="mx-auto hidden min-h-[730px] w-full max-w-[1450px] items-center px-6 py-12 lg:grid lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 xl:gap-12 2xl:px-10">
        {/* LEFT */}
        <div className="relative z-20 min-w-0">
          {/* SERVICES MARQUEE */}
          <div className="mb-5 flex justify-center overflow-hidden">
            <div className="inline-flex h-8 max-w-full items-center overflow-hidden rounded-full border border-white/[0.07] bg-white/[0.02] px-3 backdrop-blur-xl">
              <div className="hero-eyebrow-track whitespace-nowrap text-[7px] font-medium tracking-[0.2em] text-white/40">
                <span>
                  WEBSITE DEVELOPMENT&nbsp; • &nbsp;SEO&nbsp; • &nbsp;META ADS&nbsp; •
                  &nbsp;GOOGLE ADS&nbsp; • &nbsp;
                </span>

                <span aria-hidden="true">
                  WEBSITE DEVELOPMENT&nbsp; • &nbsp;SEO&nbsp; • &nbsp;META ADS&nbsp; •
                  &nbsp;GOOGLE ADS&nbsp; • &nbsp;
                </span>
              </div>
            </div>
          </div>

          {/* BRAND LABEL */}
          <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
            SKSyntax
          </div>

          {/* H1 */}
          <h1 className="font-[var(--font-space-grotesk)] text-[clamp(3rem,4vw,4.8rem)] font-semibold leading-[0.93] tracking-[-0.055em]">
            <span className="block text-[#F0F4F7]">
              Website Development
            </span>

            <span className="mt-3 block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
              SEO &amp; Digital Growth
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-[500px] text-xs leading-5.5 text-[#AEB8C2] xl:text-[13px] xl:leading-6">
            SKSyntax builds high-performance websites, improves SEO
            visibility, and runs targeted Meta Ads and Google Ads campaigns
            to help businesses grow online.
          </p>

          {/* CTA */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-[#F0F4F7] px-6 text-xs font-semibold !text-[#0B0E12] shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 !text-[#0B0E12]">
                Get Started
                <span className="ml-2 !text-[#0B0E12] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>

              <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/50 blur-md transition-all duration-700 group-hover:left-[130%]" />
            </Link>

            <Link
              href="/services"
              className="text-xs font-medium text-white/55 underline decoration-white/15 underline-offset-7 transition-colors duration-300 hover:text-white hover:decoration-cyan-300/50"
            >
              Explore Services
              <span className="ml-1 text-cyan-300">↗</span>
            </Link>
          </div>

          {/* TRUST */}
          <div className="mt-5 flex flex-wrap gap-x-3.5 gap-y-1.5 text-[9px] text-white/35">
            <span>
              <span className="mr-1 text-cyan-300">✓</span>
              Fast Websites
            </span>

            <span>
              <span className="mr-1 text-cyan-300">✓</span>
              SEO Ready
            </span>

            <span>
              <span className="mr-1 text-cyan-300">✓</span>
              Performance Focused
            </span>
          </div>
        </div>

        {/* =======================================================
            DESKTOP DASHBOARD
        ======================================================== */}
        <div className="relative z-10 mt-12 min-w-0 w-full">
          {/* Badge 1 */}
          <div className="absolute left-0 top-0 z-30 rounded-lg border border-emerald-300/15 bg-[#151d24]/95 px-3 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl xl:left-[-15px]">
            <div className="text-[7px] uppercase tracking-[0.16em] text-white/35">
              Visibility
            </div>

            <div className="mt-0.5 text-[11px] font-semibold text-emerald-300">
              SEO Ready
            </div>
          </div>

          {/* Badge 2 */}
          <div className="absolute right-1 top-[32%] z-30 rounded-lg border border-cyan-300/15 bg-[#151d24]/95 px-3 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl xl:right-[-15px]">
            <div className="text-[7px] uppercase tracking-[0.16em] text-white/35">
              Campaigns
            </div>

            <div className="mt-0.5 text-[11px] font-semibold text-cyan-300">
              Targeted
            </div>
          </div>

          {/* Badge 3 */}
          <div className="absolute bottom-[-14px] left-0 z-30 rounded-lg border border-white/[0.08] bg-[#151d24]/95 px-3 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl xl:left-[-15px]">
            <div className="text-[7px] uppercase tracking-[0.16em] text-white/35">
              Performance
            </div>

            <div className="mt-0.5 text-[11px] font-semibold text-white">
              Fast + Responsive
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="relative w-full min-w-0 overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#151B22]/95 shadow-[0_35px_100px_rgba(0,0,0,0.48)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />

            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300/35 via-blue-400/10 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                  SKSyntax
                </div>

                <div className="mt-1 text-sm font-semibold text-white">
                  Digital Growth
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-400/[0.06] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                <span className="text-[7px] font-medium uppercase tracking-[0.13em] text-emerald-300">
                  Optimized
                </span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-5 xl:p-6">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Performance overview
                  </div>

                  <div className="mt-1.5 text-base font-semibold text-white">
                    Analyze
                  </div>
                </div>

                <div className="text-[8px] font-medium uppercase tracking-[0.16em] text-cyan-300/80">
                  ↗ Growth
                </div>
              </div>

              <p className="mt-3 max-w-[450px] text-[10px] leading-5 text-white/40">
                A connected digital system built for visibility, performance
                and customer growth.
              </p>

              {/* Metrics */}
              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {[
                  {
                    title: "Website",
                    number: "01",
                    value: "Fast",
                    sub: "Responsive",
                    width: "82%",
                  },
                  {
                    title: "SEO",
                    number: "02",
                    value: "Visible",
                    sub: "Search Ready",
                    width: "74%",
                  },
                  {
                    title: "Ads",
                    number: "03",
                    value: "Targeted",
                    sub: "Meta + Google",
                    width: "88%",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="min-w-0 rounded-xl border border-white/[0.07] bg-[#10161c] p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[7px] uppercase tracking-[0.16em] text-white/30">
                        {item.title}
                      </span>

                      <span className="text-[8px] text-cyan-300/60">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-4 truncate text-sm font-semibold text-white">
                      {item.value}
                    </div>

                    <div className="mt-1 text-[7px] text-white/30">
                      {item.sub}
                    </div>

                    <div className="mt-3 h-px bg-white/[0.06]">
                      <div
                        className="h-px bg-cyan-300/70"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Signals */}
              <div className="mt-3 rounded-xl border border-white/[0.07] bg-[#10161c] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] uppercase tracking-[0.18em] text-white/30">
                    Service Signals
                  </span>

                  <span className="text-[7px] text-emerald-300">
                    4 Active
                  </span>
                </div>

                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["Web", "SEO", "Meta Ads", "Google Ads"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[7px] text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="mt-3 rounded-xl border border-white/[0.07] bg-[#10161c] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[7px] uppercase tracking-[0.18em] text-white/30">
                      Digital System
                    </div>

                    <div className="mt-1 text-[9px] text-white/60">
                      Website + SEO + Paid Ads
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-cyan-300">
                    78%
                  </div>
                </div>

                <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

