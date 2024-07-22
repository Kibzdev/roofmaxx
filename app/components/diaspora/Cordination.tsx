import React from 'react'
import { FaVideo } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";
import FadeIn from '../FadeIn';

const Cordination = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-6 py-6 items-center '>
      <div className='flex-1'>
        <div className=' py-6 px-6'>
        <h1 className='text-lg md:text-4xl text-sky-800 font-semibold opacity-70 text-center md:text-left'>Seamless Coordination</h1>
        </div>
        <FadeIn>
        <p className='text-gray-600 mb-4 font-normal  leading-6 md:text-xl text-sm px-6'>Living abroad? No problem. Our dedicated team ensures smooth communication and coordination, 
          providing regular updates and progress reports to keep you informed. 
          Whether it&lsquo;s via video calls, emails, or messaging apps, we make sure you &lsquo;re always in the loop.
        </p>
        </FadeIn>
      </div>
      <div className='flex-1 flex-col px-6 py-6'>
        <ul className='flex flex-col  items-center'>
        <h2 className='w-full text-left text-lg md:text-4xl text-red-500 font-semibold'>
       <span className='inline-flex items-center'>
      <FaVideo className='mr-4 text-green-500' /> 
       Video Calls
    </span>
       </h2>
          <li>
             <ul>
               <li>What up</li>
               <li>Facetime</li>
              </ul>   
          </li>
          
        </ul>
        <ul>
        <ul className='flex flex-col  items-center'>
        <h2 className='w-full text-left text-lg md:text-4xl text-red-500 font-semibold'>
       <span className='inline-flex items-center'>
       <MdEmail className='mr-4 text-slate-600' />
      Email
    </span>
       </h2>
          <li>
             <ul>
               <li>What up</li>
               <li>Facetime</li>
              </ul>   
          </li>
          
        </ul>



        </ul>
        <ul>
        <ul className='flex flex-col  items-center'>
        <h2 className='w-full text-left text-lg md:text-4xl text-red-500 font-semibold'>
       <span className='inline-flex items-center'>
       <GiArcheryTarget  className='mr-4 text-sky-800' />
      Milestone Tracker 
    </span>
       </h2>
          <li>
             <ul>
               <li>What up</li>
               <li>Facetime</li>
              </ul>   
          </li>
          
        </ul>



        </ul>
      </div>
    </div>
  )
}

export default Cordination