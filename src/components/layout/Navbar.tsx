"use client";

import { memo } from "react";

const Navbar = memo(function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-oceanic/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-arctic">
          ARMORY
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Dashboard</a>
        </div>

        <button className="rounded-lg bg-forsythia px-5 py-2 font-semibold text-oceanic transition hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
});

export default Navbar;