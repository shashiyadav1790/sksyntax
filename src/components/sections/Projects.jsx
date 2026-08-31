
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Project Name",
    description:
      "A short description of the project, the problem it solved, and the experience we created.",
    href: "/projects",
  },
  {
    number: "02",
    category: "Web Development",
    title: "Project Name",
    description:
      "A short description of the project, highlighting its key features and business value.",
    href: "/projects",
  },
  {
    number: "03",
    category: "SEO",
    title: "Project Name",
    description:
      "A short description of the project and the growth or visibility challenge it addressed.",
    href: "/projects",
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-24 sm:py-32">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-[15%] top-[20%] -z-0 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] right-[10%] -z-0 h-[360px] w-[360px] rounded-full bg-blue-600/[0.05] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div className="max-w-2xl">

            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 transition-colors duration-500 hover:text-cyan-300 sm:text-sm">
              Selected Work
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
              Work that speaks
              <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                {" "}for itself.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Explore some of the digital experiences and solutions created
              by SKSyntax.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/60 transition-all duration-300 hover:text-white"
          >
            <span>View all projects</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
              →
            </span>
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3">

          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.04] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_70px_rgba(0,0,0,0.35)]"
            >
              {/* Card Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Project Preview */}
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/[0.06] bg-white/[0.02]">

                {/* Preview Gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.035] via-transparent to-indigo-500/[0.05] opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Grid Detail */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.035] transition-opacity duration-500 group-hover:opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <span className="relative z-10 text-xs font-medium uppercase tracking-[0.2em] text-white/20 transition-all duration-500 group-hover:text-cyan-300/50">
                  Project Preview
                </span>

                {/* Preview Accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-700 group-hover:w-full"
                />
              </div>

              {/* Project Info */}
              <div className="relative p-6 sm:p-8">

                <div className="flex items-center justify-between">

                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400/75 transition-colors duration-300 group-hover:text-cyan-300">
                    {project.category}
                  </span>

                  <span className="text-xs font-medium tracking-wider text-white/20 transition-colors duration-300 group-hover:text-white/35">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-white transition-transform duration-300 group-hover:translate-x-1">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/50 sm:text-base">
                  {project.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-all duration-300 group-hover:text-cyan-300">
                  <span>View project</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>

              {/* Bottom Accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500 group-hover:w-24 sm:left-8"
              />
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

