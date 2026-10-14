import React from 'react';
import { cn } from '@/lib/utils/cn';

interface CountryFlagProps {
  country: string;
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ country, className }) => {
  const normalized = country.toLowerCase();

  const renderFlagSvg = () => {
    // 1. Nigeria
    if (normalized.includes('nigeria')) {
      return (
        <svg viewBox="0 0 36 24" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flag of Nigeria">
          <rect width="36" height="24" fill="#008751" />
          <rect x="12" width="12" height="24" fill="#FFFFFF" />
        </svg>
      );
    }

    // 2. United Kingdom & Europe
    if (normalized.includes('kingdom') || normalized.includes('uk') || normalized.includes('europe')) {
      return (
        <svg viewBox="0 0 60 36" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flag of the United Kingdom">
          <clipPath id="uk-flag-clip">
            <rect width="60" height="36" />
          </clipPath>
          <g clipPath="url(#uk-flag-clip)">
            <rect width="60" height="36" fill="#012169" />
            <path d="M0 0L60 36M60 0L0 36" stroke="#FFFFFF" strokeWidth="6" />
            <path d="M0 0L30 18M60 36L30 18" stroke="#C8102E" strokeWidth="2" />
            <path d="M60 0L30 18M0 36L30 18" stroke="#C8102E" strokeWidth="2" />
            <path d="M30 0V36M0 18H60" stroke="#FFFFFF" strokeWidth="10" />
            <path d="M30 0V36M0 18H60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      );
    }

    // 3. United States & Canada
    if (normalized.includes('united states') || normalized.includes('america') || normalized.includes('canada')) {
      return (
        <svg viewBox="0 0 60 36" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flag of the United States">
          <rect width="60" height="36" fill="#B22234" />
          {/* 6 white stripes */}
          <rect y="2.77" width="60" height="2.77" fill="#FFFFFF" />
          <rect y="8.31" width="60" height="2.77" fill="#FFFFFF" />
          <rect y="13.85" width="60" height="2.77" fill="#FFFFFF" />
          <rect y="19.38" width="60" height="2.77" fill="#FFFFFF" />
          <rect y="24.92" width="60" height="2.77" fill="#FFFFFF" />
          <rect y="30.46" width="60" height="2.77" fill="#FFFFFF" />
          {/* Blue Canton */}
          <rect width="25" height="19.4" fill="#3C3B6E" />
          {/* Star representations */}
          <g fill="#FFFFFF">
            <circle cx="5" cy="3.5" r="0.9" />
            <circle cx="10" cy="3.5" r="0.9" />
            <circle cx="15" cy="3.5" r="0.9" />
            <circle cx="20" cy="3.5" r="0.9" />
            <circle cx="7.5" cy="6.8" r="0.9" />
            <circle cx="12.5" cy="6.8" r="0.9" />
            <circle cx="17.5" cy="6.8" r="0.9" />
            <circle cx="5" cy="10" r="0.9" />
            <circle cx="10" cy="10" r="0.9" />
            <circle cx="15" cy="10" r="0.9" />
            <circle cx="20" cy="10" r="0.9" />
            <circle cx="7.5" cy="13.2" r="0.9" />
            <circle cx="12.5" cy="13.2" r="0.9" />
            <circle cx="17.5" cy="13.2" r="0.9" />
            <circle cx="5" cy="16.3" r="0.9" />
            <circle cx="10" cy="16.3" r="0.9" />
            <circle cx="15" cy="16.3" r="0.9" />
            <circle cx="20" cy="16.3" r="0.9" />
          </g>
        </svg>
      );
    }

    // 4. United Arab Emirates (UAE)
    if (normalized.includes('emirates') || normalized.includes('uae')) {
      return (
        <svg viewBox="0 0 36 24" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flag of the United Arab Emirates">
          <rect width="36" height="8" fill="#00732F" />
          <rect y="8" width="36" height="8" fill="#FFFFFF" />
          <rect y="16" width="36" height="8" fill="#000000" />
          <rect width="9" height="24" fill="#FF0000" />
        </svg>
      );
    }

    // 5. China & Asia-Pacific
    if (normalized.includes('china') || normalized.includes('asia')) {
      return (
        <svg viewBox="0 0 36 24" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flag of China">
          <rect width="36" height="24" fill="#DE2910" />
          {/* Main big star */}
          <polygon points="6,3 7,6 10,6 7.5,8 8.5,11 6,9.2 3.5,11 4.5,8 2,6 5,6" fill="#FFDE00" />
          {/* 4 small arc stars */}
          <polygon points="12,2.5 12.4,3.7 13.6,3.7 12.6,4.5 13,5.7 12,5 11,5.7 11.4,4.5 10.4,3.7 11.6,3.7" fill="#FFDE00" />
          <polygon points="14,5 14.4,6.2 15.6,6.2 14.6,7 15,8.2 14,7.5 13,8.2 13.4,7 12.4,6.2 13.6,6.2" fill="#FFDE00" />
          <polygon points="14,9 14.4,10.2 15.6,10.2 14.6,11 15,12.2 14,11.5 13,12.2 13.4,11 12.4,10.2 13.6,10.2" fill="#FFDE00" />
          <polygon points="12,12 12.4,13.2 13.6,13.2 12.6,14 13,15.2 12,14.5 11,15.2 11.4,14 10.4,13.2 11.6,13.2" fill="#FFDE00" />
        </svg>
      );
    }

    // 6. South Africa & Sub-Saharan Africa
    if (normalized.includes('south africa')) {
      return (
        <svg viewBox="0 0 36 24" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flag of South Africa">
          <rect width="36" height="12" fill="#E03C31" />
          <rect y="12" width="36" height="12" fill="#001489" />
          <polygon points="0,0 18,12 0,24" fill="#FFB81C" />
          <polygon points="0,2 15,12 0,22" fill="#000000" />
          <path d="M0 0L18 12H36V16H18L0 28" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M0 0.8L16.5 12H36V15H16.5L0 26.2" stroke="#007749" strokeWidth="2.5" />
          <polygon points="0,3 12,12 0,21" fill="#000000" />
        </svg>
      );
    }

    // Default neutral globe or fall-through
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full text-slate-400 p-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    );
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center w-7 h-5 overflow-hidden rounded-xs border border-slate-300/80 shadow-2xs shrink-0 bg-slate-100',
        className
      )}
      title={country}
      role="img"
      aria-label={`Flag of ${country}`}
    >
      {renderFlagSvg()}
    </span>
  );
};
