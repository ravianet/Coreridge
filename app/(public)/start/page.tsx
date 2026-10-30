"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    userName: "",
    company: "",
    phone: "",
    email: "",
    serviceInterest: "",
    projectBudget: "",
    timeline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const [firstName, ...lastNameParts] = formData.userName.trim().split(/\s+/);
    const lastName = lastNameParts.join(" ") || "Not provided";
    const message = [
      `Phone: ${formData.phone}`,
      formData.projectBudget && `Budget: ${formData.projectBudget}`,
      formData.timeline && `Timeline: ${formData.timeline}`,
      "",
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          company: formData.company,
          serviceType: formData.serviceInterest,
          message,
        }),
      });
      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(
          result.message || "We couldn't submit your request. Please try again.",
        );
        return;
      }

      setSubmitted(true);
      setFormData({
        userName: "",
        company: "",
        phone: "",
        email: "",
        serviceInterest: "",
        projectBudget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Project inquiry submission failed:", error);
      setSubmitError(
        "We couldn't submit your request. Please try again or contact our team directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const serviceInterests = [
    "AI Solutions",
    "IT Infrastructure",
    "Cyber Security",
    "Application Development",
    "Computer System Validation (CSV)",
    "CCTV & AI Video Analytics",
    "SAP Implementation & Rollout",
    "Supply Chain Solutions",
    "Quality Management Systems (QMS)",
    "Change Control & CAPA",
    "Other",
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  const timelines = ["Within 1 month", "1-3 months", "3-6 months", "6+ months", "Flexible"];

  const benefits = [
    {
      icon: ClipboardList,
      title: "A clear scope",
      description: "We start by understanding your goals and requirements.",
    },
    {
      icon: ShieldCheck,
      title: "A right-fit approach",
      description: "Recommendations shaped around your team and systems.",
    },
    {
      icon: MessageSquareText,
      title: "A real conversation",
      description: "Get practical next steps from our technology team.",
    },
  ];

  const inputClassName =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/10";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f8fc] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-12 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-32 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Start Your Project with Us
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Tell us about your goals and let's build something great together.
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          aria-labelledby="project-form-title"
          className="mx-auto max-w-3xl rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-900/[0.04] sm:p-8 lg:p-10"
        >
          {submitted ? (
            <div
              className="flex min-h-[28rem] flex-col items-center justify-center text-center"
              role="status"
              aria-live="polite"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                <CheckCircle2 aria-hidden="true" className="h-9 w-9" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                Request received
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-blue-100/80">
                Thank you for sharing your project. Our team will review your
                inquiry and follow up.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-7 border-b border-slate-100 pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
                  Project enquiry
                </p>
                <h2
                  id="project-form-title"
                  className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl"
                >
                  Tell us what you’re working on
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Fields marked with * are required.
                </p>
              </div>

              {submitError && (
                <p
                  role="alert"
                  className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {submitError}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-7">
                <fieldset>
                  <legend className="mb-4 text-sm font-semibold text-slate-800">
                    Your details
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="userName" className="text-sm font-medium text-slate-700">
                        Full name *
                      </label>
                      <input
                        id="userName"
                        name="userName"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                        className={inputClassName}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-slate-700">
                        Company *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClassName}
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Work email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClassName}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClassName}
                        placeholder="+91 800 000 0000"
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-4 text-sm font-semibold text-slate-800">
                    Project overview
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="sm:col-span-3">
                      <label htmlFor="serviceInterest" className="text-sm font-medium text-slate-700">
                        How can we help? *
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        required
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className={inputClassName}
                      >
                        <option value="">Choose an area</option>
                        {serviceInterests.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectBudget" className="text-sm font-medium text-slate-700">
                        Indicative budget
                      </label>
                      <select
                        id="projectBudget"
                        name="projectBudget"
                        value={formData.projectBudget}
                        onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                        className={inputClassName}
                      >
                        <option value="">Prefer not to say</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="timeline" className="text-sm font-medium text-slate-700">
                        Ideal timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className={inputClassName}
                      >
                        <option value="">Still exploring</option>
                        {timelines.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        What would you like to achieve? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClassName} resize-y`}
                        placeholder="A short overview is enough to get the conversation started."
                      />
                    </div>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending your request..." : "Send project enquiry"}
                  {!submitting && (
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>
                <p className="mt-1 text-sm leading-5 text-blue-100/70">
                  Your information is used only to respond to this enquiry.
                </p>
              </form>
            </>
          )}
        </motion.section>

        {/* Benefits Section */}
        <section className="mt-16 md:mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                The benefits of a clear process
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Good projects start with understanding your goals.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}