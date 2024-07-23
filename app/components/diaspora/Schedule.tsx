import React from 'react'
import FadeIn from '../FadeIn'


const Schedule = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-6 py-6 items-center '>
      <div className='flex-1'>
        <div className=' py-6 px-6'>
        <h1 className='text-lg md:text-4xl text-sky-800 font-semibold opacity-70 text-center md:text-left'>Convenient Scheduling </h1>
        </div>
        <FadeIn>
        <p className='text-gray-600 mb-4 font-normal  leading-6 md:text-xl text-sm px-6'>
        We work around your schedule, making it easy to plan and manage roofing projects from abroad, 
        with minimal disruption to your daily routine. 
        </p>
        </FadeIn>
      </div>
     
    </div>
  )
}

export default Schedule