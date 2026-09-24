import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
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
    return {
      title: `${post.title} | Orallio Group Blog`,
      description: post.excerpt || post.seo?.description || 'Editorial insights from Orallio Group.',
    };
  } catch (error) {
    return { title: 'Blog Post | Orallio Group' };
  }
}

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

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          {Array.isArray(post.body) ? (
            post.body.map((block: any, idx: number) => {
              if (block._type === 'block') {
                const text = block.children?.map((c: any) => c.text).join('') || '';
                if (block.style === 'h2') {
                  return (
                    <h2 key={block._key || idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                      {text}
                    </h2>
                  );
                }
                if (block.style === 'h3') {
                  return (
                    <h3 key={block._key || idx} className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                      {text}
                    </h3>
                  );
                }
                if (block.style === 'blockquote') {
                  return (
                    <blockquote
                      key={block._key || idx}
                      className="border-l-4 border-amber-500 pl-4 py-2 italic text-slate-700 my-4 bg-amber-50/50 rounded-r"
                    >
                      {text}
                    </blockquote>
                  );
                }
                return (
                  <p key={block._key || idx} className="text-base text-slate-700 leading-relaxed">
                    {text}
                  </p>
                );
              }
              if (block._type === 'image' && block.asset) {
                const blockImgUrl = urlForImage(block)?.url();
                return blockImgUrl ? (
                  <div key={block._key || idx} className="my-8 rounded-lg overflow-hidden relative h-80 w-full">
                    <Image
                      src={blockImgUrl}
                      alt={block.alt || 'Article inline image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null;
              }
              return null;
            })
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
