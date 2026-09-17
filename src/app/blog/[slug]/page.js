import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | SKSyntax",
      description: "The requested SKSyntax blog article could not be found.",
    };
  }

  return {
    title: `${blog.title} | SKSyntax`,
    description: blog.description,
    alternates: {
      canonical: `https://www.sksyntax.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | SKSyntax`,
      description: blog.description,
      url: `https://www.sksyntax.com/blog/${blog.slug}`,
      siteName: "SKSyntax",
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-140px] top-[30%] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.035] blur-[160px]"
      />

      {/* =========================================================
          ARTICLE
      ========================================================= */}

      <article className="relative z-10">
        {/* =======================================================
            ARTICLE HERO
        ======================================================= */}

        <header className="relative border-b border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24">
            {/* Back */}

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/35 transition-colors duration-300 hover:text-cyan-300"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>

              <span>Back to blog</span>
            </Link>

            {/* Category */}

            <div className="mt-10">
              <span className="inline-flex items-center rounded-full border border-cyan-400/10 bg-cyan-400/[0.035] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/80 sm:text-xs">
                {blog.category}
              </span>
            </div>

            {/* Title */}

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/45 sm:text-lg sm:leading-8">
              {blog.description}
            </p>

            {/* Meta */}

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/30">
              <span>
                By{" "}
                <span className="font-medium text-white/50">
                  {blog.author}
                </span>
              </span>

              <span
                aria-hidden="true"
                className="text-white/15"
              >
                /
              </span>

              <time dateTime={blog.date}>{formattedDate}</time>

              <span
                aria-hidden="true"
                className="text-white/15"
              >
                /
              </span>

              <span>SKSyntax Insights</span>
            </div>
          </div>
        </header>

        {/* =======================================================
            ARTICLE CONTENT
        ======================================================= */}

        <section className="relative">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14">
              {/* =================================================
                  MAIN COLUMN
              ================================================= */}

              <div className="min-w-0">
                {/* =================================================
                    MOBILE / TABLET ARTICLE TOC
                ================================================= */}

                <div className="mb-8 lg:hidden">
                  <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl">
                    <div className="border-b border-white/[0.06] px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.04] text-xs text-cyan-400/80">
                          ≡
                        </span>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
                            Navigation
                          </p>

                          <p className="mt-0.5 text-sm font-medium text-white/70">
                            In this article
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Scroll */}

                    <nav
                      aria-label="Article sections"
                      className="flex gap-2 overflow-x-auto p-3 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                      {blog.sections.map((section, index) => (
                        <a
                          key={`${section.heading}-mobile-${index}`}
                          href={`#section-${index}`}
                          className="group flex min-w-max items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 text-xs text-white/40 transition-all duration-300 hover:border-cyan-400/15 hover:bg-cyan-400/[0.035] hover:text-cyan-300"
                        >
                          <span className="text-[10px] font-semibold tracking-[0.12em] text-white/20 group-hover:text-cyan-400/60">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{section.heading}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* =================================================
                    ARTICLE CARD
                ================================================= */}

                <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_25px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                  {/* Content Glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.035] blur-[120px]"
                  />

                  <div className="relative z-10 p-6 sm:p-10 lg:p-12">
                    {/* Article Sections */}

                    <div className="space-y-14 sm:space-y-16">
                      {blog.sections.map((section, index) => (
                        <section
                          id={`section-${index}`}
                          key={`${section.heading}-${index}`}
                          className="scroll-mt-28"
                        >
                          {/* Section Number */}

                          <div className="flex items-center gap-4">
                            <span
                              aria-hidden="true"
                              className="text-[11px] font-semibold tracking-[0.18em] text-cyan-400/50"
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                              aria-hidden="true"
                              className="h-px w-10 bg-gradient-to-r from-cyan-400/30 to-transparent"
                            />
                          </div>

                          {/* Heading */}

                          <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                            {section.heading}
                          </h2>

                          {/* Paragraphs */}

                          <div className="mt-6 space-y-5">
                            {section.paragraphs.map(
                              (paragraph, paragraphIndex) => (
                                <p
                                  key={paragraphIndex}
                                  className="text-base leading-8 text-white/55 sm:text-[17px] sm:leading-8"
                                >
                                  {paragraph}
                                </p>
                              )
                            )}
                          </div>
                        </section>
                      ))}
                    </div>

                    {/* =================================================
                        CTA
                    ================================================= */}

                    {blog.cta && (
                      <div className="relative mt-16 overflow-hidden rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-6 sm:mt-20 sm:p-8">
                        {/* CTA Glow */}

                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-blue-500/[0.08] blur-[90px]"
                        />

                        <div className="relative z-10">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400/70 sm:text-xs">
                            Take the next step
                          </span>

                          <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                            {blog.cta.title}
                          </h2>

                          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                            {blog.cta.description}
                          </p>

                          <Link
                            href={blog.cta.href}
                            className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-300/20 bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(53,231,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(53,231,255,0.20)]"
                          >
                            {/* Shine */}

                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-20deg] bg-white/20 blur-md transition-all duration-700 group-hover:left-[130%]"
                            />

                            <span className="relative z-10">
                              {blog.cta.text}
                            </span>

                            <span
                              aria-hidden="true"
                              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* =================================================
                    BOTTOM NAVIGATION
                ================================================= */}

                <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/35 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    >
                      ←
                    </span>

                    View all articles
                  </Link>

                  <span className="text-xs text-white/20">
                    SKSyntax Insights
                  </span>
                </div>
              </div>

              {/* =================================================
                  DESKTOP SIDEBAR
              ================================================= */}

              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-xl">
                    {/* Sidebar Glow */}

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-60px] top-[-60px] h-32 w-32 rounded-full bg-cyan-400/[0.035] blur-[60px]"
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.04] text-xs text-cyan-400/80">
                          ≡
                        </span>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
                            Navigation
                          </p>

                          <p className="mt-0.5 text-sm font-medium text-white/70">
                            In this article
                          </p>
                        </div>
                      </div>

                      <nav
                        aria-label="Article sections"
                        className="mt-5 space-y-1"
                      >
                        {blog.sections.map((section, index) => (
                          <a
                            key={`${section.heading}-desktop-${index}`}
                            href={`#section-${index}`}
                            className="group flex gap-3 rounded-lg px-2 py-2.5 text-xs leading-5 text-white/35 transition-all duration-300 hover:bg-white/[0.035] hover:text-cyan-300"
                          >
                            <span className="shrink-0 font-medium text-white/15 transition-colors duration-300 group-hover:text-cyan-400/60">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span>{section.heading}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}