import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Web Development · SEO · Digital Advertising
          </p>

          {/* Main Heading */}
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Build Your Digital Presence.
            <span className="block text-violet-500">
              Grow Your Business.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            High-performance websites, SEO, and result-driven advertising
            solutions for modern businesses ready to grow online.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105 sm:w-auto"
            >
                  <span className="text-black">Explore Services</span>
            
            </Link>

            <Link
              href="/services"
              className="w-full rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500">
            <span>✓ Fast Websites</span>
            <span>✓ SEO ready</span>
            <span>✓ Performance Focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}