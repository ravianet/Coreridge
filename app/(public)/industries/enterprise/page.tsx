"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import CapabilityHeroVisual from '../../../../components/CapabilityHeroVisual';

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
      features: ["Security operations planning", "Cloud Security Management", "Threat Intelligence", "Incident Response"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services that modernize legacy systems and processes across your organization. Transform your business with cutting-edge digital solutions.",
      icon: "🚀",
      features: ["Legacy Modernization", "Process Automation", "Employee Enablement", "Change Management"]
    },
    {
      title: "Infrastructure Managed Services",
      description: "IT infrastructure management to help keep your enterprise operations dependable and support business continuity.",
      icon: "⚙️",
      features: ["Infrastructure Monitoring", "Helpdesk Support", "Data Centre Management", "Performance Optimization"]
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
              🏢 ENTERPRISE
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Enterprise IT Solutions
            </h1>
            <p className="mb-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Strategic IT solutions designed for large enterprises, focusing on scalability, security, and digital transformation.
            </p>
            <div className="flex flex-col gap-3 min-[480px]:flex-row">
              <Link
                href="/contact"
                className="cta-button px-5"
              >
                Discuss Your Enterprise Needs
              </Link>
              <Link
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy/10 bg-white/80 px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Solutions
              </Link>
            </div>
          </div>
          <CapabilityHeroVisual domain="Enterprise" solutions={coreSolutions.slice(0, 3)} />
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
      <section className="px-6 py-8 md:py-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-surface relative isolate overflow-hidden rounded-[2rem] px-6 py-8 text-center sm:px-10 sm:py-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Our enterprise technology team has the experience and expertise to support even the most complex organizational IT requirements.
          </p>
          <Link 
            href="/contact"
            className="cta-button"
          >
            Schedule Enterprise Discussion
          </Link>
        </motion.div>
      </section>
    </div>
    </div>
  );
}