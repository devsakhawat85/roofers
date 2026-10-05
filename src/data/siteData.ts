import { ServiceItem, CaseStudy, Testimonial, FaqItem } from '../types';
import rdLogo from '../assets/images/rd_logo_trimmed.png';
import rdLogoJpg from '../assets/images/rd_logo.jpg';
import heroImg from '../assets/images/hero_roofing_storm_inspection_1791184250529.jpg';
import commercialImg from '../assets/images/commercial_flat_roof_tpo_1791184274609.jpg';
import hailDetailImg from '../assets/images/roof_inspection_hail_damage_1791184290855.jpg';
import estimatingDeskImg from '../assets/images/contractor_estimating_desk_1791184314542.jpg';
import residentialLuxuryImg from '../assets/images/residential_luxury_roof_1791184324695.jpg';

export const COMPANY_INFO = {
  name: 'The Roofers Desk',
  shortName: 'Roofers Desk',
  logoUrl: rdLogoJpg || 'https://static.wixstatic.com/media/6fef59_158adc28d65947bb9e4afab762109254~mv2.jpg/v1/fill/w_316,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RD%20Main%20-%20under%2020MB.jpg',
  logoTrimmed: rdLogo,
  fallbackLogoUrl: 'https://static.wixstatic.com/media/6fef59_158adc28d65947bb9e4afab762109254~mv2.jpg/v1/fill/w_316,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RD%20Main%20-%20under%2020MB.jpg',
  colors: {
    primaryNavy: '#002D61',
    navyDark: '#001433',
    navyDeep: '#00183b',
    navyLight: '#00408A',
    accentGreen: '#69BD27',
    greenHover: '#5BA822',
  },
  tagline: 'The Insurance Infrastructure for Roofing Contractors',
  formula: '+Time · +Money · -Stress',
  address: '324 W Hefner Road, Oklahoma City, OK 73114',
  phone1: '(405) 314-3789',
  phone2: '(405) 242-4201',
  phone1Raw: 'tel:+14053143789',
  phone2Raw: 'tel:+14052424201',
  email: 'info@roofersdesk.com',
  portalUrl: 'https://roofersdesk.com',
  headquarters: 'Oklahoma City, Oklahoma',
  regionServed: 'Nationwide (with deep Tornado Alley & Midwest Storm Expertise)',
  operatingHours: 'Monday – Friday: 7:00 AM – 6:00 PM CST',
  establishedNote: 'Founded by veteran Oklahoma roofing operators who survived Tornado Alley storms and mastered carrier estimation protocols.',
};

