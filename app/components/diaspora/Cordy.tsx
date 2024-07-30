import { contactImg } from '@/public/assets'
import React from 'react'
import Section from '../Section'
import List, { ListItem } from '../List'

const Cordy = () => {
  return (
   <Section title="Seamless Cordination" image={{ src:contactImg, shape: 2 }}>
   <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-xl text-sm py-2">
    Living abroad? No problem. Our dedicated team ensures smooth communication and coordination, 
    providing regular updates and progress reports to keep you informed. 
    Whether it&lsquo;s via video calls, emails, or messaging apps, we make sure you &lsquo;re always in the loop.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-sky-800">
        always ready to Engage
      </h3>
      <List>
         <ListItem title="WhatsApp">
          <p> To ensure a seamless and secure experience, we offer a bank-to-bank transfer service specifically designed for our international clients. </p>
         </ListItem>
         <ListItem title="FaceTime">
          <p>Understanding the importance of ease and accessibility, we offer M-Pesa transactions for making substantial payments towards your roofing projects. </p>
         </ListItem>
      </List>
   </Section>
  )
}

export default Cordy