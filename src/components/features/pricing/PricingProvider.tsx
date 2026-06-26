'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency, BillingCycle } from '@/constants/pricing';

interface PricingState {
  currency: Currency;
  billingCycle: BillingCycle;
  setCurrency: (currency: Currency) => void;
  setBillingCycle: (cycle: BillingCycle) => void;
}

const PricingContext = createContext<PricingState | undefined>(undefined);

export function PricingProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <PricingContext.Provider value={{ currency, billingCycle, setCurrency, setBillingCycle }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
}
