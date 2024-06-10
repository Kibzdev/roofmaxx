// components/CompBriefCta.tsx
import Image from "next/image";
import React from 'react';
import { diamond } from "../../public/assets";
import Button from "./Button";
import Link from 'next/link';


const CompBriefCta: React.FC = () => {
  return (
    <div className=" relative flex flex-wrap md:flex-row lg:flex-row bg-sky-800 mt-36 md:mt-0">
      <div className="flex flex-col items-center gap-4 p-6 mx-auto md:w-1/3 w-full py-10">
        <Image src={diamond} width={128} height={128} alt="diamond"/>
        <h3 className="text-center text-white font-semibold">RESIDENTIAL ROOFING</h3>
        <p className='text-white tracking-wider text-center font-light text-lg'>RoofMax provides top-quality roofing solutions for residential homes, ensuring durability, energy efficiency, and aesthetic appeal</p>
        <Link href="/services/residential">
        <Button variant="outline" className="rounded-full py-4 px-6 md:px-12 border-4 text-white hover:bg-red-500">Learn More</Button>
        </Link>
       
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:w-1/3 p-5 bg-red-500 py-10">
        <h3 className="text-white font-semibold text-lg text-center">ABOUT US</h3>
        <p className="text-white font-light tracking-wide py-12 text-center">We take pride in being the roofing experts that homeowners and businesses trust. With decades of experience, our team is committed to providing top-notch roofing solutions that combine quality, durability, and exceptional customer service.</p>
        <Link href="/about">
        <Button variant="outline" className="rounded-full py-4 px-12 border-4 text-white hover:bg-sky-800">Learn More</Button>
        </Link>
        
      </div>
      <div className="flex flex-col items-center gap-4 p-6 mx-auto md:w-1/3 w-full py-10">
        <Image src={diamond} width={128} height={128} alt="diamond"/>
        <h3 className="text-center text-white font-semibold">COMMERCIAL ROOFING</h3>
        <p className="text-white tracking-wider text-center font-light text-lg"> Our expert team works closely with developers and property managers to provide customized, high-quality roofs that enhance the value and longevity of commercial properties</p>
        <Button variant="outline" className="rounded-full py-4 px-6 md:px-12 border-4 text-white mb-8 hover:bg-red-500">Learn More</Button>
      </div>
    </div>
  );
}

export default CompBriefCta;
