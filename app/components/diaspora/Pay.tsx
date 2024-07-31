import React from 'react'
import Section from '../Section'
import { financeimg} from '@/public/assets'
import List, { ListItem } from '../List'

const Pay = () => {
  return (
    <Section title="Easy Pay" image={{ src:financeimg, shape: 2 }}>
         <p className='text-gray-600 mb-2 font-normal  md:text-left  leading-6 md:text-xl text-sm py-2'>
           We offer secure and convenient payment options, allowing you to manage transactions safely from anywhere in the world. 
        </p>
      <List>
         <ListItem title="Bank to Bank">
          <p className="text-gray-600 mb-2 font-normal md:text-left  leading-6 md:text-lg text-sm py-2"> To ensure a seamless and secure experience, we offer a bank-to-bank transfer service specifically designed for our international clients. </p>
         </ListItem>
         <ListItem title="Mpesa">
          <p className="text-gray-600 mb-2 font-normal  md:text-left  leading-6 md:text-lg text-sm py-2">Understanding the importance of ease and accessibility, we offer M-Pesa transactions for making substantial payments towards your roofing projects. </p>
         </ListItem>
      </List>
    </Section>
  )
}

export default Pay