import React from 'react';

export const HeroDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      {/* 1. Top-Right: Dot Matrix Grid (5x5) - Scaled for mobile and desktop */}
      <div className="absolute top-4 right-3 sm:top-10 sm:right-[15%] lg:right-[22%] animate-float-slow">
        <svg viewBox="0 0 120 120" fill="none" className="w-16 h-16 sm:w-[120px] sm:h-[120px] opacity-60 sm:opacity-65">
          <pattern id="hero-dots-grid-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.2" fill="#38BDF8" />
          </pattern>
          <rect width="120" height="120" fill="url(#hero-dots-grid-pattern)" />
        </svg>
      </div>

      {/* 2. Top-Left: Double Concentric Geometric Rings */}
      <div className="absolute top-5 left-2 sm:top-8 sm:left-6 lg:left-12 animate-float-reverse">
        <svg viewBox="0 0 84 84" fill="none" className="w-12 h-12 sm:w-[84px] sm:h-[84px] opacity-55 sm:opacity-60">
          <circle cx="42" cy="42" r="39" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="5 7" />
          <circle cx="42" cy="42" r="24" stroke="#2563EB" strokeWidth="1.4" />
          <circle cx="42" cy="42" r="4.5" fill="#38BDF8" />
        </svg>
      </div>

      {/* 3. Mid-Left: Curved Dynamic Trajectory Arc */}
      <div className="absolute top-1/3 -left-3 sm:top-1/2 sm:-left-2 animate-float-horizontal">
        <svg viewBox="0 0 100 100" fill="none" className="w-14 h-14 sm:w-[100px] sm:h-[100px] opacity-50 sm:opacity-55">
          <path d="M10 85 C 30 35, 75 25, 95 10" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="5 7" />
          <circle cx="95" cy="10" r="3.5" fill="#38BDF8" />
          <circle cx="10" cy="85" r="2.5" fill="#2563EB" />
        </svg>
      </div>

      {/* 4. Center-Ambient: Geometric Diamond Coordinate Crosshair */}
      <div className="absolute top-24 right-8 sm:top-16 sm:left-1/2 sm:-translate-x-1/2 animate-float-drift">
        <svg viewBox="0 0 56 56" fill="none" className="w-9 h-9 sm:w-[56px] sm:h-[56px] opacity-45 sm:opacity-50">
          <rect x="28" y="8" width="28" height="28" transform="rotate(45 28 8)" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 4" />
          <circle cx="28" cy="28" r="3" fill="#38BDF8" />
          <line x1="28" y1="2" x2="28" y2="54" stroke="#2563EB" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
          <line x1="2" y1="28" x2="54" y2="28" stroke="#2563EB" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        </svg>
      </div>

      {/* 5. Bottom-Left: Layered Diamond Accent */}
      <div className="absolute bottom-16 left-3 sm:bottom-20 sm:left-8 lg:left-16 animate-pulse-subtle">
        <svg viewBox="0 0 60 60" fill="none" className="w-11 h-11 sm:w-[60px] sm:h-[60px] opacity-55 sm:opacity-65">
          <rect x="30" y="6" width="32" height="32" transform="rotate(45 30 6)" stroke="#38BDF8" strokeWidth="1.8" />
          <rect x="30" y="13" width="20" height="20" transform="rotate(45 30 13)" stroke="#2563EB" strokeWidth="1.2" />
          <circle cx="30" cy="29" r="3" fill="#38BDF8" />
        </svg>
      </div>

      {/* 6. Bottom-Right: Orbiting Arc Cluster */}
      <div className="absolute bottom-2 right-3 sm:-bottom-2 sm:right-12 animate-float-reverse">
        <svg viewBox="0 0 74 74" fill="none" className="w-12 h-12 sm:w-[74px] sm:h-[74px] opacity-55 sm:opacity-60">
          <path d="M6 70 A 55 55 0 0 1 70 6" stroke="#2563EB" strokeWidth="1.8" strokeDasharray="4 6" />
          <circle cx="48" cy="26" r="3.5" fill="#38BDF8" />
          <circle cx="26" cy="48" r="2.5" fill="#38BDF8" />
        </svg>
      </div>
    </div>
  );
};
