"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };
const handleSubmit = async (event) => {
  event.preventDefault();

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
  } catch (error) {
    console.error("Form submission error:", error);

    alert(
      error.message || "Unable to send your message. Please try again."
    );
  }
};

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
              Contact SKSyntax
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Lets build something
              <span className="block text-violet-500">
                that matters.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Tell us a little about your project, goals, and what youre
              looking to achieve. Well take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="border-t border-white/10 px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us about
              <span className="text-violet-500"> your project.</span>
            </h2>

            <p className="mt-6 leading-7 text-zinc-400">
              Whether you need a new website, better search visibility, or
              paid advertising, share a few details and well understand where
              we can help.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm text-zinc-500">Services</p>

                <p className="mt-2 text-sm text-zinc-300">
                  Website Development · SEO · Meta Ads · Google Ads
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Response</p>

                <p className="mt-2 text-sm text-zinc-300">
                  Well review your requirements and get back to you.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-2xl text-violet-400">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Thanks for reaching out.
                </h2>

                <p className="mt-3 max-w-md leading-7 text-zinc-400">
                  Your message has been prepared successfully. Well connect
                  with you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-zinc-300"
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
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-500/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-zinc-300"
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
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-500/50"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none focus:border-violet-500/50"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="Meta Ads">Meta Ads</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Multiple Services">
                        Multiple Services
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none focus:border-violet-500/50"
                    >
                      <option value="">Select a range</option>
                      <option value="Under ₹25,000">Under ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">
                        ₹25,000 - ₹50,000
                      </option>
                      <option value="₹50,000 - ₹1,00,000">
                        ₹50,000 - ₹1,00,000
                      </option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
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
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-zinc-600 focus:border-violet-500/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.01]"
                >
                  Send Project Inquiry
                </button>

                <p className="text-center text-xs leading-5 text-zinc-600">
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