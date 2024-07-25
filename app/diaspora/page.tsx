import React from 'react';

import GetStartedCTO from '../components/GetStartedCTO';
import Tailor from '../components/diaspora/Tailor';
import Payment from '../components/diaspora/Payment';
import Cordination from '../components/diaspora/Cordination';
import { FaVideo } from "react-icons/fa";

import Image from 'next/image';
import { craft, facetime, milestone, whatsapp } from '@/public/assets';
import { MdOutlineMailOutline } from "react-icons/md";
import BookingDock from '../components/diaspora/BookingDock';

const Page = () => {
  return (
    <div className="mt-32 md:mt-44">
      <div className="md:bg-white md:max-w-8xl md:mx-16" style={{ boxShadow: '10px 0px 15px -3px rgba(0, 0, 0, 0.1), -10px 0px 15px -3px rgba(0, 0, 0, 0.1)' }}>
      <div className="block md:hidden w-full">
          <BookingDock />
        </div>
        <div className="flex flex-col md:flex-row justify-center md:pb-8 w-full">
          <div className="md:flex-1 w-full md:mt-4">
            <Cordination />
            <Tailor />
            <Payment />
          </div>

          <div className="flex-1  flex-col items-center justify-center px-6 pb-2 md:mt-24 md:ml-40 mx-auto ">
            <ul className="flex flex-col items-start justify-center w-full mt-2  md:mt-4">
              <h2 className="w-full md:ml-0 md:text-left text-lg md:text-2xl text-center text-sky-800 font-semibold flex items-end">
                <span className="inline-flex items-center mr-4 md:mr-8">
                  <FaVideo className="text-2xl md:text-4xl text-red-500" />
                </span>
                Video Calls
              </h2>
              <li className="flex items-start justify-start w-full">
                <ul className="flex md:ml-16 ml-0 gap-2 md:gap-6 items-start justify-start md:py-6 py-2">
                  <li className="flex items-center ml-8 text-sky-800 md:font-semibold font-normal md:text-xl text-sm">
                    <span className="mr-2">
                      <Image
                        src={whatsapp}
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] md:w-[36px] md:h-[36px]"
                        alt="whatsapp"
                      />
                    </span>
                    WhatsApp
                  </li>
                  <li className="flex items-center text-sky-800 md:font-semibold font-normal md:text-xl text-sm">
                    <span className="mr-2">
                      <Image
                        src={facetime}
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] md:w-[36px] md:h-[36px]"
                        alt="facetime"
                      />
                    </span>
                    FaceTime
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="flex flex-col items-start justify-center w-full mt-2 md:mt-4">
              <h2 className="w-full md:text-left text-center text-lg md:text-2xl text-sky-800 font-semibold flex items-end">
                <span className="inline-flex items-center mr-4 md:mr-8">
                  <div className="flex items-center justify-center rounded-full bg-red-500 md:w-[36px] md:h-[36px] h-[28px] w-[28px] px-1 py-1">
                    <MdOutlineMailOutline className="text-white md:text-lg text-lg" />
                  </div>
                </span>
                Email
              </h2>
            </ul>

            <ul className="flex flex-col items-start justify-center w-full mt-2 md:mt-4">
              <ul className="flex flex-col items-start">
                <h2 className="w-full text-left text-lg md:text-2xl text-sky-800 font-semibold flex items-end">
                  <span className="inline-flex items-center mr-4 md:mr-8">
                    <Image
                      src={milestone}
                      width={24}
                      height={24}
                      className="w-[28px] h-[28px] md:w-[36px] md:h-[36px]"
                      alt="milestone"
                    />
                  </span>
                  Milestone Tracker
                </h2>
              </ul>
            </ul>

            <ul className="flex flex-col items-start justify-center w-full  mt-2 md:mt-4">
              <h2 className="w-full md:text-left text-center text-lg md:text-2xl text-sky-800 font-semibold flex items-end">
                <span className="inline-flex items-center mr-4 md:mr-8">
                  <Image
                    src={craft}
                    width={24}
                    height={24}
                    className="w-[28px] h-[28px] md:w-[36px] md:h-[36px]"
                    alt="craft"
                  />
                </span>
                Your Custom Designs
              </h2>
            </ul>
          </div>

        </div>
      </div>
      <GetStartedCTO />
    </div>
  );
}

export default Page;
