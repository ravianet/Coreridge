"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EducationPage() {
  const coreSolutions = [
    {
      title: "Campus IT Infrastructure",
      description: "Comprehensive technology infrastructure for educational institutions including network deployment, Wi-Fi coverage, and device management.",
      icon: "🏫",
      features: ["Campus-wide Wi-Fi 6", "Structured Cabling", "MDM for Student Devices", "Cloud Integration"]
    },
    {
      title: "Student Information Systems",
      description: "Modern SIS platforms that streamline administration, enrollment, grading, and communication across campus.",
      icon: "📚",
      features: ["Enrollment Management", "Gradebook Integration", "Student Portal", "Parent Communication"]
    },
    {
      title: "Data Security & Privacy",
      description: "Protect sensitive student data with comprehensive security solutions that maintain compliance with educational privacy regulations.",
      icon: "🔐",
      features: ["FERPA Compliance", "Student Data Protection", "Access Controls", "Security Audits"]
    },
    {
      title: "E-Learning Platforms",
      description: "Deploy and maintain robust online learning environments that support hybrid and remote education models.",
      icon: "💻",
      features: ["LMS Implementation", "Video Conferencing", "Virtual Labs", "Content Management"]
    },
    {
      title: "Research Computing & HPC",
      description: "High-performance computing infrastructure for academic research, enabling complex simulations and data analysis.",
      icon: "🔬",
      features: ["HPC Cluster Setup", "Research Data Storage", "Grid Computing", "Collaborative Platforms"]
    },
    {
      title: "Campus Management ERP",
      description: "Integrated ERP solutions for educational institutions that unify administrative, academic, and financial operations.",
      icon: "🏢",
      features: ["Finance & Accounting", "Human Resource Management", "Library Management", "Examination Automation"]
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#184491]/5 to-blue-400/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#184491]/10 text-[#184491] rounded-full text-sm font-semibold mb-6">
              🎓 Education
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6">
              Technology for Learning
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              IT solutions designed for educational institutions, from K-12 campuses to universities and research centers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#184491] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
              >
                Discuss Your Campus Needs
              </Link>
              <Link 
                href="#solutions"
                className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Solutions Grid */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#184491] mb-4">Education-Focused Solutions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Technology that enhances learning while simplifying administration and maintaining compliance.
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
                className="bg-gray-50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300"
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
      <section className="py-24 px-6 bg-[#184491]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Modernize Your Campus?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our education technology experts understand the unique needs of academic institutions and can help transform your campus IT.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-[#184491] font-semibold rounded-xl hover:shadow-lg hover:shadow-white/30 transition-all duration-300 text-lg"
          >
            Start Your Campus Transformation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}