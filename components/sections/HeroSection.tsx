import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Building2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-slate-50 border-b border-slate-200/80 pt-12 pb-20 overflow-hidden">
      {/* Restrained background visual texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 space-y-10">
        {/* Eyebrow / Parent Group Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
          <Building2 className="w-4 h-4 text-slate-700" />
          <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">
            ORALLIO GROUP
          </span>
        </div>

        {/* Main Group Positioning Headline */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Building Businesses. <br />
            <span className="text-amber-700">Creating Value.</span> <br className="hidden sm:block" />
            Connecting Possibilities.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-normal">
            Orallio Group is a diversified corporate group operating across key growth sectors—delivering operational excellence in Agriculture & Commodity Trading, Digital Marketing & Consulting, and Global Mobility.
          </p>
        </div>

        {/* Action CTAs: Primary ("Explore Our Businesses") & Secondary ("Work With Us") */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button href="/businesses" variant="primary" size="lg">
            <span>Explore Our Businesses</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <Button href="/work-with-us" variant="cta" size="lg">
            <span>Work With Us</span>
          </Button>
        </div>

        {/* Corporate Group Positioning Banner */}
        <div className="pt-10 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-700">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Group Vision</span>
            <p className="text-sm font-semibold text-slate-900">Multi-Sector Operational Scale</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Reach</span>
            <p className="text-sm font-semibold text-slate-900">African Origin with Global Ambition</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Standard</span>
            <p className="text-sm font-semibold text-slate-900">Shared Standard of Excellence</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
