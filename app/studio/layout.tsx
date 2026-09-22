import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orallio Group — Content Studio',
  description: 'Editorial Content Studio for Orallio Group website management.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100dvh - 73px)' }}
    >
      <style>{`
        header {
          flex-shrink: 0 !important;
        }
        footer {
          display: none !important;
        }
        #sanity {
          height: 100% !important;
          max-height: 100% !important;
        }
      `}</style>
      {children}
    </div>
  );
}





