'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { quickLinks } from "@/constants";
import { fetchServiceLinks } from '@/sanity/lib/fetch';
import { ServiceLink } from '../../types';
import { greenroof, clayroof } from "../../public/assets";

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
    <footer className="bg-sky-800 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.id}>
                <Link href={link.path} className="group flex items-center">
                  <span className="mr-2 group-hover:no-underline">→</span> 
                  <span className="hover:underline hover:underline-offset-8 hover:text-white hover:decoration-red-500 hover:decoration-4">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
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
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8">Contact</h3>
          <p className="mb-2 flex items-center">
            <span className="mr-2">📞</span> +(254) 713 147 147 <br />
          </p>
          <p className="mb-2 flex items-center">
            <span className="mr-2">✉️</span> info@roofmax.com <br/>
          </p>
          <p className="mb-2 flex items-center">
            <span className="mr-2">✉️</span> sales@roofmax.com <br/>
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 decoration-red-500 decoration-2 hover:decoration-4 hover:underline-offset-8">Recent Posts</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Image src={greenroof} width={64} height={64} alt="Tile Roofing Cleaning" className="mr-4 rounded-md" />
              <div>
                <h4 className="text-sm font-semibold">Tile Roofing Cleaning</h4>
                <p className="text-xs text-gray-300">21 Apr 2024</p>
              </div>
            </div>
            <div className="flex items-start">
              <Image src={clayroof} width={64} height={64} alt="Choosing Roof Colors" className="mr-4 rounded-md" />
              <div>
                <h4 className="text-sm font-semibold">Choosing Roof Colors</h4>
                <p className="text-xs text-gray-300">21 Apr 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
