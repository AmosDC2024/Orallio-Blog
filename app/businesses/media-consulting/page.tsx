import React from 'react';
import type { Metadata } from 'next';
import { SubsidiaryHero } from '@/components/subsidiaries/SubsidiaryHero';
import { ServiceCategoryGrid } from '@/components/subsidiaries/ServiceCategoryGrid';
import { CaseStudyStructure } from '@/components/subsidiaries/CaseStudyStructure';
import { SubsidiaryCTA } from '@/components/subsidiaries/SubsidiaryCTA';

export const metadata: Metadata = {
  title: 'Orallio Media & Consulting | Digital Marketing & Business Advisory',
  description: 'Helping businesses scale and generate revenue using strategic digital media, performance marketing, branding, and executive consulting.',
};

export default function MediaConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Subsidiary Hero */}
      <SubsidiaryHero
        name="Orallio Media & Consulting"
        tagline="Digital Marketing & Business Consulting"
        sector="Media & Advisory"
        logo="/logos/Media-logo.jpg"
        logoAlt="Orallio Media & Consulting Logo"
        headline="We Help Businesses Make Money Using Digital Media."
        description="Orallio Media & Consulting equips growth-focused enterprises with high-performance digital marketing, strategic corporate branding, modern technology solutions, and executive business management advisory."
        primaryCtaText="Book a Consultation"
        primaryCtaHref="/work-with-us?subsidiary=media"
        secondaryCtaText="View Our Services"
        secondaryCtaHref="#services"
        badgeVariant="sky"
      />

      {/* Categorized Services Matrix (Growth, Brand & Tech, Advisory) */}
      <div id="services">
        <ServiceCategoryGrid />
      </div>

      {/* CMS-Ready Case Study Storytelling Framework */}
      <div id="case-studies">
        <CaseStudyStructure />
      </div>

      {/* Subsidiary CTA */}
      <SubsidiaryCTA
        title="Accelerate Your Business Growth"
        description="Schedule a strategic consultation with Orallio Media & Consulting to refine your brand positioning, digital marketing funnels, and corporate strategy."
        primaryCtaText="Book a Consultation"
        primaryCtaHref="/work-with-us?subsidiary=media"
        subsidiaryName="Orallio Media & Consulting"
      />
    </div>
  );
}
