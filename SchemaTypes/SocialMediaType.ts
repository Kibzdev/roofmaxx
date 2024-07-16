import { defineField, defineType } from 'sanity';

export const socialMediaType = defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'network_name',
      type: 'string',
      title: 'Network Name',
      validation: (rule) =>
        rule
          .required()
          .error('Network Name is required'),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (rule) =>
        rule
          .required()
          .uri({
            scheme: ['http', 'https'],
          })
          .error('A valid URL is required'),
    }),
    defineField({
      name: 'client',
      type: 'reference',
      title: 'Client',
      to: [{ type: 'client' }],
      validation: (rule) =>
        rule
          .required()
          .error('Client reference is required'),
    }),
    defineField({
      name: 'icon',
      type: 'image',
      title: 'Icon',
      description: 'Icon representing the social media network',
    }),
  ],
});
