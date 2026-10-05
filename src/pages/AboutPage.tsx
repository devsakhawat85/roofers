import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, IMAGES } from '../data/siteData';
import { 
  Building2, 
  Shield, 
  Scale, 
  MapPin, 
  Users, 
  ArrowRight,
  Phone,
  Clock
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenSubmitModal }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>About The Roofers Desk</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Oklahoma City, Oklahoma</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Forged in Tornado Alley. Built to Protect Roofing Contractors.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            The Roofers Desk was born out of a clear realization: roofing company owners and project managers were losing hundreds of hours and hundreds of thousands of dollars to desk adjusters simply because they didn’t have the time or specialized software resources to fight line-by-line carrier omissions.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-200">
            <div className="flex items-center gap-2 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-[#69BD27]" />
              <span>324 W Hefner Road, OKC</span>
            </div>
            <div className="flex items-center gap-2 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <Shield className="w-4 h-4 text-[#69BD27]" />
              <span>Privately Owned & Operated</span>
            </div>
            <div className="flex items-center gap-2 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-[#69BD27]" />
              <span>48–72 Hr Standard Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TORNADO ALLEY STORY */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider block">
                  Our Origins & Identity
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Why Oklahoma City Made Us Different
                </h2>
              </div>

              <p>
                Oklahoma City sits directly in the crosshairs of North America's most intense storm activity. In Tornado Alley, roofs aren’t just architectural coverings—they are battle armor against 3-inch hail stones, 90-mph straight-line winds, and torrential microbursts.
              </p>

              <p>
                Our founders grew up working in this severe weather crucible. We’ve managed roofing operations through the aftermath of historic supercells, negotiated on driveways with independent adjusters, and witnessed firsthand how carriers quietly squeeze contractor scopes: omitting ice and water shield in valleys, refusing starter strip allowances, calculating unrealistic 8% waste factors on complex hip roofs, or denying full replacements when shingles failed the brittle test.
              </p>

              <p>
                We founded <strong className="text-white">The Roofers Desk</strong> to be the definitive "Insurance Infrastructure" for roofing contractors—giving every contractor, whether doing 10 roofs a month or 100 roofs a month, the muscle of an elite, full-time estimating and supplement division.
              </p>

              <div className="pt-2 border-t border-[#002D61] flex items-center gap-6 text-xs text-slate-300">
                <div>
                  <span className="font-bold text-white text-base block font-mono">100%</span>
                  <span>Contractor Branded</span>
                </div>
                <div>
                  <span className="font-bold text-[#69BD27] text-base block font-mono">Xactimate + Symbility</span>
                  <span>Certified Estimators</span>
                </div>
                <div>
                  <span className="font-bold text-white text-base block font-mono">0%</span>
                  <span>Contingency Take</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#002D61] aspect-4/3 shadow-2xl">
                <img
                  src={IMAGES.residentialLuxury}
                  alt="Modern residential roof installation in Oklahoma"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001433] via-[#001433]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#001433]/90 backdrop-blur-md border border-[#002D61] rounded-xl text-xs space-y-1">
                  <span className="text-[#69BD27] font-bold block">Frontline Construction Understanding</span>
                  <p className="text-slate-300">
                    We don’t just memorize Xactimate code numbers; we understand the physical reality of OSHA fall safety, steep pitch labor, and municipal permit inspections.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES & VALUES */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
              Our Operating Constitution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              The Principles That Guide Every Scope We Write
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#00244f] border border-[#69BD27]/40 flex items-center justify-center text-[#69BD27]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Contractor Brand Sovereignty
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You built your reputation through blood, sweat, and customer trust. Every estimate, code packet, and email we produce carries your logo, license numbers, and letterhead. We are your invisible back-office weapon.
              </p>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#00244f] border border-[#69BD27]/40 flex items-center justify-center text-[#69BD27]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Evidence-Based Objectivity
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We don’t argue with emotion; we argue with municipal building codes (IRC/IBC), manufacturer installation manuals, OneClick Code citations, and Haag engineering standards. When claims are backed by law, carriers pay.
              </p>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#00244f] border border-[#69BD27]/40 flex items-center justify-center text-[#69BD27]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Time Freedom for Builders
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Roofing contractors are meant to be in front of property owners and overseeing production crews—not sitting on carrier hold queues for 3 hours listening to elevator music. We give you your life and evenings back.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HEADQUARTERS & CONTACT REASSURANCE */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Visit Our Oklahoma City Office</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                324 W Hefner Road, Oklahoma City, OK 73114
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Located in north Oklahoma City near Lake Hefner Parkway. Whether you’re an Oklahoma contractor stopping by for coffee or a national team looking to scale, our doors are open.
              </p>
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-200">
                <a href={COMPANY_INFO.phone1Raw} className="hover:text-[#69BD27] flex items-center gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#69BD27]" />
                  <span>{COMPANY_INFO.phone1}</span>
                </a>
                <span>·</span>
                <a href={COMPANY_INFO.phone2Raw} className="hover:text-[#69BD27] flex items-center gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#69BD27]" />
                  <span>{COMPANY_INFO.phone2}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenSubmitModal}
                className="px-6 py-3.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#69BD27]/25"
              >
                <span>Submit Your First Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-[#00244f] hover:bg-[#002D61] text-white font-semibold rounded-xl text-xs transition-colors text-center border border-[#003B7A] cursor-pointer"
              >
                Contact the Team
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
