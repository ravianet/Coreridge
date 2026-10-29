"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PharmaPage() {
  const coreSolutions = [
    {
      title: "Computer System Validation (CSV)",
      description: "Complete validation services for all pharmaceutical systems ensuring FDA, GxP, and 21 CFR Part 11 compliance.",
      icon: "✅",
      features: ["ERP System Validation", "LIMS Implementation", "QMS Management", "Electronic Batch Records"]
    },
    {
      title: "Laboratory IT Infrastructure",
      description: "Reliable infrastructure solutions supporting research, development, and quality control laboratories.",
      icon: "🔬",
      features: ["Instrument Integration", "Data Acquisition Systems", "Cold Chain Monitoring", "Laboratory Security"]
    },
    {
      title: "Regulatory Compliance",
      description: "Expert guidance to maintain compliance with global pharmaceutical regulations and pass audits with confidence.",
      icon: "📋",
      features: ["FDA 21 CFR Part 11", "EU Annex 11", "GxP Alignment", "ALCOA+ Data Integrity"]
    },
    {
      title: "Cybersecurity for Pharma",
      description: "Specialized security solutions protecting intellectual property, clinical data, and manufacturing systems.",
      icon: "🛡️",
      features: ["Clinical Trial Data Protection", "IP Protection", "Manufacturing Security", "Supply Chain Integrity"]
    },
    {
      title: "Quality Management Systems (QMS)",
      description: "QMS is a set of procedures and processes that ensure the quality of pharmaceutical products. Comprehensive quality management solutions for pharmaceutical manufacturing and distribution.",
      icon: "📊",
      features: ["Change Control", "Incident Management", "CAPA Implementation", "Quality Planning"]
    },
    {
      title: "SAP Services for Pharma",
      description: "We deliver end-to-end SAP expertise across implementation, rollout, and managed services. Guide your organization through high-performing digital E2E processes using SAP software & technology.",
      icon: "💼",
      features: ["SAP Implementation", "Global Rollouts", "Managed Cloud Services", "S/4HANA Migration"]
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise ERP Implementation",
      client: "Global Pharmaceutical Manufacturer",
      outcome: "Successful SAP S/4HANA deployment with full CSV compliance",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Laboratory Modernization",
      client: "Biotech Research Organization",
      outcome: "Integrated LIMS platform supporting 500+ scientists across 3 locations",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351967?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/5 to-blue-400/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-brand-navy/10 text-brand-navy rounded-full text-sm font-semibold mb-6">
              💊 Pharma & Life Sciences
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
              Technology for Life Sciences
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              Comprehensive IT and compliance solutions supporting pharmaceutical research, development, and manufacturing worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
              >
                Discuss Your Project
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-brand-navy font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Challenges & Solutions Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Understanding Pharmaceutical Challenges</h2>
              <p className="text-lg text-gray-700 mb-6">
                Life sciences organizations face unique challenges combining cutting-edge research with strict regulatory requirements. Our solutions are designed specifically to address these complex needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Maintaining data integrity across all systems and locations",
                  "Meeting strict regulatory requirements for clinical trials",
                  "Protecting valuable intellectual property and research data",
                  "Scaling IT infrastructure as organizations grow and acquire new entities",
                  "Digital transformation while maintaining continuous compliance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-6 h-6 bg-brand-navy/10 text-brand-navy rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Pharmaceutical laboratory"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section id="solutions" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pharma-Specific Solutions</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Tailored technology and compliance services that understand the unique requirements of life sciences organizations.
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

      {/* Case Studies */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              See how we've helped pharmaceutical organizations achieve their technology and compliance goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              >
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-brand-navy mb-3">{study.client}</p>
                  <p className="text-gray-700">{study.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Pharma Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our team of pharma IT and compliance experts is ready to help your organization navigate the complex landscape of life sciences technology.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-brand-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 text-lg"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}