import { defineField, defineType } from 'sanity';

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'LinkedIn' },
          { title: 'Twitter / X', value: 'Twitter' },
          { title: 'Instagram', value: 'Instagram' },
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Website', value: 'Website' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Profile URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
  ],
});
