import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from './SectionHeading';
import { Globe2, ArrowUpRight } from 'lucide-react';

export const GlobalMarketsSection: React.FC = () => {
  const regions = [
    { name: 'Nigeria', role: 'Corporate Origin & West Africa Hub' },
    { name: 'United Kingdom & Europe', role: 'Trade & Advisory Connectivity' },
    { name: 'United States & Canada', role: 'Global Mobility & North American Corridors' },
    { name: 'United Arab Emirates (UAE)', role: 'Middle East Trade & Commercial Gateway' },
    { name: 'China & Asia-Pacific', role: 'Commodity Export & Sourcing Networks' },
    { name: 'South Africa & Sub-Saharan Africa', role: 'Regional Market Expansion' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <Container className="space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded border border-amber-800/60">
            Global Reach & Ambition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Connecting Africa to the World
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Orallio Group bridges commercial corridors between African enterprise and international markets—faciliating agricultural trade, digital consulting strategy, and global mobility services across key international regions.
          </p>
        </div>

        {/* Global Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-slate-800/70 border border-slate-700/80 space-y-3 hover:border-amber-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Globe2 className="w-5 h-5 text-amber-400" />
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-white">{region.name}</h3>
              <p className="text-xs text-slate-400 font-medium">
                {region.role}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Global Corridors & International Partnerships</span>
          <span className="font-semibold text-amber-400">Orallio Group International</span>
        </div>
      </Container>
    </section>
  );
};
