import { navData } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from 'react';

// Define the expected structure for items in navData
type NavItem = {
    _id: string;
    title: string;
    href: string;
};

const NavLinks: React.FC = () => {
  // hoverIndex should be of type string or null
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);

  return (
    <>
      {navData.map(({ _id, title, href }: NavItem) => (
        <Link  
          key={_id}
          href={href}
          onMouseEnter={() => setHoverIndex(_id)}
          onMouseLeave={() => setHoverIndex(null)}
          className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-base text-white transition-colors"
        >
          <AnimatePresence>
            {hoverIndex === _id && (
              <motion.span 
                className="absolute inset-0 rounded-lg bg-sky-600" 
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 }}}
                exit={{ opacity: 0, transition: { duration: 0.015, delay: 0.2 }}}
              />
            )}
          </AnimatePresence>
          <span key={_id} className="relative z-10">{title}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
