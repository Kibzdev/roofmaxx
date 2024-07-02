import { defineField, defineType } from 'sanity';
import { blockContentType } from './blockContentType'; // Adjust the import path as needed

export const postType = defineType({
  name: 'post',
  title: 'Post',
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
      description: 'Brief description of the post.',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required.'),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: { type: 'author' },
      validation: (rule) => rule.required().error('Author reference is required.'),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
      description: 'Main image of the post.',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'reference', to: { type: 'category' } }],
      description: 'Categories associated with the post.',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      description: 'Date and time when the post was published.',
    }),
    defineField({
      name: 'body',
      type: 'blockContent', // Use the defined blockContentType
      title: 'Body',
      description: 'Content of the post.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author ? `by ${author}` : undefined };
    },
  },
});
