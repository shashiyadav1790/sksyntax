import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Shyamali Global School",
    description:
      "A modern digital presence designed to showcase the school, its academic offerings, facilities, and key information through a clean and engaging user experience.",
    href: "https://www.shyamaliglobalschool.in/",
    image: "/projects/shyamali.webp",
  },
  {
    number: "02",
    category: "Web Development",
    title: "Flyronex",
    description:
      "A professional business website designed to present the brand and services with a modern interface, clear communication, and a responsive experience across devices.",
    href: "https://www.flyronex.com/",
    image: "/projects/flyronex.webp",
  },
];

export default function Projects() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#0B0E12] py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute left-[8%] top-[12%] h-[380px] w-[380px] rounded-full bg-cyan-400/[0.03] blur-[150px]" />
      <div className="pointer-events-none absolute right-[5%] top-[38%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.025] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80 sm:text-sm">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#F0F4F7] sm:text-5xl">
              Website Development
              <span className="block bg-gradient-to-r from-[#65d9ee] via-[#438cff] to-[#7bb7ff] bg-clip-text text-transparent">
                Built for Growth.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#AEB8C2]/80 sm:text-lg sm:leading-8">
              Explore selected website development projects created by
              SKSyntax with a focus on performance, responsive design,
              user experience, and business growth.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#AEB8C2]/70 transition-all duration-300 hover:text-[#F0F4F7]"
          >
            <span>View all projects</span>
            <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/[0.18] hover:bg-white/[0.035] sm:p-4"
            >
              <div className="relative overflow-hidden rounded-2xl ">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-[#0F141A]">
                  <Image
                    src={project.image}
                    alt={`${project.title} website developed by SKSyntax`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.02] via-transparent to-blue-500/[0.045] opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0E12]/65 to-transparent"
                  />

                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full border border-white/[0.08] bg-[#0B0E12]/65 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50 backdrop-blur-md transition-colors duration-300 group-hover:border-cyan-300/[0.14] group-hover:text-cyan-300/80">
                      SKSyntax Client Project
                    </span>
                  </div>

                  <span className="absolute bottom-0 left-0 z-10 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700 group-hover:w-full" />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/65">
                      {project.category}
                    </span>

                    <span className="font-mono text-xs text-white/25">
                      {project.number}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#F0F4F7] transition-colors duration-300 group-hover:text-cyan-100">
                      {project.title}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-sm text-white/45 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.06] group-hover:text-cyan-200">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#AEB8C2]/75 transition-colors duration-300 group-hover:text-[#AEB8C2] sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="text-xs text-[#AEB8C2]/45">
                      Web Development
                    </span>

                    <span className="text-sm font-medium text-white/55 transition-colors duration-300 group-hover:text-cyan-300">
                      Visit Website ↗
                    </span>
                  </div>
                </div>

                <span className="absolute bottom-0 left-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70 transition-all duration-500 group-hover:w-28 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}