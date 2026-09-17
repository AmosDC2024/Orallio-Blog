import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from './SectionHeading';
import { SUBSIDIARIES } from '@/lib/constants/businesses';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SubsidiariesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="group-subsidiaries">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Subsidiary Operations"
          title="Our Operating Companies"
          description="Each subsidiary operates with specialized domain expertise while adhering to Orallio Group’s central standard of quality and corporate governance."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SUBSIDIARIES.map((sub) => {
            const getBadgeVariant = (id: string) => {
              if (id === 'agro-solutions') return 'emerald';
              if (id === 'media-consulting') return 'sky';
              return 'amber';
            };

            return (
              <Card
                key={sub.id}
                className="flex flex-col justify-between p-8 bg-white border-slate-200"
                hoverEffect
              >
                <div className="space-y-6">
                  {/* Real Subsidiary Logo & Sector Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="h-14 w-44 relative bg-white border border-slate-200/80 rounded-md p-1.5 flex items-center justify-center shadow-2xs overflow-hidden shrink-0">
                      <Image
                        src={sub.logo}
                        alt={sub.logoAlt}
                        width={180}
                        height={60}
                        className="object-contain w-full h-full scale-[1.7] transform"
                      />
                    </div>
                    <Badge variant={getBadgeVariant(sub.id)}>
                      {sub.sector}
                    </Badge>
                  </div>

                  {/* Business Name & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-900">
                      {sub.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {sub.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed pt-2">
                      {sub.description}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Core Operations
                    </span>
                    <ul className="space-y-2">
                      {sub.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specific Action CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={sub.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-700 transition-colors group"
                  >
                    <span>{sub.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
