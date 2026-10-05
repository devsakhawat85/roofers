import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  FileText, 
  BarChart3, 
  ShieldAlert, 
  GraduationCap, 
  Calculator,
  Compass
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenSubmitModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoLoadError, setLogoLoadError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isServiceActive = currentPage.startsWith('service-') || currentPage === 'services';

  return (
    <>
      {/* Top emergency trust strip */}
      <div className="bg-[#001738] border-b border-[#002D61]/70 text-xs text-slate-300 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#69BD27] shadow-[0_0_8px_#69BD27] animate-pulse" />
            <span className="text-slate-200 font-medium tracking-wide">
              Oklahoma City HQ · Tornado Alley Insurance Infrastructure
            </span>
            <span className="hidden md:inline-block text-[#69BD27] font-bold ml-2">
              {COMPANY_INFO.formula}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-slate-300">
            <a 
              href={COMPANY_INFO.phone1Raw}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#69BD27] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#69BD27]" />
              <span className="font-semibold">{COMPANY_INFO.phone1}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Claims Desk: Mon–Fri 7am–6pm CST</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Official Logo), Zone 2 (Clean links: Home, Services, About, Reviews, Contact), Zone 3 (1-2 actions) */}
      <header className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-[#001433]/95 backdrop-blur-md border-[#002D61] shadow-xl shadow-black/40' 
          : 'bg-[#00183b] border-[#002D61]/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* ZONE 1: Official Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
            aria-label="The Roofers Desk Homepage"
          >
            {!logoLoadError ? (
              <div className="bg-white rounded-lg p-1.5 border border-slate-300 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="The Roofers Desk"
                  className="h-9 sm:h-11 w-auto object-contain max-w-[140px] sm:max-w-[170px]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== COMPANY_INFO.fallbackLogoUrl) {
                      target.src = COMPANY_INFO.fallbackLogoUrl;
                    } else {
                      setLogoLoadError(true);
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#002D61] border border-[#69BD27] flex items-center justify-center text-white font-black text-lg shadow-md">
                  RD
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-white block leading-none font-display">
                    The Roofers Desk
                  </span>
                  <span className="text-[11px] text-[#69BD27] font-bold tracking-wider uppercase">
                    Insurance Infrastructure
                  </span>
                </div>
              </div>
            )}
          </button>

          {/* ZONE 2: Clean text navigation links ONLY (Case Studies, ROI Calculator, FAQ removed per user request) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
            <button 
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#69BD27] transition-colors py-1 cursor-pointer ${
                currentPage === 'home' ? 'text-[#69BD27] font-bold' : ''
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1.5 hover:text-[#69BD27] transition-colors py-1 cursor-pointer ${
                  isServiceActive ? 'text-[#69BD27] font-bold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#69BD27]' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-[#001A3D] border border-[#002D61] rounded-xl p-2 shadow-2xl shadow-black/80 space-y-1">
                    <button 
                      onClick={() => handleNavClick('service-supplements')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#002D61]/70 transition-colors flex items-start gap-3 group cursor-pointer"
                    >
                      <FileText className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#69BD27]">
                          Roofing Supplements
                        </div>
                        <div className="text-xs text-slate-300 leading-snug">
                          Xactimate & Symbility claim optimization with code precision
                        </div>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleNavClick('service-estimates')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#002D61]/70 transition-colors flex items-start gap-3 group cursor-pointer"
                    >
                      <Calculator className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#69BD27]">
                          Estimates from Scratch
                        </div>
                        <div className="text-xs text-slate-300 leading-snug">
                          Residential & commercial takeoffs from EagleView & plans
                        </div>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleNavClick('service-reinspections')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#002D61]/70 transition-colors flex items-start gap-3 group cursor-pointer"
                    >
                      <ShieldAlert className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#69BD27]">
                          Re-Inspections & Disputes
                        </div>
                        <div className="text-xs text-slate-300 leading-snug">
                          Overcoming partial approvals and wrongful denials
                        </div>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleNavClick('service-analytics')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#002D61]/70 transition-colors flex items-start gap-3 group cursor-pointer"
                    >
                      <BarChart3 className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#69BD27]">
                          Margin & KPI Tracking
                        </div>
                        <div className="text-xs text-slate-300 leading-snug">
                          Track cash flow velocity and sales rep supplement yield
                        </div>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleNavClick('service-training')}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#002D61]/70 transition-colors flex items-start gap-3 group cursor-pointer"
                    >
                      <GraduationCap className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#69BD27]">
                          Contractor Field Training
                        </div>
                        <div className="text-xs text-slate-300 leading-snug">
                          The Perfect Photo Set & getting decking approved
                        </div>
                      </div>
                    </button>

                    <div className="pt-1 border-t border-[#002D61]">
                      <button 
                        onClick={() => handleNavClick('services')}
                        className="w-full text-center py-1.5 text-xs text-[#69BD27] hover:underline font-bold cursor-pointer"
                      >
                        View All Services & Model →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#69BD27] transition-colors py-1 cursor-pointer ${
                currentPage === 'about' ? 'text-[#69BD27] font-bold' : ''
              }`}
            >
              About
            </button>

            <button 
              onClick={() => handleNavClick('reviews')}
              className={`hover:text-[#69BD27] transition-colors py-1 cursor-pointer ${
                currentPage === 'reviews' ? 'text-[#69BD27] font-bold' : ''
              }`}
            >
              Reviews
            </button>

            <button 
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#69BD27] transition-colors py-1 cursor-pointer ${
                currentPage === 'contact' ? 'text-[#69BD27] font-bold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* ZONE 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('portal')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-[#00244f] hover:bg-[#002D61] border border-[#003B7A] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#69BD27]" />
              <span>Client Portal</span>
            </button>

            <button 
              onClick={onOpenSubmitModal}
              className="px-5 py-2.5 text-xs sm:text-sm font-extrabold text-[#001738] bg-[#69BD27] hover:bg-[#5BA822] rounded-lg shadow-md shadow-[#69BD27]/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              Submit a Claim
            </button>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Cleaned: Case Studies, ROI Calculator, FAQ removed per user request) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#001433]/98 backdrop-blur-md pt-16 px-6 pb-8 overflow-y-auto">
          <div className="flex justify-between items-center pb-4 border-b border-[#002D61]">
            <div className="bg-white rounded-lg p-1.5 border border-slate-300">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="The Roofers Desk"
                className="h-8 w-auto object-contain"
                onError={(e) => { e.currentTarget.src = COMPANY_INFO.fallbackLogoUrl; }}
                referrerPolicy="no-referrer"
              />
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-6 space-y-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className="block w-full text-left text-lg font-medium text-slate-200 hover:text-[#69BD27] py-1"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="block w-full text-left text-lg font-medium text-slate-200 hover:text-[#69BD27] py-1"
            >
              About Company & Tornado Alley Story
            </button>
            
            <div className="py-2 border-y border-[#002D61]/80 my-2">
              <span className="text-xs uppercase tracking-wider text-[#69BD27] font-bold block mb-2">
                Roofing Services
              </span>
              <div className="space-y-2 pl-2">
                <button 
                  onClick={() => handleNavClick('service-supplements')}
                  className="block w-full text-left text-sm text-slate-300 hover:text-[#69BD27] py-1"
                >
                  → Roofing Supplements
                </button>
                <button 
                  onClick={() => handleNavClick('service-estimates')}
                  className="block w-full text-left text-sm text-slate-300 hover:text-[#69BD27] py-1"
                >
                  → Estimates from Scratch
                </button>
                <button 
                  onClick={() => handleNavClick('service-reinspections')}
                  className="block w-full text-left text-sm text-slate-300 hover:text-[#69BD27] py-1"
                >
                  → Re-Inspections & File Administration
                </button>
                <button 
                  onClick={() => handleNavClick('service-analytics')}
                  className="block w-full text-left text-sm text-slate-300 hover:text-[#69BD27] py-1"
                >
                  → Margin & Financial Tracking
                </button>
                <button 
                  onClick={() => handleNavClick('service-training')}
                  className="block w-full text-left text-sm text-slate-300 hover:text-[#69BD27] py-1"
                >
                  → Contractor Field Training
                </button>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="block w-full text-left text-xs text-[#69BD27] font-bold pt-1"
                >
                  All Services Overview & Pricing →
                </button>
              </div>
            </div>

            <button 
              onClick={() => handleNavClick('reviews')} 
              className="block w-full text-left text-lg font-medium text-slate-200 hover:text-[#69BD27] py-1"
            >
              Contractor Reviews
            </button>
            
            <button 
              onClick={() => handleNavClick('contact')} 
              className="block w-full text-left text-lg font-medium text-slate-200 hover:text-[#69BD27] py-1"
            >
              Contact OKC Office
            </button>
          </div>

          <div className="pt-4 border-t border-[#002D61] space-y-3">
            <button 
              onClick={() => handleNavClick('portal')}
              className="w-full py-3 text-center text-sm font-semibold text-slate-200 bg-[#001D40] border border-[#003B7A] rounded-lg"
            >
              Contractor Client Portal
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenSubmitModal(); }}
              className="w-full py-3 text-center text-sm font-extrabold text-[#001738] bg-[#69BD27] rounded-lg shadow-lg shadow-[#69BD27]/30"
            >
              Submit a Claim File Now
            </button>
            <div className="pt-2 text-center text-xs text-slate-400">
              Direct Desk: <a href={COMPANY_INFO.phone1Raw} className="text-[#69BD27] underline">{COMPANY_INFO.phone1}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

