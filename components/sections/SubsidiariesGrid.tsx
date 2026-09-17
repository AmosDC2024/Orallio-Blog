import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SUBSIDIARIES } from '@/lib/constants/businesses';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const SubsidiariesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Diversified Industry Operations"
          description="Orallio Group operates through focused subsidiary companies, each dedicated to delivering quality and enterprise value in its respective sector."
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
                className="flex flex-col justify-between p-8 border-slate-200"
                hoverEffect
              >
                <div className="space-y-6">
                  {/* Logo Container */}
                  <div className="flex items-center justify-between">
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

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {sub.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                      {sub.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed pt-2">
                      {sub.description}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Core Operations
                    </span>
                    <ul className="space-y-2">
                      {sub.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={sub.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-700 transition-colors group"
                  >
                    <span>Explore Subsidiary</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-700 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
