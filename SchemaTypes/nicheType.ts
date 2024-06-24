import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export const nicheType = defineType({
  name: 'nicheType',
  title: 'Niche',
  type: 'document',
  icon: ImageIcon,  // Use an appropriate icon, ImageIcon is just a placeholder
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'service' }],
      validation: Rule => Rule.required()
    }),
    defineField({ name: 'niche_name', type: 'string', title: 'Niche Name', validation: Rule => Rule.required() }),
    defineField({ name: 'niche_banner', type: 'image', title: 'Niche Image', options: { hotspot: true } }),
    defineField({ 
      name: 'niche_desc', 
      type: 'array', 
      title: 'Description',
      of: [{
        type: 'block',
        marks: {
          decorators: [
            { title: 'Bold', value: 'strong' },
            { title: 'Italic', value: 'em' },
            { title: 'Underline', value: 'underline' }
          ]
        }
      }] 
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'niche_name', // Generates the slug from the project name
        maxLength: 200, // Optional: sets the maximum slug length
      }
    }),
    defineField({ 
      name: 'niche_benefits', 
      type: 'array', 
      title: 'Benefits',
      of: [{
        type: 'block',
        marks: {
          decorators: [
            { title: 'Bold', value: 'strong' },
            { title: 'Italic', value: 'em' },
            { title: 'Underline', value: 'underline' }
          ]
        }
      }] 
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', type: 'string', title: 'Question' }),
            defineField({ name: 'answer', type: 'text', title: 'Answer' })
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer'
            }
          }
        }
      ],
      description: 'List of frequently asked questions and their answers related to this service.'
    }),
  ],
  preview: {
    select: {
      title: 'niche_name',
      media: 'niche_banner'
    }
  }
});
