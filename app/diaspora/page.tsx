import React from 'react'

import GetStartedCTO from '../components/GetStartedCTO'
import Tailor from '../components/diaspora/Tailor';
import Payment from '../components/diaspora/Payment';
import Cordination from '../components/diaspora/Cordination';
import DiasporaBanner from '../components/diaspora/DiasporaBanner';
import Schedule from '../components/diaspora/Schedule';
import BookingDock from '../components/diaspora/BookingDock';

const page = () => {
  return (
    <div className='mt-40'>
       <BookingDock/>
      <div className="md:bg-white md:max-w-8xl md:mx-16" style={{ boxShadow: '10px 0px 15px -3px rgba(0, 0, 0, 0.1), -10px 0px 15px -3px rgba(0, 0, 0, 0.1)' }}>
      <Cordination/>
       <Tailor/>
       <Payment/>
       <Schedule/>
      </div>
      <GetStartedCTO/>
    </div>
  )
}

export default page;