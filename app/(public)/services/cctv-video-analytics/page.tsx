"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CCTVVideoAnalyticsPage() {
  const coreCapabilities = [
    {
      title: "Multi-Site CCTV Systems",
      description: "Plan and integrate camera networks across facilities, campuses, and industrial environments, with centralized viewing based on the selected video management system.",
      icon: "📹",
      features: ["Camera and VMS planning", "Centralized monitoring", "Storage and retention planning", "Access controls"]
    },
    {
      title: "Mapping & Site Visualization",
      description: "Where supported by the selected VMS and mapping platform, camera locations can be presented on site maps for easier navigation and incident response.",
      icon: "🗺️",
      features: ["Camera location views", "Map-linked video access", "Site zones", "Platform-dependent alerts"]
    },
    {
      title: "Video Analytics",
      description: "Use compatible analytics to help identify events such as people or vehicles in defined areas, subject to camera capability, site conditions, and privacy requirements.",
      icon: "🤖",
      features: ["Person and vehicle detection", "Perimeter events", "Occupancy insights", "Privacy-aware configuration"]
    },
    {
      title: "Flexible Video Architecture",
      description: "Choose on-premises, cloud, or hybrid components according to your security, bandwidth, retention, and operational requirements.",
      icon: "☁️",
      features: ["On-premises, cloud, or hybrid", "Edge processing where supported", "Retention controls", "Role-based access"]
    }
  ];

  const aiFeatures = [
    {
      title: "Perimeter Breach Detection",
      description: "Flag movement across configured boundaries and route alerts to the appropriate team where supported by the camera and VMS.",
      icon: "🚨"
    },
    {
      title: "Crowd Analysis",
      description: "Estimate people counts or occupancy in defined areas using compatible cameras and analytics.",
      icon: "👥"
    },
    {
      title: "Vehicle Tracking",
      description: "Support vehicle detection and traffic-flow review; number-plate recognition is subject to local law and project approval.",
      icon: "🚗"
    },
    {
      title: "Smoke & Fire Detection",
      description: "Video-based smoke or flame detection may supplement, but should not replace, certified fire detection and alarm systems.",
      icon: "🔥"
    },
    {
      title: "Loitering Detection",
      description: "Highlight prolonged presence in configured areas when supported by the selected analytics platform.",
      icon: "⏱️"
    },
    {
      title: "Fall Detection",
      description: "Use compatible video analytics to flag potential falls for human review and established emergency procedures.",
      icon: "⚠️"
    }
  ];

  const useCases = [
    {
      title: "Site & Perimeter Security",
      description: "Bring camera views and configured perimeter events together to help teams review activity across a facility.",
      focus: ["Site entrances", "Restricted areas", "Incident review", "Centralized views"]
    },
    {
      title: "Campus & Multi-Site Operations",
      description: "Organize camera locations and operational views for campuses or distributed sites, with mapping integrations where available.",
      focus: ["Site maps", "Multi-building views", "Role-based access", "Video retention"]
    },
    {
      title: "Workplace Safety",
      description: "Consider compatible video analytics for selected safety scenarios, alongside established procedures and certified safety systems.",
      focus: ["Defined safety zones", "Potential fall alerts", "Human review", "Existing alarm systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_5%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(ellipse_at_80%_95%,rgba(147,197,253,0.06),transparent_40%),radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)]"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-4 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-xs sm:text-sm font-semibold uppercase tracking-widest">
              Video surveillance & analytics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-5">
              CCTV & AI
              <span className="block bg-gradient-to-r from-brand-navy to-blue-700 bg-clip-text text-transparent">
                Video Analytics
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Design a more useful video security system with centralized camera management, optional map views, and analytics tailored to your site and privacy requirements.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="rounded-xl bg-gradient-to-r from-brand-navy to-blue-700 px-6 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-brand-navy/30">
                Discuss your requirements
              </Link>
              <Link href="#capabilities" className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-xl px-6 py-3 font-semibold text-brand-orange transition hover:bg-brand-orange/5">
                Explore capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities - Glass-effect cards */}
      <section id="capabilities" className="py-20 px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">A connected approach to video security</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Align cameras, video management, storage, and optional analytics around your operational and security needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white/85 backdrop-blur-xl rounded-3xl border border-gray-200/60 shadow-2xl shadow-brand-navy/10 hover:shadow-brand-navy/15 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-sm border border-brand-navy/30">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Integration Highlight */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Map-based <span className="bg-gradient-to-r from-brand-navy to-brand-navy-light bg-clip-text text-transparent">camera views</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Help operators orient themselves by linking camera locations to a site map or supported mapping platform. Available views and controls depend on your selected cameras, VMS, and integrations.
              </p>
              <ul className="space-y-4">
                {["Locate cameras by building or zone", "Open available live or recorded video", "Use configured zones and alerts", "Plan for access and retention needs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-brand-navy"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <div className="text-5xl mb-3">🗺️</div>
                  <p className="text-slate-700 font-medium">Illustrative site-map view</p>
                  <p className="text-sm text-slate-500 mt-2">Integration depends on the selected platform.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-9"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Advanced AI Analytics</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Select analytics for the scenarios that matter to your operation. Features depend on camera capability, environment, configuration, and applicable privacy rules.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-navy/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-9"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">Example applications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Illustrative scenarios, not customer case studies. Final scope, integrations, and analytics depend on site requirements and selected equipment.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-brand-navy mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.focus.map((item) => (
                    <span key={item} className="rounded-full border border-brand-navy/15 bg-brand-navy/5 px-3 py-1 text-xs text-brand-navy">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Ready to strengthen your security?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let\'s review your priorities and identify practical next steps for your environment.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg">
              Talk to our team
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}