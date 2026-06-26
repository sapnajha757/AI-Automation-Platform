'use client';

import React, { memo } from 'react';
import { usePricing } from './PricingProvider';

export const PricingToggle = memo(function PricingToggle() {
  const { billingCycle, setBillingCycle, currency, setCurrency } = usePricing();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
      {/* Billing Cycle Toggle */}
      <div className="flex items-center bg-oceanic/50 border border-arctic/10 rounded-full p-1 relative">
        <div 
          className="absolute inset-y-1 w-[calc(50%-4px)] bg-forsythia rounded-full transition-transform duration-[var(--animate-reflow)]"
          style={{ transform: billingCycle === 'monthly' ? 'translateX(0)' : 'translateX(100%)' }}
        />
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-[var(--animate-micro)] ${
            billingCycle === 'monthly' ? 'text-oceanic' : 'text-arctic hover:text-white'
          }`}
          aria-pressed={billingCycle === 'monthly'}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('annually')}
          className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-[var(--animate-micro)] ${
            billingCycle === 'annually' ? 'text-oceanic' : 'text-arctic hover:text-white'
          }`}
          aria-pressed={billingCycle === 'annually'}
        >
          Annually
        </button>
      </div>

      {/* Currency Selector */}
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as any)}
        className="bg-transparent border border-arctic/20 rounded-md px-4 py-2 text-arctic focus:outline-none focus:border-forsythia transition-colors font-mono text-sm"
        aria-label="Select Currency"
      >
        <option value="USD" className="bg-oceanic text-arctic">USD ($)</option>
        <option value="EUR" className="bg-oceanic text-arctic">EUR (€)</option>
        <option value="INR" className="bg-oceanic text-arctic">INR (₹)</option>
      </select>
    </div>
  );
});
