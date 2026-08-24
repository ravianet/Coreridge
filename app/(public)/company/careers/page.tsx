"use client";
import { motion } from "framer-motion";

const openings = [
  { title: "Senior AI/ML Engineer", location: "Remote / New York", type: "Full-time", department: "Engineering" },
  { title: "Cybersecurity Analyst", location: "Boston, MA", type: "Full-time", department: "Security" },
  { title: "Cloud Solutions Architect", location: "Remote", type: "Full-time", department: "Infrastructure" },
  { title: "CSV Validation Specialist", location: "Philadelphia, PA", type: "Full-time", department: "Compliance" },
  { title: "Full Stack Developer", location: "Austin, TX", type: "Full-time", department: "Engineering" },
  { title: "Technical Project Manager", location: "Remote", type: "Full-time", department: "Project Management" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-navy-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build the future of enterprise technology. We're always looking for talented individuals to join our growing team.
          </p>
        </motion.div>

        {/* Why Work Here */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Coreridge?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Competitive Benefits", desc: "Comprehensive health, dental, and vision insurance plus 401k matching.", icon: "🏥" },
              { title: "Flexible Work", desc: "Remote-first culture with flexible hours and unlimited PTO.", icon: "🏠" },
              { title: "Growth Opportunities", desc: "Continuous learning budget and clear career progression paths.", icon: "📈" },
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <span className="text-5xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:scale-[1.01] transition-transform"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span className="text-cyan-400">{job.department}</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg font-medium hover:opacity-90 transition-opacity text-center whitespace-nowrap"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}