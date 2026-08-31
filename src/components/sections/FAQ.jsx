
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does SKSyntax provide?",
    answer:
      "SKSyntax provides website development, SEO, Meta Ads, and Google Ads solutions for businesses looking to build and grow their online presence.",
  },
  {
    question: "Can you build a completely custom website?",
    answer:
      "Yes. We build custom websites based on your business goals, audience, content, functionality, and brand requirements.",
  },
  {
    question: "Are SKSyntax websites mobile responsive?",
    answer:
      "Yes. Websites are designed and developed to provide a consistent experience across mobile phones, tablets, laptops, and desktop devices.",
  },
  {
    question: "Do you provide SEO with website development?",
    answer:
      "Yes. Websites can be developed with a strong technical SEO foundation, including proper structure, metadata, performance considerations, and search-friendly content architecture.",
  },
  {
    question: "Do you manage both Meta Ads and Google Ads?",
    answer:
      "Yes. SKSyntax can help businesses with both Meta advertising across Facebook and Instagram and Google advertising campaigns.",
  },
  {
    question: "How do I get started with SKSyntax?",
    answer:
      "You can contact SKSyntax through the enquiry form and share your business requirements. We can then discuss your goals, requirements, and the right approach for your project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070a] py-24 sm:py-32">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[35%] -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/[0.055] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-[-100px] top-[10%] -z-0 h-[280px] w-[280px] rounded-full bg-cyan-400/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] right-[-80px] -z-0 h-[300px] w-[300px] rounded-full bg-indigo-500/[0.04] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/90 transition-colors duration-500 hover:text-cyan-300 sm:text-sm">
            FAQ
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            Questions,
            <span className="bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
              {" "}answered.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            Everything you need to know before starting your project with
            SKSyntax.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:mt-14">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-white/[0.06] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`group flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-all duration-300 sm:px-7 sm:py-6 ${
                    isOpen
                      ? "bg-white/[0.035]"
                      : "hover:bg-white/[0.025]"
                  }`}
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-300 sm:text-base lg:text-lg ${
                      isOpen
                        ? "text-white"
                        : "text-white/65 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus Icon */}
                  <span
                    aria-hidden="true"
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.10)]"
                        : "border-white/[0.08] bg-white/[0.025] text-white/35 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                    }`}
                  >
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pr-16 sm:px-7 sm:pb-7 sm:pr-20">
                      <p className="text-sm leading-7 text-white/40 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

