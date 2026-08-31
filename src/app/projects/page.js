import Link from "next/link";

const projectTypes = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites built around a business's goals, audience, and digital presence.",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Search-focused improvements designed to create stronger technical foundations and organic visibility.",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description:
      "Strategy-focused campaigns across Meta and Google designed around audience, intent, and business objectives.",
  },
];

export const metadata = {
  title: "Projects & Portfolio",
  description:
    "Explore selected website development, SEO, and digital marketing work from SKSyntax. New projects will be added as they are completed.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | SKSyntax",
    description:
      "Explore selected website development, SEO, and digital marketing work from SKSyntax.",
    url: "https://sksyntax.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#05070a] pt-20 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 -z-0 h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[140px] animate-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute left-[8%] top-[40%] -z-0 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.035] blur-[120px] animate-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-[5%] -z-0 h-[280px] w-[280px] rounded-full bg-indigo-500/[0.045] blur-[130px] animate-pulse"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
                Our Work
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-balance text-5xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Work that is built with
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                purpose.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              We create websites, SEO strategies, and digital solutions
              designed around real business goals. Our portfolio will continue
              to grow as we complete new projects.
            </p>
          </div>
        </div>
      </section>

      {/* Current Portfolio Status */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-0 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_30px_90px_rgba(22,130,255,0.08)] sm:p-12">
            {/* Card Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.055] blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/[0.09]"
            />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-cyan-400/10 bg-cyan-400/[0.045] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                Portfolio
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                New projects are on the way.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                We are currently building our portfolio with real client work.
                Rather than showing placeholder projects or made-up results,
                we prefer to share genuine work as it becomes available.
              </p>

              <Link
                href="/contact"
                className="group/button relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-indigo-500/90 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_12px_45px_rgba(34,211,238,0.25)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent transition-transform duration-700 group-hover/button:translate-x-full"
                />

                <span className="relative z-10">
                  Start Your Project
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Digital work focused on
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                growth.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg">
              Every project is approached according to its specific audience,
              objectives, and requirements.
            </p>
          </div>

          {/* Project Types */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {projectTypes.map((project) => (
              <div
                key={project.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-400 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(22,130,255,0.07)] sm:p-8"
              >
                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white/25">
                      {project.number}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] text-sm text-white/30 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.06] group-hover:text-cyan-300">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/40">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Our Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Build for the
                <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  real world.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Good digital work is not only about how something looks. We
              consider performance, usability, search visibility, responsive
              behavior, and the business objective behind the project.
            </p>
          </div>

          {/* Approach Accent */}
          <div className="mt-14 h-px w-full overflow-hidden bg-white/[0.06]">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/15 sm:px-12 sm:py-20">
            {/* Background Glows */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[100px] transition-all duration-500 group-hover:bg-cyan-400/[0.10]"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/[0.06] blur-[90px]"
            />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Want your project to be
                <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                  next?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                Tell us what you are building and what you want to achieve.
              </p>

              <Link
                href="/contact"
                className="group/button relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-indigo-500/90 px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_12px_45px_rgba(34,211,238,0.25)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent transition-transform duration-700 group-hover/button:translate-x-full"
                />

                <span className="relative z-10">
                  Start a Project
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}