import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#0B0E12]
        py-24
        text-white
        sm:py-32
      "
    >
      {/* Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-120px]
          h-[360px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[150px]
          motion-safe:animate-[auroraPulse_9s_ease-in-out_infinite]
        "
      />

      {/* Cyan Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-[5%]
          h-56
          w-56
          rounded-full
          bg-cyan-400/[0.03]
          blur-[110px]
          motion-safe:animate-[energyLeft_10s_ease-in-out_infinite]
        "
      />

      {/* Blue Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[3%]
          top-[-80px]
          h-60
          w-60
          rounded-full
          bg-blue-500/[0.03]
          blur-[120px]
          motion-safe:animate-[energyRight_11s_ease-in-out_infinite]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Glass Container */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            px-5
            py-14
            text-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.3)]
            backdrop-blur-xl
            sm:px-12
            sm:py-20
          "
        >
          {/* Top Gradient Line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-[55%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400/70
              to-transparent
            "
          />

          {/* Inner Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-120px]
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.035]
              blur-[100px]
              motion-safe:animate-pulse
            "
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="
                  relative
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.75)]
                  motion-safe:animate-pulse
                "
              />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80 sm:text-sm">
                Let&apos;s Work Together
              </p>
            </div>

            {/* Heading */}
            <h2
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#F0F4F7]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Ready to grow your
              <span
                className="
                  bg-gradient-to-r
                  from-[#65d9ee]
                  via-[#438cff]
                  to-[#7bb7ff]
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                business online?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#AEB8C2]/65 sm:text-lg sm:leading-8">
              Tell us about your business, your goals, and what you want to
              build. SKSyntax can help with website development, SEO, Meta Ads,
              and Google Ads to build a stronger digital presence.
            </p>

            {/* CTA */}
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
      Start a Project
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

          {/* Bottom Accent */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-[35%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-500/50
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}