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
  heroImage?: string;
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
  heroImage,
}) => {
  return (
    <section className="bg-gradient-to-b from-[#0B1120] via-[#0B1120] to-[#0F172A] text-white border-b border-slate-800 pt-8 pb-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB]/15 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="space-y-8 relative z-10">
        {/* Breadcrumb & Parent Relationship Indicator */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#38BDF8] transition-colors">
            Orallio Group
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <Link href="/businesses" className="hover:text-[#38BDF8] transition-colors">
            Our Businesses
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#38BDF8] font-bold">{name}</span>
        </div>

        {/* Parent Relationship Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
          <span className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase">
            An Orallio Group Business
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Content */}
          <div className={heroImage ? 'lg:col-span-7 space-y-6' : 'lg:col-span-12 space-y-6'}>
            {/* Logo & Category Row */}
            <div className="flex flex-wrap items-center gap-6">
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
                <h1 className="text-xl font-bold text-white">{name}</h1>
                <Badge variant={badgeVariant}>{sector}</Badge>
              </div>
            </div>

            {/* Headline & Description */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {headline}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={primaryCtaHref} variant="cta" size="lg">
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 hover:border-slate-500">
                  <span>{secondaryCtaText}</span>
                </Button>
              )}
            </div>
          </div>

          {/* Hero Visual Panel */}
          {heroImage && (
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 group">
                <Image
                  src={heroImage}
                  alt={`${name} Enterprise Operations`}
                  fill
                  unoptimized
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
