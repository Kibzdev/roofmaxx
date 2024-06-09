// // Import necessary libraries
// import { Fragment } from 'react';
// import { Menu, MenuButton, MenuItem, MenuItems, Transition, Popover,PopoverButton,PopoverOverlay,PopoverPanel  } from '@headlessui/react';
// import Link from 'next/link';
// import Logo from './Logo';
// import Button from './Button';
// import { TbMenu2 } from "react-icons/tb";
// import { IoIosArrowUp } from "react-icons/io";
// import { AnimatePresence, motion } from "framer-motion"
// import React, { ReactNode } from 'react';

// type MobileNavLinksProps = {
//   children: ReactNode;
// } & React.ComponentPropsWithoutRef<typeof Popover.Button>;  // Extend props from Popover.Button

// const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ children, ...props }) => {
//   return (
//     <PopoverButton 
//       as={Link}  // Specify that Popover.Button should render as a Link component
//       className="block text-base leading-7 tracking-tight text-sky-800"
//       {...props}
//     >
//       {children}
//     </PopoverButton>
//   );
// }
// // Define a function component with TypeScript
// const NavBarr: React.FC = () => {
//   return (
//     <div className="flex w-full bg-sky-800 text-white items-center justify-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between  h-16">
//           <div className="flex items-center">
//             <div className="-ml-2 mr-6 flex items-center">
//              <Logo/>
//             </div>
//             <div className="flex space-x-4">
//               {/* Primary nav */}
//               <Link href="/">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Home
//                 </p>
//               </Link>
//               {/* Dropdown nav item */}
//               <Menu as="div" className="relative">
//                 <MenuButton className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                 <Link href="/services">
//                 <p className="text-white hover:bg-sky-600 hover:text-white">
//                   Services
//                 </p>
//               </Link>
                 
//                 </MenuButton>
//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <MenuItems className="absolute z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <div className="py-1">
//                       {["Ceiling Installation", "Roof Repair", "Roof Painting", "Roof Replacement"].map((service) => (
//                         <MenuItem key={service}>
//                           {({ active }) => (
//                             <Link href={`/${service.toLowerCase().replace(/ /g, '-')}`}>
//                               <p
//                                 className={`${
//                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                                 } block px-4 py-2 text-sm`}
//                               >
//                                 {service}
//                               </p>
//                             </Link>
//                           )}
//                         </MenuItem>
//                       ))}
//                     </div>
//                   </MenuItems>
//                 </Transition>
//               </Menu>
//               <Link href="/about">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   About Us
//                 </p>
//               </Link>
//               <Link href="/projects">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Projects
//                 </p>
//               </Link>
//               <Link href="/contact">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Contact
//                 </p>
//               </Link>
//               <Link href="/blog">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Blog
//                 </p>
//               </Link>
//               <div className="flex items-center gap-6">
//               <Button href="#"  className="hidden lg:block">Get a Quote</Button>

//             </div>
//             </div>
//              {/* Mobile Navlinks */}
//              <Popover className="lg:hidden">
//               {({open})=> (
//                 <>
//                   <PopoverButton className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-white p-2
//                    hover:bg-sky-800 hover:stroke-gray-100
//                    active:stroke-sky-800 [&:not(:focus-visible)]:focus-outline-none outline-none" 
//                    aria-label="Toggle Site Navigation"
//                    >
//                      {({open})=> open?(<IoIosArrowUp className="text-2xl text-white" />):(<TbMenu2 className="text-2xl text-white"/>)}
//                   </PopoverButton>
//                   <AnimatePresence initial={false}>
//                     {open && (
//                       <>
//                          <PopoverOverlay
                         
//                          static
//                          as={motion.div}
//                          initial={{opacity: 0 }}
//                          animate={{opacity: 1 }}
//                          exit={{ opacity: 0 }}
//                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop::blur"   
//                          />
//                          <PopoverPanel 
//                             static as={motion.div}
//                             initial={{ opacity: 0, y:-32  }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{
//                               opacity:0,
//                               y: -32,
//                               transition:{duration:0.2},
//                             }}
//                             className="absolute  inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
//                             >
//                           <div className="space-y-4"> 
                           
//                               <MobileNavLinks>
//                               <div className="flex space-x-4">
//               {/* Primary nav */}
//               <Link href="/">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Home
//                 </p>
//               </Link>
//               {/* Dropdown nav item */}
//               <Menu as="div" className="relative">
//                 <MenuButton className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Services
//                 </MenuButton>
//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <MenuItems className="absolute z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <div className="py-1">
//                       {["Ceiling Installation", "Roof Repair", "Roof Painting", "Roof Replacement"].map((service) => (
//                         <MenuItem key={service}>
//                           {({ active }) => (
//                             <Link href={`/${service.toLowerCase().replace(/ /g, '-')}`}>
//                               <p
//                                 className={`${
//                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                                 } block px-4 py-2 text-sm`}
//                               >
//                                 {service}
//                               </p>
//                             </Link>
//                           )}
//                         </MenuItem>
//                       ))}
//                     </div>
//                   </MenuItems>
//                 </Transition>
//               </Menu>
//               <Link href="/about">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   About Us
//                 </p>
//               </Link>
//               <Link href="/projects">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Projects
//                 </p>
//               </Link>
//               <Link href="/contact">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Contact
//                 </p>
//               </Link>
//               <Link href="/blog">
//                 <p className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-none text-lg font-medium">
//                   Blog
//                 </p>
//               </Link>
//               <div className="flex items-center gap-6">
//               <Button href="#"  className="hidden lg:block">Get a Quote</Button>

//             </div>
//             </div>
//                               </MobileNavLinks>

                    
//                           </div>
//                           <div className="mt-8 flex flex-col gap-4">
//                             <Button href="#" className="flex bg-sky-800 items-center hover:text-white">Get a Quote</Button>
//                           </div>
//                          </PopoverPanel>
//                       </>
//                     )}
//                   </AnimatePresence>
//                 </>
//               )}

//             </Popover>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBarr;
