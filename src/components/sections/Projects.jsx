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
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Work that speaks
              <span className="text-violet-500"> for itself.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Explore some of the digital experiences and solutions created
              by SKSyntax.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm font-semibold text-white transition-colors hover:text-violet-400"
          >
            View all projects →
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Project Preview */}
              <div className="flex aspect-[16/10] items-center justify-center border-b border-white/10 bg-[#111111]">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                  Project Preview
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-violet-400">
                    {project.category}
                  </span>

                  <span className="text-sm text-zinc-600">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <span className="mt-6 inline-block text-sm font-medium text-white transition-colors group-hover:text-violet-400">
                  View project →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}