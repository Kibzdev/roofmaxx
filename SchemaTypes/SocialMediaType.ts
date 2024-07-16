import { defineField, defineType } from 'sanity';

export const socialMediaType = defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'socialmedia_name',
      type: 'string',
      title: 'Social Media Name',
      validation: (rule) =>
        rule
          .required()
          .error('Social Media Name is required'),
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
  ],
});
