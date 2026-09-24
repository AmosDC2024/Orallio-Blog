import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export const metadata = {
  title: 'Terms of Governance | Orallio Group',
  description: 'Terms of governance and website usage conditions for Orallio Group corporate website.',
};

export default function TermsPage() {
  return (
    <div className="py-16 space-y-12 bg-slate-50">
      <Container className="max-w-4xl space-y-8">
        <SectionHeading
          eyebrow="Corporate Governance"
          title="Terms of Governance"
          description="Terms and conditions governing the access and usage of Orallio Group web portals."
        />

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-200 shadow-2xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-blue-900 font-medium">
            <span className="font-bold">Client Notice:</span> Terms of governance outlined below regulate public usage of Orallio Group digital portals. Legal terms may be reviewed and adjusted by corporate legal counsel prior to commercial launch.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">1. Acceptance of Terms</h2>
            <p>
              By accessing or utilizing the website, materials, or partner portals operated by {SITE_CONFIG.legalName} (&quot;Orallio Group&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Governance. If you do not agree with these terms, please discontinue website usage immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">2. Intellectual Property Rights</h2>
            <p>
              All content, brand logotypes, trade marks, text, design graphics, software code, and editorial assets displayed on this website are the exclusive property of {SITE_CONFIG.legalName} or its subsidiary divisions unless otherwise attributed. Unauthorized reproduction, distribution, or commercial exploitation of group assets is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">3. Acceptable Use Policy</h2>
            <p>Users agree to utilize Orallio Group digital portals solely for lawful business and informational purposes. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Submit false, misleading, or fraudulent information via partnership or inquiry forms.</li>
              <li>Attempt to gain unauthorized access to server infrastructure or Sanity CMS content management systems.</li>
              <li>Transmit malicious software, scripts, or automated bots aimed at disrupting website availability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">4. External Links & Third-Party Services</h2>
            <p>
              This website may contain links to external subsidiary partners or third-party web portals. Orallio Group exercises no control over third-party content or privacy practices and assumes no responsibility for external websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">5. Disclaimer of Warranties & Limitation of Liability</h2>
            <p>
              The information provided on this website is for general informational purposes regarding Orallio Group operations. While we endeavor to keep content accurate and up to date, all materials are provided &quot;as is&quot; without warranties of any kind. Orallio Group shall not be liable for any direct or indirect damages arising from website usage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">6. Governance & Corporate Contact</h2>
            <p>
              Questions regarding these Terms of Governance or group compliance policies should be directed to corporate management at{' '}
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#2563EB] font-semibold hover:underline">
                {SITE_CONFIG.contactEmail}
              </a>.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
            <span>Last Updated: September 2026</span>
            <span>{SITE_CONFIG.legalName}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
