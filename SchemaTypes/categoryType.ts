import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Brief description of the category.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
