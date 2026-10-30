"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    id: "ai-healthcare",
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Innovations",
    industry: "Healthcare",
    description: "We built a comprehensive AI-driven healthcare platform that enables predictive diagnostics, patient monitoring, and personalized treatment recommendations. The platform processes millions of patient records to deliver actionable insights to clinicians.",
    results: ["40% improvement in diagnostic accuracy", "60% reduction in patient wait times", "99.9% platform uptime"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/case-studies/ai-healthcare",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "fintech-mobile",
    title: "Mobile Banking Revolution",
    client: "Global Finance Corp",
    industry: "FinTech",
    description: "Developed a secure, feature-rich mobile banking application that serves over 5 million users. The app includes biometric authentication, real-time transaction alerts, and AI-powered financial planning tools.",
    results: ["5M+ active users", "98% user satisfaction rating", "300% increase in mobile transactions"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/case-studies/fintech-mobile",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    id: "supply-chain",
    title: "Smart Supply Chain Platform",
    client: "Logistics Leaders Inc",
    industry: "Supply Chain & Logistics",
    description: "Created an IoT-enabled supply chain management system that provides real-time tracking, predictive maintenance, and automated inventory optimization across global distribution networks.",
    results: ["35% reduction in logistics costs", "50% improvement in delivery accuracy", "24/7 global visibility"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/case-studies/supply-chain",
    gradient: "from-pink-500 to-rose-600"
  }
];

const clients = [
  { name: "MedTech Innovations", logoUrl: "https://www.giriraj.co.in/assets/img/logo.png" },
  { name: "Global Finance Corp", logoUrl: "https://cadmach.com/wp-content/uploads/2021/07/cadmach-logo-tagline.png" },
  { name: "Logistics Leaders Inc", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/sree-solutions.png" },
  { name: "Natoli", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/natoli.png" },
  { name: "Ami polymers", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/ami-logo.jpg" },
  { name: "Pacific", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/pacific.png" },
  { name: "Skandanana", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/skandana.png" },
  { name: "Shapes", logoUrl: "https://zitaniumtech.com/wp-content/uploads/2025/08/shapes.jpeg" },
  { name: "Sri Chaitanya Education Institutions", logoUrl: "https://srichaitanya.net/wp-content/uploads/2023/01/logo.png", website: "https://srichaitanya.net/" },
  { name: "Prozonicind", logoUrl: "https://prozonicind.com/wp-content/uploads/2024/01/logo.png", website: "https://prozonicind.com/" },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Our Work &
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-3xl mx-auto text-xl text-black"
          >
            Explore how we've helped enterprises across industries transform their businesses with innovative technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">Dive deep into our most impactful projects and see the results we deliver.</p>
          </motion.div>

          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-20`}></div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} bg-opacity-20 text-white text-sm font-medium mb-6`}>
                    {study.industry}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-black text-lg mb-6">{study.client}</p>
                  <p className="text-black mb-8 leading-relaxed">{study.description}</p>
                  <div className="space-y-4 mb-8">
                    {study.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.gradient}`}></div>
                        <span className="text-gray-200">{result}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={study.link}
                    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${study.gradient} rounded-xl font-semibold text-white hover:scale-105 transition-transform`}
                  >
                    View Full Case Study <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Clients */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">We're proud to partner with forward-thinking organizations across the globe.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
          >
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-white/5 rounded-xl flex justify-center items-center h-28 hover:bg-white/10 transition-colors border border-white/10 hover:border-cyan-400/30 cursor-pointer"
              >
                <img src={client.logoUrl} alt={client.name} className="max-h-12 w-auto object-contain" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-black mb-8">Let's discuss how we can help transform your business with innovative technology solutions.</p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-transform"
          >
            Schedule a Consultation <span>→</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}