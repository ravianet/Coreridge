"use client";
import { motion } from "framer-motion";

export default function TransformPage() {
  const developmentServices = [
    {
      title: "Custom Web & Mobile Application Development",
      description: "Scalable Python (FastAPI/Django), React, Next.js, and Node.js solutions. High-availability architecture, REST/GraphQL APIs, and microservices.",
      icon: "🌐",
      techStack: ["React", "Next.js", "Node.js", "Python", "FastAPI", "Django"]
    },
    {
      title: "Enterprise ERP & CRM Systems",
      description: "Tailored ERP solutions for Manufacturing, Distribution & Campus Operations. Automated workflows, inventory, billing, sales pipelines, and financial tracking.",
      icon: "📊",
      features: ["Inventory Management", "Billing & Invoicing", "Sales Pipelines", "Financial Tracking", "Reporting & Analytics"]
    },
    {
      title: "End-to-End Supply Chain Solutions",
      description: "Optimize cost, efficiency, and growth with comprehensive supply chain solutions that streamline your entire operations.",
      icon: "🔗",
      features: ["Supply Chain Optimization", "Logistics Management", "Inventory Tracking", "Demand Forecasting", "Supplier Collaboration"]
    },
    {
      title: "SAP Implementation & Managed Services",
      description: "We deliver end-to-end SAP expertise across implementation, rollout, and managed services to guide your digital transformation.",
      icon: "💼",
      features: ["SAP Implementation", "Global Rollouts", "Managed Cloud Services", "S/4HANA Migration", "Process Optimization"]
    }
  ];

  const aiServices = [
    {
      title: "Custom AI/ML Models",
      description: "Build custom machine learning models for predictive analytics and process automation.",
      icon: "🤖"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage your data to forecast trends and make data-driven decisions.",
      icon: "📈"
    },
    {
      title: "Computer Vision",
      description: "Automated Monitoring, Smart Attendance, and visual inspection systems.",
      icon: "👁️"
    },
    {
      title: "Intelligent Document Processing",
      description: "Automate data extraction from documents with AI-powered OCR and classification.",
      icon: "📄"
    },
    {
      title: "Chatbot Integration",
      description: "Intelligent conversational agents for customer service and internal support.",
      icon: "💬"
    },
    {
      title: "Process Automation",
      description: "Transform manual workflows into automated, efficient processes.",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-6xl mb-6 block">🚀</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              TRANSFORM — Digitalization & AI Solutions
            </span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Elevating operational efficiency through software innovation and modern web technologies. Transform your business with cutting-edge digital solutions.
          </p>
        </motion.div>

        {/* Custom Development Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-10">Custom Web & Mobile Development</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-bold text-[#184491] mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.techStack ? service.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#184491]/10 rounded-full text-[#184491] border border-[#184491]/30">
                      {tech}
                    </span>
                  )) : service.features?.map((feature) => (
                    <span key={feature} className="px-3 py-1 text-xs font-medium bg-[#184491]/10 rounded-full text-[#184491] border border-[#184491]/30">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI & Innovation Section */}
        <motion.section
          id="ai"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-16 border border-gray-200 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-6">Artificial Intelligence & Innovation</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Harness the power of artificial intelligence to transform your business operations. Our AI solutions deliver measurable business impact and competitive advantage.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((ai, index) => (
              <motion.div
                key={ai.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <span className="text-3xl mb-3 block">{ai.icon}</span>
                <h3 className="text-lg font-bold text-[#184491] mb-2">{ai.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{ai.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Digital Transformation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-16 border border-gray-200 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-6">Business Digital Transformation</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Moving legacy manual workflows to secure, cloud-hosted digital platforms. We help you make a smooth transition to modern, digital-first operations while maintaining business continuity.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {["Legacy Assessment", "Cloud Migration", "Process Re-engineering", "Change Management"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center"
              >
                <span className="text-slate-700 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center bg-white rounded-2xl p-12 border border-gray-200 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital transformation services can help you innovate and grow in the digital age.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#184491] to-[#153a73] rounded-xl font-semibold text-lg text-white hover:scale-105 transition-transform"
          >
            Start Your Transformation
          </a>
        </motion.div>
      </div>
    </div>
  );
}