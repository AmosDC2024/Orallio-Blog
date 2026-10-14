import React from 'react';
import type { Metadata } from 'next';
import { SubsidiaryHero } from '@/components/subsidiaries/SubsidiaryHero';
import { ServiceCategoryGrid } from '@/components/subsidiaries/ServiceCategoryGrid';
import { CaseStudyStructure } from '@/components/subsidiaries/CaseStudyStructure';
import { SubsidiaryCTA } from '@/components/subsidiaries/SubsidiaryCTA';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { client } from '@/sanity/lib/client';
import { caseStudiesQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Orallio Media & Consulting | Digital Marketing & Business Advisory',
  description: 'Helping businesses scale and generate revenue using strategic digital media, performance marketing, branding, and executive consulting.',
};

export const revalidate = 60;

export default async function MediaConsultingPage() {
  let caseStudies = [];
  try {
    caseStudies = await client.fetch(caseStudiesQuery);
  } catch (error) {
    console.error('Failed to fetch case studies:', error);
  }

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
        heroImage="/images/media-consulting-hero.jpg"
      />

      {/* Categorized Services Matrix (Growth, Brand & Tech, Advisory) */}
      <ScrollReveal>
        <div id="services">
          <ServiceCategoryGrid />
        </div>
      </ScrollReveal>

      {/* Case Studies Section */}
      <ScrollReveal>
        <div id="case-studies">
          <CaseStudyStructure caseStudies={caseStudies} />
        </div>
      </ScrollReveal>

      {/* Subsidiary CTA */}
      <ScrollReveal>
        <SubsidiaryCTA
          title="Accelerate Your Business Growth"
          description="Schedule a strategic consultation with Orallio Media & Consulting to refine your brand positioning, digital marketing funnels, and corporate strategy."
          primaryCtaText="Book a Consultation"
          primaryCtaHref="/work-with-us?subsidiary=media"
          subsidiaryName="Orallio Media & Consulting"
        />
      </ScrollReveal>
    </div>
  );
}

