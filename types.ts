export enum TierLevel {
  CIRCLE = '2Equilibrium Circle',
  MENTORSHIP = '2Equilibrium Mentorship',
  PRIVATE = '2Equilibrium Private'
}

export interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  tagline: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  result: string;
}

export interface ChartDataPoint {
  day: string;
  weight: number;
  energy: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}