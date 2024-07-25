import React from 'react'
import FadeIn from '../FadeIn'
import { MdArchitecture } from "react-icons/md";
import { HiMiniHomeModern } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";

const Tailor = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between px-6 py-1 items-center'>
      <div className='flex-1'>
        <div className=' py-1 px-4'>
        <h1 className='text-lg md:text-4xl text-sky-800 font-semibold opacity-70 text-center md:text-left'>Tailored Solutions</h1>
        </div>
        <FadeIn>
        <p className='text-gray-600 mb-1  text-center md:text-left font-normal  leading-6 md:text-xl text-sm px-6'>
          We offer customized roofing solutions that cater to your specific needs and preferences, 
          ensuring your home reflects your personal style and requirements. Whether you’re looking for traditional Kenyan designs or modern aesthetics, 
          our team can bring your vision to life.
        </p>
        </FadeIn>
      </div>
    
    </div>
  )
}

export default Tailor