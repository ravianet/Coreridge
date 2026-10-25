"use client";

import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";

const serviceOptions = [
  "BUILD — IT infrastructure",
  "TRANSFORM — Software & AI",
  "SECURE — Cybersecurity",
  "VALIDATE — CSV & compliance",
  "Other",
];

const suggestedQuestions = [
  "How can AI help my business?",
  "Tell me about cybersecurity",
  "I need CSV validation",
];

type ChatMode = "assistant" | "new" | "existing" | "sent";
type ChatMessage = { role: "user" | "assistant"; content: string };

export default function ClientChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("assistant");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I’m the Coreridge AI assistant. Ask me about our services, or tell me what your team is looking to achieve.",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [isResponding, setIsResponding] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const conversationEndRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, mode, error]);

  if (pathname.startsWith("/dashboard")) return null;

  const sendMessage = async (text: string) => {
    const content = text.trim();
    if (!content || isResponding) return;

    const nextMessages = [...messages, { role: "user" as const, content }];
    setMessages(nextMessages);
    setDraft("");
    setError("");
    setIsResponding(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });
      const result: { success?: boolean; reply?: string; message?: string } = await response.json();

      if (!response.ok || !result.success || typeof result.reply !== "string" || !result.reply) {
        throw new Error(result.message || "The assistant couldn't respond. Please try again.");
      }

      setMessages((current) => [...current, { role: "assistant", content: result.reply }]);
    } catch (requestError) {
      console.error("AI chat message failed:", requestError);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The assistant couldn't respond. Please try again or contact our team.",
      );
    } finally {
      setIsResponding(false);
      composerRef.current?.focus();
    }
  };

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(draft);
  };

  const handleComposerKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(draft);
    }
  };

  const handleInquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    setMode("assistant");
    setMessages([
      {
        role: "assistant",
        content: "Hello! I’m the Coreridge AI assistant. Ask me about our services, or tell me what your team is looking to achieve.",
      },
    ]);
    setDraft("");
    setServiceType("");
    setError("");
  };

  const inputClassName =
    "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#184491] focus:ring-2 focus:ring-[#184491]/15";

  return (
    <div className="fixed bottom-5 right-5 z-[10000] flex flex-col items-end sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="Coreridge AI assistant"
          className="mb-3 flex h-[min(680px,calc(100dvh-6.5rem))] w-[min(410px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.24)]"
        >
          <header className="relative isolate overflow-hidden bg-gradient-to-br from-[#102d60] via-[#184491] to-[#2367a7] px-5 py-4 text-white">
            <div aria-hidden="true" className="absolute -right-12 -top-20 -z-10 h-48 w-48 rounded-full border-[28px] border-white/5" />
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-inner">
                  <Sparkles aria-hidden="true" className="h-5 w-5 text-cyan-100" />
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#184491] bg-emerald-400" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">Coreridge AI assistant</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online · Here to help
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="rounded-xl p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </header>

          {mode === "assistant" && (
            <>
              <div
                aria-live="polite"
                aria-relevant="additions text"
                className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-slate-50/90 to-white px-4 py-5 sm:px-5"
              >
                {messages.map((message, index) => (
                  <div
                    key={`${index}-${message.role}`}
                    className={`flex items-end gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <span className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#184491]">
                        <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <p
                      className={`max-w-[84%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                        message.role === "user"
                          ? "rounded-br-md bg-[#184491] text-white shadow-sm"
                          : "rounded-bl-md border border-slate-200/80 bg-white text-slate-700 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                ))}
                {messages.length === 1 && (
                  <div className="pl-9">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Try asking</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          type="button"
                          disabled={isResponding}
                          onClick={() => void sendMessage(question)}
                          className="rounded-full border border-blue-100 bg-white px-3 py-2 text-left text-xs font-medium text-[#184491] shadow-sm transition hover:border-blue-300 hover:bg-blue-50 disabled:opacity-50"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {isResponding && (
                  <div className="flex items-end gap-2" role="status" aria-label="Assistant is thinking">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-[#184491]">
                      <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-slate-200/80 bg-white px-4 py-3 text-xs text-slate-500 shadow-sm">
                      <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin text-[#184491]" />
                      Finding a helpful answer…
                    </div>
                  </div>
                )}
                {error && (
                  <div role="alert" className="ml-9 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs leading-relaxed text-amber-900">
                    {error}{" "}
                    {" "}You can also call +91 800 885 6333 or email info@coreridgetech.com.
                  </div>
                )}
                <div ref={conversationEndRef} />
              </div>

              <div className="border-t border-slate-100 bg-white px-4 pb-3 pt-3 sm:px-5">
                <form onSubmit={handleSend} className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
                  <label className="sr-only" htmlFor="client-chat-message">Message the AI assistant</label>
                  <textarea
                    id="client-chat-message"
                    ref={composerRef}
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={handleComposerKeyDown}
                    maxLength={1200}
                    rows={1}
                    placeholder="Ask about our services…"
                    className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    aria-label="Send message"
                    disabled={!draft.trim() || isResponding}
                    className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#184491] text-white transition hover:bg-[#12366f] disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    {isResponding ? <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" /> : <ArrowUp aria-hidden="true" className="h-4 w-4" />}
                  </button>
                </form>
                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => { setMode("new"); setError(""); }}
                    className="text-[11px] font-semibold text-[#184491] hover:text-[#12366f]"
                  >
                    Talk to our team
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMode("existing"); setError(""); }}
                    className="text-[11px] font-medium text-slate-500 hover:text-[#184491]"
                  >
                    Existing client support
                  </button>
                </div>
                <p className="mt-2 text-center text-[10px] leading-relaxed text-slate-400">
                  AI responses are processed by Groq · Don’t share sensitive information
                </p>
              </div>
            </>
          )}

          {mode === "new" && (
            <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50/70 p-5">
              <button
                type="button"
                onClick={() => { setMode("assistant"); setError(""); }}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#184491]"
              >
                <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> Back to AI assistant
              </button>
              <div className="mb-4 mt-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-[#184491]">
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                </span>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">Talk to our team</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">Share a few details and we’ll follow up about your project.</p>
              </div>
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <label className="block text-xs font-medium text-slate-700">
                  I’m interested in
                  <select
                    required
                    value={serviceType}
                    onChange={(event) => setServiceType(event.target.value)}
                    className={inputClassName}
                  >
                    <option value="">Choose a service</option>
                    {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
                  </select>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="block text-xs font-medium text-slate-700">
                    First name
                    <input required name="firstName" autoComplete="given-name" className={inputClassName} />
                  </label>
                  <label className="block text-xs font-medium text-slate-700">
                    Last name
                    <input required name="lastName" autoComplete="family-name" className={inputClassName} />
                  </label>
                </div>
                <label className="block text-xs font-medium text-slate-700">
                  Work email
                  <input required type="email" name="email" autoComplete="email" className={inputClassName} />
                </label>
                <label className="block text-xs font-medium text-slate-700">
                  Company <span className="font-normal text-slate-400">(optional)</span>
                  <input name="company" autoComplete="organization" className={inputClassName} />
                </label>
                <label className="block text-xs font-medium text-slate-700">
                  How can we help? <span className="font-normal text-slate-400">(optional)</span>
                  <textarea name="message" rows={3} maxLength={2000} className={`${inputClassName} resize-y`} />
                </label>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Don’t include passwords or confidential system details.
                </p>
                {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting || !serviceType}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#184491] px-4 text-sm font-semibold text-white transition hover:bg-[#12366f] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send project inquiry"}
                  {!isSubmitting && <Send aria-hidden="true" className="h-4 w-4" />}
                </button>
              </form>
            </div>
          )}

          {mode === "existing" && (
            <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50/70 p-5">
              <button
                type="button"
                onClick={() => setMode("assistant")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#184491]"
              >
                <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> Back to AI assistant
              </button>
              <div className="mb-5 mt-5 rounded-2xl border border-blue-100 bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#184491]">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                </span>
                <h2 className="mt-3 text-base font-semibold text-slate-900">Existing client support</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  For project-specific help, please contact your Coreridge representative or reach our team directly. This public assistant cannot access accounts or support cases.
                </p>
              </div>
              <div className="space-y-2">
                <a href="https://wa.me/918008856333" target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-800">
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-green-600" /> WhatsApp support
                </a>
                <a href="tel:+918008856333" className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-[#184491]">
                  <Phone aria-hidden="true" className="h-4 w-4 text-[#184491]" /> Call +91 800 885 6333
                </a>
                <a href="mailto:info@coreridgetech.com" className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-[#184491]">
                  <Send aria-hidden="true" className="h-4 w-4 text-[#184491]" /> Email info@coreridgetech.com
                </a>
              </div>
            </div>
          )}

          {mode === "sent" && (
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center bg-slate-50/70 p-6 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                <CheckCircle2 aria-hidden="true" className="h-9 w-9 text-emerald-600" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">Thanks for reaching out</h2>
              <p role="status" className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                Your inquiry has been sent to our team. We’ll follow up using the email you provided.
              </p>
              <button type="button" onClick={resetChat} className="mt-5 rounded-lg px-4 py-2 text-sm font-semibold text-[#184491] hover:bg-blue-50">
                Back to AI assistant
              </button>
            </div>
          )}

          <footer className="border-t border-slate-100 bg-white px-5 py-2.5">
            <p className="text-center text-[10px] text-slate-400">Coreridge Technologies · AI-assisted public information</p>
          </footer>
        </section>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Close client chat" : "Open client chat"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="group inline-flex min-h-14 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#153a7a] to-[#2367a7] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-950/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
      >
        {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Sparkles aria-hidden="true" className="h-5 w-5 text-cyan-100 transition-transform group-hover:rotate-12" />}
        <span>{isOpen ? "Close" : "Ask our AI"}</span>
      </button>
    </div>
  );
}
