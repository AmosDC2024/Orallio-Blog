import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from './SectionHeading';
import { Card } from '@/components/ui/Card';
import { Wheat, Compass, Globe } from 'lucide-react';

export const GroupIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Corporate Group Overview"
          title="Three Businesses. One Group. Global Possibilities."
          description="Orallio Group unifies three distinct subsidiary entities under a single corporate vision—combining domain expertise with shared governance, strategic discipline, and a global outlook."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 space-y-4 bg-slate-50/50 border-slate-200 hover:bg-white transition-all">
            <div className="w-12 h-12 rounded bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
              <Wheat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Agriculture & Commodities</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sustainable agricultural value chains, quality commodity sourcing, and export origination connecting farm origination to global buyers.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-slate-50/50 border-slate-200 hover:bg-white transition-all">
            <div className="w-12 h-12 rounded bg-sky-100/80 text-sky-800 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Digital Media & Advisory</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              High-impact corporate brand positioning, performance digital marketing strategy, and management consulting for growth enterprises.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-slate-50/50 border-slate-200 hover:bg-white transition-all">
            <div className="w-12 h-12 rounded bg-amber-100/80 text-amber-900 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Travel & Global Mobility</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comprehensive corporate travel management, luxury tourism experiences, and seamless cross-border mobility advisory.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};
