"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your submission! We'll review your application and get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
      resume: null
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Build the future of enterprise technology. We're always looking for talented individuals to join our growing team.
          </p>
        </motion.div>

        {/* Why Work Here */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Coreridge?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Competitive Benefits", desc: "Comprehensive health, dental, and vision insurance plus 401k matching.", icon: "🏥" },
              { title: "Flexible Work", desc: "Remote-first culture with flexible hours and unlimited PTO.", icon: "🏠" },
              { title: "Growth Opportunities", desc: "Continuous learning budget and clear career progression paths.", icon: "📈" },
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <span className="text-5xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-black">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Submit Your Resume Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Submit Your Resume</h2>
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black mb-2 font-medium">Full Name *</label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-black mb-2 font-medium">Email Address *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-black mb-2 font-medium">Phone Number *</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-black mb-2 font-medium">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="" className="bg-slate-800">--Select--</option>
                  <option value="0-2" className="bg-slate-800">0-2 years</option>
                  <option value="2-5" className="bg-slate-800">2-5 years</option>
                  <option value="5-10" className="bg-slate-800">5-10 years</option>
                  <option value="10+" className="bg-slate-800">10+ years</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-black mb-2 font-medium">Upload Resume *</label>
              <input
                required
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:text-cyan-400 hover:file:bg-cyan-500/30 file:transition-colors"
              />
              <p className="text-gray-500 text-sm mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div className="mb-8">
              <label className="block text-black mb-2 font-medium">Cover Letter / Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Tell us about yourself and why you'd like to join Coreridge..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Submit Your Application
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

