import { defineField, defineType } from 'sanity';
import { Briefcase } from 'lucide-react';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: Briefcase,
  fields: [
    defineField({
      name: 'title',
      title: 'Project / Case Study Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client / Company Name',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry / Market Sector',
      type: 'string',
    }),
    defineField({
      name: 'subsidiary',
      title: 'Subsidiary Division',
      type: 'string',
      initialValue: 'Orallio Media & Consulting',
      options: {
        list: [
          { title: 'Orallio Media & Consulting', value: 'Orallio Media & Consulting' },
          { title: 'Orallio Agro Solutions', value: 'Orallio Agro Solutions' },
          { title: 'Orallio Travels', value: 'Orallio Travels' },
        ],
      },
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'blockContent',
    }),
    defineField({
      name: 'strategy',
      title: 'The Strategy',
      type: 'blockContent',
    }),
    defineField({
      name: 'execution',
      title: 'The Execution',
      type: 'blockContent',
    }),
    defineField({
      name: 'result',
      title: 'The Business Results',
      type: 'blockContent',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date Published',
      type: 'date',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, client, media } = selection;
      return {
        title,
        subtitle: client ? `Client: ${client}` : 'Case Study',
        media,
      };
    },
  },
});
