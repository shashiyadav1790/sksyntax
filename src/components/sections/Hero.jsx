import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070a] text-white">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[30%] -z-10 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[100px] sm:top-[35%] sm:h-[420px] sm:w-[420px] sm:blur-[130px] lg:top-1/2 lg:h-[560px] lg:w-[560px] lg:-translate-y-1/2 lg:blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[18%] -z-10 h-[180px] w-[180px] rounded-full bg-cyan-400/[0.045] blur-[90px] sm:left-[5%] sm:h-[240px] sm:w-[240px] sm:blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-[220px] w-[220px] rounded-full bg-indigo-500/[0.05] blur-[100px] sm:bottom-[5%] sm:right-[5%] sm:h-[300px] sm:w-[300px] sm:blur-[140px]"
      />

      {/* Hero Container */}
      <div className="mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto w-full max-w-5xl text-center">

          {/* Eyebrow */}
          <div className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5 backdrop-blur-xl sm:mb-8 sm:px-5 sm:py-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />

            <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-xs sm:tracking-[0.2em] md:text-sm">
              Web Development · SEO · Paid Advertising
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto w-full text-[clamp(27px,8.2vw,42px)] font-bold leading-[1.05] tracking-[-0.045em] sm:max-w-3xl sm:text-6xl sm:leading-[1.02] lg:max-w-5xl lg:text-7xl">

            <span className="block whitespace-nowrap">
              Everything Your Business
            </span>

            <span className="mt-3 block whitespace-nowrap bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent sm:mt-4">
              Needs to Grow Online.
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[340px] text-[14px] leading-6 text-white/45 sm:mt-7 sm:max-w-2xl sm:text-base sm:leading-7 lg:mt-8 lg:text-lg lg:leading-8">
            We build high-performance websites, improve search visibility,
            and run targeted Google & Meta advertising campaigns that drive
            measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="mx-auto mt-8 flex w-full max-w-[340px] flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">

            {/* Primary */}
            <Link
              href="/contact"
              className="group relative flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_rgba(22,130,255,0.18)] sm:w-auto sm:px-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">
                Get Started
              </span>

              <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary */}
            <Link
              href="/services"
              className="group relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] px-6 text-sm font-semibold text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white sm:w-auto sm:px-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">
                Explore Services
              </span>
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mx-auto mt-8 flex max-w-[340px] flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-[10px] text-white/30 sm:mt-10 sm:max-w-none sm:gap-x-8 sm:text-xs md:text-sm">
            <span className="whitespace-nowrap transition-colors duration-300 hover:text-cyan-300">
              ✓ Fast Websites
            </span>

            <span className="whitespace-nowrap transition-colors duration-300 hover:text-cyan-300">
              ✓ SEO Ready
            </span>

            <span className="whitespace-nowrap transition-colors duration-300 hover:text-white/60">
              ✓ Performance Focused
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}