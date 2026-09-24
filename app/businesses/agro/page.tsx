import React from 'react';
import type { Metadata } from 'next';
import { SubsidiaryHero } from '@/components/subsidiaries/SubsidiaryHero';
import { CommoditiesGrid } from '@/components/subsidiaries/CommoditiesGrid';
import { ProcessSteps } from '@/components/subsidiaries/ProcessSteps';
import { SubsidiaryCTA } from '@/components/subsidiaries/SubsidiaryCTA';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Globe2, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orallio Agro Solutions | Agriculture & Commodity Trading',
  description: 'Connecting quality African agricultural commodities (dried animal proteins, sesame, ginger, cashew, charcoal) to global markets.',
};

export default function AgroPage() {
  const agroMarkets = [
    { country: 'Nigeria', role: 'Primary Sourcing & Commodity Origination' },
    { country: 'United Kingdom & Europe', role: 'Food & Agricultural Import Destinations' },
    { country: 'United States & Canada', role: 'Commercial Protein & Spice Trading' },
    { country: 'United Arab Emirates (UAE)', role: 'Middle East Commodity Trading Gateway' },
    { country: 'China & East Asia', role: 'Industrial & Feed Protein Import Corridors' },
    { country: 'South Africa', role: 'Sub-Saharan Regional Trade Partnerships' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Subsidiary Hero */}
      <SubsidiaryHero
        name="Orallio Agro Solutions"
        tagline="Agriculture & Commodity Trading"
        sector="Agriculture & Commodities"
        logo="/logos/Agro-logo.jpg"
        logoAlt="Orallio Agro Solutions Logo"
        headline="Connecting Quality African Commodities to Global Markets"
        description="Orallio Agro Solutions is a B2B commodity trading, sourcing, processing, and export business—building reliable agricultural value chains from African farm origination to international importers."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/work-with-us?subsidiary=agro"
        secondaryCtaText="Explore Commodities"
        secondaryCtaHref="#commodities"
        badgeVariant="emerald"
        heroImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
      />

      {/* B2B Commodities Grid */}
      <div id="commodities">
        <CommoditiesGrid />
      </div>

      {/* 4-Step Process: SOURCE → AGGREGATE → PROCESS → EXPORT */}
      <ProcessSteps />

      {/* Global Trade Corridors */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="International Trade Network"
            title="Sourcing & Export Destination Corridors"
            description="Facilitating structured agricultural trade connections between African sourcing origination and global commercial import markets."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agroMarkets.map((m, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <Globe2 className="w-5 h-5 text-emerald-700" />
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{m.country}</h3>
                <p className="text-xs text-slate-600">{m.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Subsidiary CTA */}
      <SubsidiaryCTA
        title="Ready to Source Quality Commodities?"
        description="Partner with Orallio Agro Solutions for reliable agricultural commodity sourcing, export specifications, and international freight logistics."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/work-with-us?subsidiary=agro"
        subsidiaryName="Orallio Agro Solutions"
      />
    </div>
  );
}
