import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TeamMember } from '@/lib/types/team';
import { Linkedin } from 'lucide-react';

export interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className="p-6 bg-white border-slate-200 space-y-4" hoverEffect>
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-md border border-slate-200 bg-slate-100">
        <Image
          src={member.photograph}
          alt={member.photographAlt}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className="object-cover object-top"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant={member.isFounder ? 'amber' : 'neutral'}>
            {member.isFounder ? 'Founder' : 'Executive'}
          </Badge>
          {member.subsidiaryOrGroup && (
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {member.subsidiaryOrGroup}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
        <p className="text-xs font-semibold text-amber-800">{member.role}</p>
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 pt-1">
          {member.biography}
        </p>
      </div>

      {member.linkedinUrl && (
        <div className="pt-2 border-t border-slate-100">
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-900 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      )}
    </Card>
  );
};
