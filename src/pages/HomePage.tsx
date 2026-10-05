import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES, CASE_STUDIES, TESTIMONIALS, IMAGES } from '../data/siteData';
import { RoofingROICalculator } from '../components/RoofingROICalculator';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Award, 
  Building2, 
  Phone, 
  TrendingUp, 
  ChevronRight,
  Play
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSubmitModal }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="relative rounded-3xl overflow-hidden border border-[#002D61] bg-[#00183b] shadow-2xl min-h-[580px] lg:min-h-[660px] flex flex-col justify-end">
            
            {/* Hero background image with measured optical scrim */}
            <img 
              src={IMAGES.hero} 
              alt="Professional roofing inspection on residential dimensional shingles after Oklahoma hail storm" 
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001433] via-[#001433]/80 to-[#001433]/30" />
            <div className="absolute inset-0 bg-[#001433]/30 backdrop-contrast-105" />

            {/* Content overlay */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl space-y-6">
              
              {/* Metadata kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#69BD27]">
                <span>Oklahoma City Headquarters</span>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span>Tornado Alley Insurance Infrastructure</span>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span className="text-white font-bold">{COMPANY_INFO.formula}</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display text-balance">
                Stop Leaving Money on Carrier Tables.
                <span className="text-[#69BD27] block mt-1">We Are Your Insurance Infrastructure.</span>
              </h1>

              {/* Value Proposition */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                The Roofers Desk handles line-by-line Xactimate & Symbility supplements, building code citations, and claim administration for roofing contractors. Reclaim 20+ hours a week and boost your job margins by 30%–45%.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenSubmitModal}
                  className="px-8 py-4 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-black rounded-xl text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#69BD27]/30 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Submit a File for Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-4 bg-[#00183b]/90 hover:bg-[#00244f] text-white font-semibold rounded-xl text-base border border-[#002D61] backdrop-blur-sm transition-all text-center cursor-pointer"
                >
                  Explore Our Services
                </button>

                <a
                  href={COMPANY_INFO.phone1Raw}
                  className="hidden md:inline-flex items-center gap-2 px-4 py-4 text-sm font-medium text-slate-200 hover:text-[#69BD27] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#69BD27]" />
                  <span>{COMPANY_INFO.phone1}</span>
                </a>
              </div>

              {/* Clean proof strip directly adjacent to hero claim */}
              <div className="pt-4 border-t border-[#002D61]/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#69BD27]" />
                  <span>34.4% Avg Residential Lift</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#69BD27]" />
                  <span>48–72 Hr Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#69BD27]" />
                  <span>100% Contractor Branded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#69BD27]" />
                  <span>No Contingency Fees</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. COMPACT TRUST / CREDIBILITY STRIP */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-5 sm:p-6 text-center space-y-1 hover:border-[#69BD27]/50 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#69BD27] font-display font-mono tabular-nums block">
                34.4%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
                Avg Scope Revenue Lift
              </span>
              <span className="text-[11px] text-slate-400 block">
                Across residential insurance claims
              </span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-5 sm:p-6 text-center space-y-1 hover:border-[#69BD27]/50 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display font-mono tabular-nums block">
                48–72h
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
                Initial Scope Turnaround
              </span>
              <span className="text-[11px] text-slate-400 block">
                Rush 24h storm queues available
              </span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-5 sm:p-6 text-center space-y-1 hover:border-[#69BD27]/50 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#69BD27] font-display block">
                X1 & Connect
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
                Xactimate & Symbility
              </span>
              <span className="text-[11px] text-slate-400 block">
                Local price list precision by zip
              </span>
            </div>

            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-5 sm:p-6 text-center space-y-1 hover:border-[#69BD27]/50 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display block">
                OKC HQ
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
                Tornado Alley Proven
              </span>
              <span className="text-[11px] text-slate-400 block">
                324 W Hefner Rd, Oklahoma City
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#002D61] pb-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                Full-Lifecycle Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
                Architected Exclusively for Roofing Contractors
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you need a single complex supplement overturned or complete back-office claim administration, we integrate directly into your workflow.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#69BD27] hover:text-[#5BA822] transition-colors shrink-0 cursor-pointer"
            >
              <span>View All 5 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Marquee Service 1: Supplements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#00183b] border border-[#002D61] rounded-3xl p-6 sm:p-10 hover:border-[#69BD27]/40 transition-colors">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#69BD27]">
                <span className="font-bold">01.</span>
                <span>FLAGSHIP CAPABILITY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Roofing Insurance Supplements
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Insurance adjusters are trained to minimize payout scopes. We reconstruct the true scope of work using Xactimate or Symbility, incorporating local municipal building codes (IRC/IBC), manufacturer installation instructions (GAF, Owens Corning, CertainTeed), and your company branding.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 pt-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#69BD27] shrink-0 mt-0.5" />
                  <span>Line-by-line carrier Explanation of Review (EOR) line item audit</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#69BD27] shrink-0 mt-0.5" />
                  <span>Code enforcement for ice & water shield, drip edge, and high-wind zones</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#69BD27] shrink-0 mt-0.5" />
                  <span>End-to-end claim administration through depreciation release</span>
                </li>
              </ul>

              <div className="pt-3 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('service-supplements')}
                  className="px-5 py-2.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-bold rounded-lg text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#69BD27]/20"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-slate-400">Avg. 48–72 Hr Turnaround</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#002D61] aspect-4/3 group">
                <img
                  src={IMAGES.hailDetail}
                  alt="Hail damage test square inspection and pitch gauge on asphalt shingles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#001433]/90 backdrop-blur-md border border-[#002D61] p-3 rounded-xl text-xs text-slate-200 flex justify-between items-center">
                  <span>Photo Protocol Documentation</span>
                  <span className="text-[#69BD27] font-mono font-bold">+34.4% Avg Lift</span>
                </div>
              </div>
            </div>

          </div>

          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service 2: Estimates */}
            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#69BD27]/40 transition-colors group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-[#69BD27] font-bold">02. ESTIMATES</span>
                  <div className="w-9 h-9 rounded-lg bg-[#00244f] flex items-center justify-center text-[#69BD27] group-hover:bg-[#69BD27] group-hover:text-[#001738] transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Xactimate & Symbility Estimates from Scratch
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Comprehensive estimates built from EagleView/Hover reports, blueprints, or field scopes for retail proposals and pre-adjuster storm files.
                </p>
                <div className="pt-2 text-xs text-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>Tear-off complexity & multiple layers itemized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>Commercial low-slope membrane takeoffs (TPO/EPDM)</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('service-estimates')}
                  className="text-xs font-semibold text-[#69BD27] hover:text-[#5BA822] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Estimating Desk</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 3: Re-Inspections */}
            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#69BD27]/40 transition-colors group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-[#69BD27] font-bold">03. RE-INSPECTIONS</span>
                  <div className="w-9 h-9 rounded-lg bg-[#00244f] flex items-center justify-center text-[#69BD27] group-hover:bg-[#69BD27] group-hover:text-[#001738] transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Re-Inspections & Denial Reversals
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Turn wrongful 1-slope approvals and claim denials into full replacements through engineering rebuttals, Haag standards, and brittle test proof.
                </p>
                <div className="pt-2 text-xs text-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>ITEL discontinued shingle documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>Desk adjuster escalation & supervisor rebuttals</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('service-reinspections')}
                  className="text-xs font-semibold text-[#69BD27] hover:text-[#5BA822] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Re-Inspections</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 4: Analytics */}
            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#69BD27]/40 transition-colors group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-[#69BD27] font-bold">04. FINANCIAL TRACKING</span>
                  <div className="w-9 h-9 rounded-lg bg-[#00244f] flex items-center justify-center text-[#69BD27] group-hover:bg-[#69BD27] group-hover:text-[#001738] transition-colors">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Margin Analytics & Contractor KPIs
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Track actual job margins, identify carrier payment slowdowns, and measure individual sales rep supplement yields across your entire company.
                </p>
                <div className="pt-2 text-xs text-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>Expected vs actual job profit margin variance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>Depreciation receivables velocity tracking</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('service-analytics')}
                  className="text-xs font-semibold text-[#69BD27] hover:text-[#5BA822] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Analytics</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 5: Training */}
            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#69BD27]/40 transition-colors group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-[#69BD27] font-bold">05. FIELD TRAINING</span>
                  <div className="w-9 h-9 rounded-lg bg-[#00244f] flex items-center justify-center text-[#69BD27] group-hover:bg-[#69BD27] group-hover:text-[#001738] transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Contractor Field Training Modules
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Teach your inspectors how to shoot "The Perfect Photo Set", get spaced decking bought, and navigate RCV vs ACV vs RPS policies on day one.
                </p>
                <div className="pt-2 text-xs text-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>IRC R905.2.1 decking code compliance proof</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#69BD27]" />
                    <span>Handling forced placement (LPI) & difficult files</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('service-training')}
                  className="text-xs font-semibold text-[#69BD27] hover:text-[#5BA822] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Training</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY ROOFERS DESK — TORNADO ALLEY BATTLE-TESTED HERITAGE */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                The Authentic Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
                Born in Tornado Alley. Built by Roofers Who Actually Installed Shingles.
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Most estimating services are staffed by junior data-entry clerks who have never climbed a 10/12 pitch roof or smelled hot asphalt on a 100-degree Oklahoma afternoon.
                </p>
                <p>
                  The Roofers Desk was founded in Oklahoma City in the epicenter of North America’s most severe weather corridor. We learned claim supplementing through decades of devastating hailstorms, 80-mph wind bursts, and constant pushback from national carrier adjusters.
                </p>
                <p>
                  We know that when an adjuster misses step flashing or claims spaced 1x6 boards don’t require OSB re-sheathing, your business is risking either an expensive leak or thousands in unpaid labor. We fight for your scope because we’ve stood on your ladders.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3 bg-[#001433] border border-[#002D61] rounded-xl">
                  <Building2 className="w-5 h-5 text-[#69BD27] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Oklahoma City HQ</span>
                    <span className="text-slate-300">324 W Hefner Road</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#001433] border border-[#002D61] rounded-xl">
                  <Scale className="w-5 h-5 text-[#69BD27] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Code & Law Defense</span>
                    <span className="text-slate-300">IRC, IBC & Manufacturer Specs</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm font-semibold text-[#69BD27] hover:text-[#5BA822] flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Our Full Story & Oklahoma Roots</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#002D61] aspect-4/3">
                <img
                  src={IMAGES.estimatingDesk}
                  alt="Contractor estimating desk with blueprints and Xactimate monitors"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/90 via-[#001433]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-xs text-slate-200 space-y-1">
                  <span className="font-bold text-white text-sm block">Our Back Office Is Your Back Office</span>
                  <p className="text-slate-300">Custom branded files sent out under your roofing company name.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SUPPLEMENT ROI CALCULATOR */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <RoofingROICalculator onOpenSubmitModal={onOpenSubmitModal} />
        </div>
      </section>

      {/* 6. PROVEN CASE STUDIES & OVERTURNED SCOPES */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#002D61] pb-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                Real Documented Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
                Recent Scopes Overturned & Supplemented
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Take a look at real files from Oklahoma and Texas where carriers initially shorted roofing contractors thousands of dollars.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#69BD27] hover:text-[#5BA822] transition-colors shrink-0 cursor-pointer"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.slice(0, 2).map((cs) => (
              <div 
                key={cs.id}
                className="bg-[#00183b] border border-[#002D61] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#69BD27]/40 transition-colors"
              >
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-[#69BD27] font-semibold">{cs.location}</span>
                    <span className="text-slate-300">{cs.timeframe} resolution</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cs.summary}
                  </p>

                  {/* Financial Scope Delta Box */}
                  <div className="bg-[#001433] border border-[#002D61] rounded-xl p-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <span className="text-slate-400 block">Initial Carrier Scope</span>
                      <span className="text-slate-300 font-bold font-mono text-sm sm:text-base line-through">
                        ${cs.initialScope.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-300 font-medium block">Final Approved</span>
                      <span className="text-white font-bold font-mono text-sm sm:text-base">
                        ${cs.finalApprovedScope.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#69BD27] font-bold block">Net Recovered</span>
                      <span className="text-[#69BD27] font-black font-mono text-sm sm:text-base">
                        +${cs.netIncrease.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Items Recovered */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-semibold text-slate-200 block">Key Items Recovered:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                      {cs.missedItemsRecovered.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#69BD27] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#002D61] flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">+{cs.percentageIncrease}% Total Lift</span>
                  <button
                    onClick={() => onNavigate('projects')}
                    className="text-[#69BD27] font-semibold hover:text-[#5BA822] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Full Breakdown</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. VIDEO & PROCESS TIMELINE */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-12 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                The 4-Step Claim Administration Workflow
              </h2>
              <p className="text-slate-300 text-sm">
                From initial intake to final check release, here is how our Oklahoma City team operates as your back-office estimating department.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-[#69BD27]">STEP 01</span>
                <h3 className="text-lg font-bold text-white font-display">Portal Submission</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Upload your adjuster scope (EOR), EagleView or CAD measurements, and field photos through our contractor portal 24/7.
                </p>
              </div>

              <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-[#69BD27]">STEP 02</span>
                <h3 className="text-lg font-bold text-white font-display">Code & Spec Audit</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our estimators cross-reference municipal code adoptions, manufacturer requirements, and steep/waste calculations.
                </p>
              </div>

              <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-[#69BD27]">STEP 03</span>
                <h3 className="text-lg font-bold text-white font-display">Branded Supplement</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We generate an itemized Xactimate/Symbility packet with your logo, license numbers, code documentation, and photos.
                </p>
              </div>

              <div className="bg-[#001433] border border-[#002D61] rounded-2xl p-6 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-[#69BD27]">STEP 04</span>
                <h3 className="text-lg font-bold text-white font-display">Carrier Negotiation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We liaise with the desk adjuster, respond to pushbacks, and follow through until the revised scope is approved and funded.
                </p>
              </div>

            </div>

            {/* Video Container */}
            <div className="pt-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#002D61] bg-[#001433] aspect-16/9 max-w-4xl mx-auto shadow-2xl group">
                <img
                  src={IMAGES.commercial}
                  alt="Commercial roofing inspection demonstration"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#001433]/70 flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#69BD27] text-[#001738] flex items-center justify-center shadow-lg shadow-[#69BD27]/30 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 ml-1 fill-current" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#69BD27] font-bold block">
                      Video Presentation
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Inside The Roofers Desk Estimating Engine
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-md">
                      Watch how our senior estimators turn a 1-slope partial approval into a fully funded commercial TPO replacement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#002D61] pb-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
                Verified Contractor Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
                Trusted by Roofing Company Owners Nationwide
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Hear directly from storm restoration contractors and commercial roofers who rely on The Roofers Desk daily.
              </p>
            </div>
            <button
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#69BD27] hover:text-[#5BA822] transition-colors shrink-0 cursor-pointer"
            >
              <span>Read All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#69BD27]/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#69BD27] font-bold font-mono">{t.averageIncrease}</span>
                    <span className="text-[#69BD27] flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Contractor</span>
                    </span>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#002D61] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.author}</h4>
                    <span className="text-xs text-slate-300 block">{t.role} · {t.company}</span>
                    <span className="text-[11px] text-slate-400 block">{t.location}</span>
                  </div>
                  <div className="flex text-[#69BD27] text-sm">
                    {'★'.repeat(t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAST LEAD CAPTURE AUDIT BANNER */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#002D61] via-[#00244f] to-[#00183b] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#69BD27]/40">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#69BD27]">
                Risk-Free File Audit · {COMPANY_INFO.formula}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white">
                Send Us Your Most Frustrating Scope Today. We’ll Show You What Was Missed.
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                No long-term contracts. No monthly retainer fees. Upload your scope and let our senior estimators show you why contractors stay with The Roofers Desk year after year.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenSubmitModal}
                className="px-8 py-4 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-black rounded-xl text-sm transition-all hover:scale-[1.02] shadow-xl text-center cursor-pointer"
              >
                Submit File for Free Audit
              </button>
              <a
                href={COMPANY_INFO.phone1Raw}
                className="px-6 py-4 bg-[#001433] hover:bg-[#002D61] text-white font-bold rounded-xl text-sm transition-all text-center border border-[#003B7A]"
              >
                Call (405) 314-3789
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
