import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsApp = () => {
  return (
 <div className='flex flex-col bg-red-200 w-2/3 shadow-2xl rounded-2xl h-[240px] justify-center items-center '>
  <div>
  <FaWhatsapp className='text-4xl text-green-400'/>
  </div>
  <div>
    <h1 className='font-bold text-lg md: 4xl text-sky-800'>WhatsApp</h1>
  </div>

 
  </div>
  )
}

export default WhatsApp