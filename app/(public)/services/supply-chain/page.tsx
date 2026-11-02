"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import CapabilityHeroVisual from '../../../../components/CapabilityHeroVisual';

export default function SupplyChainPage() {
  const supplyChainServices = [
    {
      title: "Supply Chain Optimization",
      description: "Optimize your entire supply chain network to reduce costs and improve efficiency across all operations.",
      icon: "🔗",
      features: ["Network Design", "Cost Analysis", "Performance Metrics", "Continuous Improvement"]
    },
    {
      title: "Logistics Management",
      description: "End-to-end logistics solutions that streamline transportation, warehousing, and distribution.",
      icon: "🚚",
      features: ["Transportation Management", "Warehouse Operations", "Last-mile Delivery", "Freight Optimization"]
    },
    {
      title: "Inventory Tracking",
      description: "Real-time inventory visibility and management across all your storage locations.",
      icon: "📦",
      features: ["Real-time Tracking", "Stock Optimization", "Demand Sensing", "Replenishment Automation"]
    },
    {
      title: "Demand Forecasting",
      description: "Advanced analytics and forecasting to predict demand and optimize inventory levels.",
      icon: "📊",
      features: ["Predictive Analytics", "Machine Learning", "Market Analysis", "Seasonal Planning"]
    },
    {
      title: "Supplier Collaboration",
      description: "Strengthen relationships with suppliers through integrated collaboration platforms.",
      icon: "🤝",
      features: ["Supplier Portal", "Performance Tracking", "Risk Management", "Strategic Partnerships"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-8 md:py-10 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/5 to-blue-400/5" />
        <div className="mx-auto relative z-10 grid max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-left"
          >
            <span className="mb-5 inline-flex rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
              🔗 Supply Chain Solutions
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Comprehensive Supply Chain Solutions
            </h1>
            <p className="mb-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Optimize cost, efficiency, and growth with comprehensive supply chain solutions that streamline your entire operations.
            </p>
            <div className="flex flex-col gap-3 min-[480px]:flex-row">
              <Link 
                href="/contact"
                className="cta-button px-5"
              >
                Optimize Your Supply Chain
              </Link>
              <Link 
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
          <CapabilityHeroVisual domain="Supply Chain" solutions={supplyChainServices.slice(0, 3)} />
        </div>
      </motion.section>

      {/* Core Services Grid */}
      <section id="solutions" className="py-14 md:py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">End-to-End Supply Chain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your supply chain into a competitive advantage with our comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {supplyChainServices.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-brand-navy/50 transition-all duration-300"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Figma Style */}
      <section className="px-6 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-surface rounded-3xl p-7 text-center sm:p-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our supply chain experts help organizations streamline operations, reduce costs, and improve customer satisfaction.
            </p>
            <Link
              href="/contact"
              className="cta-button"
            >
              Start Your Supply Chain Transformation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}