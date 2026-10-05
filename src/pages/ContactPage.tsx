import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Send, 
  AlertCircle 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSubmitModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenSubmitModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Supplement Review',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69BD27] uppercase tracking-wider">
            <span>Get in Touch with Our Oklahoma City Office</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Direct Estimating Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl text-balance">
            Talk to an Experienced Estimator Today.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Whether you have a specific storm claim in dispute, need full-time supplement infrastructure, or want to audit a recent carrier scope, we’re ready to assist.
          </p>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN CONTACT GRID */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#00183b] border border-[#002D61] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h2 className="text-2xl font-bold text-white font-display mb-2">
              Send a Scope or Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Fill out the form below and an estimator from our Oklahoma City team will respond within 2 to 4 business hours.
            </p>

            {submitted ? (
              <div className="bg-[#00244f] border border-[#69BD27]/40 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#69BD27]/20 text-[#69BD27] flex items-center justify-center mx-auto border border-[#69BD27]/50">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Message Successfully Sent
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. An estimator has received your note regarding <span className="text-[#69BD27] font-semibold">{formData.service}</span> and will contact you at {formData.phone} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 bg-[#001433] hover:bg-[#002D61] text-xs text-white border border-[#002D61] rounded-lg cursor-pointer font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-950/40 border border-rose-500/40 rounded-lg text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Garrett Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Roofing Company *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Storm Restoration"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Direct Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(405) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="cody@vanguardroofing.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-slate-300 font-medium mb-1">Service or Topic Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#69BD27]"
                  >
                    <option value="Supplement Review">Roofing Supplement Review</option>
                    <option value="Xactimate Estimate from Scratch">Xactimate Estimate from Scratch</option>
                    <option value="Re-Inspection / Denial Rebuttal">Re-Inspection / Denial Rebuttal</option>
                    <option value="Financial & KPI Tracking">Financial & KPI Tracking</option>
                    <option value="Contractor Training Workshop">Contractor Field Training Workshop</option>
                    <option value="General Inquiry">General Partnership Inquiry</option>
                  </select>
                </div>

                <div className="text-xs">
                  <label className="block text-slate-300 font-medium mb-1">Project Details or Carrier Scope Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the property, insurance carrier, claim number, or line items in dispute..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg p-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001738] font-extrabold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#69BD27]/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Estimating Team</span>
                  </button>

                  <span className="text-[11px] text-slate-400 text-center sm:text-right">
                    Have an urgent file? Upload it directly via our{' '}
                    <button
                      type="button"
                      onClick={onOpenSubmitModal}
                      className="text-[#69BD27] underline font-semibold cursor-pointer"
                    >
                      Intake Portal
                    </button>
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Interactive Map representation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-white font-display">
                Headquarters Information
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Oklahoma City HQ</span>
                    <span className="text-slate-300">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Desk Lines</span>
                    <div className="flex flex-col gap-1 text-slate-300">
                      <a href={COMPANY_INFO.phone1Raw} className="hover:text-[#69BD27] font-mono font-medium">
                        {COMPANY_INFO.phone1} (Primary Desk)
                      </a>
                      <a href={COMPANY_INFO.phone2Raw} className="hover:text-[#69BD27] font-mono font-medium">
                        {COMPANY_INFO.phone2} (Secondary Desk)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#69BD27] hover:underline font-medium">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#69BD27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Claims Desk Hours</span>
                    <span className="text-slate-300">{COMPANY_INFO.operatingHours}</span>
                    <span className="text-[11px] text-[#69BD27] block mt-0.5 font-semibold">24/7 File Upload Portal Open</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Architectural Map Card */}
            <div className="bg-[#00183b] border border-[#002D61] rounded-3xl p-6 overflow-hidden space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#69BD27]" />
                  <span>Oklahoma City Facility Location</span>
                </span>
                <span className="text-slate-400">Lake Hefner Corridor</span>
              </div>

              {/* Map Canvas Graphic */}
              <div className="relative rounded-2xl overflow-hidden border border-[#002D61] bg-[#001433] aspect-16/9 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-grid-slate opacity-40" />
                
                {/* Stylized roads */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-1 bg-[#002D61] -rotate-12 transform" />
                  <div className="h-full w-1 bg-[#002D61] rotate-45 transform" />
                  <div className="absolute w-28 h-20 rounded-full border border-sky-500/20 bg-sky-500/5 -left-4 -top-2 flex items-center justify-center text-[10px] text-sky-400 font-mono">
                    Lake Hefner
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-1 bg-[#001433]/90 border border-[#69BD27]/50 p-3 rounded-xl shadow-xl">
                  <div className="w-3 h-3 rounded-full bg-[#69BD27] animate-ping absolute" />
                  <MapPin className="w-6 h-6 text-[#69BD27] relative" />
                  <span className="font-bold text-white text-xs block font-display">The Roofers Desk</span>
                  <span className="text-[10px] text-slate-300">324 W Hefner Rd, OKC</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-300 flex items-center justify-between pt-1">
                <span>Fast highway access via Lake Hefner Pkwy & Broadway Ext.</span>
                <a
                  href="https://maps.google.com/?q=324+W+Hefner+Road+Oklahoma+City+OK+73114"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#69BD27] hover:underline font-semibold"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
