export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-supplements'
  | 'service-estimates'
  | 'service-reinspections'
  | 'service-analytics'
  | 'service-training'
  | 'projects'
  | 'reviews'
  | 'faq'
  | 'calculator'
  | 'portal'
  | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  pageId: PageId;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
  keyBenefits: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  typicalOutcome: string;
  softwareUsed: string[];
  faqs: { q: string; a: string }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  carrier: string;
  propertyType: 'Residential Storm Damage' | 'Commercial TPO' | 'Historical Architectural' | 'Multi-Family Complex';
  initialScope: number;
  finalApprovedScope: number;
  netIncrease: number;
  percentageIncrease: number;
  timeframe: string;
  missedItemsRecovered: string[];
  summary: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  averageIncrease: string;
  verifiedContractor: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Supplements' | 'Estimates' | 'Legal & Compliance' | 'Portal & Turnaround';
}

export interface ClaimSubmission {
  id: string;
  contractorName: string;
  companyName: string;
  email: string;
  phone: string;
  claimNumber: string;
  carrier: string;
  propertyAddress: string;
  serviceType: 'supplement' | 'estimate_scratch' | 'reinspection' | 'analytics_audit';
  notes: string;
  fileCount: number;
  status: 'Received' | 'In Review' | 'Estimator Assigned' | 'Drafting' | 'Ready for Carrier';
  submittedAt: string;
}
