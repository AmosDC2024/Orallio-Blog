import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { ArrowRight, Building } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50/60 to-slate-50 border-b border-slate-200/80 pt-10 pb-16">
      <Container className="space-y-8">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
          <Building className="w-3.5 h-3.5 text-amber-700" />
          <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">
            ABOUT ORALLIO GROUP
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Building Businesses. <br />
            <span className="text-amber-700">Creating Value.</span> Connecting Possibilities.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl pt-2">
            {SITE_CONFIG.description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button href="/work-with-us" variant="cta" size="lg">
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button href="/businesses" variant="outline" size="lg">
            <span>Our Businesses</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};
