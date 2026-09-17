import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { SUBSIDIARIES } from '@/lib/constants/businesses';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CheckCircle2, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Businesses | Orallio Group Subsidiary Portfolio',
  description: 'Explore Orallio Group’s current subsidiaries in Agriculture & Commodity Trading, Digital Marketing & Consulting, and Global Mobility.',
};

export default function BusinessesPage() {
  return (
    <div className="py-12 space-y-16 bg-slate-50">
      {/* Portfolio Hero */}
      <section className="bg-white border-b border-slate-200/80 pb-16 pt-8">
        <Container className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <Building className="w-3.5 h-3.5 text-amber-700" />
            <span>Orallio Group Portfolio Gateway</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Our Businesses
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Orallio Group operates across key economic sectors—building and connecting businesses around market opportunities, operational quality, and long-term value creation.
            </p>
          </div>
        </Container>
      </section>

      {/* Subsidiary Directory Portfolio */}
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Operating Subsidiaries"
          title="Group Subsidiary Directory"
          description="Click any subsidiary below to explore dedicated business capabilities, commodity trading specs, advisory services, or travel mobility offerings."
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
                  {/* Real Subsidiary Logo */}
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

                  {/* Business Details */}
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {sub.name}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {sub.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed pt-2">
                      {sub.description}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Operating Focus
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

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={sub.href}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors group p-2.5 rounded bg-slate-50 hover:bg-amber-50/50 border border-slate-200"
                  >
                    <span>{sub.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-700 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
