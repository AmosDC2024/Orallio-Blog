'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delayMs = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately display if reduced motion is preferred or if IntersectionObserver is unsupported
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.04,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getHiddenTransform = () => {
    switch (direction) {
      case 'left':
        return '-translate-x-4 opacity-0';
      case 'right':
        return 'translate-x-4 opacity-0';
      case 'down':
        return '-translate-y-4 opacity-0';
      case 'fade':
        return 'opacity-0';
      case 'up':
      default:
        return 'translate-y-4 opacity-0';
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return 'translate-x-0 opacity-100';
      case 'fade':
        return 'opacity-100';
      case 'down':
      case 'up':
      default:
        return 'translate-y-0 opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
        isVisible ? getVisibleTransform() : getHiddenTransform(),
        className
      )}
    >
      {children}
    </div>
  );
};
