"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "+91 8809306328";
const CALL_NUMBER = "+91 8809306328";

const initialForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        error.message ||
          "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const callNumber = CALL_NUMBER.replace(/\s/g, "");

  return (
    <main className="min-h-screen bg-[#05070a] pt-20 text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Ambient Glows */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 -z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[120px] animate-pulse sm:h-[420px] sm:w-[420px] sm:blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="absolute left-[5%] top-[35%] -z-0 h-[180px] w-[180px] rounded-full bg-cyan-400/[0.035] blur-[100px] animate-pulse sm:h-[220px] sm:w-[220px] sm:blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-[3%] -z-0 h-[220px] w-[220px] rounded-full bg-indigo-500/[0.045] blur-[110px] animate-pulse sm:h-[280px] sm:w-[280px] sm:blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl sm:mb-7">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 sm:text-sm sm:tracking-[0.22em]">
                Contact SKSyntax
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-balance text-4xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Let&apos;s build something
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                that matters.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:mt-7 sm:text-lg">
              Tell us about your project, goals, and requirements. We&apos;ll
              explore how SKSyntax can help with website development, SEO, Meta
              Ads, or Google Ads.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT AREA
      ========================================================= */}
      <section className="relative border-t border-white/[0.06] px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-20">
          {/* =====================================================
              LEFT INFO
          ===================================================== */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.25em]">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us about
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                your project.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/45 sm:mt-6 sm:text-base">
              Whether you need a new website, better search visibility, or
              targeted advertising, share a few details and we&apos;ll
              understand how SKSyntax can help.
            </p>

            {/* Info Cards */}
            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {/* Services */}
              <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">
                  Services
                </p>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Website Development · SEO · Meta Ads · Google Ads
                </p>
              </div>

              {/* Response */}
              <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">
                  Response
                </p>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  We&apos;ll review your requirements and get back to you soon.
                </p>
              </div>
            </div>

            {/* =====================================================
                DIRECT CONTACT
            ===================================================== */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hi SKSyntax, I'd like to discuss a project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with SKSyntax on WhatsApp"
                className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-emerald-400/[0.04] hover:shadow-[0_15px_40px_rgba(16,185,129,0.08)] sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.08] text-emerald-300 sm:h-11 sm:w-11">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M20.5 11.5a8.5 8.5 0 0 1-12.57 7.45L3.5 20.5l1.55-4.28A8.5 8.5 0 1 1 20.5 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8.8 8.7c.2-.45.43-.47.78-.48h.3c.2 0 .4.08.5.35l.65 1.55c.08.2.08.4-.05.58l-.4.5c-.12.15-.14.3-.05.47.25.48.63.9 1.08 1.22.48.35 1 .6 1.56.76.18.05.32.02.43-.12l.58-.7c.13-.16.32-.2.5-.12l1.48.7c.2.1.3.25.28.48-.08.72-.35 1.08-.8 1.3-.38.2-.88.24-1.45.08-1.12-.3-2.2-.9-3.1-1.7-.9-.8-1.65-1.78-2.2-2.86-.32-.64-.55-1.35-.1-2.06Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/30">
                    WhatsApp
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white/80">
                    Chat with us
                  </p>
                </div>

                <span className="ml-auto shrink-0 text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-300">
                  →
                </span>
              </a>

              {/* Call */}
              <a
                href={`tel:${callNumber}`}
                aria-label="Call SKSyntax"
                className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04] hover:shadow-[0_15px_40px_rgba(34,211,238,0.08)] sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.08] text-cyan-300 sm:h-11 sm:w-11">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M7.1 4.5 5.6 5.9c-.7.7-.9 1.75-.5 2.67a15.7 15.7 0 0 0 10.33 10.33c.92.4 1.97.2 2.67-.5l1.4-1.5c.55-.55.55-1.45 0-2l-2.2-1.7c-.5-.4-1.2-.35-1.63.15l-.72.84a11.4 11.4 0 0 1-4.1-4.1l.84-.72c.5-.43.55-1.13.15-1.63l-1.7-2.2c-.55-.55-1.45-.55-2 0Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/30">
                    Call
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white/80">
                    Talk to us
                  </p>
                </div>

                <span className="ml-auto shrink-0 text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* =====================================================
              FORM
          ===================================================== */}
          <div className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 lg:p-9 xl:p-10">
            {/* Card Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[100px] transition-opacity duration-500 group-hover:opacity-100"
            />

            {submitted ? (
              <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-2xl text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Thanks for reaching out.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/45 sm:text-base">
                  Your message has been sent successfully. We&apos;ll review
                  your requirements and get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="group relative mt-8 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(34,211,238,0.10)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />

                  <span className="relative z-10">
                    Send Another Message
                  </span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-5 sm:space-y-6"
              >
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                  {/* Name */}
                  <div className="min-w-0">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/65"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full min-w-0 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(34,211,238,0.06)]"
                    />
                  </div>

                  {/* Email */}
                  <div className="min-w-0">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/65"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full min-w-0 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(34,211,238,0.06)]"
                    />
                  </div>
                </div>

                {/* Service + Budget */}
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                  {/* Service */}
                  <div className="min-w-0">
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-white/65"
                    >
                      Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full min-w-0 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-cyan-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(34,211,238,0.06)]"
                    >
                      <option value="" disabled className="bg-[#05070a]">
                        Select a service
                      </option>

                      <option
                        value="Website Development"
                        className="bg-[#05070a]"
                      >
                        Website Development
                      </option>

                      <option value="SEO" className="bg-[#05070a]">
                        SEO
                      </option>

                      <option value="Meta Ads" className="bg-[#05070a]">
                        Meta Ads
                      </option>

                      <option value="Google Ads" className="bg-[#05070a]">
                        Google Ads
                      </option>

                      <option
                        value="Multiple Services"
                        className="bg-[#05070a]"
                      >
                        Multiple Services
                      </option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="min-w-0">
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-white/65"
                    >
                      Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full min-w-0 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(59,130,246,0.06)]"
                    >
                      <option value="" className="bg-[#05070a]">
                        Select a range
                      </option>

                      <option
                        value="Under ₹25,000"
                        className="bg-[#05070a]"
                      >
                        Under ₹25,000
                      </option>

                      <option
                        value="₹25,000 - ₹50,000"
                        className="bg-[#05070a]"
                      >
                        ₹25,000 - ₹50,000
                      </option>

                      <option
                        value="₹50,000 - ₹1,00,000"
                        className="bg-[#05070a]"
                      >
                        ₹50,000 - ₹1,00,000
                      </option>

                      <option
                        value="₹1,00,000+"
                        className="bg-[#05070a]"
                      >
                        ₹1,00,000+
                      </option>

                      <option value="Not sure" className="bg-[#05070a]">
                        Not sure yet
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/65"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, requirements, timeline, or anything else that may be useful."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_30px_rgba(34,211,238,0.06)]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-400/90 via-blue-500/90 to-indigo-500/90 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_12px_45px_rgba(34,211,238,0.25)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {/* Moving Light */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />

                  <span className="relative z-10">
                    {loading ? "Sending..." : "Send Project Inquiry"}
                  </span>

                  {!loading && (
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-white/25">
                  By submitting this form, you agree to be contacted regarding
                  your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}