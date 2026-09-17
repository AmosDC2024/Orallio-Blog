import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export interface SubsidiaryCTAProps {
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  subsidiaryName: string;
}

export const SubsidiaryCTA: React.FC<SubsidiaryCTAProps> = ({
  title,
  description,
  primaryCtaText,
  primaryCtaHref,
  subsidiaryName,
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <Container>
        <div className="max-w-4xl mx-auto p-10 sm:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center space-y-8">
          {/* Parent Group Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <span>{subsidiaryName}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">Orallio Group Subsidiary</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryCtaHref} variant="cta" size="lg">
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/businesses" variant="outline" size="lg">
              <span>View All Group Businesses</span>
            </Button>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Orallio Group Corporate Home</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
