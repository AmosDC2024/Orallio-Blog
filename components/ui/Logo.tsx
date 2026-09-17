import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export interface LogoProps {
  variant?: 'group' | 'agro' | 'media' | 'travels';
  customSrc?: string;
  altText?: string;
  height?: number;
  width?: number;
  className?: string;
  isLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'group',
  customSrc,
  altText,
  height = 40,
  width = 160,
  className,
  isLink = true,
}) => {
  const getLogoDetails = () => {
    switch (variant) {
      case 'agro':
        return {
          src: '/logos/Agro-logo.jpg',
          alt: 'Orallio Agro Solutions Logo',
          defaultWidth: 160,
          defaultHeight: 50,
        };
      case 'media':
        return {
          src: '/logos/Media-logo.jpg',
          alt: 'Orallio Media & Consulting Logo',
          defaultWidth: 160,
          defaultHeight: 50,
        };
      case 'travels':
        return {
          src: '/logos/Travel-logo.png',
          alt: 'Orallio Travels Logo',
          defaultWidth: 160,
          defaultHeight: 50,
        };
      case 'group':
      default:
        return {
          src: '', // Group variant renders styled typography markup
          alt: 'Orallio Group Logo',
          defaultWidth: 180,
          defaultHeight: 50,
        };
    }
  };

  const details = getLogoDetails();
  const imageSrc = customSrc || details.src;
  const imageAlt = altText || details.alt;
  const renderWidth = width || details.defaultWidth;
  const renderHeight = height || details.defaultHeight;

  const content = (
    <div className={cn('relative flex items-center shrink-0', className)}>
      {variant === 'group' && !customSrc ? (
        <div className="flex flex-col font-sans">
          <span className="text-xl font-bold text-slate-900 tracking-wider leading-none uppercase">
            ORALLIO
          </span>
          <span className="text-[10px] font-semibold text-slate-500 tracking-[0.25em] uppercase leading-tight mt-1">
            GROUP
          </span>
        </div>
      ) : (
        <div className="relative overflow-hidden flex items-center justify-center rounded bg-white p-1.5 shadow-xs border border-slate-200 h-12 w-36 shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={renderWidth}
            height={renderHeight}
            className="object-contain w-full h-full scale-[1.65] transform"
            priority
          />
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link
        href="/"
        className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
        aria-label="Orallio Group Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};
