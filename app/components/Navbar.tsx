import Image from "next/image";
import { Fragment } from "react";
import logo from "../../public/assets/logos/logo.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineX,
} from "react-icons/ai";
import { useState } from "react";
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

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-16 mt-12 md:h-24 shadow-xl bg-sky-800 z-50">
      <div className="flex justify-between items-center h-full w-full md:justify-center px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={205}
            height={75}
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex justify-center items-center">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-white text-xl">
                Home
              </li>
            </Link>
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
                <MenuItems className="absolute z-10 mt-6 w-[340px] origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="flex flex-col flex-wrap rounded-lg justify-between py-1 item-center">
                    {serviceLinks.map((serviceLink) => (
                      <MenuItem key={serviceLink.href}>
                        {({ active }) => (
                          <div
                            className={`block data-[focus]:bg-blue-100 px-4 py-4 ${
                              active ? "bg-blue-100" : ""
                            }`}
                          >
                            <a
                              href={serviceLink.href}
                              className="flex flex-col gap-6 px-4 uppercase text-sky-800 font-medium items-center justify-center"
                            >
                              {serviceLink.label}
                            </a>
                          </div>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
            <Link href="/projects">
              <li className="ml-10 uppercase hover:border-b text-white text-xl">
                Projects
              </li>
            </Link>
            
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-white text-xl">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-white text-xl">
                Contact
              </li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 uppercase hover:border-b text-white text-xl">
                Blog
              </li>
            </Link>
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
            : "fixed  left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-sky-800" />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="flex flex-col font-medium gap-4">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="ml-10 uppercase text-sky-800 hover:border-b text-xl"
              >
                Home
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="ml-10 uppercase text-sky-800 hover:border-b text-xl"
              >
                Services
              </li>
            </Link>
            <Link href="/projects">
              <li
                onClick={() => setMenuOpen(false)}
                className="ml-10 uppercase text-sky-800 hover:border-b text-xl"
              >
                Projects
              </li>
            </Link>
        
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="ml-10 uppercase text-sky-800 hover:border-b text-xl"
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="ml-10 uppercase text-sky-800 hover:border-b text-xl"
              >
                Contact
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={() => setMenuOpen(false)}
                className="ml-10 uppercase text-sky-800 hover:border-b text-xl"
              >
                Blog
              </li>
            </Link>
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
