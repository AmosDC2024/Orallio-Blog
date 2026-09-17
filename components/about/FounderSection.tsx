import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { UserCheck, Target, Building } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const { founder } = SITE_CONFIG;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Group Governance & Leadership"
          title="Executive Direction"
          description="Founded and directed by strategic leadership committed to multi-sector enterprise growth, operational integrity, and international value creation."
        />

        <div className="bg-white rounded-xl border border-slate-200/90 p-8 sm:p-12 shadow-2xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Primary & Secondary Founder Photographs (Both representing Godwin Adeniyi) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg border border-slate-200 shadow-xs bg-slate-100">
                <Image
                  src={founder.primaryPhoto}
                  alt={`${founder.name} — ${founder.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Secondary Supporting Angle Portrait of Godwin Adeniyi */}
              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="relative w-14 h-14 overflow-hidden rounded border border-slate-200 shrink-0 bg-slate-100">
                  <Image
                    src={founder.secondaryPhoto}
                    alt={`${founder.name} Executive Portrait Angle`}
                    fill
                    sizes="60px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{founder.name}</span>
                  <span className="text-[11px] text-slate-500 font-medium">Executive Portrait Angle</span>
                </div>
              </div>
            </div>

            {/* Founder Biography & Corporate Role */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="amber">Founder</Badge>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Orallio Group
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  {founder.name}
                </h3>
                <p className="text-base font-semibold text-amber-700">
                  {founder.role} • {founder.title}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                <p>
                  {founder.bio}
                </p>
                <p>
                  Under his direction, Orallio Group brings together specialized subsidiaries in Agriculture & Commodities, Digital Advisory, and Global Travel Mobility—establishing shared standards of excellence and governance across every operating entity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Strategic Focus</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Enterprise Development & Group Strategy</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Building className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Group Oversight</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Multi-Subsidiary Value Creation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
