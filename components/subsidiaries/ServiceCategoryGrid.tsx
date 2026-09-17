import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Palette, GraduationCap, Check } from 'lucide-react';

export interface ServiceGroup {
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  services: string[];
}

export const MEDIA_SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: 'Growth',
    category: 'Digital Marketing & Advertising',
    description: 'Data-driven performance marketing, social media management, and paid media acquisition campaigns designed to drive measurable business revenue.',
    icon: TrendingUp,
    services: [
      'Social Media Marketing & Management',
      'Paid Advertising (Meta, Google, LinkedIn)',
      'Performance Digital Marketing',
      'Growth Strategy & Funnel Optimization',
    ],
  },
  {
    title: 'Brand & Technology',
    category: 'Branding, Content & Development',
    description: 'Corporate brand identity development, modern website engineering, and multi-channel content strategy.',
    icon: Palette,
    services: [
      'Corporate Branding & Visual Identity',
      'Modern Website & Web App Development',
      'Content Strategy & Media Production',
      'Digital Asset Creation',
    ],
  },
  {
    title: 'Advisory & Education',
    category: 'Consulting & Executive Training',
    description: 'Executive management advisory, digital transformation strategy, and team training programs for enterprise organizations.',
    icon: GraduationCap,
    services: [
      'Strategic Business Consulting',
      'Digital Transformation Strategy',
      'Corporate Workshops & Team Training',
      'Executive Digital Mentorship',
    ],
  },
];

export const ServiceCategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Capability Matrix"
          title="Services Organized by Strategic Need"
          description="Structured digital marketing, technology, and management advisory tailored for growing business enterprises."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEDIA_SERVICE_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <Card key={idx} className="p-8 bg-slate-50/50 border-slate-200 flex flex-col justify-between space-y-6 hover:bg-white transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded bg-sky-100 text-sky-800 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-sky-800 uppercase tracking-widest">
                      {group.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{group.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{group.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Deliverables</span>
                  <ul className="space-y-2">
                    {group.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                        <Check className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
