import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';

export const CaseStudyStructure: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Sanity CMS Ready Framework"
            title="Case Study & Selected Work Framework"
            description="Our structured advisory workflow connects clear client challenges to measurable digital media execution."
          />
          <Badge variant="sky" className="self-start md:self-auto shrink-0">
            Development Template — CMS Ready
          </Badge>
        </div>

        {/* Visual 4-Step Storytelling Structure */}
        <Card className="p-8 bg-white border-slate-200 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Example Strategic Workflow</span>
              <h3 className="text-xl font-bold text-slate-900">Enterprise Brand Transformation Framework</h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded">
              CHALLENGE → STRATEGY → EXECUTION → RESULT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CHALLENGE */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Target className="w-4 h-4 text-red-600" />
                <span className="text-xs uppercase tracking-wider">1. Challenge</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Defining the core market bottleneck, brand positioning gap, or customer acquisition obstacle facing the client entity.
              </p>
            </div>

            {/* STRATEGY */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span className="text-xs uppercase tracking-wider">2. Strategy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formulating multi-channel media architecture, messaging positioning, and targeted paid acquisition funnels.
              </p>
            </div>

            {/* EXECUTION */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Rocket className="w-4 h-4 text-sky-600" />
                <span className="text-xs uppercase tracking-wider">3. Execution</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deploying digital campaigns, engineering modern web assets, and producing high-converting media collateral.
              </p>
            </div>

            {/* RESULT */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs uppercase tracking-wider">4. Result</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Measuring operational ROI, lead conversion rate improvements, and brand equity growth published via Sanity CMS.
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
