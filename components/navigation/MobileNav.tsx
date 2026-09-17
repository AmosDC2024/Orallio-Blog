'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MAIN_NAV_ITEMS } from '@/lib/constants/navigation';
import { SUBSIDIARIES } from '@/lib/constants/businesses';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils/cn';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md"
        aria-label="Open Mobile Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white animate-in fade-in duration-200">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
            <Logo variant="group" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md"
              aria-label="Close Mobile Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.label === 'Our Businesses') {
                return (
                  <div key={item.label} className="border-b border-slate-100 pb-3">
                    <button
                      onClick={() => setBusinessesOpen(!businessesOpen)}
                      className="flex items-center justify-between w-full py-2 text-base font-semibold text-slate-900"
                    >
                      <span>Our Businesses</span>
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 text-slate-500 transition-transform duration-200',
                          businessesOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    {businessesOpen && (
                      <div className="mt-2 ml-2 space-y-3 border-l-2 border-slate-200 pl-4 py-1">
                        {SUBSIDIARIES.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.href}
                            className="flex items-center gap-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900"
                          >
                            <div className="w-7 h-7 relative shrink-0 rounded bg-white border border-slate-200 p-0.5 flex items-center justify-center">
                              <Image
                                src={sub.logo}
                                alt={sub.logoAlt}
                                width={24}
                                height={24}
                                className="object-contain"
                              />
                            </div>
                            <span>{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.isCta) return null; // We render CTA at bottom

              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'block py-2.5 text-base font-semibold text-slate-800 hover:text-slate-900 border-b border-slate-100',
                    isActive && 'text-slate-900 font-bold border-slate-900'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-6">
              <Button href="/work-with-us" variant="cta" size="lg" className="w-full">
                Work With Us
              </Button>
            </div>
          </div>

          {/* Footer note */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Building Businesses. Creating Value. Connecting Possibilities.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
