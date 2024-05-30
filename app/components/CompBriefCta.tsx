// components/CompBriefCta.tsx
import Image from "next/image";
import React from 'react';
import { diamond } from "../../public/assets";
import Button from "./Button";

const CompBriefCta: React.FC = () => {
  return (
    <div className="flex flex-wrap md:flex-row lg:flex-row bg-sky-800">
      <div className="flex flex-col items-center gap-4 p-6 mx-auto w-1/3">
        <Image src={diamond} width={128} height={128} alt="diamond"/>
        <h3 className="text-center text-white font-semibold">RESIDENTIAL ROOFING</h3>
        <Button variant="outline" className="rounded-full py-4 px-6 md:px-12 border-4 text-white">Learn More</Button>
      </div>
      <div className="flex w-full flex-col items-center gap-4 lg:w-1/3 p-5 bg-red-500">
        <h3 className="text-white font-semibold text-lg text-center">ABOUT US</h3>
        <p className="text-white font-medium tracking-wide py-16 text-center">We take pride in being the roofing experts that homeowners and businesses trust. With decades of experience, our team is committed to providing top-notch roofing solutions that combine quality, durability, and exceptional customer service.</p>
        <Button variant="outline" className="rounded-full py-4 px-12 border-4 text-white">Learn More</Button>
      </div>
      <div className="flex flex-col items-center gap-4 p-6 mx-auto w-1/3">
        <Image src={diamond} width={128} height={128} alt="diamond"/>
        <h3 className="text-center text-white font-semibold">COMMERCIAL ROOFING</h3>
        <Button variant="outline" className="rounded-full py-4 px-6 md:px-12 border-4 text-white">Learn More</Button>
      </div>
    </div>
  );
}

export default CompBriefCta;
