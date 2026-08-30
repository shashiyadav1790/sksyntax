import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-20">
      <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] px-6 py-20 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px]"
        />

        <p className="text-7xl font-bold tracking-tight text-violet-500 sm:text-9xl">
          404
        </p>

        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          The page youre looking for doesnt exist or may have been moved.
          Lets get you back to somewhere useful.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </main>
  );
}