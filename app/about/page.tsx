import React from 'react';
import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { WhoWeAreSection } from '@/components/about/WhoWeAreSection';
import { VisionMissionSection } from '@/components/about/VisionMissionSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { FounderSection } from '@/components/about/FounderSection';
import { LeadershipSection } from '@/components/about/LeadershipSection';
import { AboutCTA } from '@/components/about/AboutCTA';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.name} | Corporate Governance & Values`,
  description: `Learn about ${SITE_CONFIG.name}'s mission, vision, corporate values, and leadership under Founder Godwin Adeniyi.`,
  openGraph: {
    title: `About ${SITE_CONFIG.name}`,
    description: SITE_CONFIG.description,
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Section 1 — Hero */}
      <AboutHero />

      {/* Section 2 — Who We Are */}
      <WhoWeAreSection />

      {/* Section 3 — Vision & Mission */}
      <VisionMissionSection />

      {/* Section 4 — Our Values */}
      <ValuesSection />

      {/* Section 5 — Founder Profile (Godwin Adeniyi) */}
      <FounderSection />

      {/* Section 6 — Leadership & Team Architecture */}
      <LeadershipSection />

      {/* Section 7 — Corporate CTA */}
      <AboutCTA />
    </div>
  );
}
