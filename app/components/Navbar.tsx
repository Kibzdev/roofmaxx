import Image from 'next/image';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import logo from '../../public/assets/logos/logo.png';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineX,
} from 'react-icons/ai';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';

const serviceLinks = [
  { href: "/services/ceiling-installation", label: "Ceiling Installation" },
  { href: "/services/roof-repair", label: "Roof Repair" },
  { href: "/services/roof-cleaning", label: "Roof Cleaning" },
  { href: "/services/roof-painting", label: "Roof Painting" },
  { href: "/services/solar-cleaning", label: "Solar Cleaning" },
  { href: "/services/root-waterproofing", label: "RoofTop WaterProofing" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className="fixed w-full h-16 mt-12 md:h-24 shadow-xl bg-sky-800 z-50">
      <div className="flex justify-between items-center h-full w-full md:justify-center px-4 2xl:px-16">
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer"
            priority
            sizes="(max-width: 768px) 64px, (min-width: 769px) 128px"
            width={128}
            height={32}
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex justify-center items-center">
            <li className="ml-10 uppercase hover:border-b text-white text-xl">
              <Link href="/">Home</Link>
            </li>
            <Menu as="div" className="relative ml-10">
              <MenuButton className="text-white uppercase hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
                Services
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute z-10 mt-6 w-[340px] origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="flex flex-col flex-wrap rounded-lg justify-between py-1">
                    {serviceLinks.map((serviceLink) => (
                      <MenuItem key={serviceLink.href}>
                        {({ active }) => (
                          <div
                            className={`block w-full data-[focus]:bg-blue-100 px-4 py-4 ${
                              active ? "bg-blue-50 border-b-2 border-b-red-500" : ""
                            }`}
                          >
                            <Link
                              href={serviceLink.href}
                              className="flex flex-col gap-6 px-4 uppercase text-sky-800 font-medium items-start justify-start"
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
            <li className="ml-10 uppercase hover:border-b text-white text-xl">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="ml-10 uppercase hover:border-b text-white text-xl">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 uppercase hover:border-b text-white text-xl">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="ml-10 uppercase hover:border-b text-white text-xl">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} className="text-white" />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-sky-800" />
          </div>
        </div>

        <div className="flex-col py-4">
          <ul className="flex flex-col font-medium gap-4">
            <li onClick={() => setMenuOpen(false)} className="ml-10 uppercase text-sky-800 hover:border-b text-xl">
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleServicesToggle}
              className="ml-10 uppercase text-sky-800 hover:border-b  text-xl cursor-pointer"
            >
              Services
              {servicesOpen && (
                <ul className="pl-4 mt-2">
                  {serviceLinks.map((serviceLink) => (
                    <li key={serviceLink.href} className="ml-10 uppercase py-2 text-sky-800 hover:border-b-4 hover:border-b-red-500 text-sm font-semibold">
                      <Link href={serviceLink.href}>{serviceLink.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li onClick={() => setMenuOpen(false)} className="ml-10 uppercase text-sky-800 hover:border-b text-xl">
              <Link href="/projects">Projects</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="ml-10 uppercase text-sky-800 hover:border-b text-xl">
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="ml-10 uppercase text-sky-800 hover:border-b text-xl">
              <Link href="/contact">Contact</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="ml-10 uppercase text-sky-800 hover:border-b text-xl">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer text-sky-800" />
          <AiOutlineFacebook size={30} className="cursor-pointer text-sky-800" />
          <AiOutlineX size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
