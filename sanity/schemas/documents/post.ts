import { defineField, defineType } from 'sanity';
import { FileText } from 'lucide-react';

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: FileText,
  fieldsets: [
    {
      name: 'seoGroup',
      title: 'SEO & Search Engine Settings (Advanced / Optional)',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      description: 'Enter the main title for this article.',
      validation: (Rule) => Rule.required().error('Article Title is required.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Click "Generate" to automatically create the URL slug from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required. Click "Generate" to build one from the title.'),
    }),
    defineField({
      name: 'subsidiary',
      title: 'Subsidiary',
      type: 'string',
      description: 'Select which Orallio subsidiary division this article belongs to.',
      options: {
        list: [
          { title: 'Orallio Group', value: 'Orallio Group' },
          { title: 'Orallio Agro', value: 'Orallio Agro' },
          { title: 'Orallio Media & Consulting', value: 'Orallio Media & Consulting' },
          { title: 'Orallio Travels', value: 'Orallio Travels' },
          { title: 'Orallio Group (Corporate)', value: 'Group' },
          { title: 'Orallio Agro Solutions', value: 'Orallio Agro Solutions' },
        ],
      },
      validation: (Rule) => Rule.required().error('Please select a subsidiary.'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Select an article category from the list.',
      validation: (Rule) => Rule.required().error('Category is required.'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      description: 'Select the author of this article.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Upload the main cover image displayed at the top of the article.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Short description of the image for accessibility.',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility.'),
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A brief summary of the article shown on the blog listing page.',
      validation: (Rule) => Rule.max(300).warning('Excerpts over 300 characters may be truncated.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'Date and time when this article is published.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error('Published Date is required.'),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated Date',
      type: 'datetime',
      hidden: true,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Highlight this article as a featured post on the blog page.',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'blockContent',
      description: 'Write and format the main content of your article here.',
      validation: (Rule) => Rule.required().error('Article content is required.'),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      fieldset: 'seoGroup',
      description: 'Optional metadata for search engines and social sharing preview.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
      subsidiary: 'subsidiary',
    },
    prepare(selection) {
      const { title, author, date, media, subsidiary } = selection;
      const subTag = subsidiary ? ` [${subsidiary}]` : '';
      return {
        title,
        subtitle: `${author ? `By ${author} | ` : ''}${date ? new Date(date).toLocaleDateString() : 'Draft'}${subTag}`,
        media,
      };
    },
  },
});

