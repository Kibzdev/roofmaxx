import React from 'react'
import { FaVideo } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";
import FadeIn from '../FadeIn';
import Image from 'next/image';
import { facetime, whatsapp } from '@/public/assets';

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
      <ul className='flex flex-col items-start'>
      <h2 className='w-full text-left text-lg md:text-2xl text-red-500  opacity-70 font-bold'>
        <span className='inline-flex items-center'>
          <FaVideo className='mr-4 text-green-500' />
          Video Calls
        </span>
      </h2>
      <li className='w-full'>
        <ul className='flex flex-col gap-3 md:ml-20 md:items-start items-center justify-start md:py-6 py-2'>
          <li className='flex  items-center text-sky-800 md:font-semibold font-normal md:text-2xl text-sm'>
            <span className='mr-2'>
              <Image src={whatsapp}
                width={24}
                height={24}
                className='w-[24px] h-[24px] md:w-[44px] md:h-[44px]'
                alt='whatsup'
               />
            </span>
            Whatsup
          </li>
          <li className='flex  items-center text-sky-800 md:font-semibold font-normal md:text-2xl text-sm'>
            <span className='mr-2'>
              <Image 
              src={facetime}
                width={24}
                height={24}
                className='w-[24px] h-[24px] md:w-[44px] md:h-[44px]'
                alt='whatsup'
              />
            </span>
           Facetime
          </li>
        </ul>
      </li>
    </ul>

    <ul className="flex flex-col items-start">
        <h2 className='w-full text-left text-lg md:text-2xl text-red-500 font-semibold'>
        <span className='inline-flex items-center'>
         <MdEmail className='mr-4 text-slate-600' />
          Email
    </span>  
     </h2>
          <li className="flex  justify-start  items-center text-sky-800 md:font-semibold font-normal md:text-2xl text-sm ">
             <ul className="flex flex-col gap-2 md:ml-20 md:items-start items-start justify-start md:py-6 py-2 ">
               <li className="flex  ml-20 md:ml-0  items-center text-sky-800 md:font-semibold font-normal md:text-2xl text-sm">
                <span className="mr-2">✉️</span> info@roofmax.co.ke <br/></li>
               <li className="flex  ml-20 md:ml-0 items-center text-sky-800 md:font-semibold font-normal md:text-2xl text-sm">
                 <span className="mr-2">✉️</span> sales@roofmax.co.ke<br/></li>
              </ul>   
          </li>
          
        </ul>
        <ul>
        <ul className='flex flex-col  items-center'>
        <h2 className='w-full text-left text-lg md:text-2xl text-red-500 font-semibold'>
       <span className='inline-flex items-center'>
       <GiArcheryTarget  className='mr-4 text-sky-800' />
      Milestone Tracker 
    </span>
       </h2>
        </ul>



        </ul>
      </div>
    </div>
  )
}

export default Cordination