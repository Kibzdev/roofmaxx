import { defineType, defineField } from 'sanity';

export const locationType = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'county',
      title: 'County',
      type: 'document',
      fields: [
        defineField({ name: 'county_code', type: 'string', title: 'County Code' }),
        defineField({ name: 'county_name', type: 'string', title: 'County Name' }),
        defineField({ 
          name: 'towns',
          type: 'array',
          title: 'Towns',
          of: [{type: 'string'}]
        }),
      ],
     
    })
  ],
  preview: {
    select: {
      title: 'county.county_name',
      media: 'icon' // Assuming you have an icon or image field; replace 'icon' with your actual media field if different
    },
  }
});
