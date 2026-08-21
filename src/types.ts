export type PageRoute = 
  | 'home'
  | 'product-solar-heat-control'
  | 'product-security-safety'
  | 'product-decorative-privacy'
  | 'product-anti-graffiti'
  | 'product-bird-friendly'
  | 'product-uv-protection'
  | 'product-commercial-glazing'
  | 'city-princeton'
  | 'city-hamilton'
  | 'city-edison'
  | 'city-bridgewater'
  | 'city-south-brunswick'
  | 'commercial'
  | 'about'
  | 'contact';

export interface PerformanceSpec {
  name: string;
  code: string;
  vlt: number; // Visible Light Transmission %
  tser: number; // Total Solar Energy Rejected %
  uvRejection: number; // UV Rejection %
  glareReduction: number; // Glare Reduction %
  irRejection?: number; // Infrared Rejection %
  shadingCoefficient: number;
  shgc: number; // Solar Heat Gain Coefficient
  uValue?: number;
  thickness?: string;
  tensileStrength?: string;
  breakStrength?: string;
  impactStandard?: string;
  warranty: string;
  bestFor: string;
  visualAppearance: string;
}

export interface ProductDetail {
  slug: string;
  route: PageRoute;
  name: string;
  seoTitle: string;
  metaDescription: string;
  consumerSearchKeyword: string;
  categoryHeadline: string;
  editorialSubhead: string;
  heroImage: string;
  heroImageAlt: string;
  primaryProblem: string;
  idealClientProfile: string[];
  specs: PerformanceSpec[];
  architecturalConsiderations: string[];
  processSteps: {
    number: string;
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CityDetail {
  slug: string;
  route: PageRoute;
  cityName: string;
  county: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  subhead: string;
  neighborhoods: string[];
  architecturalContext: string;
  climateAndGlazingChallenges: string;
  caseStudyTitle: string;
  caseStudyDescription: string;
  recommendedFilmSeries: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface EstimateRequest {
  fullName: string;
  email: string;
  phone: string;
  propertyType: 'Residential Estate' | 'Historic Home' | 'Commercial Office' | 'Retail / Storefront' | 'Institutional / Healthcare';
  location: string;
  primaryObjective: string;
  estimatedPanes?: string;
  notes?: string;
  preferredConsultationTime?: string;
}
