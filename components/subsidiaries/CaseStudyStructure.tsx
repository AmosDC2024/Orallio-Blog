import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { urlForImage } from '@/sanity/lib/image';

export interface SanityCaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  clientName?: string;
  industry?: string;
  subsidiary?: string;
  featuredImage?: any;
  summary: string;
  services?: string[];
  publishedAt?: string;
}

interface CaseStudyStructureProps {
  caseStudies?: SanityCaseStudy[];
}

export const CaseStudyStructure: React.FC<CaseStudyStructureProps> = ({ caseStudies = [] }) => {
  const hasPublishedCases = caseStudies && caseStudies.length > 0;

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Proven Execution"
          title="Case Studies & Selected Engagements"
          description="Our structured advisory workflow connects clear client challenges to measurable digital media execution."
        />

        {hasPublishedCases ? (
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((item) => {
              const imageUrl = item.featuredImage ? urlForImage(item.featuredImage)?.url() : null;

              return (
                <Card key={item._id} className="p-6 bg-white border-slate-200 space-y-4 flex flex-col justify-between" hoverEffect>
                  <div className="space-y-4">
                    {imageUrl && (
                      <div className="relative h-48 w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200">
                        <Image
                          src={imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {item.clientName && (
                          <Badge variant="sky">{item.clientName}</Badge>
                        )}
                        {item.industry && (
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                            {item.industry}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  {item.services && item.services.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-medium text-slate-400">Services:</span>
                      {item.services.map((svc, idx) => (
                        <span key={idx} className="text-xs font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                          {svc}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="p-8 bg-white border-slate-200 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Strategic Methodology</span>
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
                  Measuring operational ROI, lead conversion rate improvements, and sustainable brand equity growth.
                </p>
              </div>
            </div>
          </Card>
        )}
      </Container>
    </section>
  );
};

