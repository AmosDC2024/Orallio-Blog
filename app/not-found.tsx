import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-24 text-center bg-slate-50 min-h-[60vh] flex items-center justify-center">
      <Container className="space-y-6 max-w-lg mx-auto">
        <span className="text-4xl font-extrabold text-amber-600">404</span>
        <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The requested page could not be found or has been moved.
        </p>
        <div>
          <Link href="/">
            <Button variant="primary" size="md">
              Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
