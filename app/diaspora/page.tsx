import React from 'react'

import DiasporaBanner from '../components/diaspora/DiasporaBanner'
import Cordination from '../components/diaspora/Cordination'
import WhatsApp from '../components/diaspora/WhatsApp'
import FaceTime from '../components/diaspora/FaceTime'
import Tailor from '../components/diaspora/Tailor'
import Payment from '../components/diaspora/Payment'



const page = () => {
  return (
    <div >
        <DiasporaBanner/>
        <div className='flex w-full'>
        <div className='flex-1 flex-col gap-2 px-2'>
          <div className='w-full '>
          <Cordination/>
          </div>
          <div className=' flex flex-col md:flex-row w-full bg-pink-600'>
            <div className='flex-1 w-full bg-orange-800'><WhatsApp/></div>
            <div className='flex-1 bg-emerald-400'><FaceTime/></div>
          </div>
        
        </div>
        <div className=' flex flex-1 flex-col md:flex-row  gap-2 px-2'>
          <div className='flex-1'><Tailor/></div>
          <div className='flex-1'><Payment/></div>
        </div>
        </div>
        
       
      </div>
    
  )
}

export default page