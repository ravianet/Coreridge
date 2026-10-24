"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for modern navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Managed Services Data (following proventech.in's service framework)
  const managedServices = [
    { name: "Infrastructure Managed Services", href: "/services/build" },
    { name: "IT Consulting & Implementation", href: "/services/transform" },
    { name: "SAP Implementation & Rollout", href: "/services/sap-implementation" },
    { name: "Supply Chain Solutions", href: "/services/supply-chain" },
    { name: "Quality Management Systems (QMS)", href: "/services/quality-management" },
    { name: "Change Control & CAPA", href: "/services/change-control" },
    { name: "Computer System Validation (CSV)", href: "/services/computer-system-validation" },
    { name: "CCTV & AI Video Analytics", href: "/services/cctv-video-analytics" }
  ];

  // Industry Verticals (expanded from reference sites - corrected to match actual app structure)
  const industries = [
    { 
      name: "Aviation & Aerospace", 
      href: "/industries/aviation",
      icon: "✈️",
      description: "Mission-critical IT solutions for commercial aviation & aerospace"
    },
    { 
      name: "Pharma & Life Sciences", 
      href: "/industries/pharma",
      icon: "💊",
      description: "GxP-compliant IT solutions for pharmaceutical industry"
    },
    { 
      name: "Education & Research", 
      href: "/industries/education",
      icon: "🎓",
      description: "EdTech infrastructure for academic institutions"
    },
    { 
      name: "Manufacturing", 
      href: "/industries/manufacturing",
      icon: "🏭",
      description: "Industry 4.0 smart manufacturing solutions"
    },
    { 
      name: "Enterprise & BFSI", 
      href: "/industries/enterprise",
      icon: "🏦",
      description: "Banking, financial services & enterprise solutions"
    }
  ];

  const mainNavLinks = [
           { name: "About Us", href: "/company/about-us" },
           { name: "Why CoreRidge", href: "/company/why-coreridge" },
           { name: "Clients", href: "/clients" },
           { name: "Partners", href: "/company/alliances" },
           { name: "Contact", href: "/contact" },
           { name: "Get Started", href: "/start" },
         ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <style jsx>{`
        @keyframes shimmerBG {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    <nav className={`fixed top-0 w-full z-[9999] bg-white/70 backdrop-blur-2xl transition-all duration-500 shadow-xl py-2 border-b border-slate-200/50 ${scrolled ? 'shadow-2xl shadow-slate-200/60 py-1' : ''}`}>
      <div className="container-pro">
        <div className="flex flex-row items-center h-12 md:h-14 py-0 transition-all duration-300">
          <Link href="/" className="flex items-center group transition-all duration-300 hover:scale-[1.02] mr-auto">
                    <div className="relative">
                      <img 
                        src="/logos/cr1.png" 
                        alt="Coreridge Technologies Logo" 
                        className="h-8 md:h-10 w-auto object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                      />
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-[#184491]/0 group-hover:bg-[#184491]/5 rounded-xl blur-xl transition-all duration-500 -z-10 scale-110" />
                    </div>
                  </Link>

                  {/* Mobile Menu Toggle */}
                  <button 
                    className="md:hidden text-slate-800"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>

                  {/* Universal Navigation - Works on all devices */}
                  <div className={`${mobileMenuOpen ? 'absolute top-full left-0 w-full flex flex-col px-6 pb-6 bg-white border-b border-slate-200 shadow-xl' : 'hidden'} md:relative md:flex md:flex-row md:items-center md:gap-x-1`}>

            {/* Modern Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`px-2.5 py-1 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-lg ${
                        servicesOpen 
                          ? "text-slate-900 bg-slate-100" 
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      }`}>
                Services
                <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 pt-3 w-auto min-w-[300px] bg-white rounded-2xl border border-slate-200 p-4 shadow-2xl shadow-slate-200/50 z-[10000] animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="mb-3 pb-3 border-b border-slate-200">
                    <p className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">Our Services</p>
                  </div>
                  <div className="space-y-0.5">
                      {managedServices.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-gradient-to-r from-primary-600/10 to-primary-400/10 border border-transparent hover:border-primary-600/30 transition-all duration-300 cursor-pointer group/item"
                          onClick={() => setServicesOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600/20 to-primary-400/20 flex items-center justify-center text-sm group-hover/item:scale-110 transition-transform duration-300">
                            {index === 0 ? "🖥️" : index === 1 ? "💡" : index === 2 ? "💼" : index === 3 ? "🔗" : index === 4 ? "✅" : "📋"}
                          </span>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <Link 
                   href="/services"
                   className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg shadow-primary-600/25"
                   onClick={() => setServicesOpen(false)}
                 >
                   View All Services →
                 </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Modern Industries Mega-Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className={`px-2.5 py-1 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-lg ${
                        industriesOpen 
                          ? "text-slate-900 bg-slate-100" 
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      }`}>
                Industries
                <svg className={`w-4 h-4 transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-0 pt-3 w-auto min-w-[300px] bg-white rounded-2xl border border-slate-200 p-4 shadow-2xl shadow-slate-200/50 z-[10000] animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="mb-3 pb-3 border-b border-slate-200">
                    <p className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">Industry Solutions</p>
                  </div>
                  <div className="space-y-0.5">
                      {industries.map((industry, index) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-gradient-to-r from-primary-600/10 to-primary-400/10 border border-transparent hover:border-primary-600/30 transition-all duration-300 cursor-pointer group/item"
                          onClick={() => setIndustriesOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600/20 to-primary-400/20 flex items-center justify-center text-sm group-hover/item:scale-110 transition-transform duration-300">
                              {industry.icon}
                            </span>
                          <div>
                            <span className="text-sm font-medium text-slate-900 block">{industry.name}</span>
                            <p className="text-xs text-slate-500 mt-0.5">{index === 0 ? 'Mission-critical IT solutions' : index === 1 ? 'GxP-compliant IT solutions' : index === 2 ? 'EdTech infrastructure' : index === 3 ? 'Industry 4.0 smart solutions' : industry.description}</p>
                          </div>
                          <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                      <Link 
                        href="/industries" 
                        className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg shadow-primary-600/25"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        View All Industries →
                      </Link>
                  </div>
                </div>
              )}
            </div>

            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-base font-medium transition-all duration-300 rounded-lg ${
                  link.name === "Get Started"
                    ? "text-slate-900 hover:scale-105 font-semibold transition-all duration-500 relative overflow-hidden group/btn"
                    : isActive(link.href)
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
                style={link.name === "Get Started" ? { 
                  background: 'linear-gradient(135deg, #E8D4A8 0%, #D0B77B 25%, #C4A86A 50%, #D0B77B 75%, #E8D4A8 100%)',
                  backgroundSize: '200% 200%',
                  boxShadow: '0 4px 15px rgba(208, 183, 123, 0.3), 0 0 40px rgba(208, 183, 123, 0.15), inset 0 1px 0 rgba(255,255,255,0.4)',
                  animation: 'shimmerBG 4s ease-in-out infinite'
                } : {}}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}