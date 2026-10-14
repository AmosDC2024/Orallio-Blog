import React from 'react';

export const HeroDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      {/* 1. Top-Right: Dot Matrix Grid (5x5) */}
      <div className="absolute top-10 right-[15%] lg:right-[22%] hidden md:block animate-float-slow">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-65">
          <pattern id="hero-dots-grid-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.2" fill="#38BDF8" />
          </pattern>
          <rect width="120" height="120" fill="url(#hero-dots-grid-pattern)" />
        </svg>
      </div>

      {/* 2. Top-Left: Double Concentric Geometric Rings */}
      <div className="absolute top-8 left-6 lg:left-12 hidden sm:block animate-float-reverse">
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="opacity-60">
          <circle cx="42" cy="42" r="39" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="5 7" />
          <circle cx="42" cy="42" r="24" stroke="#2563EB" strokeWidth="1.4" />
          <circle cx="42" cy="42" r="4.5" fill="#38BDF8" />
        </svg>
      </div>

      {/* 3. Mid-Left: Curved Dynamic Trajectory Arc */}
      <div className="absolute top-1/2 -left-2 hidden lg:block animate-float-horizontal">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="opacity-55">
          <path d="M10 85 C 30 35, 75 25, 95 10" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="5 7" />
          <circle cx="95" cy="10" r="3.5" fill="#38BDF8" />
          <circle cx="10" cy="85" r="2.5" fill="#2563EB" />
        </svg>
      </div>

      {/* 4. Center-Ambient: Geometric Diamond Coordinate Crosshair (open space between columns) */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 hidden xl:block animate-float-drift">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="opacity-50">
          <rect x="28" y="8" width="28" height="28" transform="rotate(45 28 8)" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 4" />
          <circle cx="28" cy="28" r="3" fill="#38BDF8" />
          <line x1="28" y1="2" x2="28" y2="54" stroke="#2563EB" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
          <line x1="2" y1="28" x2="54" y2="28" stroke="#2563EB" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        </svg>
      </div>

      {/* 5. Bottom-Left: Layered Diamond Accent */}
      <div className="absolute bottom-20 left-8 sm:left-16 hidden sm:block animate-pulse-subtle">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-65">
          <rect x="30" y="6" width="32" height="32" transform="rotate(45 30 6)" stroke="#38BDF8" strokeWidth="1.8" />
          <rect x="30" y="13" width="20" height="20" transform="rotate(45 30 13)" stroke="#2563EB" strokeWidth="1.2" />
          <circle cx="30" cy="29" r="3" fill="#38BDF8" />
        </svg>
      </div>

      {/* 6. Bottom-Right: Orbiting Arc Cluster (Responsive, adapts smoothly for mobile) */}
      <div className="absolute -bottom-2 right-4 sm:right-12 animate-float-reverse">
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" className="opacity-60 w-12 h-12 sm:w-[74px] sm:h-[74px]">
          <path d="M6 70 A 55 55 0 0 1 70 6" stroke="#2563EB" strokeWidth="1.8" strokeDasharray="4 6" />
          <circle cx="48" cy="26" r="3.5" fill="#38BDF8" />
          <circle cx="26" cy="48" r="2.5" fill="#38BDF8" />
        </svg>
      </div>
    </div>
  );
};
