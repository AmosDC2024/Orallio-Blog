import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { timingSafeEqual } from 'crypto';

function extractSlugString(val: any): string | null {
  if (!val) return null;
  if (typeof val === 'string' && val.trim()) return val.trim();
  if (typeof val === 'object' && typeof val.current === 'string' && val.current.trim()) {
    return val.current.trim();
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;

    // Fail-closed authentication: If secret is missing or empty on the server, reject request
    if (!secret || !secret.trim()) {
      console.error('[Sanity Revalidate] SANITY_REVALIDATE_SECRET environment variable is not configured.');
      return NextResponse.json(
        { message: 'Revalidation endpoint is not properly configured on server.' },
        { status: 500 }
      );
    }

    // Require authentication strictly through x-sanity-secret request header
    const authHeader = req.headers.get('x-sanity-secret');
    if (!authHeader) {
      return NextResponse.json({ message: 'Missing authentication header.' }, { status: 401 });
    }

    // Constant-time secret comparison
    const secretBuffer = Buffer.from(secret);
    const authBuffer = Buffer.from(authHeader);

    if (secretBuffer.length !== authBuffer.length || !timingSafeEqual(secretBuffer, authBuffer)) {
      return NextResponse.json({ message: 'Invalid authentication secret.' }, { status: 401 });
    }

    let body: any = {};
    try {
      body = await req.json();
    } catch (e) {
      // Body may be empty if triggered manually
    }

    // Validate payload structure
    const _type = typeof body._type === 'string' ? body._type.trim() : null;
    const currentSlug = extractSlugString(body.slug) || extractSlugString(body.currentSlug);
    const previousSlug = extractSlugString(body.previousSlug) || extractSlugString(body.oldSlug) || extractSlugString(body.beforeSlug);

    const revalidatedPaths: string[] = [];

    const triggerRevalidate = (path: string, type?: 'layout' | 'page') => {
      try {
        revalidatePath(path, type);
      } catch (err: any) {
        if (!err?.message?.includes('static generation store missing')) {
          console.warn(`[Revalidate Warning] Failed to revalidate path ${path}:`, err?.message || err);
        }
      }
      revalidatedPaths.push(type ? `${path} (${type})` : path);
    };

    switch (_type) {
      case 'teamMember':
        triggerRevalidate('/about');
        break;
      case 'testimonial':
        triggerRevalidate('/');
        break;
      case 'caseStudy':
        triggerRevalidate('/businesses/media-consulting');
        if (currentSlug) {
          triggerRevalidate(`/businesses/media-consulting/${currentSlug}`);
        }
        if (previousSlug && previousSlug !== currentSlug) {
          triggerRevalidate(`/businesses/media-consulting/${previousSlug}`);
        }
        break;
      case 'career':
        triggerRevalidate('/careers');
        break;
      case 'post':
        // 1. Invalidate main blog listing page
        triggerRevalidate('/blog');
        // 2. Invalidate specific current article URL if slug available
        if (currentSlug) {
          triggerRevalidate(`/blog/${currentSlug}`);
        }
        // 3. Invalidate old article URL if slug was renamed
        if (previousSlug && previousSlug !== currentSlug) {
          triggerRevalidate(`/blog/${previousSlug}`);
        }
        // 4. Invalidate dynamic blog page tree layout as safety net for deletions / missing slugs
        triggerRevalidate('/blog/[slug]', 'page');
        break;
      case 'category':
      case 'author':
        triggerRevalidate('/blog');
        triggerRevalidate('/blog/[slug]', 'page');
        break;
      default:
        // Default: revalidate all Sanity-backed content pages
        triggerRevalidate('/about');
        triggerRevalidate('/');
        triggerRevalidate('/blog');
        triggerRevalidate('/careers');
        triggerRevalidate('/businesses/media-consulting');
        triggerRevalidate('/blog/[slug]', 'page');
        break;
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
      type: _type || 'all',
      now: Date.now(),
    });
  } catch (err: any) {
    console.error('Error handling revalidation webhook:', err);
    return NextResponse.json(
      { message: 'Error revalidating content', error: err?.message || String(err) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Method Not Allowed. Use POST with x-sanity-secret header.' },
    { status: 405 }
  );
}
