import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { SubsidiariesGrid } from '@/components/sections/SubsidiariesGrid';
import { FormInput, FormTextarea } from '@/components/forms/FormFoundation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Handshake, Globe2, Layers } from 'lucide-react';

export const metadata = {
  title: 'Work With Us | Orallio Group Partnerships',
  description: 'Partner with Orallio Group across commodity trading, media advisory, and travel mobility.',
};

export default function WorkWithUsPage() {
  return (
    <div className="py-16 space-y-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Primary Strategic Partner Portal"
          title="Work With Orallio Group"
          description="We partner with international commodity buyers, corporate clients, institutional investors, and global mobility partners."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <Card className="p-6 space-y-3">
            <Handshake className="w-8 h-8 text-amber-700" />
            <h3 className="text-lg font-bold text-slate-900">Trade & Sourcing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Partner with Orallio Agro Solutions for sustainable agricultural origination and high-grade export commodities.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <Layers className="w-8 h-8 text-sky-700" />
            <h3 className="text-lg font-bold text-slate-900">Strategic Advisory</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Engage Orallio Media & Consulting for high-impact brand transformation and management consulting.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <Globe2 className="w-8 h-8 text-emerald-700" />
            <h3 className="text-lg font-bold text-slate-900">Mobility & Travels</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Collaborate with Orallio Travels for executive mobility, travel management, and tourism services.
            </p>
          </Card>
        </div>

        {/* Form area */}
        <div className="bg-white p-8 rounded-lg border border-slate-200 max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Partnership Proposal</h3>
            <p className="text-xs text-slate-500 mt-1">
              Submit your project or partnership opportunity directly to group executive leadership.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput label="Your Name / Title" id="name" placeholder="e.g. Sarah Jenkins, Director" />
              <FormInput label="Organization / Company" id="company" placeholder="e.g. Apex Global Trade Ltd" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput label="Business Email" id="email" type="email" placeholder="sarah@apexglobal.com" />
              <FormInput label="Phone / WhatsApp" id="phone" placeholder="+1 (555) 000-0000" />
            </div>

            <FormTextarea label="Overview of Proposed Collaboration" id="proposal" placeholder="Describe the scope, subsidiary interested in, and timeline..." />

            <Button type="button" variant="cta" size="lg" className="w-full sm:w-auto">
              Submit Partnership Proposal
            </Button>
          </form>
        </div>
      </Container>

      <Container>
        <SubsidiariesGrid />
      </Container>
    </div>
  );
}
