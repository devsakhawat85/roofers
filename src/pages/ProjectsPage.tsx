import React, { useState } from 'react';
import { PageId } from '../types';
import { CASE_STUDIES } from '../data/siteData';
import { 
  CheckCircle2, 
  Clock
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenSubmitModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Residential Storm Damage', 'Commercial TPO'];

  const filteredProjects = selectedFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.propertyType === selectedFilter);

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>Case Studies & Proven Scopes</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real Recovered Dollars</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Real Scopes. Real Building Codes. Real Net Margin Unlocked.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Examine real files supplemented by The Roofers Desk across Oklahoma, Texas, and the Midwest. See exactly what initial desk adjusters missed and how we proved code compliance to secure full funding.
          </p>

          {/* Interactive filter tabs */}
          <div className="pt-2 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#69BD27] text-[#001738] font-bold border-[#69BD27] shadow-md shadow-[#69BD27]/25'
                    : 'bg-[#00183b] text-slate-300 border-[#002D61] hover:text-white hover:border-[#69BD27]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CASE STUDY CARDS GRID */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#00183b] border border-[#002D61] rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#69BD27]/40 transition-colors"
              >
                {/* Card Image */}
                <div className="relative aspect-16/9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001433] via-[#001433]/20 to-transparent" />
                  
                  {/* Top overlay unboxed badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="bg-[#001433]/85 backdrop-blur-md border border-[#002D61] text-[#69BD27] font-mono font-bold px-3 py-1 rounded-lg">
                      +{project.percentageIncrease}% Lift
                    </span>
                    <span className="bg-[#001433]/85 backdrop-blur-md border border-[#002D61] text-slate-200 px-3 py-1 rounded-lg flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#69BD27]" />
                      <span>{project.timeframe}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200">
                    <span className="text-[#69BD27] font-semibold block">{project.location}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Financial Comparison Strip */}
                    <div className="bg-[#001433] border border-[#002D61] rounded-xl p-4 grid grid-cols-3 gap-2 text-center text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Initial Scope</span>
                        <span className="text-slate-300 font-bold font-mono text-sm sm:text-base line-through">
                          ${project.initialScope.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-300 block text-[11px]">Final Approved</span>
                        <span className="text-white font-bold font-mono text-sm sm:text-base">
                          ${project.finalApprovedScope.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#69BD27] block text-[11px] font-bold">Net Recovered</span>
                        <span className="text-[#69BD27] font-black font-mono text-sm sm:text-base">
                          +${project.netIncrease.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Recovered Code Items */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block">
                        Key Line Items & Building Codes Recovered:
                      </span>
                      <div className="space-y-1.5 text-xs text-slate-300">
                        {project.missedItemsRecovered.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#69BD27] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#002D61] flex items-center justify-between gap-4">
                    <button
                      onClick={onOpenSubmitModal}
                      className="px-4 py-2 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-bold rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      Audit a Similar Claim
                    </button>
                    <span className="text-xs text-slate-400 font-mono">
                      Carrier: {project.carrier}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROACTIVE AUDIT CTA */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-12 text-center space-y-4">
            <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
              Have an Underpaid Scope Sitting in Your Inbox?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display max-w-2xl mx-auto">
              Let Our Oklahoma City Estimating Desk Review It Free of Charge
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Send us the carrier Explanation of Review (EOR) and your measurements. We will identify every missed line item and show you the exact recoverable delta.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenSubmitModal}
                className="px-8 py-3.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-black rounded-xl text-sm transition-all hover:scale-[1.02] cursor-pointer shadow-lg shadow-[#69BD27]/25"
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
