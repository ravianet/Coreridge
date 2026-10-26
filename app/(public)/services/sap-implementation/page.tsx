"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SAPImplementationPage() {
  const sapServices = [
    {
      title: "SAP S/4HANA Migration",
      description: "Seamlessly migrate your legacy SAP systems to S/4HANA with minimal disruption to your business operations.",
      icon: "💼",
      features: ["Legacy System Assessment", "Migration Planning", "Data Conversion", "Go-live Support"]
    },
    {
      title: "Global Rollouts",
      description: "Execute successful SAP rollouts across multiple geographies and business units.",
      icon: "🌍",
      features: ["Multi-country Deployment", "Localization Compliance", "Change Management", "Training Programs"]
    },
    {
      title: "Managed Cloud Services",
      description: "Comprehensive managed services for your SAP landscape in the cloud environment.",
      icon: "☁️",
      features: ["24/7 Monitoring", "Performance Optimization", "Security Management", "Regular Updates"]
    },
    {
      title: "Process Optimization",
      description: "Optimize your SAP business processes to maximize ROI and operational efficiency.",
      icon: "⚙️",
      features: ["Process Mapping", "Gap Analysis", "Best Practices Implementation", "Continuous Improvement"]
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
              💼 SAP Implementation & Rollout
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6">
              End-to-End SAP Expertise
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              We deliver end-to-end SAP expertise across implementation, rollout, and managed services to guide your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-[#184491] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
              >
                Discuss Your SAP Needs
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-[#184491]/30 hover:bg-[#184491]/5 transition-all duration-300"
              >
                View Services
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">SAP Implementation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SAP solutions to help your organization modernize and scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {sapServices.map((solution, index) => (
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
            Ready to Transform with SAP?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our SAP experts have decades of experience implementing and managing SAP landscapes for enterprises worldwide.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#184491] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300 text-lg"
          >
            Start Your SAP Journey
          </Link>
        </motion.div>
      </section>
    </div>
  );
}