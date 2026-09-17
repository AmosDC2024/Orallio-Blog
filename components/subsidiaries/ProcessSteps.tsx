import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export const AGRO_PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'SOURCE',
    description: 'Direct origination and partnership with quality agricultural producers and farming communities across key origin zones.',
  },
  {
    number: '02',
    title: 'AGGREGATE',
    description: 'Consolidation, grading, and quality inspection at central warehouse hubs ensuring strict commodity specification standards.',
  },
  {
    number: '03',
    title: 'PROCESS',
    description: 'Cleaning, drying, packaging, and commercial preparation adhering to international trade safety and quality requirements.',
  },
  {
    number: '04',
    title: 'EXPORT',
    description: 'FOB/CIF freight logistics, port documentation, and international shipping connecting African commodities to global buyers.',
  },
];

export const ProcessSteps: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Commercial Supply Chain Model"
          title="Our Commodity Export Process"
          description="A structured 4-stage supply chain ensuring quality control, traceability, and seamless delivery to international markets."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGRO_PROCESS_STEPS.map((step, idx) => (
            <Card
              key={step.number}
              className="p-6 bg-slate-50/60 border-slate-200 flex flex-col justify-between space-y-4 hover:bg-white transition-all relative group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-amber-700 font-mono">
                    {step.number}
                  </span>
                  {idx < AGRO_PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 group-hover:text-amber-700 transition-colors" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
