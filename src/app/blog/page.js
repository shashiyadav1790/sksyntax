import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog | Website Development, SEO & Digital Growth | SKSyntax",
  description:
    "Read practical insights from SKSyntax on website development, SEO, Meta Ads, Google Ads, and digital growth for businesses building a stronger online presence.",
  alternates: {
    canonical: "https://www.sksyntax.com/blog",
  },
  openGraph: {
    title: "Blog | Website Development, SEO & Digital Growth | SKSyntax",
    description:
      "Read practical insights from SKSyntax on website development, SEO, Meta Ads, Google Ads, and digital growth for businesses building a stronger online presence.",
    url: "https://www.sksyntax.com/blog",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-white">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[28%] h-[320px] w-[320px] rounded-full bg-cyan-400/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-160px] left-[-120px] h-[360px] w-[360px] rounded-full bg-indigo-500/[0.035] blur-[150px]"
      />

      {/* Hero */}
      <section className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 sm:text-sm">
              SKSyntax Insights
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ideas to build,
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                optimize & grow.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Practical insights on website development, SEO, paid advertising,
              and digital growth to help businesses build a stronger online
              presence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          {/* Section Intro */}
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/25">
                Latest Articles
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                Practical knowledge for
                <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  {" "}
                  digital growth.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/35">
              Straightforward guides covering the digital services and
              strategies that matter to growing businesses.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
              >
                {/* Card Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-70px] top-[-70px] h-44 w-44 rounded-full bg-cyan-400/[0.05] opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Top Accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
                  {/* Meta */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.035] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-400/80 sm:text-xs">
                      {blog.category}
                    </span>

                    <time
                      dateTime={blog.date}
                      className="shrink-0 text-xs text-white/25"
                    >
                      {new Date(blog.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  {/* Content */}
                  <h2 className="mt-7 text-2xl font-semibold leading-[1.18] tracking-[-0.025em] text-white">
                    {blog.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50">
                    {blog.description}
                  </p>

                  {/* Read Article */}
                  <div className="mt-auto pt-8">
                    <Link
                      href={`/blog/${blog.slug}`}
                      aria-label={`Read ${blog.title}`}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors duration-300 hover:text-cyan-300"
                    >
                      <span>Read article</span>

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Bottom Accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-24 sm:left-7"
                />
              </article>
            ))}
          </div>

          {/* Bottom SEO Context */}
          <div className="mt-16 border-t border-white/[0.06] pt-10 sm:mt-20 sm:pt-12">
            <div className="max-w-3xl">
              <p className="text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                The SKSyntax blog covers practical topics around website
                development, search engine optimization, Meta Ads, Google Ads,
                and digital growth. Our articles are written to help business
                owners understand digital marketing decisions and build a
                stronger online presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}