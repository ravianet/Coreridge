"use client";

import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone, Send, X } from "lucide-react";

const serviceOptions = [
  "BUILD — IT infrastructure",
  "TRANSFORM — Software & AI",
  "SECURE — Cybersecurity",
  "VALIDATE — CSV & compliance",
  "Other",
];

type ChatMode = "welcome" | "new" | "existing" | "sent";

export default function ClientChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("welcome");
  const [serviceType, setServiceType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (pathname.startsWith("/dashboard")) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") || "").trim(),
      lastName: String(formData.get("lastName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      serviceType,
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "We couldn't send your message. Please try again.");
      }

      setMode("sent");
    } catch (submitError) {
      console.error("Chat inquiry submission failed:", submitError);
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We couldn't send your message. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    setMode("welcome");
    setServiceType("");
    setError("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[10000] flex flex-col items-end sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="Coreridge client assistant"
          className="mb-3 flex max-h-[min(720px,calc(100dvh-7rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.2)]"
        >
          <header className="flex items-center justify-between bg-[#153a7a] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Coreridge client assistant</p>
                <p className="mt-0.5 text-xs text-blue-100">How can our team help?</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </header>

          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-5">
            {mode === "welcome" && (
              <>
                <div className="max-w-[94%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-700">
                  Welcome to Coreridge. Are you exploring our services or looking for help as an existing client?
                </div>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setMode("new")}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-[#184491] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491]"
                  >
                    I’m exploring your services
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("existing")}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-[#184491] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491]"
                  >
                    I’m an existing client
                  </button>
                </div>
              </>
            )}

            {mode === "new" && (
              <>
                <button
                  type="button"
                  onClick={resetChat}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-[#184491]"
                >
                  <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> Back to options
                </button>
                <div className="max-w-[94%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-700">
                  Great. Choose an area and leave a few details. Our team will receive your inquiry.
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label className="block text-xs font-medium text-slate-700">
                    I’m interested in
                    <select
                      required
                      value={serviceType}
                      onChange={(event) => setServiceType(event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-[#184491] focus:ring-2 focus:ring-[#184491]/15"
                    >
                      <option value="">Choose a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="block text-xs font-medium text-slate-700">
                      First name
                      <input required name="firstName" autoComplete="given-name" className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-[#184491] focus:ring-2 focus:ring-[#184491]/15" />
                    </label>
                    <label className="block text-xs font-medium text-slate-700">
                      Last name
                      <input required name="lastName" autoComplete="family-name" className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-[#184491] focus:ring-2 focus:ring-[#184491]/15" />
                    </label>
                  </div>
                  <label className="block text-xs font-medium text-slate-700">
                    Work email
                    <input required type="email" name="email" autoComplete="email" className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-[#184491] focus:ring-2 focus:ring-[#184491]/15" />
                  </label>
                  <label className="block text-xs font-medium text-slate-700">
                    Company <span className="font-normal text-slate-400">(optional)</span>
                    <input name="company" autoComplete="organization" className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-[#184491] focus:ring-2 focus:ring-[#184491]/15" />
                  </label>
                  <label className="block text-xs font-medium text-slate-700">
                    How can we help? <span className="font-normal text-slate-400">(optional)</span>
                    <textarea name="message" rows={3} maxLength={2000} className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-[#184491] focus:ring-2 focus:ring-[#184491]/15" />
                  </label>
                  <p className="text-xs leading-relaxed text-slate-500">
                    Please don’t include passwords or confidential system details.
                  </p>
                  {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting || !serviceType}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#184491] px-4 text-sm font-semibold text-white transition hover:bg-[#12366f] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send inquiry"}
                    {!isSubmitting && <Send aria-hidden="true" className="h-4 w-4" />}
                  </button>
                </form>
              </>
            )}

            {mode === "existing" && (
              <>
                <button
                  type="button"
                  onClick={resetChat}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-[#184491]"
                >
                  <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> Back to options
                </button>
                <div className="max-w-[94%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-700">
                  We’re happy to help. For project-specific support, contact your Coreridge representative or reach our team directly. Please don’t send passwords or sensitive system information in this chat.
                </div>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/918008856333"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-11 items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                  >
                    <MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp support
                  </a>
                  <a
                    href="tel:+918008856333"
                    className="flex min-h-11 items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-[#184491] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491]"
                  >
                    <Phone aria-hidden="true" className="h-4 w-4" /> Call +91 800 885 6333
                  </a>
                  <a
                    href="mailto:info@coreridgetech.com"
                    className="flex min-h-11 items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-[#184491] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184491]"
                  >
                    Email info@coreridgetech.com
                  </a>
                </div>
              </>
            )}

            {mode === "sent" && (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle2 aria-hidden="true" className="h-12 w-12 text-emerald-600" />
                <h2 className="mt-4 text-base font-semibold text-slate-900">Thanks for reaching out</h2>
                <p role="status" className="mt-2 text-sm leading-relaxed text-slate-600">
                  Your inquiry has been sent to our team. We’ll follow up using the email you provided.
                </p>
                <button type="button" onClick={resetChat} className="mt-5 text-sm font-semibold text-[#184491] hover:text-[#12366f]">
                  Start another conversation
                </button>
              </div>
            )}
          </div>
          <footer className="border-t border-slate-100 px-5 py-3">
            <p className="text-center text-[11px] text-slate-500">For general guidance only · No account data is accessed</p>
          </footer>
        </section>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Close client chat" : "Open client chat"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-14 items-center gap-2.5 rounded-full bg-[#184491] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-[#12366f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
      >
        {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <MessageCircle aria-hidden="true" className="h-5 w-5" />}
        <span>{isOpen ? "Close" : "Chat with us"}</span>
      </button>
    </div>
  );
}
