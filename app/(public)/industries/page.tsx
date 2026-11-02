"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IndustriesPage() {
  const industries = [
    {
      name: "Pharma & Life Sciences",
      icon: "💊",
      description: "Comprehensive IT and compliance solutions for pharmaceutical research, development, and manufacturing organizations.",
      href: "/industries/pharma",
      keyServices: ["Computer System Validation (CSV)", "GxP Compliance", "Laboratory Information Systems", "Regulatory Audit Support"]
    },
    {
      name: "Education",
      icon: "🎓",
      description: "Technology solutions tailored for educational institutions, from K-12 to universities and research centers.",
      href: "/industries/education",
      keyServices: ["Campus Infrastructure", "Student Information Systems", "Data Security & Privacy", "E-Learning Platforms"]
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Industrial IT solutions for modern manufacturing facilities, supporting Industry 4.0 and smart factory initiatives.",
      href: "/industries/manufacturing",
      keyServices: ["ERP Implementation", "Supply Chain Management", "Industrial IoT", "Process Automation"]
    },
    {
      name: "Enterprise",
      icon: "🏢",
      description: "Scalable enterprise solutions for large organizations across all sectors, supporting digital transformation at scale.",
      href: "/industries/enterprise",
      keyServices: ["Cloud Migration", "Cybersecurity", "Digital Transformation", "Managed IT Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-6 pt-10 sm:pt-12">
      <div className="container-pro">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12"
        >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Who we work with
            </p>
            <h1 className="mb-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-navy md:text-5xl lg:text-6xl">
              Industry-Specific Solutions
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Tailored technology and compliance solutions designed for the unique challenges of your industry.
            </p>
          </motion.div>

      {/* Industries Grid */}
      <section className="rounded-3xl bg-slate-50 px-4 py-8 sm:px-6 sm:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={industry.href}>
                  <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-navy/25 group-hover:shadow-xl group-hover:shadow-brand-navy/5">
                    <div className="relative flex min-h-40 items-end overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-mid to-brand-navy-light p-6 sm:min-h-48">
                      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-white/10 bg-white/[0.04]" />
                      <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-12 h-40 w-40 rounded-full border border-brand-orange-light/20" />
                      <div className="relative">
                        <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-sm">
                          {industry.icon}
                        </span>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">
                          {industry.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="mb-5 text-base leading-7 text-slate-600">{industry.description}</p>
                      <div className="mb-5">
                        <h4 className="mb-3 text-sm font-semibold text-brand-navy">Key services</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.keyServices.map((service, idx) => (
                            <span key={idx} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 font-semibold text-brand-navy transition-all group-hover:gap-3 group-hover:text-brand-orange">
                        Explore Solutions
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-6 py-8 shadow-[0_16px_40px_-32px_rgba(6,20,61,0.35)] sm:px-10 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-navy md:text-4xl">
            Not Sure Which Solution Fits Your Industry?
          </h2>
          <p className="mb-8 text-lg leading-8 text-slate-600">
            Our industry experts will assess your specific needs and recommend the perfect technology and compliance strategy for your organization.
          </p>
          <Link 
            href="/contact"
            className="cta-button px-7 py-3.5 text-base"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
      </div>
    </div>
  );
}