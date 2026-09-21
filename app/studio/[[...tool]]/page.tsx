'use client';

/**
 * Embedded Sanity Studio route at /studio
 * Note: Studio is reserved for non-technical content editors and admins.
 * It is deliberately isolated from the public navigation.
 */

import dynamic from 'next/dynamic';
import config from '../../../sanity.config';

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

export const dynamicParams = true;

export default function StudioPage() {
  return <NextStudio config={config} />;
}
