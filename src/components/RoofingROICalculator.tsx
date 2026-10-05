import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RoofingROICalculatorProps {
  onOpenSubmitModal: () => void;
}

export const RoofingROICalculator: React.FC<RoofingROICalculatorProps> = ({ onOpenSubmitModal }) => {
  const [monthlyRoofs, setMonthlyRoofs] = useState<number>(18);
  const [avgClaimSize, setAvgClaimSize] = useState<number>(14500);
  const [currentSupplementPercent, setCurrentSupplementPercent] = useState<number>(6);

  // The Roofers Desk typical benchmark supplement increase is ~34.4%
  const targetSupplementPercent = 32;

  // Monthly initial scope total
  const initialMonthlyVolume = monthlyRoofs * avgClaimSize;

  // What they currently recover
  const currentMonthlySupplement = initialMonthlyVolume * (currentSupplementPercent / 100);

  // What is realistically recoverable with The Roofers Desk
  const potentialMonthlySupplement = initialMonthlyVolume * (targetSupplementPercent / 100);

  // Unlocked additional revenue per month
  const netMonthlyGain = potentialMonthlySupplement - currentMonthlySupplement;
  const netAnnualGain = netMonthlyGain * 12;

  return (
    <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient glow in brand green */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#69BD27]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#002D61]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Contractor Profit Engine</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Roofing Supplement ROI Calculator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              See how much revenue your roofing business is currently leaving on the table with desk adjusters each month.
            </p>
          </div>
          <div className="text-xs text-slate-300 bg-[#001433] border border-[#002D61] px-4 py-2 rounded-lg self-start md:self-auto">
            Based on our 34.4% average supplement lift across Tornado Alley claims
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Control 1: Monthly Roofs */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-200 font-medium">Monthly Insurance Roofs Installed</label>
                <span className="text-[#69BD27] font-bold text-base font-mono tabular-nums">
                  {monthlyRoofs} roofs / month
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="80"
                step="1"
                value={monthlyRoofs}
                onChange={(e) => setMonthlyRoofs(Number(e.target.value))}
                className="w-full h-2 bg-[#001433] rounded-lg appearance-none cursor-pointer accent-[#69BD27]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>2 (Boutique)</span>
                <span>25 (Established)</span>
                <span>80 (High Volume Storm)</span>
              </div>
            </div>

            {/* Control 2: Average Initial Carrier Scope */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-200 font-medium">Average Initial Carrier Scope</label>
                <span className="text-[#69BD27] font-bold text-base font-mono tabular-nums">
                  ${avgClaimSize.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="7000"
                max="40000"
                step="500"
                value={avgClaimSize}
                onChange={(e) => setAvgClaimSize(Number(e.target.value))}
                className="w-full h-2 bg-[#001433] rounded-lg appearance-none cursor-pointer accent-[#69BD27]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>$7,000 (Small Gable)</span>
                <span>$18,000 (Standard Suburban)</span>
                <span>$40,000+ (Steep / Large Hip)</span>
              </div>
            </div>

            {/* Control 3: Current Internal Supplement Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-200 font-medium">Your Current Supplement Capture Rate</label>
                <span className="text-slate-300 font-bold text-base font-mono tabular-nums">
                  {currentSupplementPercent}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={currentSupplementPercent}
                onChange={(e) => setCurrentSupplementPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#001433] rounded-lg appearance-none cursor-pointer accent-[#69BD27]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0% (Take what adjuster gives)</span>
                <span>10% (Basic drip edge only)</span>
                <span>20% (Aggressive in-house)</span>
              </div>
            </div>

            <div className="bg-[#001433] border border-[#002D61] rounded-xl p-4 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#69BD27] shrink-0" />
                <span>What The Roofers Desk Recovers For You:</span>
              </div>
              <p className="pl-6 text-slate-300 leading-relaxed">
                Code-mandated ice & water shield, high-pitch and steep fees, dumpster tonnage overages, chimney crickets, valley metal, overhead & profit (10 & 10), and manufacturer high-wind starter/ridge requirements.
              </p>
            </div>

          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#001433] border border-[#69BD27]/50 rounded-xl p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#69BD27] block">
                Estimated Recoverable Margin
              </span>

              <div>
                <div className="text-xs text-slate-400 mb-1">Additional Monthly Unlocked Revenue:</div>
                <div className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight font-mono tabular-nums">
                  +${Math.round(netMonthlyGain).toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">per month across {monthlyRoofs} completed projects</div>
              </div>

              <div className="pt-4 border-t border-[#002D61] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Annual Unlocked Cash Flow:</span>
                  <span className="text-[#69BD27] font-bold font-mono text-sm tabular-nums">
                    +${Math.round(netAnnualGain).toLocaleString()} / yr
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Average Lift Per Project:</span>
                  <span className="text-white font-bold font-mono text-sm tabular-nums">
                    +${Math.round(netMonthlyGain / monthlyRoofs).toLocaleString()} / roof
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Time Saved Per PM:</span>
                  <span className="text-slate-200 font-medium">~18 Hours / week</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#002D61]">
              <button
                onClick={onOpenSubmitModal}
                className="w-full py-3.5 px-4 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-lg text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-[#69BD27]/25 cursor-pointer"
              >
                <span>Audit Your First File Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                No contract lock-in. Pay only on files you choose to submit.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
