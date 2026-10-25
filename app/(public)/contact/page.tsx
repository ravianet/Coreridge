"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Phone, MessageCircle, Mail, MapPin, 
  Globe, Zap, Shield, Monitor, ArrowRight, 
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", 
    company: "", serviceInterest: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType: formData.serviceInterest,
        }),
      });
      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(
          result.message || "We couldn't submit your message. Please try again.",
        );
        return;
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        serviceInterest: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact inquiry submission failed:", error);
      setSubmitError(
        "We couldn't submit your message. Please try again or contact us by phone or email.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Call", value: "+91 800 885 6333", link: "tel:+91-8008856333", color: "text-cyan-600", bg: "bg-cyan-50" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 800 885 6333", link: "https://wa.me/918008856333", linkText: "Chat", color: "text-green-600", bg: "bg-green-50" },
    { icon: Mail, label: "Email", value: "info@coreridgetech.com", link: "mailto:info@coreridgetech.com", color: "text-violet-600", bg: "bg-violet-50" }
  ];

  const features = [
    { icon: Globe, title: "Global collaboration" },
    { icon: Zap, title: "Clear next steps" },
    { icon: Shield, title: "Security-minded" },
    { icon: Monitor, title: "Remote delivery" }
  ];

  const serviceInterests = ["AI Solutions", "IT Infrastructure", "Cyber Security", "App Development", "CCTV Video Analytics", "CSV", "Other"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Modern floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#184491]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/6 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Hero with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-[#184491]/10 text-[#184491] rounded-full text-xs font-semibold mb-4 backdrop-blur-sm border border-[#184491]/10"
          >
            CONTACT US
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#184491] mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#184491] to-blue-600">Let's Connect</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Tell us what you’re looking to build, transform, secure, or validate. We’ll help you explore the right next step.</p>
        </motion.div>

        {/* Modern glass-morphism card with enhanced shadows */}
        <div className="grid lg:grid-cols-3 gap-0 bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden shadow-[0_20px_60px_-15px_rgba(24,68,145,0.1)]">
          {/* Main Form - 2/3 width */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-16"
                role="status"
                aria-live="polite"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Your inquiry has been submitted. Our team will review it and follow up.</p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#184491] mb-6">Send a Message</h2>
                {submitError && (
                  <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-xs">First Name *</label>
                      <input
                        type="text" required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-[#184491] focus:ring-4 focus:ring-[#184491]/10 transition-all duration-300 hover:bg-white hover:border-gray-300 text-sm transform focus:scale-[1.01]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-xs">Last Name *</label>
                      <input
                        type="text" required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-[#184491] focus:ring-4 focus:ring-[#184491]/5 transition-all text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-xs">Work Email *</label>
                      <input
                        type="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-[#184491] focus:ring-4 focus:ring-[#184491]/5 transition-all text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-xs">Company *</label>
                      <input
                        type="text" required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-[#184491] focus:ring-4 focus:ring-[#184491]/5 transition-all text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium text-xs">Service Interest *</label>
                    <select
                      required
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-[#184491] focus:ring-4 focus:ring-[#184491]/5 transition-all text-sm"
                    >
                      <option value="">Select a service...</option>
                      {serviceInterests.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium text-xs">Your Message *</label>
                    <textarea
                      required rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#184491] focus:ring-4 focus:ring-[#184491]/5 transition-all resize-none text-sm"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-[#184491] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:scale-[1.02] active:scale-[0.98] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.section>

          {/* Compact Sidebar - 1/3 width - all info consolidated */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 md:p-10 bg-gray-50"
          >
            {/* Contact Links */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-bold text-[#184491] mb-4">Connect With Us</h3>
              {contactInfo.map((method) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className={`w-10 h-10 ${method.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 ${method.color}`} strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">{method.label}</p>
                      <p className="text-sm font-semibold text-gray-800 truncate">{method.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform ml-auto" />
                  </a>
                );
              })}
            </div>

            {/* Office Location */}
            <div className="mb-8 p-4 bg-white rounded-xl border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#184491]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-[#184491] text-sm mb-1">India HQ</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">Hyderabad, 500090, India</p>
                  <a 
                    href="https://maps.app.goo.gl/jnRBXrEkzHAwn1vr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-[#184491] font-medium hover:underline"
                  >
                    Get Directions <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
                    <IconComponent className="w-4 h-4 text-[#184491]" strokeWidth={2} />
                    <span className="text-xs font-medium text-gray-700">{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}