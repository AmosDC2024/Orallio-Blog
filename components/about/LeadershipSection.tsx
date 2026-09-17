import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { TeamMemberCard } from './TeamMemberCard';
import { Card } from '@/components/ui/Card';
import { TeamMember } from '@/lib/types/team';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { Users } from 'lucide-react';

export const FOUNDER_TEAM_DATA: TeamMember[] = [
  {
    id: 'godwin-adeniyi',
    name: SITE_CONFIG.founder.name,
    role: SITE_CONFIG.founder.role,
    subsidiaryOrGroup: 'Orallio Group',
    photograph: SITE_CONFIG.founder.primaryPhoto,
    photographAlt: `${SITE_CONFIG.founder.name} — Founder, Orallio Group`,
    biography: SITE_CONFIG.founder.bio,
    isFounder: true,
  },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Scalable Governance Structure"
          title="Leadership & Executive Team"
          description="Orallio Group is governed by executive direction committed to corporate integrity, operational quality, and long-term business value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Approved Founder Profile Card */}
          {FOUNDER_TEAM_DATA.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}

          {/* Restrained Scalable Sanity CMS Placeholder Card (No fake team members) */}
          <Card className="p-8 bg-slate-50/70 border-slate-200/90 border-dashed flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-200/80 text-slate-500 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-1 max-w-sm">
              <h3 className="text-lg font-bold text-slate-900">Executive Expansion</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                As Orallio Group scales its subsidiary operations, additional leadership profiles will be published here via Sanity CMS.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
