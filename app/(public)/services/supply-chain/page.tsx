"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        className="relative pt-24 pb-12 md:pt-28 md:pb-14 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#184491]/5 to-blue-400/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#184491]/10 text-[#184491] rounded-full text-sm font-semibold mb-6">
              🔗 Supply Chain Solutions
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6">
              Comprehensive Supply Chain Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              Optimize cost, efficiency, and growth with comprehensive supply chain solutions that streamline your entire operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-[#184491] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
              >
                Optimize Your Supply Chain
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-[#184491]/30 hover:bg-[#184491]/5 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Services Grid */}
      <section id="solutions" className="py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">End-to-End Supply Chain</h2>
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
                className="bg-gray-50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-[#184491] mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#184491]/10 text-[#184491] rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-16 px-6 bg-gradient-to-r from-[#184491]/10 to-blue-400/10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-6">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our supply chain experts help organizations streamline operations, reduce costs, and improve customer satisfaction.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#184491] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300 text-lg"
          >
            Start Your Supply Chain Transformation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}