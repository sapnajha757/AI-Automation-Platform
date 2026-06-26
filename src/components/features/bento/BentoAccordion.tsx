'use client';

import React, { useState, useEffect } from 'react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Agentic Orchestration',
    description: 'Coordinate multiple AI agents in parallel to solve complex operational bottlenecks automatically.',
    icon: '🤖'
  },
  {
    id: 'f2',
    title: 'Dynamic Context Memory',
    description: 'Armory maintains persistent state across sessions, ensuring intelligent handoffs between tasks.',
    icon: '🧠'
  },
  {
    id: 'f3',
    title: 'Real-time Telemetry',
    description: 'Monitor token usage, latency, and success rates instantly via a centralized analytics hub.',
    icon: '📊'
  },
  {
    id: 'f4',
    title: 'Enterprise Guardrails',
    description: 'Deploy with confidence using native PI masking and customizable policy enforcement.',
    icon: '🛡️'
  }
];

export function BentoAccordion() {
  // -1 means no active accordion/bento item is explicitly focused (default state)
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Resize listener for Context Lock logic
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768; // 768px is Tailwind's md breakpoint
      if (mobileView !== isMobile) {
        setIsMobile(mobileView);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const toggleItem = (index: number) => {
    setActiveIndex(prev => prev === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-oceanic text-arctic">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-forsythia mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-mystic/80 max-w-2xl mx-auto">
            Discover the powerful features that make Armory the leading choice for enterprise AI automation.
          </p>
        </div>

        {/* 
          Bento Grid (Desktop) / Accordion (Mobile)
          We use CSS media queries to handle the layout, but share the state (activeIndex)
        */}
        <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[250px]">
          {FEATURES.map((feature, index) => {
            const isActive = activeIndex === index;
            
            // Grid spanning logic for desktop (Bento layout)
            // e.g., first item spans 2 columns on lg
            let spanClass = 'md:col-span-1 lg:col-span-1';
            if (index === 0) spanClass = 'md:col-span-2 lg:col-span-2';
            else if (index === 3) spanClass = 'md:col-span-2 lg:col-span-2';

            return (
              <div 
                key={feature.id}
                className={`group relative overflow-hidden rounded-2xl border border-mystic/10 bg-nocturnal/30 transition-all duration-[var(--animate-reflow)] cursor-pointer
                  ${spanClass}
                  ${isActive ? 'border-forsythia/50 ring-1 ring-forsythia bg-nocturnal/50' : 'hover:bg-nocturnal/40 hover:border-mystic/30'}
                `}
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') toggleItem(index); }}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
              >
                <div className="p-8 flex flex-col h-full z-10 relative">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-forsythia transition-colors duration-[var(--animate-micro)]">
                    {feature.title}
                  </h3>
                  
                  {/* Accordion description container (collapses on mobile if not active, always visible on desktop) */}
                  <div 
                    className={`overflow-hidden transition-[max-height,opacity] duration-[var(--animate-reflow)] ease-in-out
                      ${isMobile 
                        ? (isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 m-0') 
                        : 'max-h-40 opacity-100 mt-2'
                      }
                    `}
                  >
                    <p className="text-mystic/80 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative background glow for active state on desktop */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-forsythia/5 to-transparent pointer-events-none transition-opacity duration-[var(--animate-reflow)]
                    ${isActive && !isMobile ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
