import { defineField, defineType } from 'sanity';
import { User } from 'lucide-react';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member & Executive',
  type: 'document',
  icon: User,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Corporate Title / Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subsidiaryOrGroup',
      title: 'Division / Subsidiary',
      type: 'string',
      options: {
        list: [
          { title: 'Orallio Group', value: 'Orallio Group' },
          { title: 'Orallio Agro Solutions', value: 'Orallio Agro Solutions' },
          { title: 'Orallio Media & Consulting', value: 'Orallio Media & Consulting' },
          { title: 'Orallio Travels', value: 'Orallio Travels' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photograph',
      title: 'Profile Photograph',
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
      name: 'biography',
      title: 'Executive Biography',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'isFounder',
      title: 'Is Founder',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Priority Order',
      type: 'number',
      initialValue: 10,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / Visible',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
      division: 'subsidiaryOrGroup',
      media: 'photograph',
    },
    prepare(selection) {
      const { title, role, division, media } = selection;
      return {
        title,
        subtitle: `${role || ''} (${division || 'Orallio Group'})`,
        media,
      };
    },
  },
});
