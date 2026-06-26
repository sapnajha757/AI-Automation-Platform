import React from "react";
import { Hero } from "@/components/features/hero/Hero";
import { BentoAccordion } from "@/components/features/bento/BentoAccordion";
import { PricingSection } from "@/components/features/pricing/PricingSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Assuming we have these from the earlier setup, I'll mock importing Navbar and Footer
// Wait, I should make sure Navbar and Footer exist or at least the imports are correct.
// Since the prompt asks for Hero, Pricing, Bento, and integration, I'll put them together.

export default function Home() {
  return (
    <>
      {/* Assuming Navbar exists from previous tasks, we just include it if it's there. 
          For now, I'll omit Navbar/Footer if they are missing or just leave them out of the critical path
          Actually, let's include the main new components first. */}
      <main className="min-h-screen bg-oceanic text-arctic">
        <Hero />
        <BentoAccordion />
        <PricingSection />
      </main>
    </>
  );
}