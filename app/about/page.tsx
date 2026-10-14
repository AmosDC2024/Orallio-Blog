import React from 'react';
import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { WhoWeAreSection } from '@/components/about/WhoWeAreSection';
import { VisionMissionSection } from '@/components/about/VisionMissionSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { FounderSection } from '@/components/about/FounderSection';
import { LeadershipSection } from '@/components/about/LeadershipSection';
import { AboutCTA } from '@/components/about/AboutCTA';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { client } from '@/sanity/lib/client';
import { teamMembersQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.name} | Corporate Governance & Values`,
  description: `Learn about ${SITE_CONFIG.name}'s mission, vision, corporate values, and leadership under Founder Godwin Adeniyi.`,
  openGraph: {
    title: `About ${SITE_CONFIG.name}`,
    description: SITE_CONFIG.description,
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
  },
};

export const revalidate = 60;

export default async function AboutPage() {
  let teamMembers = [];
  try {
    teamMembers = await client.fetch(teamMembersQuery);
  } catch (error) {
    console.error('Failed to fetch team members:', error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Section 1 — Hero */}
      <AboutHero />

      {/* Section 2 — Who We Are */}
      <ScrollReveal>
        <WhoWeAreSection />
      </ScrollReveal>

      {/* Section 3 — Vision & Mission */}
      <ScrollReveal>
        <VisionMissionSection />
      </ScrollReveal>

      {/* Section 4 — Our Values */}
      <ScrollReveal>
        <ValuesSection />
      </ScrollReveal>

      {/* Section 5 — Founder Profile (Godwin Adeniyi) */}
      <ScrollReveal>
        <FounderSection />
      </ScrollReveal>

      {/* Section 6 — Leadership & Team Architecture */}
      <ScrollReveal>
        <LeadershipSection sanityMembers={teamMembers} />
      </ScrollReveal>

      {/* Section 7 — Corporate CTA */}
      <ScrollReveal>
        <AboutCTA />
      </ScrollReveal>
    </div>
  );
}

