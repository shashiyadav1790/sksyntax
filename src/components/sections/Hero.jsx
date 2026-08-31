
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#05070a] pt-20">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.10] blur-[120px] animate-pulse sm:h-[460px] sm:w-[460px] sm:blur-[140px] lg:h-[560px] lg:w-[560px] lg:blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-[-80px] top-[18%] -z-10 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.045] blur-[110px] animate-pulse sm:left-[8%] sm:h-[260px] sm:w-[260px] sm:blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-60px] right-[-80px] -z-10 h-[250px] w-[250px] rounded-full bg-indigo-500/[0.05] blur-[120px] animate-pulse sm:bottom-[8%] sm:right-[6%] sm:h-[300px] sm:w-[300px] sm:blur-[140px]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow */}
          <div className="mx-auto mb-7 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 backdrop-blur-xl sm:px-4">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />

            <p className="text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-xs sm:tracking-[0.22em] md:text-sm">
              Web Development · SEO · Paid Advertising
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl sm:leading-[1.04] md:text-6xl lg:text-7xl">
            Everything Your Business
            <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent mt-5">
              Needs to Grow Online.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl px-2 text-sm leading-6 text-white/45 sm:mt-7 sm:px-0 sm:text-base sm:leading-7 lg:max-w-2xl lg:text-lg">
            We build high-performance websites, improve search visibility, and
            run targeted Google & Meta advertising campaigns that drive
            measurable growth.
          </p>

          {/* CTA */}
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 px-2 sm:mt-10 sm:flex-row sm:gap-4 sm:px-0">

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative flex w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-[13px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-400 hover:-translate-y-[2px] hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_rgba(22,130,255,0.18)] sm:w-auto sm:max-w-none sm:px-[20px] sm:py-[11px]"
            >
              {/* Moving Light */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />

              <span className="relative z-10">
                Get Started
              </span>

              {/* Arrow */}
              <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/services"
              className="group relative flex w-full max-w-sm items-center justify-center overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] px-7 py-3 text-[13px] font-semibold text-white/65 backdrop-blur-xl transition-all duration-400 hover:-translate-y-[2px] hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_10px_35px_rgba(34,211,238,0.10)] sm:w-auto sm:max-w-none"
            >
              {/* Moving Light */}
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
          <div className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] text-white/30 sm:mt-11 sm:max-w-none sm:gap-x-8 sm:text-xs md:text-sm">
            <span className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300">
              ✓ Fast Websites
            </span>

            <span className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300">
              ✓ SEO Ready
            </span>

            <span className="transition-all duration-300 hover:-translate-y-0.5 hover:text-white/60">
              ✓ Performance Focused
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

