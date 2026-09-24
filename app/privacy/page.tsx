import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export const metadata = {
  title: 'Privacy Policy | Orallio Group',
  description: 'Privacy policy and data protection governance for Orallio Group and its subsidiary operations.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 space-y-12 bg-slate-50">
      <Container className="max-w-4xl space-y-8">
        <SectionHeading
          eyebrow="Corporate Governance"
          title="Privacy Policy"
          description="Information governance and privacy protection practices across Orallio Group enterprises."
        />

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-200 shadow-2xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-blue-900 font-medium">
            <span className="font-bold">Client Notice:</span> This privacy policy outline reflects standard corporate data practices across Orallio Group subsidiaries. Specific legal clauses may be customized by corporate legal counsel prior to final regulatory filing.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">1. Introduction & Scope</h2>
            <p>
              {SITE_CONFIG.legalName} (&quot;Orallio Group&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to maintaining the confidentiality, integrity, and security of personal and corporate data collected across our multi-sector operations, including agriculture trading, digital advisory, and travel mobility.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">2. Information We Collect</h2>
            <p>We may collect information directly provided by users, clients, or corporate partners through our digital portals:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Inquiry & Partnership Data:</strong> Full name, professional email address, phone number, company name, and project scope submitted via inquiry forms.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device details, and standard web interaction metrics logged for system performance and security monitoring.</li>
              <li><strong>Business Relationship Data:</strong> Contractual and trade communications necessary to fulfill commercial engagements across group subsidiaries.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">3. How We Use Collected Information</h2>
            <p>Collected data is strictly utilized for legitimate commercial and administrative purposes:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Responding to partnership proposals and subsidiary trade inquiries.</li>
              <li>Executing commercial agreements and travel mobility arrangements.</li>
              <li>Improving website performance, navigation, and digital security.</li>
              <li>Complying with applicable international trade regulations and corporate reporting standards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">4. Cookies & Analytics</h2>
            <p>
              Our website uses essential cookies to ensure secure navigation and optional analytical tools to measure traffic patterns. Users can configure browser settings to disable non-essential cookies without affecting core website functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">5. Data Security & Storage</h2>
            <p>
              Orallio Group implements administrative, physical, and technical safeguards designed to protect personal information against unauthorized access, loss, or alteration. All electronic communications are transmitted using industry-standard encryption protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">6. Third-Party Sharing</h2>
            <p>
              We do not sell or rent personal information to third parties. Data may be shared with trusted service partners (e.g., flight reservation systems, export customs clearers, cloud host infrastructure) strictly as necessary to execute requested commercial services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0B1120]">7. Data Rights & Governance Inquiries</h2>
            <p>
              Individuals may request access to, correction of, or deletion of their personal data maintained by Orallio Group by contacting our corporate governance department at{' '}
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
