import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Wheat, Compass, Globe, Layers } from 'lucide-react';

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Corporate Architecture"
          title="Three Businesses. One Group. Global Possibilities."
          description="Orallio Group operates as the central parent entity bringing distinct operating companies together under a shared commitment to governance, operational quality, and economic value creation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-slate-600 leading-relaxed">
              Founded on the principle that sustainable enterprise value is built through focus and discipline, Orallio Group establishes, scales, and connects operating entities across key high-growth sectors.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Our active portfolio spans B2B Agriculture & Commodity Trading, Performance Digital Marketing & Business Consulting, and Travel & Global Mobility—positioned to expand into adjacent strategic sectors as commercial opportunities emerge.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <Card className="p-6 bg-slate-50 border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-amber-100 text-amber-900">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Unified Group Governance</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Wheat className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Orallio Agro Solutions — Agriculture & Commodities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Orallio Media & Consulting — Digital & Advisory</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Orallio Travels — Travel & Global Mobility</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
