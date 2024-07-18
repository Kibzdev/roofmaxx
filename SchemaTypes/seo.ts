import { defineField, defineType } from 'sanity';
 
export const seoType = defineType({
  name: 'seo',
  title:'SEO',
  type:'object',
  fields: [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    description: 'The title of the page, which will appear in the browser tab and search results.Recommende character limit 65.',
    validation: Rule =>Rule.max(65).warning('Titles should be under 65 characters to avoid being cut off in SERPS.'),
  }),
  defineField({
    name: 'description',
    title: 'Meta Description',
    type: 'text',
    description: 'A brief description of the page content for search engines.Recommended character limit is 155',
    validation: Rule =>Rule.max(155).warning('Meta description should be under 155 characters to avoid being cut off in SERPS.'),
  }),
  
  ]
})