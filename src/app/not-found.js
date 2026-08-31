
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 pt-20 text-white">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]"
      />

      <section className="group relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-20 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_20px_90px_rgba(124,58,237,0.12)] sm:px-12">
        {/* Top Gradient Line */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-70 transition-all duration-500 group-hover:w-2/3 group-hover:opacity-100"
        />

        {/* Card Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px] transition-all duration-700 group-hover:bg-violet-600/20"
        />

        <div className="relative">
          <p className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 bg-clip-text text-7xl font-bold tracking-tight text-transparent transition-all duration-500 group-hover:scale-105 sm:text-9xl">
            404
          </p>

          <div className="mx-auto mt-7 h-px w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-24" />

          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 sm:text-lg">
            The page youre looking for doesnt exist or may have been moved.
            Lets get you back to somewhere useful.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-violet-100 hover:shadow-[0_10px_35px_rgba(139,92,246,0.25)]"
            >
              Back to Home
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
