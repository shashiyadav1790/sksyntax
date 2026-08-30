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
    <section className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Questions,
            <span className="text-violet-500"> answered.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Everything you need to know before starting your project with
            SKSyntax.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-medium sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-2xl text-zinc-500 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-10">
                    <p className="leading-7 text-zinc-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}