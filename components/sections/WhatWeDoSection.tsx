import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from './SectionHeading';
import { Layers, Globe2, ShieldCheck } from 'lucide-react';

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Corporate Operating Strategy"
          title="Built Around Opportunity. Driven by Value."
          description="Orallio Group identifies market opportunities across agriculture, digital advisory, and travel mobility—deploying capital, governance, and operating expertise to create lasting enterprise value."
          align="center"
        />

        {/* 3 Structural Concepts Bar (Positioning elements, not fake performance stats) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="p-8 rounded-lg bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-extrabold text-slate-900 tracking-tight">03</span>
              <Layers className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Business Divisions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focused operations across Agriculture & Commodities, Media & Consulting, and Travels & Mobility.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-extrabold text-slate-900 tracking-tight">07+</span>
              <Globe2 className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Markets Across Global Ambition</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured trade, partnership, and mobility corridors connecting African business to international markets.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-extrabold text-slate-900 tracking-tight">01</span>
              <ShieldCheck className="w-6 h-6 text-sky-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Shared Standard of Excellence</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unified corporate governance, rigorous operational quality, and accountability across every subsidiary.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
