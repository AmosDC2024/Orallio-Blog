import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Handshake } from 'lucide-react';

export const AboutCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <Container>
        <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center space-y-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 mx-auto">
            <Handshake className="w-6 h-6" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let's Build What Comes Next.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Partner with Orallio Group across agricultural commodity origination, strategic digital consulting, and global mobility services.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/work-with-us" variant="cta" size="lg">
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <span>Contact Corporate Office</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
