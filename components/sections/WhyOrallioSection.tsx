import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Shield, Sparkles, Award, Globe } from 'lucide-react';

export const WhyOrallioSection: React.FC = () => {
  const principles = [
    {
      title: 'Excellence',
      description: 'We pursue high standards in how we build, deliver, and grow across every subsidiary operating domain.',
      icon: Sparkles,
      accentColor: 'border-l-amber-600',
    },
    {
      title: 'Integrity',
      description: 'We build relationships and businesses on trust, transparency, and unyielding corporate accountability.',
      icon: Shield,
      accentColor: 'border-l-slate-900',
    },
    {
      title: 'Quality',
      description: 'We focus on delivering products, advisory services, and mobility experiences that create lasting value.',
      icon: Award,
      accentColor: 'border-l-sky-700',
    },
    {
      title: 'Global Outlook',
      description: 'We connect commercial opportunities across international markets while anchored in our strong African foundation.',
      icon: Globe,
      accentColor: 'border-l-emerald-700',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container className="space-y-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Corporate Values"
            title="Why Partner With Orallio Group"
            description="Our foundation rests on four core principles that guide executive decision-making, subsidiary governance, and client partnerships."
          />
        </ScrollReveal>

        {/* Confident Editorial Grid */}
        <ScrollReveal delayMs={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`p-8 bg-white rounded-lg border border-slate-200/80 border-l-4 ${p.accentColor} shadow-2xs space-y-4 transition-all duration-300 ease-out hover:shadow-md hover:border-slate-300 hover:-translate-y-1 motion-reduce:hover:transform-none motion-reduce:transition-none`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-slate-100 text-slate-900">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-1">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
