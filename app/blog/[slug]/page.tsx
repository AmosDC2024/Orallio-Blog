import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { client } from '@/sanity/lib/client';
import { postBySlugQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    if (!post) return { title: 'Post Not Found | Orallio Group' };

    const title = post.seo?.metaTitle || `${post.title} | Orallio Group Blog`;
    const description = post.seo?.metaDescription || post.excerpt || 'Editorial insights from Orallio Group.';
    const shareImageUrl = post.seo?.shareImage ? urlForImage(post.seo.shareImage)?.url() : urlForImage(post.mainImage)?.url();

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        images: shareImageUrl ? [{ url: shareImageUrl }] : [],
      },
    };
  } catch (error) {
    return { title: 'Blog Post | Orallio Group' };
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-8 mb-3 tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-amber-500 pl-4 py-2 italic text-slate-700 my-6 bg-amber-50/50 rounded-r">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-base sm:text-lg text-slate-700 leading-relaxed my-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 text-slate-700 my-4 pl-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 text-slate-700 my-4 pl-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-slate-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-slate-100 text-amber-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-amber-700 underline font-medium hover:text-amber-900 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      const imgUrl = urlForImage(value)?.url();
      if (!imgUrl) return null;
      return (
        <figure className="my-8 space-y-2">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden bg-slate-100 shadow-sm">
            <Image
              src={imgUrl}
              alt={value.alt || 'Article image'}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-xs text-center text-slate-500 italic mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  let post: any = null;

  try {
    post = await client.fetch(postBySlugQuery, { slug });
  } catch (error) {
    console.error('Failed to fetch post from Sanity:', error);
  }

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;
  const authorImageUrl = post.author?.image ? urlForImage(post.author.image)?.url() : null;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <article className="py-16">
      <Container className="max-w-4xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-amber-600 transition-colors mb-6"
          >
            ← Back to Insights & Blog
          </Link>

          <div className="flex items-center gap-3 flex-wrap mb-4">
            {post.subsidiary && (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded bg-amber-50 text-amber-800 border border-amber-200">
                {post.subsidiary}
              </span>
            )}
            {post.category?.title && (
              <span className="text-sm font-medium text-slate-500">
                {post.category.title}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              {authorImageUrl && (
                <Image
                  src={authorImageUrl}
                  alt={post.author?.name || 'Author'}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-slate-900">{post.author?.name || 'Orallio Editorial'}</p>
                {post.author?.role && (
                  <p className="text-xs text-slate-500">{post.author.role}</p>
                )}
              </div>
            </div>
            {formattedDate && (
              <time dateTime={post.publishedAt} className="text-slate-500">
                Published {formattedDate}
              </time>
            )}
          </div>
        </div>

        {imageUrl && (
          <div className="relative w-full h-[320px] sm:h-[450px] mb-12 rounded-xl overflow-hidden shadow-sm bg-slate-100">
            <Image
              src={imageUrl}
              alt={post.title || 'Featured image'}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
          {Array.isArray(post.body) ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : typeof post.body === 'string' ? (
            <p className="text-base text-slate-700">{post.body}</p>
          ) : null}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link href="/blog">
            <Button variant="outline" size="sm">
              ← Back to Insights
            </Button>
          </Link>
          <Link href="/work-with-us">
            <Button variant="primary" size="sm">
              Work With Us
            </Button>
          </Link>
        </div>
      </Container>
    </article>
  );
}
