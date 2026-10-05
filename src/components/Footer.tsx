import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/siteData';
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSubmitModal }) => {
  return (
    <footer className="bg-[#001026] border-t border-[#002D61] text-slate-300 text-sm">
      {/* High-Impact CTA Strip before main footer */}
      <div className="border-b border-[#002D61] bg-gradient-to-b from-[#00183b] to-[#001433] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#69BD27] uppercase tracking-wider">
              {COMPANY_INFO.formula}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Turn Your Next Scope Into an Airtight, Code-Backed Supplement
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Upload your initial carrier scope or EagleView report. Our Oklahoma City estimating desk will conduct a complimentary scope review and show you exactly what was missed.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <button
              onClick={onOpenSubmitModal}
              className="px-7 py-3.5 text-sm font-extrabold text-[#001738] bg-[#69BD27] hover:bg-[#5BA822] rounded-lg shadow-lg shadow-[#69BD27]/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit a File for Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_INFO.phone1Raw}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#00244f] hover:bg-[#002D61] border border-[#003B7A] rounded-lg text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#69BD27]" />
              <span>Call (405) 314-3789</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-column footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Official Logo & Company Bio */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-2 border border-slate-200 inline-block shadow-md">
            <img
              src={COMPANY_INFO.logoUrl}
              alt="The Roofers Desk"
              className="h-10 w-auto object-contain"
              onError={(e) => { e.currentTarget.src = COMPANY_INFO.fallbackLogoUrl; }}
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {COMPANY_INFO.tagline}. Privately owned and based in Oklahoma City, OK. Serving roofing contractors nationwide with Xactimate & Symbility claim optimization.
          </p>
          <div className="pt-2 text-xs space-y-2">
            <div className="flex items-start gap-2 text-slate-200">
              <MapPin className="w-4 h-4 text-[#69BD27] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Phone className="w-4 h-4 text-[#69BD27] shrink-0" />
              <div className="flex gap-2">
                <a href={COMPANY_INFO.phone1Raw} className="hover:text-[#69BD27]">{COMPANY_INFO.phone1}</a>
                <span>·</span>
                <a href={COMPANY_INFO.phone2Raw} className="hover:text-[#69BD27]">{COMPANY_INFO.phone2}</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Mail className="w-4 h-4 text-[#69BD27] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#69BD27]">{COMPANY_INFO.email}</a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{COMPANY_INFO.operatingHours}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
            Roofing Services
          </h3>
          <ul className="space-y-2 text-xs">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.pageId)}
                  className="hover:text-[#69BD27] transition-colors text-left cursor-pointer"
                >
                  {s.title}
                </button>
              </li>
            ))}
            <li className="pt-1">
              <button
                onClick={() => onNavigate('services')}
                className="text-[#69BD27] hover:underline font-bold cursor-pointer"
              >
                Services Overview & Model →
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
            Company & Resources
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-[#69BD27] transition-colors cursor-pointer">
                About The Roofers Desk
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('projects')} className="hover:text-[#69BD27] transition-colors cursor-pointer">
                Case Studies & Scope Rebuttals
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('calculator')} className="hover:text-[#69BD27] transition-colors cursor-pointer">
                Supplement ROI Calculator
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('reviews')} className="hover:text-[#69BD27] transition-colors cursor-pointer">
                Contractor Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('faq')} className="hover:text-[#69BD27] transition-colors cursor-pointer">
                Frequently Asked Questions
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('portal')} className="hover:text-[#69BD27] transition-colors cursor-pointer">
                Contractor Client Portal
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#69BD27] transition-colors cursor-pointer">
                Contact & Scope Review
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Regional Trust & Tornado Alley Heritage */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
            Tornado Alley Heritage
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Headquartered in Oklahoma City, the heart of Tornado Alley. We survived and built roofing businesses through decades of historic hail and high-wind events. That frontline storm expertise informs every single Xactimate line item we write.
          </p>
          <div className="p-3 bg-[#00183b] border border-[#002D61] rounded-lg text-xs space-y-1">
            <span className="text-slate-200 font-medium block">Standard Turnaround:</span>
            <span className="text-slate-400 block">48–72 Business Hours</span>
            <span className="text-[#69BD27] text-[11px] block mt-1 font-bold">24-Hr Rush Queues for Active Storm Hail Zones</span>
          </div>
        </div>

      </div>

      {/* Legal & Compliance Bottom Bar */}
      <div className="border-t border-[#002D61] bg-[#000d21] py-6 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1 max-w-3xl">
            <p>© {new Date().getFullYear()} The Roofers Desk. All rights reserved.</p>
            <p className="text-[11px] text-slate-500">
              Disclaimer: The Roofers Desk provides expert estimating, scope drafting, and administrative file assistance exclusively for licensed construction and roofing contractors. We do not act as public adjusters or offer legal counsel. All claims and supplements are submitted under the authority and branding of the respective licensed contractor.
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => onNavigate('contact')} className="hover:text-[#69BD27] cursor-pointer">
              OKC Office
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('portal')} className="hover:text-[#69BD27] cursor-pointer">
              File Submission
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
