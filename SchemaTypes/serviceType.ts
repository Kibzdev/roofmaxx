import { defineField, defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: CalendarIcon,

  groups: [
    { name: 'details', title: 'Details' },
    { name: 'editorial', title: 'Editorial' }
  ],
  fields: [
    defineField({
      name: 'identification',
      title: 'Service Identification',
      type: 'object',
      group: 'details',
      fields: [
        defineField({ name: 'service_id', type: 'string', title: 'Service ID' }),
        defineField({ name: 'service_name', type: 'string', title: 'Service Name' }),
        defineField({ name: 'service_desc', type: 'text', title: 'Description' })
      ]
    }),
    defineField({
      name: 'service_types',
      type: 'array',
      title: 'Niches',
      description: 'Types of services offered.',
      of: [{
        type: 'reference',
        to: [{ type: 'nicheType' }]
      }]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc: any) => doc.identification?.service_name,
        maxLength: 200, // Optional: sets the maximum slug length
      },
    }),
    defineField({
      name: 'service_banner',
      type: 'image',
      title: 'Service Image',
      description: 'Hero Banner representing the service',
      group: 'editorial',
      options: {
        hotspot: true // Enables image cropping around areas designated as important
      }
    }),
    defineField({
      name: 'serviceProjects',
      type: 'array',
      title: 'Service Projects',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      description: 'Reference to other service-related projects'
    }),
    defineField({
      name: 'clients',
      type: 'array',
      title: 'Clients',
      of: [{ type: 'reference', to: [{ type: 'client' }] }],
      description: 'References to clients associated with this service'
    }),
    defineField({
      name: 'customerRequirements',
      title: 'Customer Requirements',
      type: 'object',
      group: 'details',
      fields: [
        defineField({ name: 'pre_service_requirements', type: 'array', title: 'Pre-service Requirements', of: [{ type: 'string' }] }),
        defineField({ name: 'post_service_care', type: 'array', title: 'Post-service Care', of: [{ type: 'string' }] })
      ]
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'editorial',
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
      title: 'identification.service_name',
      media: 'service_banner'
    },
  }
});
