import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: "Project",
  type: 'document',
  fields: [
    defineField({
      name: 'projectid',
      type: 'string',
      title: 'Project ID',
    }),
    defineField({
      name: 'projectbanner',
      type: 'image',
      title: 'Project Banner',
      description: 'Hero Banner representing the project',
      options: {
        hotspot: true // Enables image cropping around areas designated as important
      }
    }),

    defineField({
      name: 'project_name',
      type: 'string',
      title: 'Project Name',
    }),
    defineField({
      name: 'client',
      type: 'reference',
      title: 'Client Information',
      to: [{type: 'client'}],
      description: 'Reference to client details'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'project_name', // Generates the slug from the project name
        maxLength: 200, // Optional: sets the maximum slug length
      }
    }),    
    defineField({
      name: 'service_used',
      type: 'reference',
      title: 'Service Used',
      to: [{type: 'service'}],
      description: 'Select the service this project is related to'
    }),
    defineField({
      name: 'start_date',
      type: 'datetime',
      title: 'Start Date'
    }),
    defineField({
      name: 'end_date',
      type: 'datetime',
      title: 'End Date'
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Project Status',
      options: {
        list: [
          {title: 'Planning', value: 'planning'},
          {title: 'In Progress', value: 'in_progress'},
          {title: 'Completed', value: 'completed'},
          {title: 'On Hold', value: 'on_hold'}
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'budget',
      type: 'number',
      title: 'Budget'
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Project Description'
    }),
    defineField({
      name: 'outcome',
      type: 'text',
      title: 'Project Outcome'
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Project Images',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    }),
    defineField({
      name: 'documents',
      type: 'array',
      title: 'Documents',
      of: [{ type: 'file' }],
      options: {
        layout: 'grid'
      }
    }),
    defineField({
      name: 'client_attachments',
      type: 'array',
      title: 'Client Attachments',
      description: 'Files attached by the client, such as roof designs or specific requirements',
      of: [{ type: 'file' }],
      options: {
        layout: 'grid'
      }
    }),
  ],
  preview: {
    select: {
      title: "project_name",
      media: "image",
    },
  }
});
