"use client";

import Hero from "../../components/Hero";
import PillarMatrix from "../../components/PillarMatrix";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900 overflow-hidden">
      <Hero />

      {/* Video Showcase Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                poster="/video-poster.jpg"
              >
                <source src="/logo-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5-Pillar Matrix Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive enterprise technology solutions designed to power your digital transformation.
            </p>
          </div>
          <PillarMatrix />
          <div className="text-center mt-10">
            <a 
              href="/services" 
              className="inline-block px-8 py-4 glass-card rounded-xl font-semibold text-lg border border-white/20 hover:border-cyan-400/60 transition-all glow-border"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-10 md:p-14 bg-gradient-to-r from-cyan-500/10 to-violet-500/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-10">Let's discuss how we can help transform your enterprise technology.</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl font-semibold text-xl text-white hover:shadow-2xl hover:shadow-cyan-500/25 transition-all"
            >
              Contact Us 🚀
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}