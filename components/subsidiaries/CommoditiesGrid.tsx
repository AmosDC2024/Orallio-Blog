import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

export interface CommodityItem {
  title: string;
  category: string;
  description: string;
  specs: string[];
}

export const COMMODITIES_DATA: CommodityItem[] = [
  {
    title: 'Dried Animal Proteins',
    category: 'Feed Ingredients & Proteins',
    description: 'High-grade processed dried animal proteins sourced and cleaned for industrial feed manufacturers and global markets.',
    specs: ['High Crude Protein Content', 'Low Moisture & Ash Content', 'Commercial Export Packaging'],
  },
  {
    title: 'Sesame Seeds',
    category: 'Oilseeds & Agriculture',
    description: 'Natural and hulled sesame seeds origination from premium agricultural belts, cleaned for export purity.',
    specs: ['Purity > 99%', 'Admixture < 1%', 'Oil Content > 50%'],
  },
  {
    title: 'Ginger (Dried & Fresh)',
    category: 'Spices & Culinary Commodities',
    description: 'Split and whole dried ginger roots processed for high pungency and essential oil standards.',
    specs: ['Low Moisture Content', 'High Pungency & Oleoresin', 'Aflatoxin Tested'],
  },
  {
    title: 'Cashew Nuts (Raw & Kernels)',
    category: 'Nuts & Agri-Export',
    description: 'Raw cashew nuts (RCN) and processed cashew kernels sourced directly from verified farm aggregators.',
    specs: ['High Outturn Rate (KOR)', 'Low Moisture Percentage', 'Export Grade Packaging'],
  },
  {
    title: 'Hardwood Charcoal',
    category: 'Industrial & Energy Commodities',
    description: 'Premium hardwood charcoal produced for industrial, BBQ, and restaurant commercial importers.',
    specs: ['High Carbon Content (> 75%)', 'Low Volatile Matter', 'Sparkless & Long Burning'],
  },
  {
    title: 'Dried Foods & Agri-Products',
    category: 'Processed Food Commodities',
    description: 'Dehydrated agricultural food products packaged for international commercial buyers and distributors.',
    specs: ['Phytosanitary Certified', 'Long Shelf Life', 'HACCP & Export Compliant'],
  },
];

export const CommoditiesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Export Portfolio"
          title="B2B Commodity Categories"
          description="Sourcing, processing, and trading high-demand agricultural commodities for international buyers and industrial importers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMODITIES_DATA.map((item, idx) => (
            <Card key={idx} className="p-6 bg-white border-slate-200 space-y-4 flex flex-col justify-between" hoverEffect>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60 inline-block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Commercial Specs</span>
                <ul className="space-y-1.5">
                  {item.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
