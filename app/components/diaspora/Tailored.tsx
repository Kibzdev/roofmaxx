import React from 'react'
import Section from '../Section'
import { contactImg } from '@/public/assets'
import List, { ListItem } from '../List'

const Tailored = () => {
  return (
    <Section title="Tailored Solutions" image={{ src:contactImg, shape: 2 }}>
      <p className='text-gray-600 mb-1  md:text-left font-normal  leading-6 md:text-xl text-sm py-2'>
      At Roofmax Roofing Solutions, we understand that our diaspora clients have unique tastes and requirements,
       influenced by their exposure to diverse architectural styles and roofing designs.</p>
       
       <p className='text-gray-600 mb-1  md:text-left font-normal  leading-6 md:text-xl text-sm py-2'>We are committed to delivering customized roofing solutions that reflect your personal style and preferences, 
      ensuring your home in Kenya stands out. Here’s how we tailor our services to meet your needs:
      </p>
     
      <List>
         <ListItem title="Traditional Kenyan Designs">
          <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-lg text-sm py-2"> Incorporate elements of traditional Kenyan architecture, ensuring a blend of cultural heritage and modern functionality. </p>
         </ListItem>
         <ListItem title="Modern Aesthetics">
          <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-lg text-sm py-2">Offer sleek, contemporary roofing designs that reflect the latest trends and innovations from around the world.</p>
         </ListItem>
         <ListItem title="Eco-Friendly Options ">
          <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-lg text-sm py-2">Provide sustainable roofing solutions, including green roofs and solar panel integrations, catering to environmentally conscious clients.</p>
         </ListItem>
         <ListItem title="End-to-End Service">
          <p className="text-gray-600 mb-2 font-normal  md:text-left  leading-6 md:text-lg text-sm py-2"> Offer a seamless process from design to installation, with dedicated support throughout, ensuring your project is completed to the highest standards.</p>
         </ListItem>
      </List>
   </Section>
  )
}

export default Tailored