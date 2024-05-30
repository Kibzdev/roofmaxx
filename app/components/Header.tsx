"use client"
import React, { ReactNode } from 'react';
import Container from "./Container"
import Navbar from "./Navbar"
import { Popover, PopoverButton, PopoverPanel,PopoverOverlay } from '@headlessui/react'
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion"
import { navData } from "@/constants"
import Link from "next/link"
import TopBar from "./Topbar"
import Button from './Button'



type MobileNavLinksProps = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<typeof PopoverButton>;

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ children, ...props }) => {
  return (
    <PopoverButton as="div" className="block text-base leading-7 tracking-tight text-sky-800" {...props}>
      <Link href="#">{children}</Link>
    </PopoverButton>
  );
}



const Header = () => {
  return (
    <header className='flex flex-col items-center w-full'>
      <TopBar/>
      <Navbar />
      <Container className="relative z-50 flex justify-between py-8">
    
      <div className="flex items-center gap-6">
              

            </div>

      </Container>
       
          
            {/* Mobile Navlinks */}
            <Popover className="lg:hidden">
              {({open})=> (
                <>
                  <PopoverButton className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-white p-2
                   hover:bg-sky-800 hover:stroke-gray-100
                   active:stroke-sky-800 [&:not(:focus-visible)]:focus-outline-none outline-none" 
                   aria-label="Toggle Site Navigation"
                   >
                     {({open})=> open?(<IoIosArrowUp className="text-2xl text-white" />):(<TbMenu2 className="text-2xl text-white"/>)}
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                         <PopoverOverlay
                         
                         static
                         as={motion.div}
                         initial={{opacity: 0 }}
                         animate={{opacity: 1 }}
                         exit={{ opacity: 0 }}
                         className="fixed inset-0 z-0 bg-gray-300/60 backdrop::blur"   
                         />
                         <PopoverPanel 
                            static as={motion.div}
                            initial={{ opacity: 0, y:-32  }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity:0,
                              y: -32,
                              transition:{duration:0.2},
                            }}
                            className="absolute  inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                            >
                          <div className="space-y-4"> 
                           
                              <MobileNavLinks>
                              <Navbar/>
                              </MobileNavLinks>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="#" className="flex items-center hover:text-white">Get a Quote</Button>
                          </div>
                         </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}

            </Popover>
    </header>
  )
}
export default Header;