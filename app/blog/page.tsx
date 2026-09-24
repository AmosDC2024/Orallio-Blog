import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Card } from '@/components/ui/Card';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const metadata = {
  title: 'Insights & Blog | Orallio Group',
  description: 'Editorial insights, industry analysis, and news from Orallio Group subsidiaries.',
};

export const revalidate = 60;

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt?: string;
  isFeatured?: boolean;
  subsidiary?: string;
  category?: { title: string; slug?: { current: string } };
  author?: { name: string; role?: string; image?: any };
}

export default async function BlogPage() {
  let posts: SanityPost[] = [];

  try {
    posts = await client.fetch(postsQuery);
  } catch (error) {
    console.error('Failed to fetch posts from Sanity:', error);
  }

  return (
    <div className="py-16 space-y-12">
      <Container>
        <SectionHeading
          eyebrow="Editorial & Insights"
          title="Group Press & Thought Leadership"
          description="Insights across agriculture trading, media strategy, and global travel mobility."
        />

        {posts && posts.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;
              const formattedDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : null;

              return (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block"
                >
                  <Card hoverEffect className="h-full flex flex-col p-0 overflow-hidden">
                    {imageUrl ? (
                      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={post.title || 'Blog post image'}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-48 w-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <span className="text-sm font-medium">Orallio Insights</span>
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {post.subsidiary && (
                            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded bg-amber-50 text-amber-800 border border-amber-200">
                              {post.subsidiary}
                            </span>
                          )}
                          {post.category?.title && (
                            <span className="text-xs font-medium text-slate-500">
                              {post.category.title}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-sm text-slate-600 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>{post.author?.name || 'Orallio Editorial'}</span>
                        {formattedDate && <span>{formattedDate}</span>}
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 p-8 bg-slate-100 rounded-lg border border-slate-200 text-center space-y-4">
            <Card className="p-6 max-w-xl mx-auto bg-white">
              <h3 className="text-lg font-bold text-slate-900">Sanity CMS Integration Ready</h3>
              <p className="text-sm text-slate-600 mt-2">
                This blog section is connected to Sanity CMS. Publish articles in the{' '}
                <Link href="/studio" className="text-amber-600 underline font-semibold">
                  Content Studio
                </Link>{' '}
                to display published insights here.
              </p>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
}

