import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Briefcase, MapPin, Clock, Mail, Send } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { careersQuery } from '@/sanity/lib/queries';

export const metadata = {
  title: 'Careers & Culture | Orallio Group',
  description: 'Join Orallio Group and build a global career across our business subsidiaries.',
};

export interface SanityCareer {
  _id: string;
  title: string;
  slug: { current: string };
  department: string;
  location: string;
  employmentType: string;
  summary: string;
  closingDate?: string;
  applicationEmail?: string;
  applicationUrl?: string;
}

export default async function CareersPage() {
  let careers: SanityCareer[] = [];
  try {
    careers = await client.fetch(careersQuery);
  } catch (error) {
    console.error('Failed to fetch careers:', error);
  }

  // Helper to extract clean email address from applicationEmail or applicationUrl
  const getCleanEmail = (job: SanityCareer): string | null => {
    if (job.applicationEmail && job.applicationEmail.trim()) {
      return job.applicationEmail.trim().replace(/^mailto:/i, '');
    }
    if (job.applicationUrl && job.applicationUrl.includes('@')) {
      const match = job.applicationUrl.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
      if (match) return match[1];
    }
    return null;
  };

  return (
    <div className="py-16 space-y-12 bg-slate-50 min-h-screen">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="People & Talent"
          title="Careers at Orallio Group"
          description="We attract top professionals dedicated to excellence, integrity, and building commercial value in competitive global markets."
        />

        {careers && careers.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {careers.map((job) => {
              const email = getCleanEmail(job);
              const mailtoSubject = encodeURIComponent(`Application - ${job.title}`);
              const mailtoUrl = email ? `mailto:${email}?subject=${mailtoSubject}` : null;

              return (
                <Card key={job._id} className="p-6 bg-white border-slate-200 flex flex-col justify-between space-y-6" hoverEffect>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <Badge variant="amber">{job.department}</Badge>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {job.employmentType}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {job.summary}
                      </p>
                    </div>

                    {job.closingDate && (
                      <div className="text-xs text-slate-500">
                        Deadline: {new Date(job.closingDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>

                  {/* Direct Email Application Box */}
                  <div className="pt-4 border-t border-slate-100 space-y-3 bg-slate-50/60 p-4 rounded-lg border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-600" />
                      <span>How to Apply</span>
                    </div>

                    {email ? (
                      <div className="space-y-3">
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Please send your CV and cover letter to the email address provided below, using the position title as the email subject.
                        </p>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 flex-wrap">
                          <span>Send application to:</span>
                          <a
                            href={mailtoUrl!}
                            className="font-bold text-amber-800 hover:text-amber-900 underline transition-colors"
                          >
                            {email}
                          </a>
                        </div>
                        <div>
                          <a href={mailtoUrl!}>
                            <Button variant="primary" size="sm" className="w-full sm:w-auto gap-2">
                              <Send className="w-3.5 h-3.5" />
                              <span>Send Your Application</span>
                            </Button>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500 italic">
                        Application instructions will be provided shortly.
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white border-slate-200 text-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
                <Briefcase className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">No Open Positions Currently</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                  There are no active vacancies across Orallio Group subsidiaries at this moment. However, we are always eager to connect with high-caliber talent in agriculture, media consulting, and global travel mobility.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:careers@orallio.com?subject=Speculative%20Application%20-%20Orallio%20Group">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span>Send Speculative Application</span>
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
}


