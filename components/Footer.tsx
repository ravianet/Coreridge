import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#153a7a] border-t border-blue-800 py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/logos/cr1.png" 
                alt="Coreridge Technologies Logo" 
                className="h-10 w-auto object-contain mb-2"
              />
              <p className="mt-1 text-blue-200 text-sm max-w-md">
                Build, transform, secure, and validate the technology your
                business depends on.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-2 text-sm">Quick Links</h4>
              <ul className="space-y-1.5">
                <li><Link href="/" className="text-blue-200 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link href="/about" className="text-blue-200 hover:text-white transition-colors text-sm">About</Link></li>
                <li><Link href="/services" className="text-blue-200 hover:text-white transition-colors text-sm">Services</Link></li>
                <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-medium mb-2 text-sm">Company</h4>
              <ul className="space-y-1.5">
                <li><Link href="/company/about-us" className="text-blue-200 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link href="/company/alliances" className="text-blue-200 hover:text-white transition-colors text-sm">Partners</Link></li>
                <li><Link href="/company/clients" className="text-blue-200 hover:text-white transition-colors text-sm">Clients</Link></li>
                <li><Link href="/company/careers" className="text-blue-200 hover:text-white transition-colors text-sm">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-blue-200 text-sm">© 2026 Coreridge Technologies. All rights reserved.</p>
            <p className="text-blue-300/80 text-sm">
              Designed with ❤️ by <span className="font-medium text-blue-100 hover:text-white transition-colors duration-300">the CoreRidge Team</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}