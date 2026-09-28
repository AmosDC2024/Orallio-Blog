import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  textColor?: string;
  descriptionColor?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  textColor,
  descriptionColor,
  className,
}) => {
  return (
    <div
      className={cn(
        'space-y-3 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold text-[#2563EB] uppercase tracking-widest bg-blue-50/80 px-3 py-1 rounded border border-blue-200/80">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight',
          textColor
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base sm:text-lg text-slate-600 leading-relaxed',
            descriptionColor
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
