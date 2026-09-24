import React from 'react';
import type { Metadata } from 'next';
import { SubsidiaryHero } from '@/components/subsidiaries/SubsidiaryHero';
import { SubsidiaryCTA } from '@/components/subsidiaries/SubsidiaryCTA';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Plane, Compass, Hotel, FileCheck, MapPin, Users, Globe2, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orallio Travels | Travel, Tourism & Global Mobility',
  description: 'Corporate travel management, relocation support, visa assistance, flight & hotel bookings, and bespoke international tour packages.',
};

export default function TravelsPage() {
  const travelServices = [
    {
      title: 'Travel Planning & Management',
      description: 'End-to-end itinerary design, executive travel coordination, and corporate itinerary management.',
      icon: Plane,
    },
    {
      title: 'Relocation & Mobility Support',
      description: 'Comprehensive advisory and relocation assistance for corporate executives, students, and families moving internationally.',
      icon: Users,
    },
    {
      title: 'Flight & Logistics Booking',
      description: 'Seamless international and domestic commercial flight reservations with corporate fare structures.',
      icon: Compass,
    },
    {
      title: 'Hotel & Luxury Hospitality',
      description: 'Curated corporate and luxury hotel reservations tailored for business productivity and leisure comfort.',
      icon: Hotel,
    },
    {
      title: 'Visa & Immigration Advisory',
      description: 'Professional documentation guidance, application preparation, and visa submission advisory.',
      icon: FileCheck,
    },
    {
      title: 'Bespoke Tour Packages',
      description: 'Tailored international group tours, corporate retreats, and experiential destination packages.',
      icon: MapPin,
    },
  ];

  const travelDestinations = [
    { region: 'United Kingdom & Europe', details: 'Corporate travel, business visas, academic mobility, and Schengen tour logistics.' },
    { region: 'United States & Canada', details: 'Executive relocation, visitor visa advisory, and North American travel coordination.' },
    { region: 'China & Asia-Pacific', details: 'Trade exhibition travel, commercial sourcing trips, and Asian destination packages.' },
    { region: 'United Arab Emirates (UAE)', details: 'Dubai corporate travel, luxury tourism, and Middle East business mobility.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Subsidiary Hero */}
      <SubsidiaryHero
        name="Orallio Travels"
        tagline="Travel, Tourism & Global Mobility"
        sector="Travel & Mobility"
        logo="/logos/Travel-logo.png"
        logoAlt="Orallio Travels Logo"
        headline="Travel, Tourism & Global Mobility"
        description="Orallio Travels delivers seamless corporate travel planning, relocation advisory, flight and hotel coordination, visa assistance, and bespoke international tour experiences for individuals and corporate clients."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/work-with-us?subsidiary=travels"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="#capabilities"
        badgeVariant="amber"
        heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Services & Capabilities Matrix */}
      <section className="py-16 bg-white border-b border-slate-200/80" id="capabilities">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Mobility Solutions"
            title="Travel & Mobility Capabilities"
            description="Professional travel coordination designed for corporate mobility, stress-free relocation, and luxury international journeys."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="p-6 bg-slate-50/50 border-slate-200 space-y-4 hover:bg-white transition-all">
                  <div className="w-10 h-10 rounded bg-amber-100/80 text-amber-900 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Destinations & Regions */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Global Mobility Destinations"
            title="Destinations & Regions We Support"
            description="Facilitating travel, visa advisory, and relocation corridors across major international commercial and tourism hubs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelDestinations.map((dest, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white border border-slate-200 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-amber-700" />
                    <h3 className="text-lg font-bold text-slate-900">{dest.region}</h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{dest.details}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Subsidiary CTA */}
      <SubsidiaryCTA
        title="Plan Your Travel or Mobility Journey"
        description="Connect with Orallio Travels experts to coordinate corporate itineraries, visa advisory, hotel reservations, or bespoke international tours."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/work-with-us?subsidiary=travels"
        subsidiaryName="Orallio Travels"
      />
    </div>
  );
}
