'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { quickLinks } from "@/constants";
import { fetchServiceLinks } from '@/sanity/lib/fetch';
import { ServiceLink } from '../../types';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [serviceLinks, setServiceLinks] = useState<ServiceLink[]>([]);

  useEffect(() => {
    const getServiceLinks = async () => {
      const links = await fetchServiceLinks();
      setServiceLinks(links);
    };

    getServiceLinks();
  }, []);

  return (
    <footer className="flex flex-col justify-between bg-sky-800 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.id}>
                <Link href={link.path} className="group flex items-center">
                  <span className="mr-2 group-hover:no-underline">→</span> 
                  <span className="hover:underline hover:underline-offset-8 hover:text-white hover:decoration-red-500 hover:decoration-4 leading-6 font-normal tracking-wide">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Uncomment and update this section if needed
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8">Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map(link => (
              <li key={link.service_id}>
                <Link href={`/services/${link.href}`} className="group flex items-center">
                  <span className="mr-2 group-hover:no-underline">→</span> 
                  <span className="hover:underline hover:underline-offset-8 hover:text-white hover:decoration-red-500 hover:decoration-4">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8 tracking-wide">Contact</h3>
          <p className="mb-2 flex items-center leading-6 font-normal tracking-wide">
            <span className="mr-2">📞</span> +(254) 713 147 147 <br />
          </p>
          <p className="mb-2 flex items-centerleading-6 font-normal tracking-wide">
            <span className="mr-2">✉️</span> info@roofmax.co.ke <br/>
          </p>
          <p className="mb-2 flex items-center leading-6 font-normal tracking-wide">
            <span className="mr-2">✉️</span> sales@roofmax.co.ke<br/>
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8 tracking-wide">Visit Us</h2>
          <p className='leading-6 font-medium tracking-wide'>Embakasi</p>
          <p className='leading-6 font-medium tracking-wide'>Next to Coca-Cola Bottlers </p>
          <h2 className='text-md underline underline-offset-8 underline-white mt-2'>Working Hours</h2>

          <hr/>
          <h3 className='mt-2'>MON - FRI</h3>
          <p className=' leading-6 font-normal tracking-wide'>8:00 AM - 5:00 PM</p>
          <h3>SAT</h3>
          <p className='leading-6 font-normal tracking-wide'>8:00 AM - 2:00 PM</p>
        </div>
        
        <div className="flex flex-col items-start justify-start md:space-x-4 mt-2 md:mt-4">
  <h1 className='text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8 tracking-wide md:pl-6'>Follow Us</h1> {/* Added self-start to align left */}
  <div className='flex gap-2 py-4 items-start'> {/* Added items-start to align left */}
    <a href="https://www.facebook.com/profile.php?id=61560885807834" className="text-red-500 hover:text-white text-2xl md:text-2xl"><FaFacebookF /></a>
    <a href="#" className="text-red-500 hover:text-white text-2xl md:text-2xl"><FaTwitter /></a>
    <a href="#" className="text-red-500 hover:text-white text-2xl md:text-2xl"><FaInstagram /></a>
  </div>
  <h2 className='font-semibold text-lg text-white tracking-wide'>Subscribe</h2>
  <div className='flex flex-col justify-start items-start py-4 gap-4'>
    <form className='flex flex-col items-start justify-start'>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
      />
      <button className='bg-red-500 py-2 my-4 px-6 w-full text-white font-medium text-lg'>Enter</button>
    </form>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
