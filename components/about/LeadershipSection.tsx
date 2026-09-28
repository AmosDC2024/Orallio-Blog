import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { TeamMemberCard } from './TeamMemberCard';
import { TeamMember } from '@/lib/types/team';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { urlForImage } from '@/sanity/lib/image';

export interface SanityTeamMember {
  _id: string;
  name: string;
  role: string;
  subsidiaryOrGroup?: string;
  photograph?: any;
  biography: string;
  linkedinUrl?: string;
  isFounder?: boolean;
}

interface LeadershipSectionProps {
  sanityMembers?: SanityTeamMember[];
}

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

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ sanityMembers = [] }) => {
  const filteredSanityMembers: TeamMember[] = (sanityMembers || [])
    .filter((m) => !m.isFounder && m.name.toLowerCase() !== SITE_CONFIG.founder.name.toLowerCase())
    .map((m) => {
      const photoUrl = m.photograph
        ? (typeof m.photograph === 'string' ? m.photograph : urlForImage(m.photograph)?.url() || '/logos/Orallio-Logo.png')
        : '/logos/Orallio-Logo.png';

      return {
        id: m._id,
        name: m.name,
        role: m.role,
        subsidiaryOrGroup: m.subsidiaryOrGroup || 'Orallio Group',
        photograph: photoUrl,
        photographAlt: `${m.name} — ${m.role}, ${m.subsidiaryOrGroup || 'Orallio Group'}`,
        biography: m.biography,
        linkedinUrl: m.linkedinUrl,
        isFounder: m.isFounder,
      };
    });

  const allMembers = [...FOUNDER_TEAM_DATA, ...filteredSanityMembers];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Scalable Governance Structure"
          title="Leadership & Executive Team"
          description="Orallio Group is governed by executive direction committed to corporate integrity, operational quality, and long-term business value."
        />

        <div className={`grid grid-cols-1 ${allMembers.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1 max-w-2xl mx-auto'} gap-8 items-stretch`}>
          {allMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

