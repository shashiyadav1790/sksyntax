"use client";

import { useState } from "react";

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

  return (
    <main className="min-h-screen bg-[#05070a] pt-20 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Ambient Glows */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[140px] animate-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute left-[8%] top-[35%] -z-0 h-[220px] w-[220px] rounded-full bg-cyan-400/[0.035] blur-[120px] animate-pulse"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-[5%] -z-0 h-[280px] w-[280px] rounded-full bg-indigo-500/[0.045] blur-[130px] animate-pulse"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
                Contact SKSyntax
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-balance text-5xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Let&apos;s build something
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                that matters.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Tell us about your project, goals, and requirements. We&apos;ll
              explore how SKSyntax can help with website development, SEO, Meta
              Ads, or Google Ads.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="relative border-t border-white/[0.06] px-6 py-20 sm:py-28 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[150px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us about
              <span className="block bg-gradient-to-r from-[#35e7ff] via-[#438cff] to-[#7c5cff] bg-clip-text text-transparent">
                your project.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/45">
              Whether you need a new website, better search visibility, or
              targeted advertising, share a few details and we&apos;ll
              understand how SKSyntax can help.
            </p>

            <div className="mt-10 space-y-5">
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
          </div>

          {/* Form */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 lg:p-10">
            {/* Card Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[100px] transition-opacity duration-500 group-hover:opacity-100"
            />

            {submitted ? (
              <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-2xl text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Thanks for reaching out.
                </h2>

                <p className="mt-3 max-w-md leading-7 text-white/45">
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
                className="relative z-10 space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
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
                      className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(34,211,238,0.06)]"
                    />
                  </div>

                  {/* Email */}
                  <div>
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
                      className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(34,211,238,0.06)]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Service */}
                  <div>
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
                      className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-cyan-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(34,211,238,0.06)]"
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
                  <div>
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
                      className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/[0.035] focus:shadow-[0_0_25px_rgba(59,130,246,0.06)]"
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