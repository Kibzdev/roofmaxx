import React from 'react'
import { FaVideo } from 'react-icons/fa'

const FaceTime = () => {
  return (
    <div className='flex flex-col bg-red-500 w-2/3 shadow-2xl rounded-2xl h-[240px] justify-center items-center '>
  <div>
  <FaVideo className='text-4xl text-green-400'/>
  </div>
  <div>
    <h1 className='font-bold text-lg md: 4xl text-sky-800'>FaceTime</h1>
  </div>

 
  </div>
  )
}

export default FaceTime