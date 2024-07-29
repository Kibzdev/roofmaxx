import React from 'react'
import FadeIn from '../FadeIn'


const Payment = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-6 py-1 items-center bg-sky-800 rounded-2xl md:h-[440px] shadow-2xl'>
      <div className='flex-1'>
        <div className=' py-1 px-4'>
        <h1 className='text-lg md:text-3xl text-red-500 font-semibold opacity-70 text-center md:text-left'>Easy Payment </h1>
        </div>
     
        <p className='text-white mb-2 font-normal text-center md:text-left  leading-6 md:text-xl text-sm px-6'>
           We offer secure and convenient payment options, allowing you to manage transactions safely from anywhere in the world. 
        </p>
      </div>
    </div>
  )
}

export default Payment