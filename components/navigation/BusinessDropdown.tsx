'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SUBSIDIARIES } from '@/lib/constants/businesses';
import { cn } from '@/lib/utils/cn';

export const BusinessDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded px-2',
          isOpen && 'text-slate-900 font-semibold'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Our Businesses</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-slate-500 transition-transform duration-200',
            isOpen && 'rotate-180 text-slate-900'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-slate-200/80 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase px-3 py-1.5 border-b border-slate-100 mb-2">
            Subsidiary Companies
          </div>
          <div className="space-y-1">
            {SUBSIDIARIES.map((sub) => (
              <Link
                key={sub.id}
                href={sub.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-start gap-3 p-2.5 rounded-md hover:bg-slate-50 transition-colors"
              >
                <div className="w-10 h-10 relative shrink-0 rounded bg-white border border-slate-100 p-1 flex items-center justify-center">
                  <Image
                    src={sub.logo}
                    alt={sub.logoAlt}
                    width={36}
                    height={36}
                    className="object-contain max-h-8"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors flex items-center justify-between">
                    <span>{sub.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-700 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {sub.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1 text-center">
            <Link
              href="/businesses"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
            >
              <span>View all group businesses</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
