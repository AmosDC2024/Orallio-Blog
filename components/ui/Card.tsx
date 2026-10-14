import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-slate-200/80 p-6 shadow-xs',
        hoverEffect &&
          'transition-all duration-300 ease-out hover:shadow-md hover:border-slate-300 hover:-translate-y-1 motion-reduce:hover:transform-none motion-reduce:transition-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
