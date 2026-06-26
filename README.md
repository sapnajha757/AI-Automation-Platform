# Armory | AI Automation Platform

Armory is a high-performance, production-grade landing page for a next-generation AI automation orchestration engine.

Built with strict performance, architecture, and design constraints in mind, it provides an ultra-fast user experience with zero external animation or UI component library dependencies.

## Key Features

- **Isolated State Architecture:** The pricing engine is built to enforce state isolation using a React Context pattern. When toggling currencies or billing cycles, only localized text nodes re-render. The surrounding layout and components do not experience any React re-renders or layout thrashing.
- **Dependency-Free:** Built entirely from scratch. Zero usage of Framer Motion, Radix, Shadcn, GSAP, or any external UI libraries. All micro-interactions and layout reflows are implemented using native CSS transitions and Tailwind.
- **Bento-to-Accordion Component:** A responsive feature showcase that dynamically refactors from a modern Bento Grid on desktop to an Accordion on mobile. It features a "Context Lock" mechanism to preserve the active index state cleanly during browser resizing.
- **Dynamic Pricing Engine:** Calculates base prices dynamically across USD, EUR, and INR, and handles a built-in 20% annual discount formula in TypeScript.
- **Strict Semantic HTML:** Full adherence to `<main>`, `<section>`, and keyboard-accessible structure.

## Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Typography:** `next/font/google` (Inter for body, JetBrains Mono for headers)

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Palette

- **Oceanic Noir:** `#172B36` (Primary Background)
- **Arctic Powder:** `#F1F6F4` (Primary Text)
- **Forsythia:** `#FFC801` (Accents & Highlights)
- **Nocturnal Expedition:** `#114C5A` (Secondary Backgrounds)
- **Mystic Mint:** `#D9E8E2` (Muted Accents)
- **Deep Saffron:** `#FF9932` (Interactive Elements)
