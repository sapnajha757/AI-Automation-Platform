import React from 'react';
import { PRICING_TIERS } from '@/constants/pricing';
import { PricingProvider } from './PricingProvider';
import { PricingToggle } from './PricingToggle';
import { PriceNode } from './PriceNode';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-oceanic text-arctic">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-mono font-bold text-forsythia mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-mystic/80">
            Scale your operations with our flexible pricing plans tailored for teams of all sizes.
          </p>
        </div>

        <PricingProvider>
          <div className="flex flex-col items-center">
            <PricingToggle />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
              {PRICING_TIERS.map((tier, index) => (
                <div 
                  key={tier.id}
                  className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-[var(--animate-reflow)] hover:-translate-y-2
                    ${index === 1 
                      ? 'bg-nocturnal/20 border-forsythia/50 shadow-[0_0_40px_-15px_var(--color-forsythia)]' 
                      : 'bg-oceanic border-mystic/10 hover:border-mystic/30'
                    }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-forsythia text-oceanic text-xs font-bold font-mono rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold font-mono">{tier.name}</h3>
                  <p className="mt-4 text-sm text-mystic/70 flex-grow">
                    {tier.description}
                  </p>

                  <PriceNode basePriceUSD={tier.basePriceUSD} />

                  <ul className="mt-6 space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-mystic">
                        <svg className="w-5 h-5 text-saffron mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`mt-auto w-full py-3 px-4 rounded-lg font-medium transition-colors duration-[var(--animate-micro)]
                      ${index === 1 
                        ? 'bg-forsythia text-oceanic hover:bg-forsythia/90' 
                        : 'bg-white/5 text-arctic hover:bg-white/10'
                      }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </PricingProvider>
      </div>
    </section>
  );
}