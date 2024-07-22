import React from 'react'
import FadeIn from '../FadeIn'
import { FaCalendarDays } from "react-icons/fa6";

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
        with minimal disruption to your daily routine. Our flexible approach means you can approve plans, 
        make decisions, and receive updates at times that suit you, regardless of time zone differences.
        </p>
        </FadeIn>
      </div>
      <div className='flex-1 flex-col px-6 py-6'>
        <ul className='flex flex-col  items-center'>
        <h2 className='w-full text-left text-lg md:text-4xl text-red-500 font-semibold'>
       <span className='inline-flex items-center'>
      <FaCalendarDays className='mr-4 text-green-500' /> 
    Easy Scheduling
    </span>
       </h2>
          <li>
             <ul>
               <li>Google Calendar</li>
               <li>Facetime</li>
              </ul>   
          </li>
          <button className='bg-red-500 px-6 py-4 text-white mt-4 rounded-sm '>Book Now</button>
        </ul>
        <ul>
        </ul>
      </div>
    </div>
  )
}

export default Schedule