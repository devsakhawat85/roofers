import React from 'react';
import { PageId } from '../types';
import { RoofingROICalculator } from '../components/RoofingROICalculator';

interface CalculatorPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenSubmitModal }) => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>Contractor Financial Modeling</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Tornado Alley Benchmark Data</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Calculate Your Recoverable Scope Revenue.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Every month you don’t supplement properly, tens of thousands of dollars slip through your fingers and remain in carrier reserves. Adjust the sliders below to calculate the realistic net cash impact on your roofing company.
          </p>
        </div>
      </section>

      {/* 2. THE CALCULATOR */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <RoofingROICalculator onOpenSubmitModal={onOpenSubmitModal} />
        </div>
      </section>

      {/* 3. COMMON LINE ITEMS MISSED BY CARRIERS */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
              Where the Money Hides
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              The Top 8 Items Carriers Routinely Omit from Initial Scopes
            </h2>
            <p className="text-slate-300 text-sm">
              These are not "optional upgrades"—they are code-mandated construction components and manufacturer warranty requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            
            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">01. ICE & WATER SHIELD</span>
              <h3 className="font-bold text-white text-sm">IRC R905.1.2 Mandate</h3>
              <p className="text-slate-300 leading-relaxed">
                Required at all eaves and valleys in freezing zones. Often omitted or capped at a single roll.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$450 to $1,200 avg</span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">02. DRIP EDGE PERIMETER</span>
              <h3 className="font-bold text-white text-sm">IRC R905.2.8.5</h3>
              <p className="text-slate-300 leading-relaxed">
                Mandatory around all eaves and rakes with code-compliant overlap. Adjusters often write to "detach & reset" or skip entirely.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$600 to $1,400 avg</span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">03. STEEP & HIGH CHARGES</span>
              <h3 className="font-bold text-white text-sm">Labor & Fall Safety</h3>
              <p className="text-slate-300 leading-relaxed">
                Pitches over 7/12, 9/12, and 12/12 require specialized steep labor charges and OSHA tethering setups.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$800 to $2,800 avg</span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">04. OVERHEAD & PROFIT</span>
              <h3 className="font-bold text-white text-sm">10 & 10 GC Supervision</h3>
              <p className="text-slate-300 leading-relaxed">
                When 3+ trades are involved (roofing, gutters, siding, painting), contractors are entitled to 10% overhead and 10% profit.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$1,500 to $4,500+</span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">05. DECKING RESHEATH</span>
              <h3 className="font-bold text-white text-sm">IRC R905.2.1 Solid Sheathing</h3>
              <p className="text-slate-300 leading-relaxed">
                Spaced 1x6 plank decking exceeding 1/4 inch gaps requires full 7/16" OSB overlay under manufacturer warranty rules.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$2,200 to $6,000+</span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">06. RIDGE CAP & STARTER</span>
              <h3 className="font-bold text-white text-sm">High-Profile Warranty</h3>
              <p className="text-slate-300 leading-relaxed">
                Adjusters write for cheap cut 3-tab shingles instead of manufacturer-warranted dedicated starter strip and high-profile ridge.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$350 to $900 avg</span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">07. ACCURATE WASTE FACTOR</span>
              <h3 className="font-bold text-white text-sm">Hip & Valley Geometry</h3>
              <p className="text-slate-300 leading-relaxed">
                Carriers default to flat 10% waste on complex multi-hip cut-up roofs that actually consume 15%–18% shingle cutting waste.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$500 to $1,800 avg</span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-xl p-5 space-y-2">
              <span className="text-[#69BD27] font-bold font-mono">08. CHIMNEY CRICKETS</span>
              <h3 className="font-bold text-white text-sm">IRC R903.2.2 Flashing</h3>
              <p className="text-slate-300 leading-relaxed">
                Chimneys wider than 30 inches mandate a cricket/saddle water diverter to prevent roof water pooling and structural rot.
              </p>
              <span className="text-[#69BD27] font-mono font-bold block pt-1">+$600 to $1,200 avg</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
