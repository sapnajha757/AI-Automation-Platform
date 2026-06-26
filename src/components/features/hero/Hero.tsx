import React from 'react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-oceanic text-arctic">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-nocturnal blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic/10 border border-mystic/20 text-sm font-mono text-mystic mb-8">
          <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse" />
          Armory v2.0 is now live
        </div>

        <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-white mb-6">
          Automate the <span className="text-forsythia relative">
            Impossible
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-saffron opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-mystic/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          The first production-grade orchestration engine that coordinates multiple AI agents in parallel. Scale your operations without scaling your headcount.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-forsythia text-oceanic font-bold font-mono transition-transform duration-[var(--animate-micro)] hover:scale-105 hover:bg-forsythia/90 shadow-[0_0_20px_-5px_var(--color-forsythia)]"
          >
            Start Building Free
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-mystic/20 text-arctic font-medium transition-colors duration-[var(--animate-micro)] hover:bg-white/5"
          >
            Explore Platform
          </a>
        </div>
      </div>
    </section>
  );
}