"use client";
import { motion } from "framer-motion";
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
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ 
      userName: "", 
      company: "", 
      phone: "", 
      email: "", 
      serviceInterest: "",
      projectBudget: "",
      timeline: "",
      message: "" 
    });
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
    "Other"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const timelines = [
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const quoteFeatures = [
    {
      icon: "📋",
      title: "Detailed Scope",
      description: "Comprehensive project breakdown with clear deliverables"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden costs - complete pricing transparency"
    },
    {
      icon: "⏱️",
      title: "Quick Turnaround",
      description: "Receive your customized quote within 48 hours"
    },
    {
      icon: "✅",
      title: "Flexible Terms",
      description: "Adaptable payment and project timeline options"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section - properly spaced, no cutoff */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Get Started
          </h1>
          <p className="text-base text-gray-500">
            Tell us about your project and we'll get back to you within 48 hours
          </p>
        </motion.div>

        {/* Feature Icons inline - NO BOXES */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-4 mb-10"
        >
          {quoteFeatures.map((item, index) => (
            <div key={item.title} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-base">{item.icon}</span>
              <span className="text-sm text-gray-600 font-medium">{item.title}</span>
            </div>
          ))}
        </motion.div>

        {/* Form Section - reduced width for compact layout */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto w-full"
        >
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Request received</h3>
                <p className="text-gray-500 text-sm">Quote within 48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Full name *</label>
                    <input
                      type="text"
                      required
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Work email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Service *</label>
                    <select
                      required
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400 cursor-pointer"
                    >
                      <option value="">Select service</option>
                      {serviceInterests.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Budget</label>
                    <select
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400 cursor-pointer"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400 cursor-pointer"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Project details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}