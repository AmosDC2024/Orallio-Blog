'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BusinessDropdown } from './BusinessDropdown';
import { Button } from '@/components/ui/Button';
import { MAIN_NAV_ITEMS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

export const DesktopNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-6" aria-label="Desktop Navigation">
      {MAIN_NAV_ITEMS.map((item) => {
        if (item.label === 'Our Businesses') {
          return <BusinessDropdown key={item.label} />;
        }

        if (item.isCta) {
          return (
            <Button
              key={item.label}
              href={item.href}
              variant="cta"
              size="sm"
              className="ml-2 shadow-xs"
            >
              {item.label}
            </Button>
          );
        }

        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'text-sm font-medium text-slate-700 hover:text-[#2563EB] transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded',
              isActive && 'text-[#2563EB] font-semibold border-b-2 border-[#2563EB] rounded-none'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
