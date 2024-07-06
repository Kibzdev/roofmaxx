"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from '../../public/assets/logos/logo.svg';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineRight,
} from 'react-icons/ai';
import { fetchServiceLinks } from '@/sanity/lib/fetch';
import { ServiceLink } from '../../types';
import { logoWhite } from '@/public/assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serviceLinks, setServiceLinks] = useState<ServiceLink[]>([]);

  useEffect(() => {
    const getServices = async () => {
      const services = await fetchServiceLinks();
      services.sort((a, b) => a.label.localeCompare(b.label)); // Sort services by label in ascending order
      setServiceLinks(services);
    };

    getServices();
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleServicesToggle = () => {
    setServicesOpen((prev) => !prev);
  };

  const closeServicesDropdown = () => {
    setServicesOpen(false);
  };

  const desktopLinkClasses = "text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium";
  const mobileLinkClasses = "ml-10 font-semibold text-sky-800 hover:border-b hover:border-b-red-500 text-md";

  return (
    <nav className="fixed flex justify-between items-center w-full h-16 md:h-24 shadow-xl bg-sky-800 z-50 px-4 2xl:px-16" style={{ top: '3rem' }}>
      <div className="flex justify-between items-center h-full w-full ">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="logo"
              className="cursor-pointer hidden sm:block"
              priority
              sizes="(max-width: 768px) 64px, (min-width: 769px) 128px"
              width={340}
              height={120}
            />
          </Link>
        </div>
        <div className="hidden sm:flex w-full justify-center items-center">
          <ul className="flex justify-center items-center">
            <li className="ml-10 text-xl">
              <Link href="/" className={desktopLinkClasses}>Home</Link>
            </li>
            <li className="relative ml-10">
              <button
                className={desktopLinkClasses}
                onClick={handleServicesToggle}
              >
                Services <AiOutlineRight className="inline-block ml-1" />
              </button>
            </li>
            <li className="ml-10 text-xl">
              <Link href="/projects" className={desktopLinkClasses}>Projects</Link>
            </li>
            <li className="ml-10 text-xl">
              <Link href="/about" className={desktopLinkClasses}>About</Link>
            </li>
            <li className="ml-10 text-xl">
              <Link href="/contact" className={desktopLinkClasses}>Contact</Link>
            </li>
            <li className="ml-10 text-xl">
              <Link href="/blog" className={desktopLinkClasses}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden flex justify-between items-center w-full px-4">
          <div onClick={handleNav} className="cursor-pointer flex items-center h-full">
            <AiOutlineMenu size={25} className="text-white" />
          </div>
          <div className="flex-grow"></div>
          <Link href="/" passHref>
            <div className="text-white text-xl font-bold">Roofmax</div>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[85%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-x-hidden"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 overflow-x-hidden"
        }
      >
        <div className="flex w-full items-center justify-between h-12 py-6">
          <Link href="/" passHref>
            <Image
              src={logoWhite}
              alt="logo"
              className="cursor-pointer"
              priority
              sizes="(max-width: 768px) 192px, (min-width: 769px) 384px" // Adjusted to 3x size
              width={240}
              height={90}
            />
          </Link>
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-red-500" />
          </div>
        </div>

        <div className="flex-col py-2 ml-4 mt-6">
          <ul className="flex flex-col font-medium gap-4">
            <li onClick={() => setMenuOpen(false)} className={mobileLinkClasses}>
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleServicesToggle}
              className={`${mobileLinkClasses} cursor-pointer flex items-center`}
            >
              Services <AiOutlineRight className="ml-2" />
            </li>
            <li onClick={() => setMenuOpen(false)} className={mobileLinkClasses}>
              <Link href="/projects">Projects</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className={mobileLinkClasses}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className={mobileLinkClasses}>
              <Link href="/contact">Contact</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className={mobileLinkClasses}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-evenly pt-10 items-center">
          <AiOutlineInstagram className="cursor-pointer text-red-500 text-4xl" />
          <AiOutlineFacebook className="cursor-pointer text-red-500 text-4xl" />
        </div>
      </div>

      {/* Services Side Menu */}
      <div
        className={
          servicesOpen
            ? "fixed right-0 top-0 w-[100%] sm:w-[50%] h-screen bg-white p-10 ease-in duration-500 overflow-x-hidden"
            : "fixed right-[-100%] top-0 w-[100%] sm:w-[50%] h-screen bg-white p-10 ease-in duration-500 overflow-x-hidden"
        }
      >
        <div className="flex w-full items-center justify-between h-12 py-6">
          <div onClick={handleServicesToggle} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-red-500" />
          </div>
        </div>

        <div className="flex-col py-2 ml-4 mt-6">
          <ul className="flex flex-col font-medium gap-4">
            {serviceLinks.map((serviceLink) => (
              <li key={serviceLink.service_id} className="ml-2 py-2 text-sky-800 hover:border-b-4 hover:border-b-red-500 text-xs font-semibold">
                <Link href={`/services/${serviceLink.href}`} onClick={() => { closeServicesDropdown(); handleNav(); }}>
                  {serviceLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
