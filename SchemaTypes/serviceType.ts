import { defineField, defineType } from 'sanity';
import {CalendarIcon } from '@sanity/icons';

export const serviceType = defineType({
  name: 'service',
  title: "Service",
  type: 'document',
  icon: CalendarIcon,

  groups: [
  {name: 'details', title:'Details'},
  {name: 'editorial', title: "Editorial"}
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
        defineField({ name: 'description', type: 'text', title: 'Description' })
      ]
    }),
    defineField({
      name: 'service_types',
      type: 'array',
      title: 'Service Types',
      description: 'Types of services offered.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'type_name', type: 'string', title: 'Type Name', description: 'Name of the service type' }),
          defineField({ name: 'type_banner', type: 'image', title: 'Type Image', description: 'Image representing the type of service', options: { hotspot: true } }),
          defineField({ name: 'desc', type: 'array', title: 'Description', description: 'Detailed descriptions of the service type',  of:[{type: 'block'}]}),
          defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'service_types.type_name',
              maxLength: 200, // Will limit the length of the slug to 200 characters
              slugify: input => input
                              .toLowerCase()
                              .replace(/\s+/g, '-')
                              .replace(/[^\w\-]+/g, '')
                              .replace(/\-\-+/g, '-') // Replace multiple dashes with a single dash
            },
            description: 'Slug for the service type (used for creating SEO-friendly URLs)'
          }),
          
        ]
      }]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'details',
      options: { source: 'name'},
      validation:(rule) =>rule
      .error(`required to generate a page on the website`),
      hidden:({document})=> !document?.name,
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
      name: 'customerRequirements',
      title: 'Customer Requirements',
      type: 'object',
      group: 'details',
      fields: [
        defineField({ name: 'pre_service_requirements', type: 'array', title: 'Pre-service Requirements', of: [{type: 'string'}] }),
        defineField({ name: 'post_service_care', type: 'array', title: 'Post-service Care', of: [{type: 'string'}] })
      ]
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group:'editorial',
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
