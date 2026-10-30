"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
      resume: null
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container-pro mx-auto mb-24 pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build the future of enterprise technology. We're always looking for talented individuals to join our growing team of innovators.
          </p>
        </div>
      </motion.div>

      {/* Why Work Here Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-center">Why Build Your Career at Coreridge?</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">We invest in our team members with comprehensive benefits and endless growth opportunities</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Competitive Benefits", 
                desc: "Comprehensive health, dental, and vision insurance plus 401k matching, wellness stipends, and parental leave.", 
                icon: "🏥",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                title: "Flexible Work Culture", 
                desc: "Remote-first environment with flexible hours, unlimited PTO, and quarterly team retreats around the world.", 
                icon: "🏠",
                color: "bg-green-50 text-green-600"
              },
              { 
                title: "Growth Opportunities", 
                desc: "$5,000 annual learning budget, mentorship programs, and clear career progression paths.", 
                icon: "📈",
                color: "bg-purple-50 text-purple-600"
              },
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* Application Form Section */}
      <motion.section
        id="application-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Submit Your Application</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ready to join our team? Fill out the form below and we'll get back to you within 48 hours</p>
          </div>
          
          <form 
            onSubmit={handleSubmit} 
            className="bg-white/85 backdrop-blur-2xl border border-gray-200/60 rounded-3xl p-8 md:p-14 shadow-2xl shadow-brand-navy/10 hover:shadow-[0_30px_60px_-15px_rgba(30,64,175,0.15)] transition-all duration-500"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
              >
                <span className="font-semibold">Thank you for your submission!</span> We'll review your application and get back to you soon.
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-800 mb-3 font-semibold">Full Name *</label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-brand-navy focus:bg-white focus:ring-4 focus:ring-brand-navy/10 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-3 font-semibold">Email Address *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-brand-navy focus:bg-white focus:ring-4 focus:ring-brand-navy/10 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-3 font-semibold">Phone Number *</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-brand-navy focus:bg-white focus:ring-4 focus:ring-brand-navy/10 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-3 font-semibold">Position Applying For *</label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-brand-navy focus:bg-white focus:ring-4 focus:ring-brand-navy/10 transition-all duration-300 cursor-pointer hover:border-gray-300"
                >
                  <option value="">-- Select interest area --</option>
                  <option value="engineering">Engineering & Development</option>
                  <option value="infrastructure">Infrastructure & Cloud</option>
                  <option value="security">Cybersecurity</option>
                  <option value="operations">Project Management & Operations</option>
                  <option value="client-services">Client Services & Consulting</option>
                  <option value="other">Other - General Application</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-800 mb-3 font-semibold">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-brand-navy focus:bg-white focus:ring-4 focus:ring-brand-navy/10 transition-all duration-300 cursor-pointer hover:border-gray-300"
                >
                  <option value="">-- Select experience level --</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 mb-3 font-semibold">Upload Resume/CV *</label>
              <div className="relative">
                <input
                  required
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-brand-navy focus:bg-white focus:ring-4 focus:ring-brand-navy/10 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-navy/10 file:text-brand-navy hover:file:bg-brand-navy/20 file:cursor-pointer file:transition-colors cursor-pointer hover:border-gray-300"
                />
              </div>
              <p className="text-gray-500 text-sm mt-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            <div className="mb-8">
              <label className="block text-gray-800 mb-3 font-semibold">Cover Letter / Additional Information</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-brand-navy focus:bg-white focus:ring-4 focus:ring-brand-navy/10 transition-all duration-300 resize-none placeholder:text-gray-400 hover:border-gray-300"
                placeholder="Tell us about yourself, your relevant experience, and why you'd like to join Coreridge..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-5 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white font-bold rounded-xl hover:from-brand-navy/95 hover:to-brand-navy hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-navy/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center text-lg"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Your Application...
                </>
              ) : (
                <>
                  Submit Your Application
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-br from-brand-navy via-[#1e3a5f] to-[#0f172a] backdrop-blur-2xl border border-white/10 rounded-3xl mx-auto max-w-4xl mb-20 shadow-2xl shadow-brand-navy/20"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Have Questions Before Applying?</h3>
          <p className="text-blue-100/90 mb-8 max-w-2xl mx-auto">Our recruiting team is here to help. Reach out to discuss opportunities and learn more about life at Coreridge.</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-navy font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contact Our Recruiting Team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}