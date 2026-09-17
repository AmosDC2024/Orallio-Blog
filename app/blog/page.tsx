import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Insights & Blog | Orallio Group',
  description: 'Editorial insights, industry analysis, and news from Orallio Group subsidiaries.',
};

export default function BlogPage() {
  return (
    <div className="py-16 space-y-12">
      <Container>
        <SectionHeading
          eyebrow="Editorial & Insights"
          title="Group Press & Thought Leadership"
          description="Insights across agriculture trading, media strategy, and global travel mobility."
        />

        <div className="mt-8 p-8 bg-slate-100 rounded-lg border border-slate-200 text-center space-y-4">
          <Card className="p-6 max-w-xl mx-auto bg-white">
            <h3 className="text-lg font-bold text-slate-900">Sanity CMS Integration Ready</h3>
            <p className="text-sm text-slate-600 mt-2">
              This blog section is architected for seamless future connection to Sanity CMS for publishing posts, authors, and industry reports.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
