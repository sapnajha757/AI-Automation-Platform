'use client';

import React, { memo } from 'react';
import { usePricing } from './PricingProvider';
import { calculatePrice } from '@/lib/pricing-engine';

interface PriceNodeProps {
  basePriceUSD: number;
}

export const PriceNode = memo(function PriceNode({ basePriceUSD }: PriceNodeProps) {
  const { currency, billingCycle } = usePricing();
  const { amount, symbol } = calculatePrice(basePriceUSD, currency, billingCycle);

  return (
    <div className="flex items-end gap-1 my-6" aria-live="polite">
      <span className="text-4xl font-mono font-bold text-forsythia">
        {symbol}{amount}
      </span>
      <span className="text-mystic/60 mb-1 text-sm">
        /{billingCycle === 'monthly' ? 'mo' : 'mo (billed annually)'}
      </span>
    </div>
  );
});
