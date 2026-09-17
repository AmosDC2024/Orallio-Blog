import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Sparkles, ShieldCheck, Award, Globe } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'A commitment to high operational standards and delivering meaningful value across every subsidiary industry.',
      icon: Sparkles,
      accent: 'border-l-amber-600',
    },
    {
      title: 'Integrity',
      description: 'A commitment to trust, accountability, transparency, and doing business responsibly with all partners.',
      icon: ShieldCheck,
      accent: 'border-l-slate-900',
    },
    {
      title: 'Quality',
      description: 'A commitment to quality in the physical commodities, advisory services, and travel mobility experiences Orallio provides.',
      icon: Award,
      accent: 'border-l-sky-700',
    },
    {
      title: 'Global Outlook',
      description: 'A commitment to connecting commercial opportunities across international markets while building proudly from African origins.',
      icon: Globe,
      accent: 'border-l-emerald-700',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Core Principles"
          title="Our Corporate Values"
          description="Four pillar principles that define how Orallio Group governs its subsidiaries, enters new markets, and builds commercial partnerships."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className={`p-8 bg-slate-50/60 rounded-lg border border-slate-200/80 border-l-4 ${v.accent} space-y-3 hover:bg-white transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white border border-slate-200 text-slate-900 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-1">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
