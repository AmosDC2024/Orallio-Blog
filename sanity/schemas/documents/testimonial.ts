import { defineField, defineType } from 'sanity';
import { MessageSquare } from 'lucide-react';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: MessageSquare,
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Title / Role',
      type: 'string',
      description: 'e.g. Managing Director, Operations Lead',
    }),
    defineField({
      name: 'company',
      title: 'Company / Organization',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Client Photo / Logo',
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
      name: 'subsidiary',
      title: 'Related Business Division',
      type: 'string',
      options: {
        list: [
          { title: 'Orallio Group (Corporate)', value: 'Group' },
          { title: 'Orallio Agro Solutions', value: 'Orallio Agro Solutions' },
          { title: 'Orallio Media & Consulting', value: 'Orallio Media & Consulting' },
          { title: 'Orallio Travels', value: 'Orallio Travels' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Visible on Website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      company: 'company',
      subsidiary: 'subsidiary',
      media: 'avatar',
    },
    prepare(selection) {
      const { title, company, subsidiary, media } = selection;
      return {
        title,
        subtitle: `${company || ''} (${subsidiary || 'Group'})`,
        media,
      };
    },
  },
});
