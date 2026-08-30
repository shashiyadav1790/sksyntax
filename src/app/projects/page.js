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
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-20 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Work
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Work that is built with
              <span className="block text-violet-500">
                purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              We create websites, SEO strategies, and digital solutions
              designed around real business goals. Our portfolio will continue
              to grow as we complete new projects.
            </p>
          </div>
        </div>
      </section>

      {/* Current Portfolio Status */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 sm:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Portfolio
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              New projects are on the way.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              We are currently building our portfolio with real client work.
              Rather than showing placeholder projects or made-up results,
              we prefer to share genuine work as it becomes available.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
             <span className="text-black">Start Your Project</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Digital work focused on
              <span className="text-violet-500"> growth.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Every project is approached according to its specific audience,
              objectives, and requirements.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {projectTypes.map((project) => (
              <div
                key={project.number}
                className="border-t border-white/10 pt-6"
              >
                <span className="text-sm font-medium text-violet-400">
                  {project.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                Our Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Build for the
                <span className="text-violet-500"> real world.</span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              Good digital work is not only about how something looks. We
              consider performance, usability, search visibility, responsive
              behavior, and the business objective behind the project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0d0d0d] px-6 py-16 text-center sm:px-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Want your project to be
            <span className="text-violet-500"> next?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us what you are building and what you want to achieve.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
           <span className="text-black">Start a Project</span>
          </Link>
        </div>
      </section>
    </main>
  );
}