"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does SKSyntax provide?",
    answer:
      "SKSyntax provides website development, SEO services, Meta Ads, and Google Ads solutions to help businesses build a stronger online presence, reach the right audience, and grow online.",
  },
  {
    question: "Does SKSyntax build custom websites?",
    answer:
      "Yes. SKSyntax builds custom websites based on your business goals, target audience, content, functionality, and brand requirements. Each website is designed to provide a professional user experience and support business growth.",
  },
  {
    question: "Are SKSyntax websites mobile responsive?",
    answer:
      "Yes. SKSyntax websites are designed and developed to work smoothly across mobile phones, tablets, laptops, and desktop devices, providing a consistent and responsive user experience.",
  },
  {
    question: "Does SKSyntax provide SEO services?",
    answer:
      "Yes. SKSyntax provides SEO services focused on improving search visibility, technical SEO, website structure, metadata, search-friendly content, and long-term organic growth.",
  },
  {
    question: "Does SKSyntax manage Meta Ads and Google Ads?",
    answer:
      "Yes. SKSyntax manages targeted Meta Ads across Facebook and Instagram as well as Google Ads campaigns to help businesses reach relevant audiences, generate leads, and connect with high-intent customers.",
  },
  {
    question: "How can I get started with SKSyntax?",
    answer:
      "You can get started by contacting SKSyntax through the enquiry form. Share your business requirements, goals, and project details, and we can discuss the right website development, SEO, or digital advertising approach for your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#0B0E12]
        py-24
        text-white
        sm:py-32
      "
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.025]
          blur-[150px]
          motion-safe:animate-[auroraPulse_9s_ease-in-out_infinite]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[8%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-400/[0.03]
          blur-[140px]
          motion-safe:animate-[energyLeft_10s_ease-in-out_infinite]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          right-[-100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-500/[0.025]
          blur-[150px]
          motion-safe:animate-[auroraPulse_11s_ease-in-out_infinite_reverse]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="
                relative
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.75)]
                motion-safe:animate-pulse
              "
            />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80 sm:text-sm">
              Frequently Asked Questions
            </p>
          </div>

          {/* Heading */}
          <h2
            id="faq-heading"
            className="
              mt-4
              text-4xl
              font-bold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#F0F4F7]
              sm:text-5xl
            "
          >
            Questions,
            <span
              className="
                bg-gradient-to-r
                from-[#65d9ee]
                via-[#438cff]
                to-[#7bb7ff]
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              answered.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#AEB8C2]/65 sm:text-lg sm:leading-8">
            Find answers about website development, SEO, Meta Ads, Google Ads,
            and working with SKSyntax.
          </p>
        </div>

        {/* FAQ List */}
        <div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_20px_70px_rgba(0,0,0,0.28)]
            backdrop-blur-xl
            sm:mt-14
          "
        >
          {/* Top Gradient Line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              z-20
              h-px
              w-[55%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400/60
              to-transparent
            "
          />

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  relative
                  border-b
                  border-white/[0.06]
                  last:border-b-0
                "
              >
                {/* FAQ Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-5
                    text-left
                    transition-all
                    duration-300
                    sm:px-7
                    sm:py-6
                    ${
                      isOpen
                        ? "bg-white/[0.035]"
                        : "hover:bg-white/[0.025]"
                    }
                  `}
                >
                  {/* Question */}
                  <span
                    className={`
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                      sm:text-base
                      lg:text-lg
                      ${
                        isOpen
                          ? "text-[#F0F4F7]"
                          : "text-[#AEB8C2]/70 group-hover:text-[#F0F4F7]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Plus Icon */}
                  <span
                    aria-hidden="true"
                    className={`
                      relative
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-45 border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.10)]"
                          : "border-white/[0.08] bg-white/[0.025] text-white/35 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                      }
                    `}
                  >
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>

                  {/* Active Indicator */}
                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      bottom-0
                      left-5
                      h-px
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      transition-all
                      duration-500
                      sm:left-7
                      ${
                        isOpen
                          ? "w-16 opacity-100"
                          : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-60"
                      }
                    `}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pr-16 sm:px-7 sm:pb-7 sm:pr-20">
                      <p className="text-sm leading-7 text-[#AEB8C2]/65 sm:text-base">
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