"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AviationPage() {
  const coreSolutions = [
    {
      title: "Airport Vision AI & Security",
      description: "Large-scale computer vision and surveillance systems for airport security, passenger monitoring, and facility management - with proven experience deploying 9,400+ cameras across 600+ locations.",
      icon: "📹",
      features: ["WebRTC Video Streaming", "Facial Recognition", "Anomaly Detection", "FFmpeg Video Processing"]
    },
    {
      title: "Aviation Data Integration",
      description: "Enterprise-grade data integration platforms for commercial airlines and aerospace manufacturers, handling complex aircraft diagnostic and fleet management data streams.",
      icon: "✈️",
      features: ["ATA SPEC2000 Compliance", "MuleSoft API Architecture", "Real-time Data Streaming", "Global Airline Connectivity"]
    },
    {
      title: "Enterprise IT Infrastructure",
      description: "Azure AD, Office 365, and network infrastructure management supporting 50,000+ users with zero-downtime SLAs - scalable for large airline and MRO organizations.",
      icon: "☁️",
      features: ["Azure Cloud Management", "50K+ User Support", "Fortinet Security", "Meraki Networking"]
    },
    {
      title: "Big Data & Analytics",
      description: "Advanced data analytics platforms leveraging Databricks and Teradata to process massive aviation datasets for predictive maintenance and operational insights.",
      icon: "📊",
      features: ["Databricks Implementations", "Predictive Maintenance", "Flight Data Analytics", "Teradata Big Data Environments"]
    },
    {
      title: "AI-Powered Operations",
      description: "Custom AI solutions for aviation operations including predictive maintenance, demand forecasting, and network anomaly detection using Python and machine learning.",
      icon: "🤖",
      features: ["Python AI/ML Development", "Predictive Maintenance Models", "Traffic Anomaly Detection", "Django/Flask Apps"]
    },
    {
      title: "Database Management",
      description: "End-to-end DBA services supporting complex aviation databases including SQL Server, Oracle, Snowflake, and MongoDB for fleet and maintenance data.",
      icon: "🗄️",
      features: ["SQL Server Optimization", "Oracle Database Management", "Snowflake Cloud Data Warehouses", "Cosmos DB Solutions"]
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
              ✈️ AVIATION & AEROSPACE
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
              Aviation Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
              39+ combined years of experience delivering mission-critical systems for aviation leaders and global airline networks. Our founders bring deep expertise in aviation systems, AI engineering, and enterprise IT infrastructure to power commercial aerospace operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
              >
                Discuss Your Aviation Projects
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

      {/* Core Solutions Grid */}
      <section id="solutions" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Aerospace Technology</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Deep domain expertise in aviation and aerospace sectors, leading critical data-acquisition, compliance, and reliability frameworks for major aerospace and airline partners.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <span className="text-5xl mb-6 block">{solution.icon}</span>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-brand-navy rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Boeing & Global Airlines Section */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-7xl mx-auto"
        >
          <div className="shadow-xl rounded-3xl overflow-hidden bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy-mid border border-white/20 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Trusted by Aviation Leaders</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Our team has delivered enterprise solutions for major international airlines including United Airlines, Singapore Airlines, LATAM, and many more global carriers.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-navy text-sm font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Aviation Transformation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}