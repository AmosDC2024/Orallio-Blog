import { BusinessSubsidiary } from '../types/business';

export const SUBSIDIARIES: BusinessSubsidiary[] = [
  {
    id: 'agro-solutions',
    name: 'Orallio Agro Solutions',
    tagline: 'Agriculture & Commodity Trading',
    sector: 'Agriculture & Commodities',
    description:
      'Pioneering sustainable agricultural value chains, quality commodity sourcing, and international export logistics across key global agricultural markets.',
    logo: '/logos/Agro-logo.jpg',
    logoAlt: 'Orallio Agro Solutions Logo',
    href: '/businesses/agro',
    ctaText: 'Explore Agro Solutions',
    colorTheme: 'emerald',
    features: [
      'Agricultural Commodity Trading',
      'Sustainable Farming & Origination',
      'Global Export & Supply Chain',
    ],
  },
  {
    id: 'media-consulting',
    name: 'Orallio Media & Consulting',
    tagline: 'Digital Marketing & Business Consulting',
    sector: 'Media & Advisory',
    description:
      'Empowering enterprises with high-impact brand strategies, performance digital marketing, and executive business management consulting.',
    logo: '/logos/Media-logo.jpg',
    logoAlt: 'Orallio Media & Consulting Logo',
    href: '/businesses/media-consulting',
    ctaText: 'Explore Media & Consulting',
    colorTheme: 'sky',
    features: [
      'Strategic Corporate Consulting',
      'Digital Marketing & Growth Strategy',
      'Brand Development & Public Relations',
    ],
  },
  {
    id: 'travels',
    name: 'Orallio Travels',
    tagline: 'Travel, Tourism & Global Mobility',
    sector: 'Travel & Mobility',
    description:
      'Delivering seamless corporate and luxury travel management, bespoke tourism experiences, and comprehensive global mobility advisory.',
    logo: '/logos/Travel-logo.png',
    logoAlt: 'Orallio Travels Logo',
    href: '/businesses/travels',
    ctaText: 'Explore Orallio Travels',
    colorTheme: 'amber',
    features: [
      'Corporate & Luxury Travel Management',
      'Global Tourism & Destinations',
      'Mobility & Immigration Advisory',
    ],
  },
];
