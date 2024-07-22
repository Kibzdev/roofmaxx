// import { defineField, defineType } from 'sanity';

// export const sectionType = defineType({
//   name: 'section',
//   title: 'Section',
//   type: 'object',
//   fields: [
//     defineField({
//       name: 'heading',
//       title: 'Heading',
//       type: 'string',
//       validation: (Rule) => Rule.required().error('Heading is required.'),
//     }),
//     defineField({
//       name: 'content',
//       title: 'Content',
//       type: 'array',
//       of: [{ type: 'block' }, { type: 'image' }],
//       validation: (Rule) => Rule.required().error('Content is required.'),
//     }),
//     defineField({
//       name: 'location',
//       title: 'Location',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Top', value: 'top' },
//           { title: 'Top Right', value: 'topRight' },
//           { title: 'Top Left', value: 'topLeft' },
//           { title: 'Middle', value: 'middle' },
//           { title: 'Middle Right', value: 'middleRight' },
//           { title: 'Middle Left', value: 'middleLeft' },
//           { title: 'Bottom', value: 'bottom' },
//           { title: 'Bottom Right', value: 'bottomRight' },
//           { title: 'Bottom Left', value: 'bottomLeft' },
//         ],
//       },
//       validation: (Rule) => Rule.required().error('Location is required.'),
//     }),
//   ],
// });
