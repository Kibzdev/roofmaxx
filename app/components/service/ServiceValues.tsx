import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from 'next/image';

import collaborationIcon from '../../../public/assets/icons/tech.svg';
import trustIcon from '../../../public/assets/icons/certified.svg';
import transparencyIcon from '../../../public/assets/icons/reliable.svg';
import integrityIcon from '../../../public/assets/icons/security.svg';

export default function ServiceValueCard() {
  return (
    <div className='flex gap-6 items-center justify-center flex-wrap mt-4 mb-4'>
      <Card className="bg-sky-900 text-white p-6 rounded-md w-80 h-80 flex flex-col justify-between transition ease-in duration-300 hover:bg-sky-700 hover:opacity-90">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">ROOFMAX </div>
            <div className="bg-white text-sky-900 rounded-full p-2 hover:bg-red-500">
              <Image src={collaborationIcon} alt="Icon" width={24} height={24} className="w-6 h-6" />
            </div>
          </div>
        </CardHeader>
        <div>
          <CardTitle className="mt-4 text-2xl">
            Collaboration
          </CardTitle>
          <CardDescription className="mt-2">
            Teamwork
          </CardDescription>
          <div className="mt-4 border-t border-white">
            <p className='text-white text-sm md:text-md py-2 font-light tracking-wider'>Fostering a collaborative and supportive work environment where every team member can contribute and grow.</p>
          </div>
        </div>
      </Card>
      <Card className="bg-sky-900 text-white p-6 rounded-md w-80 h-80 flex flex-col justify-between transition ease-in duration-300 hover:bg-sky-700 hover:opacity-90">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">ROOFMAX</div>
            <div className="bg-white text-sky-900 rounded-full p-2 hover:bg-red-500">
              <Image src={trustIcon} alt="Icon" width={24} height={24} className="w-6 h-6" />
            </div>
          </div>
        </CardHeader>
        <div>
          <CardTitle className="mt-4 text-2xl">
            Trust
          </CardTitle>
          <CardDescription className="mt-2">
            Integrity
          </CardDescription>
          <div className="mt-4 border-t border-white">
            <p className='text-white text-sm md:text-md py-2 font-light tracking-wider'>Upholding the highest standards of honesty and transparency in all our business dealings.</p>
          </div>
        </div>
      </Card>
      <Card className="bg-sky-900 text-white p-6 rounded-md w-80 h-80 flex flex-col justify-between transition ease-in duration-300 hover:bg-sky-700 hover:opacity-90">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">ROOFMAX</div>
            <div className="bg-white text-sky-900 rounded-full p-2 hover:bg-red-500">
              <Image src={transparencyIcon} alt="Icon" width={24} height={24} className="w-6 h-6" />
            </div>
          </div>
        </CardHeader>
        <div>
          <CardTitle className="mt-4 text-2xl">
            Customer Focus
          </CardTitle>
          <CardDescription className="mt-2">
            Receive royalties
          </CardDescription>
          <div className="mt-4 border-t border-white">
            <p className='text-white text-sm md:text-md py-2 font-light tracking-wider'>Prioritizing customer satisfaction by understanding their needs and providing tailored solutions that exceed expectations.</p>
          </div>
        </div>
      </Card>
      <Card className="bg-sky-900 text-white p-6 rounded-md w-80 h-80 flex flex-col justify-between transition ease-in duration-300 hover:bg-sky-700 hover:opacity-90">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">ROOFMAX</div>
            <div className="bg-white text-sky-900 rounded-full p-2 hover:bg-red-500">
              <Image src={integrityIcon} alt="Icon" width={24} height={24} className="w-6 h-6" />
            </div>
          </div>
        </CardHeader>
        <div>
          <CardTitle className="mt-4 text-2xl">
            Professionalism
          </CardTitle>
          <CardDescription className="mt-2">
            Top Expertise 
          </CardDescription>
          <div className="mt-4 border-t border-white">
            <p className='text-white text-sm md:text-md py-2 font-light tracking-wider'>Maintaining a high level of professionalism in every aspect of our work, from communication to execution.</p>
          </div>
        </div>
      </Card>
      <Card className="bg-sky-900 text-white p-6 rounded-md w-80 h-80 flex flex-col justify-between transition ease-in duration-300 hover:bg-sky-700 hover:opacity-90">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">ROOFMAX</div>
            <div className="bg-white text-sky-900 rounded-full p-2 hover:bg-red-500">
              <Image src={collaborationIcon} alt="Icon" width={24} height={24} className="w-6 h-6" />
            </div>
          </div>
        </CardHeader>
        <div>
          <CardTitle className="mt-4 text-2xl">
            Quality
          </CardTitle>
          <CardDescription className="mt-2">
            Quality Assurance
          </CardDescription>
          <div className="mt-4 border-t border-white">
            <p className='text-white text-sm md:text-md py-2 font-light tracking-wider'>Committing to the highest level of craftsmanship and using premium materials to ensure the longevity and durability of our roofing solutions.</p>
          </div>
        </div>
      </Card>
      <Card className="bg-sky-900 text-white p-6 rounded-md w-80 h-80 flex flex-col justify-between transition ease-in duration-300 hover:bg-sky-700 hover:opacity-90">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">ROOFMAX</div>
            <div className="bg-white text-sky-900 rounded-full p-2 hover:bg-red-500">
              <Image src={collaborationIcon} alt="Icon" width={24} height={24} className="w-6 h-6" />
            </div>
          </div>
        </CardHeader>
        <div>
          <CardTitle className="mt-4 text-2xl">
            Innovative
          </CardTitle>
          <CardDescription className="mt-2">
            Tech Driven
          </CardDescription>
          <div className="mt-4 border-t border-white">
            <p className='text-white text-sm md:text-md py-2 font-light tracking-wider'>Continuously seeking and implementing new technologies and methods to improve our services and products.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
