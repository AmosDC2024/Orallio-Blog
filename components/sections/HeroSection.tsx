import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Building2, ShieldCheck, Globe2, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-[#0B1120] to-[#0B1120] text-white border-b border-slate-800 pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Group Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1120]/80 border border-blue-500/30 backdrop-blur-xs shadow-xs">
              <Building2 className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
                ORALLIO GROUP
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
                Orallio Group is a diversified enterprise operating across key growth sectors—delivering operational excellence in Agriculture & Commodity Trading, Digital Advisory, and Global Mobility.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/businesses" variant="cta" size="lg">
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button href="/work-with-us" variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 hover:border-slate-500">
                <span>Work With Us</span>
              </Button>
            </div>
          </div>

          {/* Hero Visual Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 group">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Orallio Group Global Corporate Headquarters"
                fill
                unoptimized
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1120]/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#38BDF8] font-bold">
                  <Globe2 className="w-4 h-4" />
                  <span>Global Operations & Trade</span>
                </div>
                <span className="text-slate-400 font-medium">African Origin • Global Ambition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning Banner */}
        <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-800">
            <TrendingUp className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Group Vision</span>
              <p className="text-sm font-semibold text-white">Multi-Sector Operational Scale</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-800">
            <Globe2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Global Reach</span>
              <p className="text-sm font-semibold text-white">African Origin with Global Ambition</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Core Standard</span>
              <p className="text-sm font-semibold text-white">Shared Standard of Excellence</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
