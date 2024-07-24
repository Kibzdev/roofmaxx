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
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { fetchServiceLinks } from '@/sanity/lib/fetch';
import { ServiceLink } from '../../types';
import { logowhite, logoWhite } from '@/public/assets';

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

  const desktopLinkClasses = "text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium z-25";
  const mobileLinkClasses = "ml-10 font-semibold text-sky-800 hover:border-b hover:border-b-red-500 text-md";

  return (
    <nav className="fixed flex justify-normal items-center w-full h-16 md:h-24 shadow-xl bg-sky-800 z-50 px-4 2xl:px-16" style={{ top: '4rem' }}>
      <div className="flex justify-between max-w-7xl items-center h-full w-full ">
        <div className="flex md:ml-32 items-center ">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="logo"
              className="cursor-pointer hidden sm:block py-2"
              priority
              sizes="(max-width: 768px) 64px, (min-width: 769px) 128px"
              width={180}
              height={80}
            />
          </Link>
        </div>
        <div className="hidden sm:flex w-full justify-center items-center">
          <ul className="flex justify-center items-center">
            <li className="ml-10 text-xl">
              <Link href="/" className={desktopLinkClasses}>Home</Link>
            </li>
            <Menu as="div" className="relative ml-10">
              <MenuButton
                className={desktopLinkClasses}
                onClick={handleServicesToggle}
              >
                Services
              </MenuButton>
              <Transition
                as="div"
                show={servicesOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems
                  as="div"
                  className="absolute z-10 mt-6 w-[340px] max-h-80 overflow-y-auto origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none custom-scrollbar"
                  onMouseLeave={closeServicesDropdown}
                >
                  <div className="flex flex-col flex-wrap rounded-lg justify-between py-1">
                    {serviceLinks.map((serviceLink) => (
                      <MenuItem key={serviceLink.service_id} as="div">
                        {({ active }) => (
                          <div
                            className={`block w-full data-[focus]:bg-blue-100 px-4 py-2 ${
                              active ? "bg-blue-50 border-b-2 border-b-red-500" : ""
                            }`}
                            onClick={closeServicesDropdown}
                          >
                            <Link
                              href={`/services/${serviceLink.href}`}
                              className="flex flex-col gap-2 px-0 font-bold items-start justify-start text-sky-800 text-sm" // Default text size for desktop
                              onClick={() => {
                                closeServicesDropdown();
                                setMenuOpen(false); // Ensure the mobile menu also closes if open
                              }}
                            >
                              {serviceLink.label}
                            </Link>
                          </div>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
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
              <Link href="/diaspora" className={desktopLinkClasses}>Diaspora Build</Link>
            </li>
            <li className="ml-10 text-xl">
              <Link href="/blog" className={desktopLinkClasses}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden flex justify-between items-center w-full px-4">
          <div onClick={handleNav} className="ml-0 cursor-pointer flex items-center h-full">
            <AiOutlineMenu size={25} className="text-white" />
          </div>
          {/* <Link href="/" passHref>
            <div className="text-white text-xl font-bold ml-auto">Roofmax</div>
          </Link> */}
        </div>
      </div>

      {/* Mobile */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[85%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-x-hidden z-50"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 overflow-x-hidden"
        }
      >
        <div className="flex w-full items-center justify-between h-12 py-6 pl-14">
          <Link href="/" passHref>
            <Image
              src={logoWhite}
              alt="logo"
              className="cursor-pointer"
              priority
              sizes="(max-width: 768px) 192px, (min-width: 769px) 384px" // Adjusted to 3x size
              width={120}
              height={40}
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
              className={`${mobileLinkClasses} cursor-pointer flex items-center justify-between`}
            >
              <span>Services</span> <AiOutlineRight className="ml-2" />
            </li>
            {servicesOpen && (
              <div className="flex flex-col ml-4 mt-2">
                {serviceLinks.map((serviceLink) => (
                  <li
                    key={serviceLink.service_id}
                    className={mobileLinkClasses}
                    onClick={() => {
                      closeServicesDropdown();
                      setMenuOpen(false);
                    }}
                  >
                    <Link href={`/services/${serviceLink.href}`}>{serviceLink.label}</Link>
                  </li>
                ))}
              </div>
            )}
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
              <Link href="/diaspora">Diaspora Build</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className={mobileLinkClasses}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="pt-16">
          <p className="uppercase tracking-widest text-[15px] font-semibold text-red-500">
            Let&lsquo;s Connect
          </p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <a href="https://www.facebook.com/profile.php?id=61560885807834" target="_blank" rel="noopener noreferrer">
          <AiOutlineFacebook className='text-sky-800 text-2xl' />
          </a>
          </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineInstagram  className='text-sky-800 text-2xl' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
