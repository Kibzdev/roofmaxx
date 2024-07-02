import React from "react";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Logo from './Logo';

const Navbar = () => {
  const navigation = [
    { title: "Home", href: "/www.roofmax.co.ke" },
    { title: "Features", href: "/features" },
    { title: "About me", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];
  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Roofmax" className="text-sky-800" />
        <div className="hidden md:inline-flex items-center gap-7 text-sky-900 hover:text-sky-800 duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-red-500 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;