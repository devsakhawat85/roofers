import React, { useState } from 'react';
import { X, Upload, CheckCircle2, Shield, FileText, ArrowRight, AlertCircle, Copy, Check, Phone } from 'lucide-react';
import { ClaimSubmission } from '../types';
import { COMPANY_INFO } from '../data/siteData';

interface SubmitClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted?: (submission: ClaimSubmission) => void;
}

export const SubmitClaimModal: React.FC<SubmitClaimModalProps> = ({ isOpen, onClose, onSubmitted }) => {
  const [formData, setFormData] = useState({
    contractorName: '',
    companyName: '',
    email: '',
    phone: '',
    claimNumber: '',
    carrier: 'State Farm',
    propertyAddress: '',
    serviceType: 'supplement' as ClaimSubmission['serviceType'],
    notes: '',
  });

  const [files, setFiles] = useState<{ name: string; size: string }[]>([
    { name: 'Adjuster_Initial_Scope_EOR.pdf', size: '2.4 MB' },
    { name: 'EagleView_Measurement_Report.pdf', size: '1.8 MB' }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ClaimSubmission | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contractorName || !formData.companyName || !formData.phone || !formData.email) {
      setErrorMsg('Please complete all required fields (Name, Company, Email, Phone).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      const generatedId = `RD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const submission: ClaimSubmission = {
        id: generatedId,
        contractorName: formData.contractorName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        claimNumber: formData.claimNumber || 'PENDING-ALLOCATION',
        carrier: formData.carrier,
        propertyAddress: formData.propertyAddress || 'Address on Scope',
        serviceType: formData.serviceType,
        notes: formData.notes,
        fileCount: files.length,
        status: 'Received',
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
      };

      setSubmittedData(submission);
      setIsSubmitting(false);
      if (onSubmitted) {
        onSubmitted(submission);
      }
    }, 700);
  };

  const handleCopyId = () => {
    if (submittedData) {
      navigator.clipboard.writeText(submittedData.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    /* Fixed overlay: uses items-start on small screens and items-center on taller screens, with min-h-full to prevent negative scroll offsets */
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-2 sm:p-4 md:p-6 flex min-h-screen items-start sm:items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-xl sm:max-w-2xl bg-[#00183b] border border-[#002D61] rounded-2xl shadow-2xl shadow-black/80 my-4 sm:my-auto max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3.5rem)] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header — Always pinned at the top */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 border-b border-[#002D61] flex items-center justify-between bg-[#001433] z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#002D61] border border-[#69BD27]/40 flex items-center justify-center text-[#69BD27] shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white font-display leading-tight">
                {submittedData ? 'Claim File Received' : 'Submit Claim File for Audit & Supplement'}
              </h2>
              <p className="text-[11px] text-slate-300">
                {submittedData ? 'Assigned to our Oklahoma City Senior Estimators' : 'OKC Estimating Desk · 48–72 hr standard turnaround'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-[#002D61] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedData ? (
          /* Confirmation View — Scrollable inside modal with min-h-0 */
          <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-4">
            <div className="bg-[#00244f] border border-[#69BD27]/40 rounded-xl p-4 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#69BD27]/20 text-[#69BD27] flex items-center justify-center mx-auto border border-[#69BD27]/50">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Intake Successfully Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-white">{submittedData.contractorName}</span>. Your file for <span className="text-[#69BD27] font-semibold">{submittedData.companyName}</span> has been logged into our queue.
              </p>
            </div>

            <div className="bg-[#001433] border border-[#002D61] rounded-xl p-3.5 space-y-2.5 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-[#002D61]">
                <span className="text-slate-400">Claim Tracking ID:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#69BD27] text-sm">{submittedData.id}</span>
                  <button 
                    onClick={handleCopyId}
                    className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
                    title="Copy Tracking ID"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#69BD27]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Insurance Carrier:</span>
                <span className="text-slate-200 font-medium">{submittedData.carrier}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Claim Number:</span>
                <span className="text-slate-200 font-mono">{submittedData.claimNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Service Queue:</span>
                <span className="text-[#69BD27] font-medium capitalize">{submittedData.serviceType.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Expected Initial Review:</span>
                <span className="text-[#69BD27] font-medium">Within 24–48 Business Hours</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-300 space-y-1.5 leading-relaxed bg-[#001433]/70 p-3 rounded-lg border border-[#002D61]">
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <Shield className="w-3.5 h-3.5 text-[#69BD27]" />
                <span>Next Steps in Our Process:</span>
              </div>
              <p>
                1. Our estimator cross-references your adjuster's initial scope with local municipal building code requirements and manufacturer specs.
              </p>
              <p>
                2. We compile a fully itemized Xactimate supplement packet with your company branding and review it with you before sending to the carrier.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001433] font-extrabold rounded-lg text-xs transition-colors cursor-pointer shadow-lg shadow-[#69BD27]/20"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form — Scrollable inside modal with min-h-0 and compact styling */
          <form onSubmit={handleSubmit} className="flex-1 min-h-0 overflow-y-auto flex flex-col justify-between">
            <div className="p-3.5 sm:p-5 space-y-3">
              {errorMsg && (
                <div className="p-2.5 bg-rose-950/40 border border-rose-500/40 rounded-lg text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Service Type Selector */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Select Service Needed *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {[
                    { id: 'supplement', label: 'Supplement Audit' },
                    { id: 'estimate_scratch', label: 'Estimate Scratch' },
                    { id: 'reinspection', label: 'Re-Inspection' },
                    { id: 'analytics_audit', label: 'Margin Audit' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: s.id as any })}
                      className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                        formData.serviceType === s.id
                          ? 'bg-[#69BD27]/20 border-[#69BD27] text-white font-bold shadow-sm'
                          : 'bg-[#001433] border-[#002D61] text-slate-300 hover:border-[#003B7A]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contractor Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cody Miller"
                    value={formData.contractorName}
                    onChange={(e) => setFormData({ ...formData, contractorName: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                    Roofing Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Storm Restoration"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(405) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="estimator@myroofingco.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                  />
                </div>
              </div>

              {/* Claim Specifics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                    Insurance Carrier
                  </label>
                  <select
                    value={formData.carrier}
                    onChange={(e) => setFormData({ ...formData, carrier: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-[#69BD27]"
                  >
                    <option value="State Farm">State Farm</option>
                    <option value="Allstate">Allstate</option>
                    <option value="Travelers">Travelers</option>
                    <option value="Liberty Mutual">Liberty Mutual</option>
                    <option value="USAA">USAA</option>
                    <option value="Farmers">Farmers</option>
                    <option value="Nationwide">Nationwide</option>
                    <option value="Chubb">Chubb</option>
                    <option value="Commercial Surplus Lines">Commercial Surplus Lines</option>
                    <option value="Other Carrier">Other Carrier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                    Claim # / Policy #
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 36-9281-K41"
                    value={formData.claimNumber}
                    onChange={(e) => setFormData({ ...formData, claimNumber: e.target.value })}
                    className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27] font-mono"
                  />
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                  Property Address (City, State, Zip)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 742 Northwest 150th St, Edmond, OK 73013"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27]"
                />
              </div>

              {/* File Upload Dropzone */}
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Upload Scopes, EagleView, Photos, or Measurements
                </label>
                <div className="border border-dashed border-[#002D61] hover:border-[#69BD27]/60 rounded-xl p-3 text-center bg-[#001433]/60 transition-colors">
                  <Upload className="w-5 h-5 text-[#69BD27] mx-auto mb-1" />
                  <p className="text-xs text-slate-300">
                    <label className="text-[#69BD27] font-semibold cursor-pointer hover:underline">
                      Browse files
                      <input
                        type="file"
                        multiple
                        onChange={handleAddFile}
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg,.zip,.esx"
                      />
                    </label>{' '}
                    or drag & drop carrier scope PDF, EagleView, or photos
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Supports .PDF, .ESX, .JPG, .PNG, .ZIP (Up to 50MB)
                  </p>
                </div>

                {/* Uploaded File List */}
                {files.length > 0 && (
                  <div className="mt-1.5 space-y-1">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-[#001433] border border-[#002D61] px-2.5 py-1 rounded-lg text-xs"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-3.5 h-3.5 text-[#69BD27] shrink-0" />
                          <span className="text-slate-200 truncate">{file.name}</span>
                          <span className="text-slate-400 text-[10px] shrink-0 font-mono">({file.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(idx)}
                          className="text-slate-400 hover:text-rose-400 p-0.5 cursor-pointer"
                          title="Remove file"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-0.5">
                  Scope Notes / Missed Line Items
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Adjuster omitted drip edge, spaced decking exceeds 1 inch, steep 10/12 pitch on rear slope."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#001433] border border-[#002D61] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#69BD27] resize-none"
                />
              </div>
            </div>

            {/* Modal Sticky Footer Action Bar — Always visible at bottom */}
            <div className="shrink-0 px-4 sm:px-6 py-3 bg-[#001433] border-t border-[#002D61] flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
              <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#69BD27]" />
                <span>OKC Desk:</span>
                <a href={COMPANY_INFO.phone1Raw} className="text-[#69BD27] hover:underline font-semibold">
                  {COMPANY_INFO.phone1}
                </a>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#69BD27] hover:bg-[#5BA822] text-[#001433] font-extrabold rounded-lg text-xs transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#69BD27]/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Assigning Estimator...</span>
                ) : (
                  <>
                    <span>Submit Claim to Estimating Queue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
