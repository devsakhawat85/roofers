import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  CheckCircle2, 
  Clock, 
  Search, 
  Lock, 
  Plus, 
  AlertCircle
} from 'lucide-react';

interface PortalPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const PortalPage: React.FC<PortalPageProps> = ({ onOpenSubmitModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedClaim, setSearchedClaim] = useState<any | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock authentic data representing active files in the OKC estimating pipeline
  const mockClaims = [
    {
      id: 'RD-2026-8492',
      property: '12804 Oakridge Terrace, Edmond OK',
      carrier: 'State Farm',
      contractor: 'Apex Restoration LLC',
      status: 'Carrier Negotiation & Code Response',
      initialScope: '$14,200',
      supplementedEstimate: '$21,850',
      netLift: '+$7,650 (+53.8%)',
      service: 'Roofing Supplement & IRC Code Package',
      steps: [
        { label: 'File Upload & Intake', done: true, date: 'Oct 01, 8:30 AM' },
        { label: 'EagleView Verification & Code Cross-Reference', done: true, date: 'Oct 01, 2:15 PM' },
        { label: 'Xactimate Supplement Packet Completed', done: true, date: 'Oct 02, 11:00 AM' },
        { label: 'Contractor Approval & Carrier Submission', done: true, date: 'Oct 02, 3:45 PM' },
        { label: 'Desk Adjuster Rebuttal & Final Agreement', done: false, date: 'Pending Carrier Review' },
      ],
      notes: 'Adjuster conceded ice & water shield in valleys and 10/12 steep charge. Currently defending 7/16" OSB re-sheathing over spaced plank decking.'
    },
    {
      id: 'RD-2026-7814',
      property: '4509 NW 63rd St, Oklahoma City OK',
      carrier: 'Travelers',
      contractor: 'Crossroads Roofing Specialists',
      status: 'Final Approval & Invoice Packet Issued',
      initialScope: '$18,650',
      supplementedEstimate: '$25,400',
      netLift: '+$6,750 (+36.1%)',
      service: 'Re-Inspection Supplement',
      steps: [
        { label: 'File Upload & Intake', done: true, date: 'Sep 27, 9:00 AM' },
        { label: 'EagleView Verification & Code Cross-Reference', done: true, date: 'Sep 27, 1:30 PM' },
        { label: 'Xactimate Supplement Packet Completed', done: true, date: 'Sep 28, 10:15 AM' },
        { label: 'Contractor Approval & Carrier Submission', done: true, date: 'Sep 28, 2:00 PM' },
        { label: 'Carrier Revised Scope Approved', done: true, date: 'Oct 03, 4:20 PM' },
      ],
      notes: 'Supplement approved in full. Overhead & Profit (10 & 10) awarded due to gutters, drywall repair, and roof replacement trades.'
    },
    {
      id: 'RD-2026-6920',
      property: '812 South Memorial Dr, Tulsa OK',
      carrier: 'Liberty Mutual',
      contractor: 'Summit Peak Exteriors',
      status: 'Supplement Packet In Progress (Estimator Queue)',
      initialScope: '$11,800',
      supplementedEstimate: 'Calculating (~$17,000 est)',
      netLift: 'Estimating (~$5,200)',
      service: 'Initial Carrier Audit',
      steps: [
        { label: 'File Upload & Intake', done: true, date: 'Oct 04, 11:20 AM' },
        { label: 'EagleView Verification & Code Cross-Reference', done: true, date: 'Oct 04, 4:00 PM' },
        { label: 'Xactimate Supplement Packet Completed', done: false, date: 'In Queue (Target: Today 5 PM)' },
        { label: 'Contractor Approval & Carrier Submission', done: false, date: 'Pending' },
        { label: 'Desk Adjuster Negotiation', done: false, date: 'Pending' },
      ],
      notes: 'Initial adjuster missed all rake drip edge and step flashing at sidewalls. Haag inspection test square documentation added.'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const found = mockClaims.find(
      c => c.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
           c.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
           c.contractor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedClaim(found || null);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>Contractor Client Portal</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>24/7 File Tracking & Intake</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Submit New Scopes. Track Claim Supplements in Real Time.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Welcome to The Roofers Desk contractor operations hub. Submit adjuster scopes for audit, upload EagleView measurements, or check the status of your active supplement files.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenSubmitModal}
              className="px-6 py-3 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-xs sm:text-sm transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer shadow-lg shadow-[#69BD27]/25"
            >
              <Plus className="w-4 h-4" />
              <span>Submit New Claim File</span>
            </button>
            <div className="flex items-center gap-2 bg-[#00183b] border border-[#002D61] px-4 py-2.5 rounded-xl text-xs text-slate-200">
              <Lock className="w-3.5 h-3.5 text-[#69BD27]" />
              <span>Secure 256-bit Encrypted Contractor Intake</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL-TIME CLAIM TRACKER SEARCH */}
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-[#00183b] border border-[#002D61] rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Track an Active Claim File
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Enter your Roofers Desk Tracking ID (e.g. <span className="font-mono text-[#69BD27] font-semibold">RD-2026-8492</span>) or insurance carrier claim number.
            </p>
          </div>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. RD-2026-8492 or 36-9281-K41..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#001433] border border-[#002D61] rounded-xl pl-11 pr-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27] font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Track Status
            </button>
          </form>

          {/* Quick Click Samples */}
          <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span>Try sample tracking IDs:</span>
            {mockClaims.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => { setSearchQuery(c.id); setSearchedClaim(c); setHasSearched(true); }}
                className="text-[#69BD27] font-mono underline hover:text-[#5BA822] cursor-pointer"
              >
                {c.id}
              </button>
            ))}
          </div>

          {/* Search Result Progression Card */}
          {hasSearched && (
            <div className="pt-6 border-t border-[#002D61]">
              {searchedClaim ? (
                <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#002D61] pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-[#69BD27]">{searchedClaim.id}</span>
                        <span className="text-slate-500">·</span>
                        <span className="text-xs text-slate-300 font-medium">{searchedClaim.carrier}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white font-display mt-1">{searchedClaim.property}</h3>
                      <span className="text-xs text-slate-400">Contractor: {searchedClaim.contractor}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">Status:</span>
                      <span className="inline-block px-3 py-1 bg-[#69BD27]/20 text-white border border-[#69BD27]/40 rounded-lg text-xs font-semibold mt-0.5">
                        {searchedClaim.status}
                      </span>
                    </div>
                  </div>

                  {/* Financial Scope Delta */}
                  <div className="grid grid-cols-3 gap-2 bg-[#00183b] border border-[#002D61] rounded-xl p-3 text-center text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Initial Adjuster Scope</span>
                      <span className="font-mono text-slate-300 font-bold">{searchedClaim.initialScope}</span>
                    </div>
                    <div>
                      <span className="text-slate-300 block text-[11px]">Roofers Desk Scope</span>
                      <span className="font-mono text-white font-bold">{searchedClaim.supplementedEstimate}</span>
                    </div>
                    <div>
                      <span className="text-[#69BD27] block text-[11px] font-bold">Net Lift</span>
                      <span className="font-mono text-[#69BD27] font-black">{searchedClaim.netLift}</span>
                    </div>
                  </div>

                  {/* 5-Step Process Visualizer */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      Workflow Milestones:
                    </span>
                    <div className="space-y-2">
                      {searchedClaim.steps.map((st: any, i: number) => (
                        <div key={i} className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#00183b] border border-[#002D61]">
                          <div className="flex items-center gap-2.5">
                            {st.done ? (
                              <CheckCircle2 className="w-4 h-4 text-[#69BD27] shrink-0" />
                            ) : (
                              <Clock className="w-4 h-4 text-[#69BD27] shrink-0 animate-pulse" />
                            )}
                            <span className={st.done ? 'text-slate-200' : 'text-[#69BD27] font-medium'}>
                              {st.label}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-mono">{st.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-[#00183b] border border-[#002D61] rounded-xl text-xs text-slate-300">
                    <span className="font-semibold text-white block mb-0.5">Estimator Scope Notes:</span>
                    <p>{searchedClaim.notes}</p>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-[#001433] border border-[#002D61] rounded-2xl text-center text-xs text-slate-300 space-y-2">
                  <AlertCircle className="w-6 h-6 text-[#69BD27] mx-auto" />
                  <p>No active claim matched "{searchQuery}". Please check the tracking number or contact our claims desk.</p>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 3. RECENT CONTRACTOR QUEUE HIGHLIGHTS */}
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white font-display">
              Recently Completed Supplement Scopes
            </h2>
            <span className="text-xs text-slate-400">Updated Hourly</span>
          </div>

          <div className="space-y-3">
            {mockClaims.map((claim) => (
              <div
                key={claim.id}
                className="bg-[#00183b] border border-[#002D61] hover:border-[#69BD27]/40 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-[#69BD27]">{claim.id}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">{claim.carrier}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{claim.contractor}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{claim.property}</h4>
                  <span className="text-xs text-slate-300 block">{claim.service}</span>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
                  <span className="text-[#69BD27] font-mono font-bold text-sm">
                    {claim.netLift}
                  </span>
                  <button
                    onClick={() => { setSearchQuery(claim.id); setSearchedClaim(claim); setHasSearched(true); window.scrollTo({ top: 380, behavior: 'smooth' }); }}
                    className="text-xs text-[#69BD27] hover:text-[#5BA822] underline font-semibold cursor-pointer"
                  >
                    View File Milestones →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
