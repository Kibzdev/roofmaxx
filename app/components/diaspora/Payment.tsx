import React from 'react'
import FadeIn from '../FadeIn'
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { RiMobileDownloadFill } from "react-icons/ri";

const Payment = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-6 py-6 items-center '>
      <div className='flex-1'>
        <div className=' py-6 px-6'>
        <h1 className='text-lg md:text-4xl text-sky-800 font-semibold opacity-70 text-center md:text-left'>Easy Payment </h1>
        </div>
        <FadeIn>
        <p className='text-gray-600 mb-4 font-normal  leading-6 md:text-xl text-sm px-6'>
           We offer secure and convenient payment options, allowing you to manage transactions safely from anywhere in the world. 
        </p>
        </FadeIn>
      </div>
      <div className='flex-1 flex-col px-6 py-6'>
        <ul className='flex flex-col  items-center'>
        <h2 className='w-full text-left text-lg md:text-2xl text-red-500  opacity-70 font-bold'>
       <span className='inline-flex items-center'>
      <BsCreditCard2FrontFill className='mr-4 text-green-500' /> 
    Bank to Bank
    </span>
       </h2>
          
        </ul>
        <ul>
        <ul className='flex flex-col  items-center'>
        <h2 className='w-full text-left text-lg md:text-2xl text-red-500  opacity-70 font-bold'>
       <span className='inline-flex items-center'>
       <RiMobileDownloadFill  className='mr-4 text-slate-600' />
      Platforms to Mpesa
    </span>
       </h2> 
        </ul>
        </ul>
      </div>
    </div>
  )
}

export default Payment