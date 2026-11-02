"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import CapabilityHeroVisual from '../../../../components/CapabilityHeroVisual';

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
    <div className="min-h-screen bg-white pt-8 pb-6">
      <div className="container-pro">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 grid items-center gap-8 rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-[#F8FAFD] to-[#EAF1F8] p-6 shadow-xl shadow-brand-navy/[0.06] sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-10"
        >
          <div>
            <span className="mb-5 inline-flex items-center rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
              🏭 MANUFACTURING
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Smart Manufacturing Solutions
            </h1>
            <p className="mb-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Transform your production facilities with Industry 4.0 technologies. Optimize operations, reduce costs, and scale your manufacturing capabilities.
            </p>
            <div className="flex flex-col gap-3 min-[480px]:flex-row">
              <Link
                href="/contact"
                className="cta-button px-5"
              >
                Discuss Your Operations
              </Link>
              <Link
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Solutions
              </Link>
            </div>
          </div>
          <CapabilityHeroVisual domain="Manufacturing" solutions={coreSolutions.slice(0, 3)} />
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
      <section className="px-6 py-8 md:py-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-surface relative isolate overflow-hidden rounded-[2rem] px-6 py-8 text-center sm:px-10 sm:py-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Ready to Modernize Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Our manufacturing technology experts help facilities implement Industry 4.0 solutions that boost productivity and efficiency.
          </p>
          <Link 
            href="/contact"
            className="cta-button"
          >
            Start Your Smart Factory Journey
          </Link>
        </motion.div>
      </section>
    </div>
    </div>
  );
}