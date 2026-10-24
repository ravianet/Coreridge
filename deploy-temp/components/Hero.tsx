"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const clientLogos = [
  { name: "Tlog", src: "/clients/tlog.png" },
  { name: "Natoli", src: "/clients/natoli.png" },
  { name: "Ami Polymers", src: "/logos/ami-logo.jpg" },
  { name: "Pacific", src: "/clients/pacific.png" },
  { name: "Skandanana", src: "/clients/skandana.png" },
  { name: "Sree Solutions", src: "/clients/sree-solutions.png" },
  { name: "Shapes Style Lounge", src: "/clients/shapes.png" },
  { name: "Cadmach", src: "/clients/cadmach-logo.png" }
];

export default function Hero() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-[#184491]/10 text-[#184491] rounded-full text-sm font-semibold mb-6">
            🚀 Enterprise Technology Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#184491] mb-6 leading-tight">
            Building technology
            <br />
            that moves businesses forward
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            End-to-End Technology Solutions, Robust Cyber Security, AI Innovation, and Regulatory Compliance for Modern Enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-[#184491] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#184491]/30 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-[#184491] font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}