import React, { useState } from 'react';
import { PageId, Testimonial } from '../types';
import { TESTIMONIALS } from '../data/siteData';
import { 
  CheckCircle2, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  Plus
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenSubmitModal }) => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    role: '',
    company: '',
    location: '',
    quote: '',
  });
  const [submittedReviewSuccess, setSubmittedReviewSuccess] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.company || !newReview.quote) return;

    const created: Testimonial = {
      id: `rev-${Date.now()}`,
      author: newReview.author,
      role: newReview.role || 'Roofing Contractor',
      company: newReview.company,
      location: newReview.location || 'Oklahoma City, OK',
      quote: newReview.quote,
      rating: 5,
      averageIncrease: '+32.8% Average Lift',
      verifiedContractor: true,
    };

    setReviewsList([created, ...reviewsList]);
    setSubmittedReviewSuccess(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setSubmittedReviewSuccess(false);
    }, 1500);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>Verified Contractor Reviews</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Unfiltered Industry Feedback</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Hear What Roofing Contractors Say About Working With The Roofers Desk.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Real feedback from owners, general managers, and operations directors who entrusted their claim supplements and estimating queues to our Oklahoma City desk.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-200">
            <div className="flex items-center gap-1.5 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <Star className="w-4 h-4 text-[#69BD27] fill-[#69BD27]" />
              <span>5.0 / 5.0 Contractor Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <TrendingUp className="w-4 h-4 text-[#69BD27]" />
              <span>+34.4% Average Scope Lift</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#00183b] border border-[#002D61] px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-[#69BD27]" />
              <span>100% Verifiable Contractors</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS GRID */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex justify-between items-center border-b border-[#002D61] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Showing {reviewsList.length} Contractor Endorsements
            </span>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-4 py-2 bg-[#00183b] hover:bg-[#00244f] border border-[#002D61] text-xs font-semibold text-[#69BD27] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Submit a Contractor Review</span>
            </button>
          </div>

          {/* Optional inline submission form */}
          {showReviewForm && (
            <form onSubmit={handleAddReview} className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-white font-display">
                Share Your Experience with The Roofers Desk
              </h3>
              
              {submittedReviewSuccess ? (
                <div className="p-4 bg-[#00244f] border border-[#69BD27]/40 rounded-xl text-[#69BD27] text-xs text-center font-medium">
                  Thank you! Your contractor review has been added to our board.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Garrett Vance"
                        value={newReview.author}
                        onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                        className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#69BD27]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Your Role *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Owner / General Manager"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#69BD27]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Roofing Company *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vanguard Roofing"
                        value={newReview.company}
                        onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                        className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#69BD27]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">City, State *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Oklahoma City, OK"
                        value={newReview.location}
                        onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                        className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#69BD27]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium text-xs">Your Testimonial Quote *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe how The Roofers Desk helped your claims, turnover, or profitability..."
                      value={newReview.quote}
                      onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                      className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-xs text-white resize-none focus:outline-none focus:border-[#69BD27]"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="px-4 py-2 bg-[#00244f] text-slate-300 text-xs rounded-lg hover:bg-[#002D61] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Post Review
                    </button>
                  </div>
                </>
              )}
            </form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsList.map((t) => (
              <div
                key={t.id}
                className="bg-[#00183b] border border-[#002D61] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#69BD27]/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#69BD27] font-bold font-mono text-sm">{t.averageIncrease}</span>
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
                    <h3 className="text-sm font-bold text-white">{t.author}</h3>
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

      {/* 3. CTA */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-8 sm:p-12 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Ready to Experience the Same Lift on Your Roofing Claims?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Join hundreds of contractors who stopped fighting desk adjusters alone. Test our team on your next job file.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenSubmitModal}
                className="px-8 py-3.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-sm transition-all hover:scale-[1.02] cursor-pointer shadow-lg shadow-[#69BD27]/25"
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
