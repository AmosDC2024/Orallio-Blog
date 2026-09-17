import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Eye, Target } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Strategic Direction"
          title="Vision & Mission"
          description="A clear commitment to building globally respected operating companies that solve market needs and deliver lasting stakeholder value."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="p-8 bg-white border-slate-200 space-y-6 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                  Our Corporate Vision
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">Where We Are Going</h3>
              </div>
            </div>
            <p className="text-base text-slate-600 leading-relaxed pt-2">
              Orallio Group aims to build a globally respected group of businesses across industries, markets, and communities—connecting African commercial origination with international markets.
            </p>
          </Card>

          {/* Mission Card */}
          <Card className="p-8 bg-white border-slate-200 space-y-6 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Our Purpose
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">Why We Exist</h3>
              </div>
            </div>
            <p className="text-base text-slate-600 leading-relaxed pt-2">
              Orallio Group exists to build and connect businesses that solve real-world needs and create value through an unyielding commitment to Excellence, Integrity, and Quality.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};
