import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Performance",
    description:
      "We care about building digital experiences that feel fast, responsive, and reliable.",
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "Every project should have a clear purpose, understandable messaging, and an intuitive user experience.",
  },
  {
    number: "03",
    title: "Growth",
    description:
      "Web development, SEO, and paid advertising should work together around meaningful business goals.",
  },
];

const services = [
  "Website Development",
  "SEO",
  "Meta Ads",
  "Google Ads",
];

export const metadata = {
  title: "About SKSyntax | Web Development, SEO & Digital Growth",
  description:
    "Learn more about SKSyntax, our approach to website development, SEO, and paid advertising.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-20 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              About SKSyntax
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building digital experiences
              <span className="block text-violet-500">
                that move businesses forward.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              SKSyntax helps businesses build a stronger online presence
              through modern websites, search engine optimization, and paid
              advertising.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              More than just
              <span className="text-violet-500"> a website.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              SKSyntax is focused on helping businesses create a professional
              and effective digital presence.
            </p>

            <p>
              A website should not only look good. It should communicate what
              a business offers, provide a smooth experience for visitors, and
              create a clear path toward meaningful action.
            </p>

            <p>
              Thats why our approach combines development, search visibility,
              and digital advertising instead of treating them as completely
              separate pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Principles
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              How we approach
              <span className="text-violet-500"> our work.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.number}
                className="border-t border-white/10 pt-6"
              >
                <span className="text-sm font-medium text-violet-400">
                  {value.number}
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              One digital partner.
              <span className="block text-violet-500">
                Multiple capabilities.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-white/10 bg-[#0d0d0d] px-6 py-6"
              >
                <span className="text-lg font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-white transition-colors hover:text-violet-400"
            >
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0d0d0d] px-6 py-16 text-center sm:px-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Lets build something
            <span className="text-violet-500"> meaningful.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Have an idea, a business, or a project that needs a stronger
            digital presence?
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
           <span className="text-black">Get in Touch</span>
          </Link>
        </div>
      </section>
    </main>
  );
}