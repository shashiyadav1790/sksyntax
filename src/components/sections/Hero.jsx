import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070a] text-white">
      {/* =========================================================
          PREMIUM HERO ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#03050a]" />

        {/* Large center light */}
        <div
          className="
            absolute
            left-1/2
            top-[38%]
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.055]
            blur-[120px]
            sm:h-[560px]
            sm:w-[560px]
            sm:blur-[150px]
            lg:h-[720px]
            lg:w-[720px]
            lg:bg-blue-500/[0.055]
          "
        />

        {/* Left ambient light */}
        <div
          className="
            absolute
            -left-[18%]
            top-[18%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-cyan-400/[0.055]
            blur-[130px]
            animate-[energyLeft_12s_ease-in-out_infinite]
            sm:h-[500px]
            sm:w-[500px]
          "
        />

        {/* Right ambient light */}
        <div
          className="
            absolute
            -right-[18%]
            top-[22%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-indigo-500/[0.05]
            blur-[140px]
            animate-[energyRight_14s_ease-in-out_infinite]
            sm:h-[520px]
            sm:w-[520px]
          "
        />

        {/* =====================================================
            SOFT HORIZONTAL LIGHT
        ===================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[47%]
            h-px
            w-[75%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-cyan-300/25
            to-transparent
            blur-[2px]
            sm:w-[65%]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[47%]
            h-[100px]
            w-[55%]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.025]
            blur-[60px]
          "
        />

        {/* =====================================================
            SUBTLE GRID
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:72px_72px]
            [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]
          "
        />

        {/* =====================================================
            PREMIUM ORBITAL SYSTEM
        ===================================================== */}

        {/* Large soft orbit */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[470px]
            w-[470px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-300/[0.035]
            animate-[orbitSlow_28s_linear_infinite]
            sm:h-[640px]
            sm:w-[640px]
            lg:h-[760px]
            lg:w-[760px]
          "
        />

        {/* Large dashed orbit */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[390px]
            w-[390px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-dashed
            border-cyan-300/[0.055]
            animate-[orbitSlow_38s_linear_infinite_reverse]
            sm:h-[530px]
            sm:w-[530px]
            lg:h-[630px]
            lg:w-[630px]
          "
        />

        {/* Inner orbit */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.035]
            animate-[orbitSlow_20s_linear_infinite]
            sm:h-[350px]
            sm:w-[350px]
            lg:h-[430px]
            lg:w-[430px]
          "
        />

        {/* Premium glowing arc */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-t
            border-r
            border-cyan-300/[0.13]
            border-b-transparent
            border-l-transparent
            blur-[0.2px]
            animate-[orbitSlow_18s_linear_infinite]
            sm:h-[680px]
            sm:w-[680px]
            lg:h-[800px]
            lg:w-[800px]
          "
        />

        {/* Secondary indigo arc */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[330px]
            w-[330px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-b
            border-l
            border-indigo-400/[0.10]
            border-t-transparent
            border-r-transparent
            animate-[orbitSlow_15s_linear_infinite_reverse]
            sm:h-[450px]
            sm:w-[450px]
            lg:h-[540px]
            lg:w-[540px]
          "
        />

        {/* Center core */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-2.5
            w-0.5
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-300/70
            shadow-[0_0_14px_4px_rgba(34,211,238,0.16),0_0_40px_8px_rgba(59,130,246,0.08)]
            animate-[corePulse_4s_ease-in-out_infinite]
            sm:h-3
            sm:w-3
            mt-6
          "
        />

        {/* Orbit dots */}
        <span className="hero-orbit-dot hod-1" />
        <span className="hero-orbit-dot hod-2" />
        <span className="hero-orbit-dot hod-3" />
        <span className="hero-orbit-dot hod-4" />
        <span className="hero-orbit-dot hod-5" />
        <span className="hero-orbit-dot hod-6" />

        {/* =====================================================
            VERY SUBTLE WAVE SYSTEM
        ===================================================== */}

        <svg
          aria-hidden="true"
          className="
            absolute
            bottom-[-4%]
            left-[-15%]
            h-[40%]
            w-[130%]
            opacity-35
            sm:h-[48%]
            sm:opacity-45
          "
          viewBox="0 0 1600 700"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-200 520
               C120 250 270 700 530 430
               C760 190 870 180 1080 400
               C1280 610 1430 510 1800 190"
            stroke="rgba(34,211,238,0.35)"
            strokeWidth="1.5"
            className="neural-wave neural-wave-1"
          />

          <path
            d="M-200 590
               C120 330 300 740 570 500
               C820 280 930 250 1130 460
               C1330 650 1470 560 1800 280"
            stroke="rgba(99,102,241,0.25)"
            strokeWidth="1.5"
            className="neural-wave neural-wave-purple"
          />
        </svg>

        {/* =====================================================
            SMALL LIGHT PARTICLES
        ===================================================== */}

        <span className="hero-particle hp-1" />
        <span className="hero-particle hp-2" />
        <span className="hero-particle hp-3" />
        <span className="hero-particle hp-4" />
        <span className="hero-particle hp-5" />
        <span className="hero-particle hp-6" />
        <span className="hero-particle hp-7" />
        <span className="hero-particle hp-8" />
        <span className="hero-particle hp-9" />
        <span className="hero-particle hp-10" />
        <span className="hero-particle hp-11" />
        <span className="hero-particle hp-12" />
        <span className="hero-particle hp-13" />
        <span className="hero-particle hp-14" />
        <span className="hero-particle hp-15" />
        <span className="hero-particle hp-16" />
        <span className="hero-particle hp-17" />
        <span className="hero-particle hp-18" />
        <span className="hero-particle hp-19" />
        <span className="hero-particle hp-20" />
        <span className="hero-particle hp-21" />
        <span className="hero-particle hp-22" />
        <span className="hero-particle hp-23" />
        <span className="hero-particle hp-24" />

        {/* =====================================================
            BOTTOM FADE
        ===================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[35%]
            bg-gradient-to-t
            from-[#03050a]
            via-[#03050a]/75
            to-transparent
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-36
            bg-gradient-to-b
            from-[#03050a]/80
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          mx-auto
          flex
          min-h-[calc(100svh-80px)]
          w-full
          max-w-7xl
          items-center
          px-5
          pb-16
          pt-28
          sm:px-6
          sm:pb-20
          sm:pt-32
          lg:px-8
          lg:pb-24
          lg:pt-36
        "
      >
        <div className="mx-auto w-full max-w-5xl text-center mt-4">

          {/* =====================================================
              EYEBROW
          ===================================================== */}
<div
  className="
    mx-auto
    inline-flex
    max-w-full
    items-center
    gap-2.5
    rounded-full
    border
    border-white/[0.10]
    bg-white/[0.035]
    px-4
    py-2.5
    shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_12px_40px_rgba(0,0,0,0.22)]
    backdrop-blur-2xl
    sm:px-5
    sm:py-3
  "
>
  {/* Dot */}
  <span
    aria-hidden="true"
    className="
      relative
      h-1.5
      w-1.5
      shrink-0
      rounded-full
      bg-cyan-300
      shadow-[0_0_14px_4px_rgba(34,211,238,0.25)]
    "
  />

  {/* Moving Services */}
  <div className="relative max-w-[240px] overflow-hidden sm:max-w-[360px]">
    <div className="hero-eyebrow-track">
      <span>Web Development</span>
      <span>·</span>
      <span>SEO</span>
      <span>·</span>
      <span>Meta Ads</span>
      <span>·</span>
      <span>Google Ads</span>
      <span>·</span>

      {/* Duplicate for seamless loop */}
      <span>Web Development</span>
      <span>·</span>
      <span>SEO</span>
      <span>·</span>
      <span>Meta Ads</span>
      <span>·</span>
      <span>Google Ads</span>
      <span>·</span>
    </div>
  </div>
</div>

          {/* =====================================================
              HEADING
          ===================================================== */}

          <h1
            className="
              mx-auto
              mt-8
            
            
              w-full
              font-bold
              leading-[1.02]
              tracking-[-0.055em]
              sm:mt-10
              sm:max-w-4xl
              lg:max-w-5xl
            "
          >
            {/* Brand */}

            <span className="block">
              <span
                className="
                  inline-block
                  bg-gradient-to-r
                  from-white
                  via-[#b8f3ff]
                  to-[#63b7ff]
                  bg-clip-text
                  text-[clamp(32px,9vw,60px)]
                  font-extrabold
                  tracking-[0.035em]
                  text-transparent
                  drop-shadow-[0_0_30px_rgba(53,231,255,0.16)]
                  mb-1
                "
              >
                SKSyntax
              </span>
            </span>

            {/* Website Development */}

            <span
              className="
                mt-4
                block
                text-[clamp(27px,7.4vw,52px)]
                font-bold
                text-white
                sm:mt-5
                sm:text-6xl
                lg:text-7xl
              "
            >
              Website Development
            </span>

            {/* SEO & Digital Growth */}

            <span
              className="
                mt-2
                
                block
                bg-gradient-to-r
                from-[#35e7ff]
                via-[#438cff]
                to-[#7c5cff]
                bg-clip-text
                text-[clamp(27px,7.4vw,52px)]
                font-bold
                text-transparent
                sm:mt-3
                sm:text-6xl
                lg:text-7xl
              "
            >
              SEO & Digital Growth
            </span>
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <p
            className="
              mx-auto
              mt-10
              max-w-[340px]
              text-center
              text-[12px]
              font-medium
              leading-[1.85]
              tracking-[0.01em]
              text-white/50
              sm:mt-8
              sm:max-w-2xl
              sm:text-[16px]
              sm:leading-[1.8]
              lg:mt-9
              lg:max-w-3xl
              lg:text-[18px]
              lg:leading-[1.75]
            "
          >
            SKSyntax builds{" "}
            <span className="font-semibold text-white/85">
              high-performance websites
            </span>
            , improves{" "}
            <span className="font-semibold text-cyan-300/80">
              SEO visibility
            </span>
            , and runs targeted{" "}
            <span className="font-semibold text-blue-300/80">
              Meta Ads and Google Ads
            </span>{" "}
            campaigns to help businesses{" "}
            <span className="font-semibold text-white/85">
              grow online.
            </span>
          </p>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div
            className="
              mx-auto
              mt-9
              flex
              w-full
              max-w-[350px]
              flex-col
              gap-3
              sm:mt-10
              sm:max-w-none
              sm:flex-row
              sm:items-center
              sm:justify-center
              sm:gap-4
            "
          >
            {/* Primary */}

            <Link
              href="/contact"
              className="
                group
                relative
                flex
                min-h-[54px]
                w-full
                items-center
                justify-center
                gap-2.5
                overflow-hidden
                rounded-full
                border
                border-cyan-300/20
                bg-gradient-to-r
                from-cyan-400/[0.12]
                via-blue-500/[0.10]
                to-indigo-500/[0.10]
                px-7
                text-sm
                font-semibold
                text-white
                shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_10px_40px_rgba(0,120,255,0.10)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300/35
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_50px_rgba(0,140,255,0.18)]
                sm:w-auto
              "
            >
              {/* Shine */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-y-0
                  left-[-60%]
                  w-[45%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.18]
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span className="relative z-10">
                Get Started
              </span>

              <span
                className="
                  relative
                  z-10
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-300
                  to-blue-500
                  text-[11px]
                  text-white
                  shadow-[0_0_18px_rgba(34,211,238,0.18)]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            {/* Secondary */}

            <Link
              href="/services"
              className="
                group
                relative
                flex
                min-h-[54px]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/[0.11]
                bg-white/[0.025]
                px-7
                text-sm
                font-semibold
                text-white/70
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/[0.18]
                hover:bg-white/[0.055]
                hover:text-white
                sm:w-auto
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-y-0
                  left-[-60%]
                  w-[45%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-300/[0.08]
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span className="relative z-10">
                Explore Services
              </span>
            </Link>
          </div>

          {/* =====================================================
              TRUST POINTS
          ===================================================== */}

          <div
            className="
              mx-auto
              mt-9
              flex
              max-w-[360px]
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              border-t
              border-white/[0.06]
              pt-6
              text-[10px]
              font-medium
              text-white/30
              sm:mt-11
              sm:max-w-2xl
              sm:gap-x-8
              sm:pt-7
              sm:text-xs
              md:text-sm
            "
          >
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