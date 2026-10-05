import React from 'react';
import { PageId } from '../types';
import { SERVICES, COMPANY_INFO } from '../data/siteData';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenSubmitModal }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>The Roofers Desk Services Suite</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Comprehensive Contractor Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Every Scope Itemized. Every Building Code Cited. Zero Dollars Left Behind.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            From our primary supplement optimization desk to complete commercial flat-roof estimates and contractor field training, we provide the full-spectrum insurance back office for modern roofing companies.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-200">
            <span className="flex items-center gap-1.5 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-[#69BD27]" />
              <span>Xactimate X1 & Symbility Native</span>
            </span>
            <span className="flex items-center gap-1.5 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-[#69BD27]" />
              <span>48–72 Hr Standard Delivery</span>
            </span>
            <span className="flex items-center gap-1.5 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-[#69BD27]" />
              <span>Custom Branded Under Your Logo</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. ALL 5 SERVICES DETAILED LIST */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#00183b] border border-[#002D61] rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#69BD27]/40 transition-colors"
            >
              {/* Text content (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#69BD27] font-bold">
                  <span>0{index + 1}.</span>
                  <span className="uppercase">{service.subtitle}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {service.title}
                </h2>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet List */}
                <div className="pt-1 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                    What You Receive:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {service.deliverables.slice(0, 4).map((del, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#69BD27] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
                  <span className="text-[#69BD27] font-semibold">Software:</span>
                  {service.softwareUsed.map((soft, i) => (
                    <span key={i} className="text-slate-300">
                      {soft}{i < service.softwareUsed.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate(service.pageId)}
                    className="px-5 py-2.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-lg text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#69BD27]/25"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenSubmitModal}
                    className="px-4 py-2.5 bg-[#00244f] hover:bg-[#002D61] text-white font-medium rounded-lg text-xs transition-colors border border-[#003B7A] cursor-pointer"
                  >
                    Submit File for This Service
                  </button>
                </div>
              </div>

              {/* Image Column (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#002D61] aspect-4/3 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#001433]/90 backdrop-blur-md border border-[#002D61] p-3 rounded-xl text-xs flex justify-between items-center text-slate-200">
                    <span>Typical Outcome:</span>
                    <span className="text-[#69BD27] font-semibold truncate max-w-[200px]">
                      {service.typicalOutcome.split('.')[0]}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. ENGAGEMENT MODEL & HOW CONTRACTORS WORK WITH US */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                Flexible Partnership Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                No Lock-In Retainers. Transparent Pay-Per-File Simplicity.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe you should only pay when we create tangible, measurable value. That’s why we don't lock you into expensive annual agency retainers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3">
                <span className="text-xs font-bold text-[#69BD27] uppercase">Per-File On Demand</span>
                <h3 className="text-lg font-bold text-white font-display">Submit as You Need</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ideal for contractors wanting help only with difficult, complex, or stubborn adjuster files. Upload single files whenever storm volume spikes.
                </p>
              </div>

              <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3">
                <span className="text-xs font-bold text-[#69BD27] uppercase">Volume Dedicated Queue</span>
                <h3 className="text-lg font-bold text-white font-display">Full Back-Office Division</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For growing 7-figure and 8-figure companies routing 20–100+ files a month. Dedicated senior estimator assigned to your account with 24-hr rush SLA.
                </p>
              </div>

              <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3">
                <span className="text-xs font-bold text-[#69BD27] uppercase">Commercial & Large Loss</span>
                <h3 className="text-lg font-bold text-white font-display">Engineering & TPO Takeoffs</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Custom takeoff pricing for large multi-family, church, and industrial low-slope projects requiring complex CAD integration and multiple mechanical curbs.
                </p>
              </div>

            </div>

            <div className="pt-4 border-t border-[#002D61] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-300">
                Want to test us out? Send us your most frustrating claim and we'll perform a complimentary audit.
              </span>
              <button
                onClick={onOpenSubmitModal}
                className="px-6 py-3 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-lg text-xs transition-colors cursor-pointer shrink-0 shadow-lg shadow-[#69BD27]/25"
              >
                Submit File for Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
