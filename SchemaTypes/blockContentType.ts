import { defineType, defineArrayMember } from 'sanity';

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike-through', value: 'strike-through' },
          { title: 'Subscript', value: 'subscript' },
          { title: 'Superscript', value: 'superscript' },
          { title: 'Highlight', value: 'highlight' },
          { title: 'Code', value: 'code' },
          { title: 'Red', value: 'red' },
          { title: 'Gray', value: 'gray' },
          { title: 'Blue', value: 'blue' },
          { title: 'Custom Color', value: 'customColor' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (rule) =>
                  rule
                    .uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    })
                    .required()
                    .error('URL is required and must be valid.'),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
    defineArrayMember({
      title: 'Icon',
      name: 'icon',
      type: 'object',
      fields: [
        {
          title: 'Icon Type',
          name: 'iconType',
          type: 'string',
          options: {
            list: [
              { title: 'Info', value: 'info' },
              { title: 'Warning', value: 'warning' },
              { title: 'Error', value: 'error' },
              { title: 'Success', value: 'success' },
            ],
          },
        },
      ],
    }),
  ],
});
