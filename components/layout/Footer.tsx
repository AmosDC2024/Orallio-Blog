import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Logo } from '@/components/ui/Logo';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { SUBSIDIARIES } from '@/lib/constants/businesses';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-slate-300 border-t border-slate-800">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block p-2 bg-white rounded shadow-sm">
              <Logo variant="group" />
            </div>
            <p className="text-sm text-slate-400 font-medium tracking-wide italic">
              "{SITE_CONFIG.tagline}"
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="pt-2 text-xs font-semibold text-[#38BDF8] uppercase tracking-widest">
              {SITE_CONFIG.origin}
            </div>
          </div>

          {/* Subsidiaries Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Group Subsidiaries
            </h3>
            <ul className="space-y-3">
              {SUBSIDIARIES.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={sub.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-[#38BDF8] transition-colors"
                  >
                    <div className="w-8 h-6 relative shrink-0 rounded bg-white p-0.5 flex items-center justify-center overflow-hidden border border-slate-700/50">
                      <Image
                        src={sub.logo}
                        alt={sub.logoAlt}
                        width={32}
                        height={24}
                        className="object-contain w-full h-full scale-[1.6] transform"
                      />
                    </div>
                    <span>{sub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  About Group
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  Our Businesses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  Careers & Culture
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="text-[#38BDF8] hover:text-white font-semibold transition-colors">
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Corporate Office
            </h3>
            <div className="text-sm text-slate-400 space-y-2">
              <p>{SITE_CONFIG.corporateOffice}</p>
              <p className="pt-2">
                <span className="block text-xs font-medium text-slate-500">Inquiries</span>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-[#38BDF8] hover:underline font-medium"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {SITE_CONFIG.legalName} All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#38BDF8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#38BDF8] transition-colors">
              Terms of Governance
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
