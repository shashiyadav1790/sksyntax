import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070a] text-white">
      {/* Background Glow */}
     {/* ================= PREMIUM NEURAL BACKGROUND ================= */}

<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
>
  {/* Deep background */}
  <div className="absolute inset-0 bg-[#03050a]" />

  {/* Aurora atmosphere */}
  <div
    className="
      absolute
      left-1/2
      top-[42%]
      h-[520px]
      w-[520px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-blue-600/[0.07]
      blur-[150px]
      animate-[auroraPulse_8s_ease-in-out_infinite]
      sm:h-[700px]
      sm:w-[700px]
    "
  />

  {/* Cyan energy source */}
  <div
    className="
      absolute
      -left-[15%]
      top-[18%]
      h-[380px]
      w-[380px]
      rounded-full
      bg-cyan-400/[0.08]
      blur-[120px]
      animate-[energyLeft_10s_ease-in-out_infinite]
      sm:h-[500px]
      sm:w-[500px]
    "
  />

  {/* Violet energy source */}
  <div
    className="
      absolute
      -right-[15%]
      top-[25%]
      h-[400px]
      w-[400px]
      rounded-full
      bg-violet-500/[0.08]
      blur-[130px]
      animate-[energyRight_12s_ease-in-out_infinite]
      sm:h-[520px]
      sm:w-[520px]
    "
  />

  {/* ================= NEURAL WAVES ================= */}

  <svg
    className="
      absolute
      bottom-[-2%]
      left-[-15%]
      h-[58%]
      w-[130%]
      opacity-80
      sm:h-[65%]
    "
    viewBox="0 0 1600 700"
    fill="none"
    preserveAspectRatio="none"
  >
    {/* Cyan primary wave */}
    <path
      d="M-200 500
         C100 220 250 700 520 410
         C760 150 850 180 1060 390
         C1270 600 1390 500 1800 170"
      stroke="rgba(34,211,238,0.55)"
      strokeWidth="2"
      className="neural-wave neural-wave-1"
    />

    {/* Cyan secondary wave */}
    <path
      d="M-200 530
         C100 250 260 730 540 440
         C780 180 880 210 1080 420
         C1300 630 1430 520 1800 210"
      stroke="rgba(56,189,248,0.22)"
      strokeWidth="1"
      className="neural-wave neural-wave-2"
    />

    {/* Blue secondary wave */}
    <path
      d="M-200 570
         C130 300 280 750 560 470
         C790 220 900 240 1100 450
         C1320 660 1470 540 1800 250"
      stroke="rgba(59,130,246,0.18)"
      strokeWidth="1"
      className="neural-wave neural-wave-3"
    />

    {/* Violet primary wave */}
    <path
      d="M-200 650
         C120 390 300 730 580 520
         C820 340 930 250 1140 450
         C1320 620 1450 560 1800 300"
      stroke="rgba(139,92,246,0.48)"
      strokeWidth="2"
      className="neural-wave neural-wave-purple"
    />

    {/* Violet secondary */}
    <path
      d="M-200 680
         C120 420 310 760 600 550
         C830 370 950 280 1160 480
         C1350 650 1480 590 1800 340"
      stroke="rgba(124,58,237,0.20)"
      strokeWidth="1"
      className="neural-wave neural-wave-purple-2"
    />
  </svg>

  {/* ================= MOVING ENERGY LINE ================= */}

  <div
    className="
      absolute
      left-1/2
      top-[52%]
      h-px
      w-[75%]
      -translate-x-1/2
      bg-gradient-to-r
      from-transparent
      via-cyan-300/60
      to-transparent
      blur-[1px]
      animate-[energyLine_5s_ease-in-out_infinite]
    "
  />

  {/* ================= LIGHT CORE ================= */}

  <div
    className="
      absolute
      left-1/2
      top-[52%]
      h-2
      w-2
      -translate-x-1/2
      rounded-full
      bg-cyan-300
      shadow-[0_0_20px_8px_rgba(34,211,238,0.25)]
      animate-[corePulse_4s_ease-in-out_infinite]
    "
  />

  {/* ================= PARTICLES ================= */}

  <span className="hero-particle hp-1" />
  <span className="hero-particle hp-2" />
  <span className="hero-particle hp-3" />
  <span className="hero-particle hp-4" />
  <span className="hero-particle hp-5" />
  <span className="hero-particle hp-6" />
  <span className="hero-particle hp-7" />
  <span className="hero-particle hp-8" />

  {/* ================= STAR STREAKS ================= */}

  <span className="hero-streak hs-1" />
  <span className="hero-streak hs-2" />
  <span className="hero-streak hs-3" />

  {/* ================= PERSPECTIVE GRID ================= */}

  <div
    className="
      absolute
      bottom-[-20%]
      left-1/2
      h-[48%]
      w-[140%]
      -translate-x-1/2
      rotate-x-[65deg]
      opacity-[0.16]
      [background-image:linear-gradient(rgba(56,189,248,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.22)_1px,transparent_1px)]
      [background-size:48px_48px]
      [mask-image:linear-gradient(to_bottom,transparent,black_35%,transparent)]
    "
  />

  {/* Bottom fade */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      h-[30%]
      bg-gradient-to-t
      from-[#03050a]
      via-[#03050a]/60
      to-transparent
    "
  />
</div>

      {/* Hero Container */}
      <div className="mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-7xl items-center px-5 pb-5 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto w-full max-w-5xl text-center ">

          {/* Eyebrow */}
          <div className="mx-auto mb-6 mt-10 inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5 backdrop-blur-xl sm:mb-8 sm:px-5 sm:py-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />

            <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-xs sm:tracking-[0.2em] md:text-sm">
              Web Development · SEO · Paid Advertising
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-15 mx-auto w-full text-[clamp(27px,8.2vw,42px)] font-bold leading-[1.05] tracking-[-0.045em] sm:max-w-3xl sm:text-6xl sm:leading-[1.02] lg:max-w-5xl lg:text-7xl">

            <span className="block whitespace-nowrap">
              Everything Your Business
            </span>

            <span className="mt-3 block whitespace-nowrap bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent sm:mt-4">
              Needs to Grow Online.
            </span>

          </h1>

          {/* Description */}
<p className="mx-auto mt-30 max-w-[320px] text-center text-[11px] font-medium leading-[1.8] tracking-[0.014em] text-white/55 sm:mt-7 sm:max-w-2xl sm:text-[16px] sm:leading-[1.8] lg:mt-8 lg:max-w-3xl lg:text-[18px] lg:leading-[1.75]">
  We build{" "}
  <span className="font-semibold text-white/85">
    high-performance websites
  </span>
  , boost{" "}
  <span className="font-semibold text-cyan-300/80">
    SEO visibility
  </span>
  , and run targeted{" "}
  <span className="font-semibold text-blue-300/80">
    Google & Meta campaigns
  </span>{" "}
  that drive{" "}
  <span className="font-semibold text-white/85">
    measurable growth.
  </span>
</p>
          {/* CTA Buttons */}
          <div className="mx-auto mt-15 flex w-full max-w-[340px] flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">

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
              className="group mt-5 relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.10] bg-white/[0.025] px-6 text-sm font-semibold text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06] hover:text-white sm:w-auto sm:px-7"
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
          <div className="mx-auto mt-10 flex max-w-[340px] flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-[10px] text-white/30 sm:mt-10 sm:max-w-none sm:gap-x-8 sm:text-xs md:text-sm">
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