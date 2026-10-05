import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS, COMPANY_INFO } from '../data/siteData';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Phone, 
  ShieldAlert
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'General', 'Supplements', 'Estimates', 'Legal & Compliance', 'Portal & Turnaround'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>Knowledge Base & Contractor Inquiries</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Clarity & Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Frequently Asked Questions.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Everything you need to know about our estimating methods, compliance standards, software platforms, and file administration workflow.
          </p>

          {/* Search Input Bar */}
          <div className="max-w-xl relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., public adjuster, Xactimate, turnaround, codes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#00183b] border border-[#002D61] rounded-xl pl-11 pr-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-[#69BD27] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="pt-1 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  activeCategory === cat
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

      {/* 2. ACCORDION SECTION */}
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-8 text-center text-slate-300 space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm">No questions matched your search criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-xs text-[#69BD27] underline cursor-pointer font-semibold"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#00183b] border border-[#002D61] rounded-2xl overflow-hidden transition-colors hover:border-[#69BD27]/40"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#69BD27] font-bold uppercase tracking-wider block">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`p-1.5 rounded-lg bg-[#00244f] text-slate-200 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#69BD27]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-200 text-xs sm:text-sm leading-relaxed border-t border-[#002D61]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 3. COMPLIANCE & LEGAL NOTICE BOX */}
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 flex items-start gap-4 text-xs text-slate-300">
            <ShieldAlert className="w-6 h-6 text-[#69BD27] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-white">Legal Compliance & Trade Clarification</h4>
              <p className="leading-relaxed">
                The Roofers Desk operates strictly as an estimating, supplementing, and administrative support vendor to licensed roofing and general contractors. We are not public insurance adjusters, attorneys, or coverage consultants. We do not solicit or negotiate insurance settlements on behalf of insured homeowners. All estimates and documentation are produced for the contractor to submit as their itemized cost of repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIRECT CONTACT ASSISTANCE */}
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-display">
              Have a Specific Question About a File?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with one of our senior Oklahoma City estimators today.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={COMPANY_INFO.phone1Raw}
              className="px-5 py-3 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-xs transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (405) 314-3789</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
