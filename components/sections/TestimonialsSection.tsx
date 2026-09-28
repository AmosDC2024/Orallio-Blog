import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Quote } from 'lucide-react';
import { urlForImage } from '@/sanity/lib/image';

export interface SanityTestimonial {
  _id: string;
  clientName: string;
  role?: string;
  company?: string;
  quote: string;
  avatar?: any;
  subsidiary?: string;
}

interface TestimonialsSectionProps {
  testimonials: SanityTestimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <Container className="space-y-12 relative z-10">
        <SectionHeading
          eyebrow="Client Endorsements"
          title="What Our Clients Say"
          description="Direct feedback from commercial partners and corporate clients across Orallio Group subsidiaries."
          align="center"
          textColor="text-white"
          descriptionColor="text-slate-400"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => {
            const avatarUrl = item.avatar ? urlForImage(item.avatar)?.url() : null;

            return (
              <Card
                key={item._id}
                className="p-6 bg-slate-800/90 border-slate-700/80 text-white flex flex-col justify-between space-y-6"
                hoverEffect
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-amber-500 opacity-80" />
                    {item.subsidiary && (
                      <Badge variant="amber" className="text-[10px]">
                        {item.subsidiary}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/70 flex items-center gap-3">
                  {avatarUrl ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-amber-500/30">
                      <Image
                        src={avatarUrl}
                        alt={item.clientName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0 font-bold text-amber-400 text-sm border border-slate-600">
                      {item.clientName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.clientName}</h4>
                    {(item.role || item.company) && (
                      <p className="text-xs text-slate-400">
                        {item.role}
                        {item.role && item.company ? ' • ' : ''}
                        {item.company}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
