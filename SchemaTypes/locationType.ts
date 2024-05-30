import { defineType, defineField } from 'sanity';

export const locationType = defineType({
  name: 'location',
  title:'Location',
  type: 'document',
  fields: [
    defineField({
       name: 'county',
       title:'County',
       type: 'document',
       fields: [
        defineField({ name: 'county_id', type:'string', title:'COUNTY CODE' }),
        defineField({ name: 'county_name', type: 'string', title: 'County Name' }),
        defineField({ 
          name: 'county',
          type:'object',
          title:'COUNTY',
          fields:[
          defineField({ name: 'Town', type: 'array', title: 'Town', of:[{type: 'string'}] }),
        ]}),


        
       ]

    })
  ]
})