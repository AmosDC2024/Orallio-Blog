import React from 'react';
import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { TeamMember } from '@/lib/types/team';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Linkedin } from 'lucide-react';

export const INITIAL_LEADERSHIP_DATA: TeamMember[] = [
  {
    id: 'founder-1',
    name: 'Group Executive Leadership',
    role: 'Founder, Orallio Group',
    subsidiaryOrGroup: 'Orallio Group',
    photograph: '/images/Founder.jpg',
    photographAlt: 'Orallio Group Founder Portrait',
    biography:
      'Steering Orallio Group’s strategic direction across agriculture, digital media, and global mobility with an unyielding commitment to value creation, operational integrity, and international enterprise growth.',
    isFounder: true,
  },
];

export interface LeadershipSectionProps {
  members?: TeamMember[];
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  members = INITIAL_LEADERSHIP_DATA,
}) => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/60">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Governance & Leadership"
          title="Executive Direction"
          description="Guided by experienced leadership dedicated to building sustainable enterprises, fostering global partnerships, and driving economic value across markets."
          align="center"
        />

        <div className="flex justify-center max-w-4xl mx-auto">
          {members.map((member) => (
            <Card
              key={member.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 bg-white border-slate-200"
              hoverEffect
            >
              <div className="md:col-span-5 relative aspect-4/5 w-full overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                <Image
                  src={member.photograph}
                  alt={member.photographAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="amber">
                      {member.isFounder ? 'Founder' : 'Executive'}
                    </Badge>
                    {member.subsidiaryOrGroup && (
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {member.subsidiaryOrGroup}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.biography}
                </p>

                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-700" />
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
