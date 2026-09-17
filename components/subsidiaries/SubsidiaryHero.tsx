import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, ChevronRight } from 'lucide-react';

export interface SubsidiaryHeroProps {
  name: string;
  tagline: string;
  sector: string;
  logo: string;
  logoAlt: string;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badgeVariant?: 'emerald' | 'sky' | 'amber' | 'neutral';
}

export const SubsidiaryHero: React.FC<SubsidiaryHeroProps> = ({
  name,
  tagline,
  sector,
  logo,
  logoAlt,
  headline,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  badgeVariant = 'neutral',
}) => {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50/60 to-slate-50 border-b border-slate-200/80 pt-8 pb-16">
      <Container className="space-y-8">
        {/* Breadcrumb & Parent Relationship Indicator */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Orallio Group
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/businesses" className="hover:text-slate-900 transition-colors">
            Our Businesses
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{name}</span>
        </div>

        {/* Parent Relationship Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
          <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">
            An Orallio Group Business
          </span>
        </div>

        {/* Logo & Category Row */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <div className="h-20 sm:h-24 w-56 sm:w-64 relative bg-white border border-slate-200/90 rounded-lg p-2 flex items-center justify-center shadow-xs overflow-hidden shrink-0">
            <Image
              src={logo}
              alt={logoAlt}
              width={240}
              height={80}
              className="object-contain w-full h-full scale-[1.75] transform"
              priority
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-slate-900">{name}</h1>
            <Badge variant={badgeVariant}>{sector}</Badge>
          </div>
        </div>

        {/* Headline & Description */}
        <div className="space-y-4 max-w-4xl pt-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button href={primaryCtaHref} variant="cta" size="lg">
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          {secondaryCtaText && secondaryCtaHref && (
            <Button href={secondaryCtaHref} variant="outline" size="lg">
              <span>{secondaryCtaText}</span>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};
