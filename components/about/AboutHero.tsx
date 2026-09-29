import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { ArrowRight, Building2, Globe2, ShieldCheck } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-[#0B1120] to-[#0F172A] text-white border-b border-slate-800 pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1120]/80 border border-blue-500/30 backdrop-blur-xs shadow-xs">
              <Building2 className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
                ABOUT ORALLIO GROUP
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Building Businesses. <br />
                <span className="text-[#38BDF8]">Creating Value.</span> <br className="hidden sm:block" />
                Connecting Possibilities.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/work-with-us" variant="cta" size="lg">
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button href="/businesses" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 hover:border-slate-500">
                <span>Our Businesses</span>
              </Button>
            </div>
          </div>

          {/* Hero Visual Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 group">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Orallio Group Enterprise Headquarters"
                fill
                unoptimized
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1120]/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold">
                  <Globe2 className="w-4 h-4" />
                  <span>Corporate Governance & Vision</span>
                </div>
                <span className="text-slate-400 font-medium">African Origin • Global Ambition</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

