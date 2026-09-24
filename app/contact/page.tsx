import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { Mail, MapPin, Building } from 'lucide-react';

export const metadata = {
  title: 'Contact Corporate Office | Orallio Group',
  description: 'Get in touch with Orallio Group corporate headquarters for partnerships and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="py-16 space-y-12">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Orallio Group"
          description="Reach out to our corporate communications team for business inquiries, media questions, or subsidiary information."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-lg space-y-6">
              <h3 className="text-xl font-bold">Corporate Information</h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{SITE_CONFIG.legalName}</p>
                    <p className="text-xs text-slate-400">RC / Corporate Entity</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Headquarters</p>
                    <p className="text-xs text-slate-400">{SITE_CONFIG.corporateOffice}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Direct Email</p>
                    <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-xs text-amber-400 hover:underline">
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-lg border border-slate-200 space-y-6 shadow-2xs">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Send an Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">
                Direct corporate communication to Orallio Group executive management.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
