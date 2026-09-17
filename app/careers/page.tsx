import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Careers & Culture | Orallio Group',
  description: 'Join Orallio Group and build a global career across our business subsidiaries.',
};

export default function CareersPage() {
  return (
    <div className="py-16 space-y-12">
      <Container>
        <SectionHeading
          eyebrow="People & Talent"
          title="Careers at Orallio Group"
          description="We attract top professionals dedicated to excellence, integrity, and building value in competitive global markets."
        />

        <div className="mt-8">
          <Card className="p-8 max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Build Your Career With Us</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Orallio Group fosters an environment of continuous learning, strategic responsibility, and high performance. Check back for upcoming openings across our agricultural, media, and travel divisions.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
