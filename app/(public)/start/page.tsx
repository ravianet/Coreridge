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
        className="pointer-events-none absolute -bottom-36 -left-32 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-9 text-center sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-navy shadow-sm">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Start a conversation
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Let’s make your next move
            <span className="block text-brand-navy">a confident one.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Share a little about what you’re planning. We’ll review your
            requirements and help you find a practical next step.
          </p>
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="overflow-hidden rounded-3xl bg-brand-navy p-6 text-white shadow-xl shadow-blue-950/10 sm:p-8 lg:sticky lg:top-24"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              Build · Transform · Secure · Validate
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              Good projects start with understanding your goals.
            </h2>
            <p className="mt-4 text-sm leading-6 text-blue-100/80 sm:text-base">
              Whether you’re exploring AI, software, IT infrastructure,
              cybersecurity, or validation, tell us what success looks like for
              your team.
            </p>

            <div className="mt-8 space-y-5">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-blue-100/70">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 border-t border-white/15 pt-5 text-xs leading-5 text-blue-100/70">
              <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-300" />
              No obligation to proceed—just share what you have in mind.
            </div>
          </motion.aside>

          <motion.section
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            aria-labelledby="project-form-title"
            className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-900/[0.04] sm:p-8 lg:p-10"
          >
            {submitted ? (
              <div
                className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <CheckCircle2 aria-hidden="true" className="h-9 w-9" />
                </span>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                  Request received
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
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
                  <p className="text-center text-xs leading-5 text-slate-500">
                    Your information is used only to respond to this enquiry.
                  </p>
                </form>
              </>
            )}
          </motion.section>
        </div>
      </div>
    </div>
  );
}
