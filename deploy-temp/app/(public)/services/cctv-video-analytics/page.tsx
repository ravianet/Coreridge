"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CCTVVideoAnalyticsPage() {
  const coreCapabilities = [
    {
      title: "Large-Scale CCTV Implementations",
      description: "Enterprise-grade surveillance deployments supporting thousands of cameras across multi-site facilities, campuses, and industrial complexes with unified management.",
      icon: "📹",
      features: ["1000+ Camera Deployments", "Multi-Site Management", "Enterprise Storage", "99.9% Uptime SLA"]
    },
    {
      title: "Google Maps Integration",
      description: "Real-time camera visualization on interactive Google Maps with geolocation tracking, heat mapping, and instant camera access from any location worldwide.",
      icon: "🗺️",
      features: ["Interactive Map Interface", "Real-Time Camera Status", "Geofence Alerts", "Pan-Tilt-Zoom Control"]
    },
    {
      title: "AI-Powered Video Analytics",
      description: "Advanced computer vision algorithms that automatically detect, track, and alert on security events, anomalies, and business insights from video streams.",
      icon: "🤖",
      features: ["Object Detection", "Facial Recognition", "License Plate Reading", "Behavior Analysis"]
    },
    {
      title: "Cloud-Native Architecture",
      description: "Scalable cloud infrastructure that handles petabytes of video data with intelligent edge processing, bandwidth optimization, and global accessibility.",
      icon: "☁️",
      features: ["Edge Computing", "Bandwidth Optimization", "Cloud Storage", "Remote Access"]
    }
  ];

  const aiFeatures = [
    {
      title: "Perimeter Breach Detection",
      description: "Instant alerts for unauthorized access to restricted areas with accurate tracking and instant notification to security teams.",
      icon: "🚨"
    },
    {
      title: "Crowd Analysis",
      description: "Real-time people counting, density monitoring, and crowd behavior prediction to maintain safety and compliance.",
      icon: "👥"
    },
    {
      title: "Vehicle Tracking",
      description: "Automatic license plate recognition with vehicle tracking, parking management, and unauthorized vehicle detection.",
      icon: "🚗"
    },
    {
      title: "Smoke & Fire Detection",
      description: "AI-powered early warning system that detects smoke and fire hazards before traditional alarms, saving critical response time.",
      icon: "🔥"
    },
    {
      title: "Loitering Detection",
      description: "Identify individuals spending excessive time in sensitive areas for proactive security intervention.",
      icon: "⏱️"
    },
    {
      title: "Fall Detection",
      description: "Automatically detect worker falls in industrial environments for immediate emergency response activation.",
      icon: "⚠️"
    }
  ];

  const projectHighlights = [
    {
      title: "Smart City Surveillance",
      description: "Deployed 5,000+ AI cameras across urban infrastructure with real-time analytics and emergency response integration.",
      metrics: ["5,000+ Cameras", "500 sq km Coverage", "<100ms Latency", "99.98% Accuracy"]
    },
    {
      title: "Enterprise Campus Security",
      description: "End-to-end CCTV implementation for a 50,000-employee technology park with Google Maps visualization and zero-trust access.",
      metrics: ["12 Campus Locations", "2,500+ Cameras", "100% Mobile Access", "15-second Response"]
    },
    {
      title: "Manufacturing Complex",
      description: "Integrated surveillance and safety monitoring for a multi-billion dollar manufacturing facility with compliance reporting.",
      metrics: ["8 Production Lines", "800+ Cameras", "OSHA Compliant", "24/7 Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matches homepage gradient style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#184491]/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-5 py-2 mb-6 bg-[#184491]/10 border border-[#184491]/20 rounded-full text-[#184491] text-sm font-semibold uppercase tracking-widest">
              📹 Surveillance & Security
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#184491] mb-6">
              CCTV & AI
              <span className="block bg-gradient-to-r from-[#184491] to-blue-500 bg-clip-text text-transparent">
                Video Analytics
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Large-scale CCTV implementations with Google Maps integration and advanced AI-powered video analytics. 
              Transform your surveillance system from passive recording to proactive security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-4">End-to-End Surveillance Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From camera hardware installation to advanced AI analytics and map-based visualization, we deliver complete video surveillance ecosystems.
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
                className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#184491]/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-[#184491] mb-3">{capability.title}</h3>
                <p className="text-slate-600 mb-6">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-[#184491]/10 text-[#184491] rounded-full text-sm border border-[#184491]/30">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-6">
                Google Maps <span className="bg-gradient-to-r from-[#184491] to-blue-500 bg-clip-text text-transparent">Visualization</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                See every camera on an interactive Google Map interface. Click any camera to view live feeds, PTZ controls, and historical recordings. 
                Create geofences that trigger automatic alerts when boundaries are crossed.
              </p>
              <ul className="space-y-4">
                {["Real-time camera status overlays on maps", "One-click access to live video streams", "Geofence creation and breach alerts", "Heat maps for high-traffic areas", "Exportable location-based incident reports"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-[#184491]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-slate-700 font-medium">Interactive Map Interface</p>
                  <p className="text-sm text-slate-500 mt-2">All cameras visualized on Google Maps</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-4">Advanced AI Analytics</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our computer vision models process every video frame to automatically detect security events and generate actionable insights.
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
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#184491]/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#184491] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184491] mb-4">Proven Track Record</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Successfully delivered large-scale CCTV and analytics projects for enterprises, cities, and industrial complexes worldwide.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projectHighlights.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#184491] mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 text-sm">{project.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="px-2 py-1 bg-[#184491]/10 text-[#184491] rounded text-xs text-center border border-[#184491]/30">
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}