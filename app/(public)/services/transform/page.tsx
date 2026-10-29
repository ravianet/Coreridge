"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  FileText,
  ScanEye,
  Workflow,
} from "lucide-react";

export default function TransformPage() {
  const developmentServices = [
    {
      title: "Custom Web & Mobile Application Development",
      description: "Scalable Python (FastAPI/Django), React, Next.js, and Node.js solutions. High-availability architecture, REST/GraphQL APIs, and microservices.",
      icon: Code2,
      techStack: ["React", "Next.js", "Node.js", "Python", "FastAPI", "Django"]
    },
    {
      title: "Enterprise ERP & CRM Systems",
      description: "Tailored ERP solutions for Manufacturing, Distribution & Campus Operations. Automated workflows, inventory, billing, sales pipelines, and financial tracking.",
      icon: Boxes,
      features: ["Inventory Management", "Billing & Invoicing", "Sales Pipelines", "Financial Tracking", "Reporting & Analytics"]
    },
    {
      title: "End-to-End Supply Chain Solutions",
      description: "Optimize cost, efficiency, and growth with comprehensive supply chain solutions that streamline your entire operations.",
      icon: Workflow,
      features: ["Supply Chain Optimization", "Logistics Management", "Inventory Tracking", "Demand Forecasting", "Supplier Collaboration"]
    },
    {
      title: "SAP Implementation & Managed Services",
      description: "We deliver end-to-end SAP expertise across implementation, rollout, and managed services to guide your digital transformation.",
      icon: BriefcaseBusiness,
      features: ["SAP Implementation", "Global Rollouts", "Managed Cloud Services", "S/4HANA Migration", "Process Optimization"]
    }
  ];

  const aiServices = [
    {
      title: "Custom AI/ML Models",
      description: "Build custom machine learning models for predictive analytics and process automation.",
      icon: BrainCircuit
    },
    {
      title: "Predictive Analytics",
      description: "Leverage your data to forecast trends and make data-driven decisions.",
      icon: ChartNoAxesCombined
    },
    {
      title: "Computer Vision",
      description: "Automated Monitoring, Smart Attendance, and visual inspection systems.",
      icon: ScanEye
    },
    {
      title: "Intelligent Document Processing",
      description: "Automate data extraction from documents with AI-powered OCR and classification.",
      icon: FileText
    },
    {
      title: "Chatbot Integration",
      description: "Intelligent conversational agents for customer service and internal support.",
      icon: BrainCircuit
    },
    {
      title: "Process Automation",
      description: "Transform manual workflows into automated, efficient processes.",
      icon: Workflow
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 pb-14 pt-24 sm:px-6 md:pt-28 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold tracking-wide text-brand-navy">
            <BrainCircuit aria-hidden="true" className="h-4 w-4" />
            TRANSFORM · SOFTWARE & AI
          </span>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Make technology work
            <span className="block text-brand-navy">smarter for your business.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Move from manual work to connected digital operations with practical software, AI, and transformation services.
          </p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-navy px-6 py-3 font-semibold text-white transition hover:bg-brand-navy-dark">
            Explore your next step <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Custom Development Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 md:mb-12"
        >
          <h2 className="mb-6 text-2xl font-bold text-brand-navy md:text-3xl">Software & enterprise platforms</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {developmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
              >
                <service.icon aria-hidden="true" className="mb-4 h-6 w-6 text-brand-navy" />
                <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-5 leading-relaxed text-slate-600">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.techStack ? service.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-brand-navy/10 rounded-full text-brand-navy border border-brand-navy/30">
                      {tech}
                    </span>
                  )) : service.features?.map((feature) => (
                    <span key={feature} className="px-3 py-1 text-xs font-medium bg-brand-navy/10 rounded-full text-brand-navy border border-brand-navy/30">
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
          className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:mb-12 md:p-8"
        >
          <h2 className="mb-3 text-2xl font-bold text-brand-navy md:text-3xl">AI & intelligent automation</h2>
          <p className="mb-6 max-w-3xl leading-7 text-slate-600 md:text-lg">
            Identify focused opportunities to apply analytics, computer vision, and automation to everyday workflows.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((ai, index) => (
              <motion.div
                key={ai.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-navy/30"
              >
                <ai.icon aria-hidden="true" className="mb-3 h-5 w-5 text-brand-navy" />
                <h3 className="mb-2 text-base font-bold text-slate-900">{ai.title}</h3>
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
          className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:mb-12 md:p-8"
        >
          <h2 className="mb-3 text-2xl font-bold text-brand-navy md:text-3xl">Business digital transformation</h2>
          <p className="mb-6 max-w-3xl leading-7 text-slate-600 md:text-lg">
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
          className="rounded-2xl bg-brand-navy px-6 py-10 text-center md:py-12"
        >
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready to transform your business?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-lg text-blue-100">
            Let's discuss how our digital transformation services can help you innovate and grow in the digital age.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-navy transition hover:bg-blue-50"
          >
            Start a conversation <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}