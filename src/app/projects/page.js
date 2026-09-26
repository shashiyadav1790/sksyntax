import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Shyamali Global School",
    description:
      "A modern digital presence designed to showcase the school, its academic offerings, facilities, and key information through a clean and engaging user experience.",
    href: "[https://www.shyamaliglobalschool.in/](https://www.shyamaliglobalschool.in/)",
    image: "/projects/shyamali.webp",
    gradient: "from-cyan-400/20 via-blue-500/10 to-blue-400/20",
  },
  {
    number: "02",
    category: "E-Commerce Concept",
    title: "UrbanNest",
    description:
      "A premium e-commerce concept designed around product collections, category browsing, promotional sections, and a polished responsive shopping experience.",
    image: "/projects/urbannest.webp",
    gradient: "from-blue-400/20 via-cyan-500/10 to-indigo-500/20",
    concept: true,
  },
  {
    number: "03",
    category: "Web Development",
    title: "Flyronex",
    description:
      "A professional business website designed to present the brand and services with a modern interface, clear communication, and a responsive experience across devices.",
    href: "[https://www.flyronex.com/](https://www.flyronex.com/)",
    image: "/projects/flyronex.webp",
    gradient: "from-blue-400/20 via-cyan-500/10 to-indigo-500/20",
  },
  {
    number: "04",
    category: "E-Commerce Concept",
    title: "NexaCart",
    description:
      "A modern e-commerce concept focused on product discovery, clean navigation, responsive shopping experiences, and conversion-friendly interface design.",
    image: "/projects/nexacart.webp",
    gradient: "from-cyan-400/20 via-blue-500/10 to-indigo-500/20",
    concept: true,
  },
];

export const metadata = {
  title: "Projects & Portfolio | SKSyntax",
  description:
    "Explore website development, SEO, and digital marketing projects from SKSyntax.",
  alternates: {
    canonical: "[https://www.sksyntax.com/projects](https://www.sksyntax.com/projects)",
  },
  openGraph: {
    title: "Projects & Portfolio | SKSyntax",
    description:
      "Explore website development, SEO, and digital marketing projects from SKSyntax.",
    url: "[https://www.sksyntax.com/projects](https://www.sksyntax.com/projects)",
    siteName: "SKSyntax",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0E12] pt-20 text-[#F0F4F7]">
      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[150px]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[5%] top-1/3 -z-10 h-[260px] w-[260px] rounded-full bg-blue-500/[0.025] blur-[120px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
                Selected Work
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Digital work built with
              <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#AEB8C2] sm:text-lg">
              Explore selected examples of website development, SEO, and
              digital marketing work created with a focus on design,
              performance, usability, and business goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/35 sm:text-sm">
              <span>✓ Web Development</span>
              <span>✓ SEO</span>
              <span>✓ Digital Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <section className="border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
              Featured Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Work across
              <span className="bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                {" "}
                digital experiences.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-[#AEB8C2] sm:text-lg">
              A selection of website development projects built with a focus
              on design, performance, usability, and the goals of each
              business.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] hover:shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:40px_40px]"
                  />

                  <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-6">
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#0B0E12]/80 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                      <Image
                        src={project.image}
                        alt={`${project.title} website`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <span className="absolute left-6 top-6 z-10 text-xs font-medium tracking-[0.2em] text-white/50">
                    {project.number}
                  </span>

                  <span className="absolute right-6 top-6 z-10 rounded-full border border-white/10 bg-[#0B0E12]/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/55 backdrop-blur-md">
                    {project.concept ? "In Development" : "Live Project"}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#AEB8C2]/75">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Website Development",
                      "Responsive Design",
                      "UI/UX",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-6">
                    <span className="text-xs text-white/25">
                      Live Website
                    </span>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} website`}
                      className="flex items-center gap-2 text-sm font-medium text-white/60 transition-all duration-300 hover:gap-3 hover:text-cyan-300"
                    >
                      View Project
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO NOTE ==================== */}
      <section className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[130px]"
        />

        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
                  PORTFOLIO UPDATES
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  More real projects are
                  <span className="bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                    {" "}
                    comming soon .
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#AEB8C2] sm:text-lg">
                  This portfolio will continue to grow as new projects are
                  completed. More project details, screenshots, and live
                  website links will be added over time.
                </p>
              </div>

              <div className="mt-10">
  <Link
    href="/contact"
    className="
      group
      relative
      inline-flex
      items-center
      gap-2
      overflow-hidden
      rounded-full
      border
      border-white/[0.12]
      bg-[#F0F4F7]
      px-7
      py-3.5
      text-sm
      font-semibold
      text-[#0B0E12]
      shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      transition-all
      duration-300
      hover:-translate-y-[2px]
      hover:border-white/20
      hover:bg-white
      hover:shadow-[0_14px_40px_rgba(56,189,248,0.14)]
      active:translate-y-0
    "
  >
    {/* Moving Light */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-y-0
        -left-1/2
        w-1/2
        -skew-x-12
        bg-gradient-to-r
        from-transparent
        via-cyan-400/20
        to-transparent
        transition-transform
        duration-700
        group-hover:translate-x-[320%]
      "
    />

    <span className="relative z-10 !text-[#0B0E12]">
      Start a Project
    </span>

    {/* Arrow */}
    <span
      className="
        relative
        z-10
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-[#0B0E12]
        text-[11px]
        text-white
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      →
    </span>
  </Link>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES CONNECTION ==================== */}
      <section className="border-t border-white/[0.07] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80 sm:text-sm">
                Build Something New
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                Have a project that
                <span className="block bg-gradient-to-r from-[#65d9ee] to-[#7bb7ff] bg-clip-text text-transparent">
                  belongs here?
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-[#AEB8C2] sm:text-lg">
                Whether you need a new website, better search visibility, or
                digital marketing support, tell us what you are building and
                what you want to achieve.
              </p>

              <div className="mt-10">
               <div className="mt-10">
  <Link
    href="/contact"
    className="
      group
      relative
      inline-flex
      items-center
      gap-2
      overflow-hidden
      rounded-full
      border
      border-white/[0.12]
      bg-[#F0F4F7]
      px-7
      py-3.5
      text-sm
      font-semibold
      text-[#0B0E12]
      shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      transition-all
      duration-300
      hover:-translate-y-[2px]
      hover:border-white/20
      hover:bg-white
      hover:shadow-[0_14px_40px_rgba(56,189,248,0.14)]
      active:translate-y-0
    "
  >
    {/* Moving Light */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-y-0
        -left-1/2
        w-1/2
        -skew-x-12
        bg-gradient-to-r
        from-transparent
        via-cyan-400/20
        to-transparent
        transition-transform
        duration-700
        group-hover:translate-x-[320%]
      "
    />

    <span className="relative z-10 !text-[#0B0E12]">
      Start a Project
    </span>

    {/* Arrow */}
    <span
      className="
        relative
        z-10
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-[#0B0E12]
        text-[11px]
        text-white
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      →
    </span>
  </Link>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}