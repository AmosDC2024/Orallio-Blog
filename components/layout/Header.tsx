'use client';

import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Logo } from '@/components/ui/Logo';
import { DesktopNav } from '@/components/navigation/DesktopNav';
import { MobileNav } from '@/components/navigation/MobileNav';
import { cn } from '@/lib/utils/cn';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xs transition-all duration-200 border-b border-slate-200/80',
        isScrolled ? 'shadow-xs py-3' : 'py-4'
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo variant="group" />
        <div className="flex items-center gap-4">
          <DesktopNav />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};
