import Image from "next/image"
import React from 'react'

const InspireCTO = () => {
  return (
<section className="bg-center -no-repeat bg-[url('/assets/images/ctabg.png')] bg-gray-700 bg-blend-multiply">

    <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <div className="relative flex py-16">
      <Image
                className="absolute lg:top-[0px] lg:left-[0] w-full h-800"
                alt=""
                src="/assets/images/vector.svg"
                height={34}
                width={34}
              />
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-sky-800 md:text-5xl lg:text-6xl z-[5]">As you Dreamed</h1>
        <p className="mb-8 text-lg font-normal text-sky-800 lg:text-xl sm:px-16 lg:px-48 z-[50]">Discover the roofing solutions you ve always dreamed of – a perfect blend of durability, design, and expert craftsmanship.</p>
      </div>
   
        <div className=" relative flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 ">
        <Image
                className="sm:hidden lg:absolute lg:top-[0px] lg:left-[320px] w-1/2 h-640"
                alt=""
                src="/assets/images/vector.svg"
                height={34}
                width={34}
              />
        <div className="w-full z-1 h-full absolute !m-[0] bottom-[-0.3px] left-[0px] ">
              <a href="#" className="inline-flex justify-center z-5 items-center py-6 px-16 text-base font-medium text-center text-white  bg-red-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-900">
                Get Free Quote
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            </div>
            
        </div>
    </div>
</section>


  )
}

export default InspireCTO