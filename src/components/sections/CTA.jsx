
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] px-5 py-14 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-12 sm:py-20">

          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-[100px] animate-pulse"
          />

          {/* Cyan Glow */}
          <div
            aria-hidden="true"
            className="absolute left-[8%] bottom-[-80px] -z-0 h-52 w-52 rounded-full bg-cyan-400/[0.045] blur-[100px]"
          />

          {/* Indigo Glow */}
          <div
            aria-hidden="true"
            className="absolute right-[5%] top-[-70px] -z-0 h-56 w-56 rounded-full bg-indigo-500/[0.05] blur-[110px]"
          />

          <div className="relative z-10">

            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 transition-colors duration-500 hover:text-cyan-300 sm:text-sm">
              Lets Work Together
            </p>

            {/* Heading */}
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ready to build something
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}better?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Tell us about your business, your goals, and what you want to
              build. Lets create a digital presence that works for you.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-400 hover:-translate-y-[2px] hover:border-cyan-400/30 hover:bg-white/[0.10] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_rgba(22,130,255,0.18)]"
              >
                {/* Moving Light */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">
                  Start a Project
                </span>

                {/* Arrow */}
                <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[11px] text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

