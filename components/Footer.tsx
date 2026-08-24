import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/logos/cr1.png" 
              alt="Coreridge Technologies Logo" 
              className="h-24 w-auto object-contain mb-4"
            />
            <p className="mt-2 text-gray-400 max-w-md">
              Architecting Next-Gen Enterprise Tech. Validating Core Systems. Your trusted partner for AI solutions, secure infrastructure, and fully compliant systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/company/about-us" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/company/alliances" className="text-gray-400 hover:text-cyan-400 transition-colors">Alliances</Link></li>
              <li><Link href="/company/clients" className="text-gray-400 hover:text-cyan-400 transition-colors">Clients</Link></li>
              <li><Link href="/company/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">© 2026 Coreridge Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}