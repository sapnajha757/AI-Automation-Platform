export type Currency = 'USD' | 'EUR' | 'INR';
export type BillingCycle = 'monthly' | 'annually';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  basePriceUSD: number; // monthly base price
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started with automation.',
    features: [
      'Up to 5 workflows',
      'Basic analytics',
      'Community support',
      '1,000 runs/month'
    ],
    basePriceUSD: 29
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Advanced features for growing operations.',
    features: [
      'Unlimited workflows',
      'Advanced analytics',
      'Priority email support',
      '10,000 runs/month',
      'Custom integrations'
    ],
    basePriceUSD: 99
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large-scale deployments.',
    features: [
      'Dedicated infrastructure',
      'Custom SLA',
      '24/7 phone support',
      'Unlimited runs',
      'On-premise deployment option'
    ],
    basePriceUSD: 299
  }
];

export const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  INR: 83.12
};

export const ANNUAL_DISCOUNT_MULTIPLIER = 0.8; // 20% discount
