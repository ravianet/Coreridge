"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EnterprisePage() {
  const coreSolutions = [
    {
      title: "Cloud Solutions",
      description: "End-to-end cloud infrastructure services including migration, management, and optimization for enterprise workloads.",
      icon: "☁️",
      features: ["AWS & Azure Migration", "Hybrid Cloud Strategy", "Cost Optimization", "Cloud Security"]
    },
    {
      title: "Managed Security Services",
      description: "We provide a wide range of Managed Security service offerings covering applications, networks, endpoints, data, and cloud environments.",
      icon: "🛡️",
      features: ["24/7 Security Operations", "Cloud Security Management", "Threat Intelligence", "Incident Response"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services that modernize legacy systems and processes across your organization. Transform your business with cutting-edge digital solutions.",
      icon: "🚀",
      features: ["Legacy Modernization", "Process Automation", "Employee Enablement", "Change Management"]
    },
    {
      title: "Infrastructure Managed Services",
      description: "Comprehensive IT infrastructure management that keeps your enterprise operations running smoothly 24/7.",
      icon: "⚙️",
      features: ["24/7 Monitoring", "Helpdesk Support", "Data Centre Management", "Performance Optimization"]
    },
    {
      title: "SAP Implementation & Services",
      description: "We deliver end-to-end SAP expertise across implementation, rollout, and managed services to guide your digital transformation.",
      icon: "💼",
      features: ["SAP Implementation", "Global Rollouts", "Managed Cloud Services", "S/4HANA Migration"]
    },
    {
      title: "IT Consulting & Implementation",
      description: "Strategic IT consulting to align your technology investments with business objectives and drive growth.",
      icon: "💡",
      features: ["IT Strategy Planning", "Digital Roadmapping", "Vendor Management", "ROI Analysis"]
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
            🏢 Enterprise
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Enterprise IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Strategic IT solutions designed for large enterprises, focusing on scalability, security, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
            >
              Discuss Your Enterprise Needs
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
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Enterprise Technology</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive IT solutions that scale to meet the needs of large, distributed organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Our enterprise technology team has the experience and expertise to support even the most complex organizational IT requirements.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-brand-navy text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300 text-lg"
          >
            Schedule Enterprise Discussion
          </Link>
        </motion.div>
      </section>
    </div>
    </div>
  );
}