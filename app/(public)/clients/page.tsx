"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Your client logos from your existing clientLogos array + all clients
const clientLogos = [
  { name: "Tlog", src: "/clients/tlog.png" },
  { name: "Natoli", src: "/clients/natoli.png" },
  { name: "Ami Polymers", src: "/logos/ami-logo.jpg" },
  { name: "Pacific", src: "/clients/pacific.png" },
  { name: "Skandanana", src: "/clients/skandana.png" },
  { name: "Sree Solutions", src: "/clients/sree-solutions.png" },
  { name: "Shapes Style Lounge", src: "/clients/shapes.png" },
  { name: "Cadmach", src: "/clients/cadmach-logo.png" },
  { name: "Leroy Merlin South Africa", src: "/logos/Leroy Merlin South Africa.svg" },
  { name: "DLF Hospitality", src: "/logos/DLF Hospitality.png" },
  { name: "Bundle Technologies", src: "/logos/Bundle Technologies.jpg" },
  // Your new clients added with their actual logo files
    { name: "New Client 1", src: "/clients/logo-1.png" },
    { name: "Sri Chaitanya", src: "/logos/Sri Chaitanya.jpg" },
    { name: "DistoPharma", src: "/logos/distoPharma.jpg" },
    { name: "Prozonic", src: "/logos/prozonic.svg" },];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Compact modern layout */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-12 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="inline-block px-8 py-4 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy-mid text-white rounded-full text-lg font-bold mb-6 shadow-xl shadow-brand-navy/30 border-2 border-white/30">
                🤝 Our Valued Clients
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                From enterprise corporations to innovative startups, we partner with organizations that demand excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
                >
                  Become a Client
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-gray-100 backdrop-blur-sm text-brand-navy font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
        </div>
      </motion.section>

      {/* Clients Grid Section - Seamlessly connected */}
      <section className="py-12 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">


          <div className="shadow-xl rounded-3xl overflow-hidden bg-white border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {clientLogos.map((client, index) => {
                const total = clientLogos.length;
                const isLastInRow = index % 3 === 2; // For desktop 3-column grid
                const isLastRow = index >= total - (total % 3 || 3); // Last row regardless of items
                return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className={`p-10 bg-white hover:bg-slate-50 transition-all duration-400 flex flex-col items-center justify-center min-h-[200px]
                  ${!isLastInRow ? 'border-r border-b border-gray-100' : (isLastRow ? 'border-b-0 border-r-0' : 'border-b border-gray-100 border-r-0')}
                  ${isLastRow && !isLastInRow ? 'border-r border-gray-100 border-b-0' : ''}`}
              >
              <img
                src={client.src}
                alt={client.name}
                className="h-28 w-full max-w-[240px] mb-2 object-contain"
              />
                <h3 className="text-base font-semibold text-slate-700 tracking-wide">{client.name}</h3>
              </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Ready to Join Our Client Family?
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Let's work together to transform your business with cutting-edge technology solutions.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-navy/30 transition-all duration-300"
            >
              Start Your Journey Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}