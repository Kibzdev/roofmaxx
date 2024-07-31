import { contactImg, seamlessimg } from '@/public/assets'
import React from 'react'
import Section from '../Section'
import List, { ListItem } from '../List'

const Cordy = () => {
  return (
   <Section title="Seamless Cordination" image={{ src:seamlessimg, shape: 2 }}>
   <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-xl text-sm py-2">
    Living abroad? No problem. Our dedicated team ensures smooth communication and coordination, 
    providing regular updates and progress reports to keep you informed. 
    Whether it&lsquo;s via video calls, emails, or messaging apps, we make sure you &lsquo;re always in the loop.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-sky-800">
        Always ready to Engage
      </h3>
      <List>
         <ListItem title="WhatsApp">
          <p>Easily connect with us via WhatsApp for instant updates, quick queries, and real-time progress reports. </p>
         </ListItem>
         <ListItem title="FaceTime">
          <p> Easily connect with us via FaceTime for instant updates, virtual meetings, and real-time site visits, ensuring you have a clear view of your project’s progress.</p>
         </ListItem>
         <ListItem title="Emails">
          <p>Receive detailed email updates with photos, videos, and written reports, keeping you informed at every stage. </p>
         </ListItem>
      </List>
   </Section>
  )
}

export default Cordy