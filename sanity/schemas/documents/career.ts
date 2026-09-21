import { defineField, defineType } from 'sanity';
import { Briefcase } from 'lucide-react';

export const career = defineType({
  name: 'career',
  title: 'Career / Vacancy',
  type: 'document',
  icon: Briefcase,
  fields: [
    defineField({
      name: 'title',
      title: 'Job Position Title',
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
      name: 'department',
      title: 'Department / Subsidiary',
      type: 'string',
      options: {
        list: [
          { title: 'Orallio Group HQ', value: 'Orallio Group HQ' },
          { title: 'Orallio Agro Solutions', value: 'Orallio Agro Solutions' },
          { title: 'Orallio Media & Consulting', value: 'Orallio Media & Consulting' },
          { title: 'Orallio Travels', value: 'Orallio Travels' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Lagos, Nigeria | Hybrid / Remote',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-Time', value: 'Full-Time' },
          { title: 'Part-Time', value: 'Part-Time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Remote', value: 'Remote' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Short Role Overview',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'blockContent',
    }),
    defineField({
      name: 'requirements',
      title: 'Qualifications & Requirements',
      type: 'blockContent',
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application Link / Email',
      type: 'string',
      description: 'URL or mailto: careers@orallio.com',
    }),
    defineField({
      name: 'closingDate',
      title: 'Application Deadline',
      type: 'date',
    }),
    defineField({
      name: 'status',
      title: 'Vacancy Status',
      type: 'string',
      initialValue: 'open',
      options: {
        list: [
          { title: 'Open', value: 'open' },
          { title: 'Closed', value: 'closed' },
          { title: 'Draft', value: 'draft' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      dept: 'department',
      status: 'status',
    },
    prepare(selection) {
      const { title, dept, status } = selection;
      return {
        title,
        subtitle: `${dept || ''} • Status: ${(status || 'open').toUpperCase()}`,
      };
    },
  },
});
