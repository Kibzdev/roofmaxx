import { defineField, defineType } from "sanity";

export const teamType = defineType({
  name: "team",
  title: "Team",
  type: "document",

  fields: [
    defineField({
      name: "workid",
      title: "Work ID",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "firstname",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastname",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "expertise",
      title: "Expertise",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "firstname",
        maxLength: 96,
      },
    }),
    defineField({
      name: 'projects',
      title: 'Projects Done',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      description: 'Reference to project details'
    })
  ],

  preview: {
    select: {
      title: "firstname",
      media: "image",
    },
  },
});
