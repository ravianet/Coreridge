"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ManufacturingPage() {
  const coreSolutions = [
    {
      title: "ERP Implementation",
      description: "Deploy and integrate enterprise resource planning systems that unify manufacturing operations across all locations.",
      icon: "📊",
      features: ["SAP & Oracle Implementations", "Inventory Management", "Production Planning", "Financial Integration"]
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility and optimization tools that enhance efficiency and reduce costs. Optimize cost, efficiency, and growth with comprehensive supply chain solutions.",
      icon: "🚚",
      features: ["Real-time Tracking", "Demand Forecasting", "Logistics Integration", "Supplier Collaboration"]
    },
    {
      title: "Industrial IoT",
      description: "Connect your manufacturing equipment and facilities with IoT solutions that provide actionable insights.",
      icon: "🏭",
      features: ["Sensor Integration", "Predictive Maintenance", "Energy Monitoring", "Quality Control"]
    },
    {
      title: "Process Automation",
      description: "Automate repetitive manufacturing processes to increase productivity, reduce errors, and improve safety.",
      icon: "⚙️",
      features: ["Robotics Integration", "Workflow Automation", "Quality Assurance", "Compliance Tracking"]
    },
    {
      title: "Quality Management Systems",
      description: "QMS solutions that ensure manufacturing quality standards are met consistently across all production lines.",
      icon: "✅",
      features: ["Change Control", "Incident Management", "CAPA Implementation", "Quality Planning"]
    },
    {
      title: "SAP Managed Services",
      description: "End-to-end SAP expertise across implementation, rollout, and managed services to guide your digital transformation.",
      icon: "💼",
      features: ["SAP S/4HANA Migration", "Global Rollouts", "Managed Cloud Services", "Process Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container-pro">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 bg-brand-navy/10 text-brand-navy rounded-full text-sm font-semibold mb-6">
            🏭 MANUFACTURING
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Smart Manufacturing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Transform your production facilities with Industry 4.0 technologies. Optimize operations, reduce costs, and scale your manufacturing capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
            >
              Discuss Your Operations
            </Link>
            <Link
              href="#solutions"
              className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-brand-navy font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
        </motion.div>

      {/* Core Solutions Grid */}
      <section id="solutions" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Manufacturing Technology</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Digital transformation solutions that help manufacturers compete in the modern industrial landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-brand-navy/50 transition-all duration-300 shadow-sm"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Ready to Modernize Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Our manufacturing technology experts help facilities implement Industry 4.0 solutions that boost productivity and efficiency.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-brand-navy text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300 text-lg"
          >
            Start Your Smart Factory Journey
          </Link>
        </motion.div>
      </section>
    </div>
    </div>
  );
}