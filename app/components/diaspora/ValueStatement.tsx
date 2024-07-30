import React from 'react'

import { contactImg } from '@/public/assets'
import Section from '../Section'
import { TagList, TagListItem } from '../TagList'
import List, { ListItem } from '../List'

const ValueStatement = () => {
  return (


     <Section title='Diaspora' image={{ src:contactImg, shape: 1 }}>
       <div className="space-y-6 text-base">
       <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-xl text-sm py-2">At Roofmax Roofing Solutions, we pride ourselves on our deep commitment to understanding and meeting the unique needs of our diaspora clients.</p>
       <p className="text-gray-600 mb-2 font-normal  md:text-left  leading-6 md:text-xl text-sm py-2">We recognize that being away from home can create distinct challenges when it comes to managing property projects in Kenya.</p>  
        
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-sky-800">
        How we Do it?
      </h3>
      <List>
         <ListItem title="Personalized Communication">
          <p className="text-gray-600 mb-2 font-normal  md:text-left  leading-6 md:text-lg text-sm py-2"> We establish direct and consistent communication channels, understanding your specific goals, preferences, and any concerns you might have.</p>
         </ListItem>
         <ListItem title="Design Inspiration">
          <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-lg text-sm py-2">Incorporate design elements you’ve encountered abroad that you wish to bring into your Kenyan home.</p>
         </ListItem>
         <ListItem title="Regular Updates ">
          <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-lg text-sm py-2">Offer frequent progress reports, virtual meetings, and site visits via video calls to ensure you remain informed and engaged throughout the project.</p>
         </ListItem>
         <ListItem title="Business Context.">
          <p className="text-gray-600 mb-2 font-normal  md:text-left  leading-6 md:text-lg text-sm py-2">Take the time to understand your business operations, ensuring our solutions not only meet aesthetic and functional needs but also align with your business goals and operational dynamics.</p>
         </ListItem>
      </List>
     </Section>
  )
}

export default ValueStatement