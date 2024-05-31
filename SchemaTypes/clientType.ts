import { defineField, defineType } from 'sanity';
export const clientType = defineType({
  name: 'client',
  title: "Client",
  type: 'document',
  fields: [
    defineField({
       name: 'client_id',
       type: 'string',
       title: 'Client ID', 
       validation: (rule)=> rule 
       .required()
       .error(`Required for use as keys in arrays `),
      }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Client Name',
      validation: (rule)=> rule 
       .required()
       .error(`Required for KYC `),
    }),
    defineField({
      name: 'category',
      description: 'Category of classifaction  by type of housing',
      type: 'string',
      options: {
        list:[
          'Residential', 'Commercial', 'Industrial'
      ],
      }
    }),
    
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      description: 'Contact phone number for the client'
    }),
    
    defineField({
      name: 'location',
      type: 'reference',
      title: 'Location',
      to: [{type: 'location'}],
     
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Client Photo',
      description: 'Photo of the client for testimonials and profiles'
    }),
    defineField({
      name: 'testimonial',
      type: 'text',
      title: 'Testimonial',
      description: 'Client testimonial regarding their experience with the roofing company'
    }),
    defineField({
      name: 'project_ref',
      type: 'array',
      title: 'Projects',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      description: 'References to projects associated with this client'
    })
  ],
});
