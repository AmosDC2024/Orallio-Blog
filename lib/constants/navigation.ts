import { NavItem } from '../types/navigation';
import { SUBSIDIARIES } from './businesses';

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Businesses',
    href: '/businesses',
    children: SUBSIDIARIES.map((sub) => ({
      label: sub.name,
      href: sub.href,
    })),
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
  { label: 'Work With Us', href: '/work-with-us', isCta: true },
];
