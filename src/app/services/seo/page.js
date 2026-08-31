
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const seoAreas = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "A technically sound website structure helps search engines crawl, understand, and index your important pages.",
  },
  {
    number: "02",
    title: "On-Page SEO",
    description:
      "We optimize page structure, headings, metadata, internal links, and other on-page elements around relevant search intent.",
  },
  {
    number: "03",
    title: "Content Strategy",
    description:
      "Useful, search-focused content helps your website answer the questions and needs of your target audience.",
  },
  {
    number: "04",
    title: "Performance & UX",
    description:
      "Website speed, responsiveness, accessibility, and a strong user experience contribute to a healthier website.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit",
    description:
      "Understand the current website, technical issues, content, visibility, and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Prioritize opportunities based on your business goals, audience, competition, and relevant search intent.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "Implement technical, on-page, content, internal-linking, and performance improvements.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Monitor performance and continuously refine the strategy based on data and changing search opportunities.",
  },
];

const faqs = [
  {
    question: "What does SEO include?",
    answer:
      "SEO can include technical SEO, on-page optimization, content strategy, internal linking, performance improvements, and other activities based on the website's specific needs.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term process, and the timeline varies depending on factors such as competition, website history, technical condition, content quality, and the search landscape.",
  },
  {
    question: "Can you do SEO for a new website?",
    answer:
      "Yes. Starting SEO during website development can help establish a strong technical, content, and site architecture foundation from the beginning.",
  },
  {
    question: "Do you guarantee Google rankings?",
    answer:
      "No. Search rankings depend on many factors outside any single agency's control. The focus should be on building a technically strong website and a sustainable search strategy.",
  },
  {
    question: "Can SEO and website development work together?",
    answer:
      "Yes. Combining SEO with website development allows technical SEO, site structure, performance, metadata, and user experience to be considered from the beginning instead of being treated as separate tasks.",
  },
];

export const metadata = {
  title: "SEO Services",
  description:
    "SKSyntax provides SEO services focused on technical SEO, on-page optimization, content strategy, website performance, and sustainable organic growth.",
  alternates: {
    canonical: "/services/seo",
  },
  openGraph: {
    title: "SEO Services | SKSyntax",
    description:
      "Build stronger search visibility with technical SEO, on-page optimization, content strategy, and performance-focused improvements.",
    url: "https://sksyntax.com/services/seo",
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function SEOPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-20 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-purple-700/10 blur-[130px]"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={reveal} className="max-w-4xl">
            <motion.p
              variants={reveal}
              className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400 backdrop-blur-sm"
            >
              SEO Services
            </motion.p>

            <motion.h1
              variants={reveal}
              className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Get found by the people
              <span className="block bg-gradient-to-r from-violet-400 via-violet-500 to-purple-400 bg-clip-text text-transparent">
                looking for you.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
            >
              Build a stronger organic presence with a practical SEO strategy
              focused on technical foundations, relevant content, search
              visibility, and sustainable growth.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
              >
                <span className="relative z-10">Discuss Your SEO</span>

                <span className="absolute inset-0 -translate-x-full bg-violet-200 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SEO AREAS */}
      <section className="relative border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[120px]"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative mx-auto max-w-7xl"
        >
          <motion.div variants={reveal} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              What We Focus On
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SEO built on
              <span className="text-violet-500"> strong foundations.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              SEO is more than adding keywords to a page. A healthy search
              strategy combines technical quality, useful content, relevant
              search intent, and a good experience for users.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {seoAreas.map((area) => (
              <motion.div
                key={area.number}
                variants={reveal}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition-all duration-300 hover:border-violet-500/40 hover:bg-[#101010] hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="text-sm font-medium text-violet-400">
                  {area.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {area.description}
                </p>

                <div className="mt-7 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-12" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SEO PROCESS */}
      <section className="relative border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative mx-auto max-w-7xl"
        >
          <motion.div variants={reveal} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our SEO Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Strategy first.
              <span className="text-violet-500"> Then execution.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((step) => (
              <motion.div
                key={step.number}
                variants={reveal}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_20px_70px_rgba(139,92,246,0.10)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-violet-600/10 blur-2xl transition-all duration-500 group-hover:bg-violet-500/20" />

                <span className="relative text-sm font-medium text-violet-400">
                  {step.number}
                </span>

                <h3 className="relative mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="relative mt-3 leading-7 text-zinc-400">
                  {step.description}
                </p>

                <div className="relative mt-7 flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 group-hover:text-violet-400">
                  <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
                  SEO Process
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={reveal} className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              SEO FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Common SEO questions.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Clear answers to common questions about search optimization,
              rankings, timelines, and sustainable organic growth.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
          >
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className={`group ${
                  index !== faqs.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-left text-base font-medium transition-colors duration-300 hover:text-violet-300 sm:px-8 sm:text-lg">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl font-light text-zinc-500 transition-all duration-300 group-hover:border-violet-500/30 group-hover:text-violet-400 group-open:rotate-45 group-open:border-violet-500/40 group-open:bg-violet-500/10"
                  >
                    +
                  </span>
                </summary>

                <div className="px-6 pb-7 sm:px-8">
                  <p className="max-w-3xl leading-7 text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/10 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[130px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-16 text-center shadow-[0_0_80px_rgba(139,92,246,0.08)] sm:px-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-3xl transition-all duration-700 group-hover:bg-violet-500/25" />

            <h2 className="relative text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to grow your
              <span className="block text-violet-500">
                organic presence?
              </span>
            </h2>

            <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Lets understand your website, goals, and search opportunities.
            </p>

            <Link
              href="/contact"
              className="group/button relative mt-10 inline-flex overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              <span className="relative z-10">Start a Conversation</span>

              <span className="absolute inset-0 -translate-x-full bg-violet-200 transition-transform duration-500 group-hover/button:translate-x-0" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

