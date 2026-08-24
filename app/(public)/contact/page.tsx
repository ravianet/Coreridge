"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serviceInterest: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ firstName: "", lastName: "", email: "", company: "", serviceInterest: "", message: "" });
  };

  const contactMethods = [
    {
      title: "Call Us",
      subtitle: "Speak directly with our experts",
      value: "+91 800 885 6333",
      icon: "📞",
      link: "tel:+91-8008856333",
      linkText: "Call Now",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "WhatsApp",
      subtitle: "Quick chat for instant support",
      value: "+91 800 885 6333",
      icon: "💬",
      link: "https://wa.me/918008856333?text=Hi%20Coreridge%20Technologies,%20I%20need%20assistance%20with...",
      linkText: "Chat Now",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Email Us",
      subtitle: "Send us your requirements",
      value: "info@coreridgetech.com",
      icon: "✉️",
      link: "mailto:info@coreridgetech.com",
      linkText: "Send Email",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const offices = [
    {
      country: "🇮🇳",
      title: "India Headquarters",
      subtitle: "Global Operations",
      address: "112, APR Signator, Mallampet\nNear Bhachupally\nHyderabad 500090, India",
      timezone: "IST Timezone",
      mapsLink: "https://maps.app.goo.gl/jnRBXrEkzHAwn1vr6",
      description: "Main Operations"
    }
  ];

  const serviceInterests = [
    "AI Solutions",
    "IT Infrastructure",
    "Cyber Security",
    "Application Development",
    "Computer System Validation",
    "Other"
  ];

  const features = [
    { icon: "🌐", title: "Global Reach", description: "Serving clients worldwide" },
    { icon: "⚡", title: "Fast Response", description: "Quick response guaranteed" },
    { icon: "🔒", title: "24/7 Support", description: "Round-the-clock assistance" },
    { icon: "💻", title: "Remote Support", description: "Seamless remote capabilities" }
  ];

  return (
    <div className="min-h-screen bg-navy-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Ready to transform your IT infrastructure? Let's discuss your requirements and create the perfect solution for your business.
          </p>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium">🚀 Expert IT Solutions</span>
            <span className="px-4 py-2 bg-violet-500/10 text-violet-400 rounded-full text-sm font-medium">🔒 Enterprise Security</span>
            <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">☁️ Cloud Technologies</span>
            <span className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium">🛠️ 24/7 Support</span>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Preferred Way to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <span className="text-6xl mb-6 block">{method.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.subtitle}</p>
                <p className="text-xl font-semibold text-white mb-6">{method.value}</p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full text-center py-3 bg-gradient-to-r ${method.gradient} rounded-xl font-semibold text-white hover:opacity-90 transition-opacity`}
                >
                  {method.linkText} →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Global Presence */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Our Global Presence</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Headquarters in India enabling 24/7 global IT support and services.
          </p>
          <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-10"
              >
                <span className="text-6xl mb-4 block">{office.country}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{office.title}</h3>
                <p className="text-cyan-400 mb-4">{office.subtitle}</p>
                <p className="text-gray-300 whitespace-pre-line mb-4">{office.address}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-400">{office.description}</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-400">{office.timezone}</span>
                </div>
                <a
                  href={office.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-colors"
                >
                  📍 Get Directions
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Global Service Coverage Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="glass-card rounded-2xl p-12 bg-gradient-to-r from-cyan-500/5 to-violet-500/5">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">🌍 Global Service Coverage</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
              While our offices are located in India and USA, we provide IT services and support to clients worldwide through our global network and remote capabilities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <span className="text-4xl mb-3 block">{feature.icon}</span>
                  <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section - Enhanced */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-gray-400">Quick Response Guaranteed - We'll get back to you within 24 hours</p>
            </div>
            <motion.div
              className="glass-card rounded-2xl p-10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <span className="text-8xl mb-6 block">✅</span>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Company *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Service Interest *</label>
                    <select
                      required
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="" className="bg-navy-800">Select a service</option>
                      {serviceInterests.map((service) => (
                        <option key={service} value={service} className="bg-navy-800">{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl font-semibold text-lg text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    Submit Request 🚀
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}