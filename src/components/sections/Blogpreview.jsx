import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPreview() {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section
      aria-labelledby="blog-preview-heading"
      className="relative overflow-hidden bg-[#05070a] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/[0.045] blur-[150px]"
      />

      {/* Subtle Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(53,231,255,0.8)]"
              />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                SKSyntax Insights
              </span>
            </div>

            <h2
              id="blog-preview-heading"
              className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl xl:text-[56px]"
            >
              Ideas that help your{" "}
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                digital presence grow.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Practical insights on website development, SEO, Meta Ads,
              Google Ads, and the strategies that help businesses build a
              stronger online presence.
            </p>
          </div>

          {/* Desktop View All */}
          <Link
            href="/blog"
            className="group hidden shrink-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.05] lg:inline-flex"
          >
            <span>View all articles</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Articles */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {featuredBlogs.map((blog, index) => (
            <article
              key={blog.slug}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Card Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/[0.055] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top Gradient Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex h-full flex-col p-6 sm:p-7">
                {/* Number + Category */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium tracking-[0.16em] text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.045] px-3 py-1.5 text-[11px] font-medium text-cyan-300/90">
                    {blog.category}
                  </span>
                </div>

                {/* Divider */}
                <div className="mt-6 h-px bg-white/[0.06]" />

                {/* Article Content */}
                <div className="mt-7 flex-1">
                  <h3 className="text-xl font-semibold leading-8 tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-[22px]">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {blog.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <time
                    dateTime={blog.date}
                    className="text-xs text-zinc-500"
                  >
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>

                  <Link
                    href={`/blog/${blog.slug}`}
                    aria-label={`Read ${blog.title}`}
                    className="group/read inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span>Read article</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/read:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/60 via-blue-500/50 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/blog"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.05]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[320%]"
            />

            <span className="relative">View all articles</span>

            <span
              aria-hidden="true"
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}