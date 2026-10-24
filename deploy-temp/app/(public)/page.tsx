"use client";

import Hero from "../../components/Hero";
import PillarMatrix from "../../components/PillarMatrix";
import { motion } from "framer-motion";

// Trusted certifications and awards
const certifications = [
  { name: "AWS Advanced Partner", icon: "☁️" },
  { name: "SOC 2 Type II", icon: "🛡️" },
  { name: "ISO 27001:2022", icon: "✅" },
  { name: "ISO 42001:2023", icon: "🏆" },
  { name: "Clutch Top AI Company", icon: "⭐" },
];

// Engagement Pathways
const engagementPathways = [
  {
    number: "01",
    title: "Launch a New Digital Platform",
    description: "For organizations building new products or enterprise platforms from concept to production.",
    href: "/services",
    features: ["End-to-end development", "Cloud-native architecture", "AI integration capabilities"]
  },
  {
    number: "02",
    title: "Extend Your Engineering Capacity",
    description: "For teams that need structured reinforcement through dedicated delivery pods and expert teams.",
    href: "/contact",
    features: ["Dedicated cross-functional teams", "Flexible scaling", "Seamless collaboration"]
  },
  {
    number: "03",
    title: "Modernize & Evolve Legacy Systems",
    description: "For organizations upgrading legacy platforms while maintaining full operational continuity.",
    href: "/services",
    features: ["Zero-downtime migration", "Cloud transformation", "Legacy system modernization"]
  }
];

// Stats that demonstrate scale and impact
const stats = [
  { value: "500+", label: "Enterprise Systems Delivered" },
  { value: "50+", label: "Industry Awards & Recognitions" },
  { value: "200+", label: "Global Enterprise Clients" },
  { value: "15+", label: "Years of Industry Excellence" },
  { value: "500+", label: "Cross-Functional Experts" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Hero />

      {/* Trust & Certifications Section - Perfectly seamless spacing */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-black text-sm uppercase tracking-widest mb-8">Trusted, Certified & Recognized Globally</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-gray-200 hover:border-[#184491]/40 transition-all"
              >
                <span className="text-2xl mb-2">{cert.icon}</span>
                <span className="text-black text-sm text-center font-medium">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Coreridge CTA - No gap with previous section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-center rounded-[3rem] p-10 md:p-14 bg-gradient-to-br from-white to-blue-50/50 border border-[#184491]/10 shadow-xl shadow-blue-900/5 overflow-hidden"
          >
            {/* Subtle background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#184491]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-5 py-1.5 mb-5 bg-[#184491]/10 border border-[#184491]/20 rounded-full text-[#184491] text-xs font-semibold uppercase tracking-widest"
              >
                Why Partner With Us
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#184491] leading-tight">
                Why Organizations Choose Coreridge
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                Discover what makes us the trusted engineering partner for enterprises that need systems that perform—at scale, under regulation, in production.
              </p>
              <motion.a
                href="/company/why-coreridge"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 bg-gradient-to-r from-[#184491] to-[#153a73] text-white rounded-2xl font-bold text-xl border border-[#184491] hover:shadow-2xl hover:shadow-[#184491]/25 transition-all duration-500"
              >
                Learn More About Our Approach →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - No vertical gap with previous section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-blue-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#184491]">Proven Results. Delivered at Scale.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#184491] mb-2">
                  {stat.value}
                </div>
                <p className="text-black text-sm md:text-base leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section - Zero vertical gap */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#184491] leading-tight">
                Our Core Service Pillars
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions organized into four strategic pillars that cover every aspect of your enterprise IT needs.
              </p>
            </motion.div>
          </div>
          <PillarMatrix />
          <div className="text-center mt-10">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-[#184491] text-white rounded-xl font-semibold text-xl border border-[#184491] hover:bg-[#153a73] transition-all shadow-lg hover:shadow-xl"
            >
              View All Services
            </motion.a>
          </div>
        </div>
      </section>

      {/* Engagement Pathways Section - Perfectly connected */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#184491]">Engagement Pathways</h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Whether launching AI initiatives, extending engineering capacity, or modernizing legacy systems, 
                our engagement pathways adapt to your organization's stage and complexity.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {engagementPathways.map((pathway, index) => (
              <motion.a
                key={pathway.number}
                href={pathway.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 10, scale: 1.01 }}
                className="block group"
              >
                <div className="relative p-7 md:p-9 rounded-2xl bg-white border border-gray-200 group-hover:border-[#184491]/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#184491] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <div className="text-5xl font-bold text-[#184491]/30 group-hover:text-[#184491]/60 transition-colors">
                      {pathway.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#184491] mb-3 group-hover:text-[#153a73] transition-colors">
                        {pathway.title}
                      </h3>
                      <p className="text-black text-lg mb-4">{pathway.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {pathway.features.map((feature) => (
                          <span key={feature} className="px-3 py-1 bg-[#184491]/10 rounded-full text-sm text-[#184491] font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-[#184491] text-4xl group-hover:translate-x-2 transition-transform">
                      →
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Zero vertical gap, seamless flow */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-blue-100/50">
        {/* Soft light background elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#184491]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
        
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative backdrop-blur-xl bg-white/85 border border-[#184491]/10 rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-blue-900/10 overflow-hidden"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#184491]/5 via-transparent to-blue-400/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Subtle decorative dots */}
            <div className="absolute top-6 left-6 w-2 h-2 bg-[#184491]/40 rounded-full"></div>
            <div className="absolute top-6 right-6 w-2 h-2 bg-[#184491]/40 rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#184491]/40 rounded-full"></div>
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-[#184491]/40 rounded-full"></div>
            
            {/* Floating subtle particles */}
            <div className="absolute top-16 left-1/4 w-1.5 h-1.5 bg-[#184491]/30 rounded-full"></div>
            <div className="absolute top-24 right-1/3 w-2 h-2 bg-blue-400/40 rounded-full"></div>
            <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-[#184491]/30 rounded-full"></div>
            <div className="absolute bottom-28 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full"></div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-2 mb-7 bg-gradient-to-r from-[#184491]/10 to-blue-400/10 border border-[#184491]/20 rounded-full text-[#184491] text-sm font-semibold uppercase tracking-widest"
            >
              Start Your Journey Today
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-7 text-[#184491] leading-tight tracking-tight"
            >
              Ready to Start Your<br />
              <span className="bg-gradient-to-r from-[#184491] via-blue-700 to-blue-500 bg-clip-text text-transparent">Transformation?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Let's discuss how we can help you build production-grade systems that perform at scale. Schedule a strategy call with our team today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#184491] to-[#153a73] text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-[#184491]/30 transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#153a73] to-[#184491] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  Schedule a Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="/clients"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white/90 backdrop-blur-xl rounded-2xl font-bold text-xl text-[#184491] border-2 border-[#184491]/30 hover:bg-[#184491] hover:text-white hover:border-[#184491] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[#184491]/20"
              >
                <span className="relative flex items-center gap-3">
                  <span className="text-2xl">👥</span>
                  View Our Clients
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}