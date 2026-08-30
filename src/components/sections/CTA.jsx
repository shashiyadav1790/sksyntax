import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]"
          />

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Lets Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ready to build something
              <span className="text-violet-500"> better?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Tell us about your business, your goals, and what you want to
              build. Lets create a digital presence that works for you.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
               <span className="text-black">Start a Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}