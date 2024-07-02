import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) =>
        rule.required().error("Name is required for the author."),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Short bio or description of the author.",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Slug is required."),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      description: "Author's image",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
