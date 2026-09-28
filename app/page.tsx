import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { GroupIntroSection } from '@/components/sections/GroupIntroSection';
import { SubsidiariesSection } from '@/components/sections/SubsidiariesSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { WhyOrallioSection } from '@/components/sections/WhyOrallioSection';
import { GlobalMarketsSection } from '@/components/sections/GlobalMarketsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WorkWithUsSection } from '@/components/sections/WorkWithUsSection';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { client } from '@/sanity/lib/client';
import { testimonialsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: SITE_CONFIG.metaTitle,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
};

export default async function HomePage() {
  let testimonials = [];
  try {
    testimonials = await client.fetch(testimonialsQuery);
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Group Introduction */}
      <GroupIntroSection />

      {/* Section 3 — Our Businesses (Subsidiaries) */}
      <SubsidiariesSection />

      {/* Section 4 — What We Do */}
      <WhatWeDoSection />

      {/* Section 5 — Why Orallio */}
      <WhyOrallioSection />

      {/* Section 6 — Client Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Section 7 — Global Markets */}
      <GlobalMarketsSection />

      {/* Section 8 — Work With Us CTA */}
      <WorkWithUsSection />
    </div>
  );
}