export const IMAGES = {
  hero: heroImg,
  commercial: commercialImg,
  hailDetail: hailDetailImg,
  estimatingDesk: estimatingDeskImg,
  residentialLuxury: residentialLuxuryImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'supplements',
    slug: 'supplements',
    pageId: 'service-supplements',
    title: 'Roofing Insurance Supplements',
    subtitle: 'Full-Cycle Claim Optimization with Code & Manufacturer Precision',
    shortDesc: 'Stop leaving 25%–40% on carrier tables. We build carrier-ready Xactimate and Symbility supplement packets with building codes, manufacturer specs, and your custom company branding.',
    fullDesc: 'Insurance adjusters frequently omit code-mandated drip edge, ice & water shield, valley lining, high-profile ridge cap, proper waste factors, step flashing, and steep/high pitch charges. The Roofers Desk analyzes initial carrier scopes line by line against field photos and local municipal building codes, writing bulletproof supplement packets branded under your logo. We handle file administration and communications from initial submission through final depreciation release.',
    image: IMAGES.hailDetail,
    deliverables: [
      'Line-by-line carrier scope comparison & line item optimization',
      'Xactimate & Symbility carrier-ready estimates (.ESX & .PDF)',
      'Local municipal building code documentation (IRC/IBC citations)',
      'Manufacturer specification sheets (GAF, Owens Corning, CertainTeed)',
      'Custom-branded supplement packets with your contractor logo',
      'Direct adjuster negotiation support & rebuttal packets',
      'Final invoice generation & depreciation release follow-up',
    ],
    keyBenefits: [
      {
        title: '30%–45% Average Scope Increase',
        desc: 'Contractors routinely capture legitimate code-required items and overhead & profit (O&P) that desk adjusters overlooked.',
      },
      {
        title: 'Zero Carrier Hold-Time Waste',
        desc: 'Reclaim 15–25 hours per week per project manager. We track claim files and follow up with desk adjusters so you can focus on building.',
      },
      {
        title: '100% Brand Sovereignty',
        desc: 'We operate as your back-office insurance division. All packets, estimates, and correspondence represent your roofing company.',
      },
    ],
    processSteps: [
      { step: '01', title: 'File Intake & Scope Audit', desc: 'Upload the carrier Explanation of Review (EOR), EagleView/Hover report, and job photos via our portal.' },
      { step: '02', title: 'Code & Specification Integration', desc: 'Our senior estimators cross-reference municipal code requirements and manufacturer installation manuals.' },
      { step: '03', title: 'Branded Supplement Generation', desc: 'We compile an itemized, indisputable supplement packet formatted in Xactimate/Symbility with your logo.' },
      { step: '04', title: 'Carrier Submission & File Tracking', desc: 'We submit and liaise with the desk adjuster until the revised scope of loss is approved and funded.' },
    ],
    typicalOutcome: 'Average turnaround of 48–72 hours for initial supplement draft. Typical recovery: $3,200 to $8,500+ per residential roof.',
    softwareUsed: ['Xactimate X1', 'Symbility Claims Connect', 'EagleView', 'Hover', 'OneClick Code'],
    faqs: [
      {
        q: 'How does The Roofers Desk differ from a public adjuster?',
        a: 'We are roofing estimating and supplement administrators for licensed contractors. We do not represent policyholders or charge percentage public adjusting contingency fees. We build contractor-driven estimates reflecting real construction costs, local building codes, and manufacturer installation specs.',
      },
      {
        q: 'What software do you write the supplements in?',
        a: 'We use the industry standards: Xactimate (Verisk) and Symbility (CoreLogic), using the exact monthly price lists relevant to your zip code/metropolitan area.',
      },
      {
        q: 'Do you work commercial roofing claims as well as residential?',
        a: 'Yes. We regularly supplement complex commercial systems including TPO, EPDM, PVC, modified bitumen, standing seam metal, and parapet wall reconstructions.',
      },
    ],
  },
  {
    id: 'estimates',
    slug: 'estimates',
    pageId: 'service-estimates',
    title: 'Xactimate & Symbility Estimates',
    subtitle: 'Comprehensive Residential & Commercial Estimates from Scratch',
    shortDesc: 'Fast, accurate, and defensible estimates built from architectural drawings, aerial measurements, or field scopes for retail reroofs and storm restoration projects.',
    fullDesc: 'Need a pristine estimate built from scratch before an adjuster even visits the property? Or an accurate retail proposal to quote a homeowner or commercial property manager? The Roofers Desk delivers itemized, professional estimates using current local labor and material pricing. Every estimate covers tear-off complexity, multiple layers, decking replacement, flashing, chimney saddles, ventilation calculations, and safety requirements.',
    image: IMAGES.estimatingDesk,
    deliverables: [
      'Comprehensive Xactimate / Symbility estimates from scratch',
      'Integration of EagleView, Hover, or RoofScope CAD measurements',
      'Detailed waste factor and pitch breakdown calculations',
      'Commercial low-slope takeoffs (insulation, fasteners, ballast, membrane)',
      'Retail contractor proposals ready to present to property owners',
      'Fast 24-to-48-hour rush delivery options',
    ],
    keyBenefits: [
      {
        title: 'Precision Price-List Grounding',
        desc: 'Every estimate uses real-time regional pricing for your specific county to protect your profit margin against inflation.',
      },
      {
        title: 'Win Larger Commercial Jobs',
        desc: 'Professional engineering-level commercial takeoffs impress facility managers, HOAs, and board directors.',
      },
      {
        title: 'Scalable Estimating Capacity',
        desc: 'Instantly scale up your estimating team during major hail or storm events without hiring full-time payroll overhead.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Submit Measurements', desc: 'Send us your EagleView/Hover link, manual field measurements, or architectural plan drawings.' },
      { step: '02', title: 'Scope Consultation', desc: 'We clarify specific material tiers (architectural, impact resistant class 4, synthetic slate, standing seam).' },
      { step: '03', title: 'Itemized Breakdown', desc: 'Our estimators calculate every flashing, valley, drip edge, ridge vent, and pipe boot with localized pricing.' },
      { step: '04', title: 'Client Delivery', desc: 'Receive your PDF and .ESX file ready for presentation or carrier submission.' },
    ],
    typicalOutcome: 'Zero bid underpricing. Confident bidding with guaranteed margin protection.',
    softwareUsed: ['Xactimate X1', 'Symbility', 'Planswift', 'EagleView', 'Hover'],
    faqs: [
      {
        q: 'Can you write estimates for non-insurance retail reroof projects?',
        a: 'Absolutely. Many of our contractors use our estimating desk to provide detailed, transparent bids for cash/retail homeowners and commercial property management firms.',
      },
      {
        q: 'What is your turnaround time for a standard residential estimate?',
        a: 'Standard turnaround is 24 to 48 business hours once all measurements and photo sets are provided.',
      },
    ],
  },
  {
    id: 'reinspections',
    slug: 'reinspections',
    pageId: 'service-reinspections',
    title: 'Re-Inspections & File Administration',
    subtitle: 'Overcoming Denials, Partial Approvals & Adjuster Pushback',
    shortDesc: 'Turn partial approvals into full roof replacements. We coordinate re-inspections, assemble photo evidence packets, and draft rebuttal letters backed by engineering standards.',
    fullDesc: 'When an initial carrier adjuster denies hail damage, claims wind lift was "pre-existing wear and tear", or only approves one slope out of four, your profit is on the line. The Roofers Desk specializes in handling difficult files. We construct rigorous photo evidence packets, cite Haag Engineering standards, demonstrate shingle brittleness and discontinued shingles (ITEL reports), and coordinate with desk adjusters for full re-inspections.',
    image: IMAGES.hero,
    deliverables: [
      'Comprehensive denial analysis and rebuttal letter drafting',
      'Slope-by-slope hail and wind impact photo documentation',
      'ITEL discontinued shingle documentation & state matching laws',
      'Re-inspection scheduling and adjuster coordination packet',
      'Code requirement enforcement for non-repairable assemblies',
      'Depreciation recovery tracking and certificate of completion filing',
    ],
    keyBenefits: [
      {
        title: 'Overturn Partial Denials',
        desc: 'Convert 1-slope or 2-slope partial repair approvals into full re-roofs by proving repairability failures and matching requirements.',
      },
      {
        title: 'Expert Claim Administration',
        desc: 'Our staff knows carrier administrative escalation paths, supervisor contacts, and formal dispute documentation.',
      },
      {
        title: 'Protect Homeowner Relationship',
        desc: 'Position yourself as the knowledgeable advocate who went the extra mile to get their property properly restored.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Denial Review', desc: 'We examine the adjuster summary and reason for denial or partial slope approval.' },
      { step: '02', title: 'Brittle Test & Matching Audit', desc: 'We analyze shingle condition, discontinued product records, and local repairability codes.' },
      { step: '03', title: 'Re-Inspection Packet', desc: 'We build a high-resolution binder with test squares, spatter evidence, and municipal mandates.' },
      { step: '04', title: 'Resolution & Re-Approval', desc: 'We liaise until the carrier assigns an independent adjuster or agrees to full replacement.' },
    ],
    typicalOutcome: 'Over 78% success rate on legitimate hail and wind damage partial-approval reversals.',
    softwareUsed: ['Xactimate', 'ITEL Mobile', 'OneClick Code', 'HailTrace', 'CoreLogic'],
    faqs: [
      {
        q: 'What if the carrier says the shingles are repairable?',
        a: 'We document shingle fragility, granule loss along the bond line during test repairs, and local building codes requiring contiguous slope uniform performance.',
      },
      {
        q: 'Do you attend the physical inspection on the roof?',
        a: 'We handle all file administration, estimating, and documentation packets. We prepare your field sales rep or project manager with the exact script, photos, and evidence to guide the on-site adjuster effectively.',
      },
    ],
  },
  {
    id: 'analytics',
    slug: 'analytics',
    pageId: 'service-analytics',
    title: 'Financial Tracking & Margin Analytics',
    subtitle: 'Track KPIs, Job Profitability, and Sales Rep Supplement Yield',
    shortDesc: 'Stop guessing your net margins. We monitor claim velocity, carrier payout timelines, supplement capture rates, and individual project manager profit contributions.',
    fullDesc: 'Running a 7-figure or 8-figure roofing company requires deep financial visibility. Are you losing margin on labor overages? Which carriers consistently drag out depreciation checks for 90+ days? Which of your sales reps gathers perfect photo sets that result in $6,000 supplements, versus reps whose files get rejected? The Roofers Desk provides financial tracking and margin analytics designed specifically for roofing contractors.',
    image: IMAGES.commercial,
    deliverables: [
      'Monthly KPI dashboard tracking total supplemented dollars',
      'Average dollar increase per job and per square metric',
      'Carrier approval velocity tracking (days to payment)',
      'Sales rep performance audit (photo quality vs claim yield)',
      'Job margin variance reports (projected vs actual margin)',
      'Quarterly executive strategy review with your leadership team',
    ],
    keyBenefits: [
      {
        title: 'Find Hidden Margin Leaks',
        desc: 'Identify where materials, dumpster costs, or uncollected supplements are eroding your bottom line.',
      },
      {
        title: 'Train Low-Yield Sales Reps',
        desc: 'Use data to coach reps who under-document roofs, instantly boosting company-wide claim capture.',
      },
      {
        title: 'Accelerate Cash Flow',
        desc: 'Track outstanding depreciation receivables systematically and shorten your cash conversion cycle by 14+ days.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Data Integration', desc: 'We sync with your CRM (AccuLynx, JobNimbus, Roofr, BuilderTrend) or track your monthly files.' },
      { step: '02', title: 'Benchmark Analysis', desc: 'We calculate your baseline supplement capture rate and compare it to regional averages.' },
      { step: '03', title: 'Monthly KPI Review', desc: 'We deliver actionable executive reports detailing net recovered revenue and pipeline status.' },
      { step: '04', title: 'Margin Optimization', desc: 'We adjust estimating templates to capture frequently missed regional line items.' },
    ],
    typicalOutcome: 'Average 4.2% increase in overall company net profit margin within 90 days.',
    softwareUsed: ['AccuLynx API', 'JobNimbus', 'Custom KPI Portal', 'Excel/Sheets Financial Models'],
    faqs: [
      {
        q: 'Can you integrate with our existing CRM?',
        a: 'Yes! We work seamlessly with AccuLynx, JobNimbus, Roofr, Leap, and standard contractor operational spreadsheets.',
      },
    ],
  },
  {
    id: 'training',
    slug: 'training',
    pageId: 'service-training',
    title: 'Contractor Training & Consulting',
    subtitle: 'Field Modules for Perfect Photo Sets, Decking Approvals & Policy Clauses',
    shortDesc: 'Equip your sales reps, inspectors, and project managers to gather bulletproof evidence that carriers cannot dismiss. Practical modules taught by Tornado Alley veterans.',
    fullDesc: 'A supplement is only as strong as the evidence captured on the roof. If your project manager forgets pitch gauge photos, misses soft metal strikes on box vents, or fails to take proper chalked test square photos, the claim is lost before it starts. The Roofers Desk offers battle-tested training modules tailored for roofing crews. We teach your team how to capture the "Perfect Photo Set", how to get rotted decking bought, how to handle RCV vs. ACV vs. RPS policies, and how to navigate lender force-placed insurance (LPI).',
    image: IMAGES.residentialLuxury,
    deliverables: [
      'Module 1: The Perfect Photo Set (Angle, pitch, test square & collateral checklist)',
      'Module 2: Getting Decking & Plywood Bought (Code language & spacing requirements)',
      'Module 3: Policy Literacy (Navigating RCV, ACV, RPS Roof Payment Schedules & Depreciation)',
      'Module 4: Overcoming Adjuster Objections (What to say on the ladder)',
      'Module 5: LPI & Forced Placements (Working complex commercial & foreclosure files)',
      'Printable inspection laminates for sales rep field clipboards',
    ],
    keyBenefits: [
      {
        title: 'Immediate Field Impact',
        desc: 'New sales reps learn how to conduct 20-minute inspections that yield indisputable evidence.',
      },
      {
        title: 'Win More Full Decking Replacements',
        desc: 'Master the exact IRC R905.2.1 code citations to get entire plywood decks re-sheathed when spacing exceeds 1/4 inch.',
      },
      {
        title: 'Retain Top Performing Reps',
        desc: 'When sales reps make an extra $1,000–$2,500 in commission per job through legitimate supplements, they stay with your company.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Team Assessment', desc: 'We evaluate your current field photo quality and identify common rejection patterns.' },
      { step: '02', title: 'Live / Video Modules', desc: 'Interactive training sessions covering photo protocols, code defense, and adjuster interaction.' },
      { step: '03', title: 'Field SOP Distribution', desc: 'Provide your reps with standardized photo order guides and ladder checklists.' },
      { step: '04', title: 'Ongoing Quality Feedback', desc: 'We review your first 10 uploaded jobs and provide immediate constructive coaching.' },
    ],
    typicalOutcome: 'Eliminates 90% of carrier photo re-inspections and speeds up initial claim approval by 60%.',
    softwareUsed: ['CompanyCam', 'OneClick Code', 'Custom LMS Video Library'],
    faqs: [
      {
        q: 'Is the training conducted in-person or remotely?',
        a: 'We offer both high-definition remote interactive webinars and on-site intensive workshops at your contractor office or at our Oklahoma City facility.',
      },
      {
        q: 'Do you provide photo checklists our reps can carry?',
        a: 'Yes, we provide digital PDF checklists and physical weather-resistant clipboard reference cards for field reps.',
      },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'okc-storm-restoration',
    title: 'Edmond, OK — Hail & Wind Storm Restoration',
    location: 'Edmond / Oklahoma City, OK',
    carrier: 'Major National Carrier',
    propertyType: 'Residential Storm Damage',
    initialScope: 14250,
    finalApprovedScope: 22890,
    netIncrease: 8640,
    percentageIncrease: 60.6,
    timeframe: '9 business days',
    missedItemsRecovered: [
      'Ice & Water Shield at eaves and valleys (IRC R905.1.2)',
      'Step flashing & counter-flashing replacement at brick chimneys',
      'High-profile architectural ridge cap shingles',
      'Drip edge replacement around perimeter',
      'Overhead & Profit (10 & 10) approved for trade coordination',
      '24 sheets rotted/spaced decking replacement',
    ],
    summary: 'The original carrier field adjuster wrote for a basic 30-year architectural shingle reroof, completely omitting drip edge, steep charges, and city code-mandated ice & water shield. The Roofers Desk re-inspected the photo set, cited Edmond municipal adoption of IRC R905.1.2, and secured an additional $8,640 with full O&P.',
    image: IMAGES.hero,
  },
  {
    id: 'commercial-tpo-tulsa',
    title: 'Tulsa, OK — 28,000 Sq Ft Medical Office Flat Roof',
    location: 'Tulsa, OK',
    carrier: 'Commercial Surplus Lines Insurer',
    propertyType: 'Commercial TPO',
    initialScope: 68400,
    finalApprovedScope: 114750,
    netIncrease: 46350,
    percentageIncrease: 67.7,
    timeframe: '18 business days',
    missedItemsRecovered: [
      'Full tapered polyiso insulation system to meet R-30 energy code',
      'Curb extension flashing for 8 RTU mechanical units',
      'Heavy-gauge 24ga coping cap replacement along parapet walls',
      'OSHA roof hatch safety perimeter railing',
      'Crane staging, permit fees & city right-of-way closure',
    ],
    summary: 'Carrier attempted to pay for a 45-mil mechanically attached overlay without addressing water ponding or low insulation R-values. The Roofers Desk proved that local energy codes mandated R-30 continuous insulation, requiring curb lifts and full coping cap replacement, yielding a $46,350 supplement.',
    image: IMAGES.commercial,
  },
  {
    id: 'dallas-fort-worth-decking',
    title: 'Plano, TX — Spaced Sheathing & Decking Re-Sheath',
    location: 'Plano / Dallas Metro, TX',
    carrier: 'Regional Texas Property Insurer',
    propertyType: 'Residential Storm Damage',
    initialScope: 18200,
    finalApprovedScope: 27400,
    netIncrease: 9200,
    percentageIncrease: 50.5,
    timeframe: '7 business days',
    missedItemsRecovered: [
      'Full 7/16" OSB re-decking over 1x6 spaced board deck',
      'Manufacturer warranty requirement for continuous solid deck (GAF)',
      'Additional dumpster tear-off tonnage & dump fees',
      'High wind nail zone fastening (6 nails per shingle)',
      'Starter strip along rakes and eaves',
    ],
    summary: 'Adjuster refused to pay for new decking despite spaced boards exceeding 1.25 inches. The Roofers Desk supplied manufacturer warranty bulletins and IRC code stipulations proving shingles could not be warranted over spaced sheathing. Carrier approved 42 squares of full OSB re-decking.',
    image: IMAGES.hailDetail,
  },
  {
    id: 'norman-ok-denial-overturn',
    title: 'Norman, OK — Denied Hail Claim Overturned to Full Replacement',
    location: 'Norman, OK',
    carrier: 'National Insurance Carrier',
    propertyType: 'Residential Storm Damage',
    initialScope: 1850,
    finalApprovedScope: 19450,
    netIncrease: 17600,
    percentageIncrease: 951.3,
    timeframe: '14 business days',
    missedItemsRecovered: [
      'Complete 34-square roof replacement approved after initial 1-slope denial',
      'Soft metal impact documentation (lead boots, box vents, gutter denting)',
      'Brittle test shingle failure documentation during attempted repair',
      'Full gutter and downspout replacement package',
    ],
    summary: 'Carrier originally sent a third-party ladder assist that claimed hail strikes were merely mechanical blistering and approved only $1,850 for gutter touch-ups. We assembled a 32-page engineering rebuttal with macro spatter photos and brittle test failures, prompting a supervisory re-inspection that approved the full $19,450 claim.',
    image: IMAGES.residentialLuxury,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'The Roofers Desk transformed our business. Before working with them, our sales reps spent 30 hours a week arguing with desk adjusters and usually gave up. Last month, The Roofers Desk supplemented 44 jobs for us with an average recovery of $4,800 per roof. That is pure profit right to our bottom line.',
    author: 'Garrett Vance',
    role: 'Owner & President',
    company: 'Apex Storm Restoration',
    location: 'Oklahoma City, OK',
    rating: 5,
    averageIncrease: '+$4,800 / Job',
    verifiedContractor: true,
  },
  {
    id: 'test-2',
    quote: 'What sets The Roofers Desk apart is they are actually roofing people from Tornado Alley. They know local codes, they know Xactimate pricing, and they know what adjusters try to pull. Every supplement has our company logo and looks like a Fortune 500 engineering report.',
    author: 'Cody Miller',
    role: 'Operations Director',
    company: 'Vanguard Roofing & Construction',
    location: 'Moore, OK',
    rating: 5,
    averageIncrease: '+38% Scope Growth',
    verifiedContractor: true,
  },
  {
    id: 'test-3',
    quote: 'We had a 30,000 square foot commercial TPO claim where the carrier initially tried to shortchange us by $40k on insulation and curb details. The Roofers Desk drafted the code citations and Symbility revisions. The carrier funded the whole thing in under 3 weeks.',
    author: 'Marcus Holloway',
    role: 'Commercial Division Lead',
    company: 'Keystone Commercial Roofing',
    location: 'Dallas / Fort Worth, TX',
    rating: 5,
    averageIncrease: '+$46,350 Commercial',
    verifiedContractor: true,
  },
  {
    id: 'test-4',
    quote: 'Their training on The Perfect Photo Set paid for itself on day one. Our newest project managers now take photos that leave adjusters zero wiggle room. We don’t even have to re-inspect half the files anymore because the documentation is so airtight.',
    author: 'Brett Stephenson',
    role: 'General Manager',
    company: 'Crossroads Roofing Specialists',
    location: 'Wichita, KS',
    rating: 5,
    averageIncrease: '94% Approval Rate',
    verifiedContractor: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'What is The Roofers Desk and how do you help roofing contractors?',
    answer: 'The Roofers Desk is an Oklahoma City-based insurance infrastructure partner for roofing contractors nationwide. We take the heavy burden of insurance claims off your plate by handling Xactimate & Symbility estimates, supplement drafting, code documentation, re-inspections, and file administration. We allow your project managers to focus on selling and building roofs while ensuring you are paid for 100% of the work required to properly restore the property.',
  },
  {
    category: 'General',
    question: 'Where are you located and what areas do you serve?',
    answer: 'Our headquarters is located at 324 W Hefner Road, Oklahoma City, OK 73114. Born and raised in Tornado Alley, we handle storm claims, retail reroofs, and commercial projects for contractors across Oklahoma, Texas, Kansas, Missouri, Colorado, and nationwide.',
  },
  {
    category: 'Legal & Compliance',
    question: 'Are you a Public Adjuster or law firm?',
    answer: 'No. The Roofers Desk provides expert estimating, drafting, and administrative support services directly to licensed roofing contractors. We build contractor-driven estimates reflecting actual construction costs, local building codes, and manufacturer installation specifications. We do not represent policyholders or negotiate legal coverage interpretations on a contingency fee basis.',
  },
  {
    category: 'Supplements',
    question: 'Why do insurance carriers miss so many line items on their initial scopes?',
    answer: 'Field adjusters are often under pressure to inspect 5–8 roofs a day and use standard software templates that default to generic items. They routinely miss local municipal building codes (such as required ice & water shield, drip edge, or rafter ventilation), manufacturer installation specs (such as starter course, 6-nail high-wind fastening, or high-profile ridge caps), steep pitch access, multi-layer tear-offs, and Overhead & Profit (O&P). Our job is to bridge that gap with objective evidence.',
  },
  {
    category: 'Portal & Turnaround',
    question: 'What is your turnaround time for a supplement or estimate?',
    answer: 'Our standard turnaround for an initial supplement draft is 48 to 72 hours from the moment you submit complete photos, the carrier Explanation of Review (EOR), and measurement reports. For urgent rush files or catastrophic storm surges, expedited 24-hour turnaround is available.',
  },
  {
    category: 'Estimates',
    question: 'What software do your estimators use?',
    answer: 'We operate primarily in Xactimate X1 (Verisk) and Symbility Claims Connect (CoreLogic). We always verify and load the exact monthly price list corresponding to your project’s specific city/county zip code.',
  },
  {
    category: 'Portal & Turnaround',
    question: 'How do I submit a new job or file to The Roofers Desk?',
    answer: 'You can submit files 24/7 through our Contractor Client Portal on our website. Simply upload your carrier scope PDF, EagleView or Hover measurements, and job photos. You will receive an instant file tracking ID and real-time status updates as our team processes the claim.',
  },
  {
    category: 'Supplements',
    question: 'Does our company logo appear on the estimates and supplements?',
    answer: 'Yes, 100%. We believe in total brand sovereignty. Every supplement packet, cover letter, and Xactimate estimate is formatted with your roofing company’s logo, contact details, and license numbers. We function seamlessly as your internal estimating department.',
  },
  {
    category: 'Supplements',
    question: 'How do you handle Overhead and Profit (10 & 10)?',
    answer: 'We fight for Overhead & Profit whenever the project involves multiple trades (e.g. roofing, gutters, siding, fascia, interior painting) or complex logistical coordination, citing established industry precedents and carrier guidelines for general contractor supervision.',
  },
];
