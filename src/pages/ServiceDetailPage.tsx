import React from 'react';
import { PageId, ServiceItem } from '../types';
import { CASE_STUDIES, COMPANY_INFO } from '../data/siteData';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  Phone, 
  HelpCircle
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  service, 
  onNavigate, 
  onOpenSubmitModal 
}) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO & BREADCRUMB */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Breadcrumb back to all services */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button 
              onClick={() => onNavigate('services')}
              className="hover:text-[#69BD27] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back to Services</span>
            </button>
            <span>/</span>
            <span className="text-[#69BD27] font-semibold">{service.title}</span>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider block font-mono">
              {service.subtitle}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
              {service.title}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenSubmitModal}
              className="px-6 py-3.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-xs sm:text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#69BD27]/25"
            >
              <span>Submit File for This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_INFO.phone1Raw}
              className="px-6 py-3.5 bg-[#00244f] hover:bg-[#002D61] text-white font-medium rounded-xl text-xs sm:text-sm transition-colors border border-[#003B7A] flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#69BD27]" />
              <span>Discuss Scope: (405) 314-3789</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. THE PROBLEM / CONTRACTOR NEED & HOW WE HELP */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                  The Problem & Real Construction Need
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Why Adjusters Underpay & How The Roofers Desk Bridges the Gap
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{service.fullDesc}</p>
                <p>
                  By taking the administrative and estimating burden off your shoulders, our team guarantees that every single legitimate building code requirement, manufacturer specification, and labor nuance is documented in indisputable fashion.
                </p>
              </div>

              {/* Unlocked Deliverables Checklist */}
              <div className="pt-2 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Included in Every {service.title} File:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {service.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#69BD27] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#001433] border border-[#002D61] rounded-xl text-xs space-y-1">
                <span className="text-slate-200 font-semibold block">Typical Service Outcome:</span>
                <p className="text-[#69BD27] font-semibold">{service.typicalOutcome}</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#002D61] aspect-4/3 shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001433] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#001433]/90 backdrop-blur-md border border-[#002D61] rounded-xl text-xs space-y-1 text-slate-300">
                  <span className="font-bold text-white block">Tornado Alley Field Verified</span>
                  <p className="text-slate-400">
                    Software: {service.softwareUsed.join(', ')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KEY BENEFITS FOR CONTRACTORS */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
              Measurable Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Partner With The Roofers Desk on {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.keyBenefits.map((benefit, i) => (
              <div key={i} className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#00244f] border border-[#69BD27]/40 text-[#69BD27] flex items-center justify-center font-bold text-xs font-mono">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-white font-display">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS WORKFLOW FOR THIS SERVICE */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                Our Operational Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                How We Execute {service.title} from Start to Finish
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step, i) => (
                <div key={i} className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3">
                  <span className="text-xs font-mono font-bold text-[#69BD27]">STEP {step.step}</span>
                  <h3 className="text-base font-bold text-white font-display">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELEVANT CASE STUDY HIGHLIGHT */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-between items-end border-b border-[#002D61] pb-4">
            <div>
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                Documented Proof
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Related Scope Case Study
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-semibold text-[#69BD27] hover:text-[#5BA822] flex items-center gap-1 cursor-pointer"
            >
              <span>All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#69BD27] font-mono">
                <span>{CASE_STUDIES[0].location}</span>
                <span>·</span>
                <span>{CASE_STUDIES[0].carrier}</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                {CASE_STUDIES[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {CASE_STUDIES[0].summary}
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span className="text-slate-400">Initial Scope: <strong className="text-slate-300 font-mono">${CASE_STUDIES[0].initialScope.toLocaleString()}</strong></span>
                <span className="text-slate-400">Final Scope: <strong className="text-white font-mono">${CASE_STUDIES[0].finalApprovedScope.toLocaleString()}</strong></span>
                <span className="text-[#69BD27] font-bold font-mono">Net Unlocked: +${CASE_STUDIES[0].netIncrease.toLocaleString()}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="bg-[#001433] border border-[#69BD27]/40 rounded-xl p-5 text-center space-y-2">
                <span className="text-xs text-slate-400">Scope Increase Lift</span>
                <div className="text-3xl font-black text-[#69BD27] font-mono">+{CASE_STUDIES[0].percentageIncrease}%</div>
                <button
                  onClick={onOpenSubmitModal}
                  className="w-full py-2.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-lg text-xs transition-colors cursor-pointer mt-2"
                >
                  Submit Scope for Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE-SPECIFIC FAQS */}
      {service.faqs.length > 0 && (
        <section className="px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white font-display">
              Frequently Asked Questions About {service.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#69BD27] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. BOTTOM ACTION CTA */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#002D61] via-[#00244f] to-[#00183b] border border-[#69BD27]/40 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl font-bold text-white font-display">
                Ready to Deploy The Roofers Desk on Your Next Project?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Upload your scope or blueprints today. Our Oklahoma City estimating desk will review it promptly with zero obligation.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={onOpenSubmitModal}
                className="px-6 py-3.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-xs transition-colors cursor-pointer shadow-lg shadow-[#69BD27]/25"
              >
                Submit File for {service.title}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
