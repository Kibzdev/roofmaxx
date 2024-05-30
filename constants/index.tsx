import { bgservice, cert, certified, checkmark, cofferedceiling, commercial, contractor, drone, flatceiling, gent01, gent02, gent03, goal, kev, mary, nyki, paints, residential, roofing, security, servicebg, tech, tinceiling } from "../public/assets";
import { bbcLogo, cbsLogo, cnnLogo, fastCompanyLogo, forbesLogo,huffpostLogo, techcrunchLogo, wiredLogo} from "../public/assets/logos"

export const navData = [
  { _id: '101', title: "Home", href:"#home"},
  { _id: '102', title: "Services", href:"#services"},
  { _id: '103', title: "About", href:"#about"},
  { _id: '104', title: "Gallery", href:"#gallery"},
  { _id: '105', title: "Contact", href:"#contact"},
];
// constants/paths.js
export const quickLinks = [
  { id: 1, label: 'About Us', path: '/about' },
  { id: 2, label: 'Services', path: '/services' },
  { id: 3, label: 'Contact', path: '/contact' },
  { id: 4, label: 'Blog', path: '/blog' },
];
export const servicesLinks = [
  { id: 1, label: 'Roof Installation', path: '/services/roof-installation' },
  { id: 2, label: 'Roof Replacement', path: '/services/roof-replacement' },
  { id: 3, label: 'Roof Repair', path: '/services/roof-repair' },
  { id: 4, label: 'Roof Painting', path: '/services/roof-painting' },
  { id: 5, label: 'Gutter Replacement', path: '/services/gutter-replacement' },
];
export const services = [
  {
    _id: '3001',
    title: "Roof Cleaning",
    desc: "Revitalize your roof with our professional roof cleaning service, removing dirt, moss, and debris to extend its lifespan and restore its appearance."
  },
  {
    _id: '3002',
    title: "Roof Painting",
    desc: "Our roof painting service refreshes and protects your roof, adding a durable, weather-resistant coating that enhances its look and shields it from the elements."
  },
  {
    _id: '3003',
    title: "Gutter Replacement",
    desc: "Our gutter replacement service ensures proper drainage and protects your home from water damage, with durable gutters that are tailored to your home's design."
  },
  {
    _id: '3004',
    title: "Roof Leaks Repair",
    desc: "We offer comprehensive roof leaks repair to identify and fix any leaks, ensuring your roof stays watertight and your home remains safe and dry."
  },
  {
    _id: '3005',
    title: "Roof Replacement",
    desc: "Our roof replacement service offers a seamless transition from old to new, providing you with a durable, high-quality roof that enhances your home's safety and curb appeal."
  },
  {
    _id: '3006',
    title: "Roof Inspection",
    desc: "Our roof replacement service offers a seamless transition from old to new, providing you with a durable, high-quality roof that enhances your home's safety and curb appeal."
  },
];
export const usps = [
  { _id: 400,
    icon: contractor,
    title:"Expertise",
    brief:" With over [number] years of industry experience, Roofing Max boasts a team of highly skilled and trained professionals dedicated to delivering unparalleled expertise and craftsmanship in every project.",
    

  },
  { _id: 401,
    icon: tech,
    title:"Technology ",
    brief:"We leverage the latest in roofing technology, from drone inspections to energy-efficient materials, to provide cutting-edge solutions that are both durable and environmentally friendly",
  
  },
  { _id: 402,
    icon: cert,
    title:"Quality",
    brief:"- At Roofing Max, quality is non-negotiable. We source premium materials and adhere to stringent quality standards to ensure durability, longevity, and resilience in every roofing solution we deliver."

  },
  { _id: 403,
    icon: checkmark,
    title:"Satisfaction",
    brief:"At our roofing company, safety isn't just a priority—it's ingrained in every aspect of our operations. From the moment we begin planning a project to the final inspection, we're committed to providing a safe environment for our team members, clients, and communities."
  },
  { _id: 404,
    icon: goal,
    title:"Customer Centric",
    brief:"What sets Roofing Max apart is our relentless pursuit of perfection and our unwavering commitment to our customers' needs. Unlike our competitors, we don't just fix roofs; we protect homes and families with integrity, professionalism, and care."

  },
  { _id: 405,
    icon: security,
    title:"Safety",
    brief:"Our top priority is safety. With rigorous protocols, trained professionals, and state-of-the-art equipment, we ensure that every roofing solution is executed with the utmost care, protecting both our team and your property."

  },
 
]
export const teamMembers= [
  {
    _id: '600',
    photo:gent01,
    name: "Michael",
    expertise: "Leak Repair",
  
   },
   {
    _id: '601',
    photo:gent02,
    name: "Godwin",
    expertise: "Leak Repair",
  
   },
   {
    _id: '602',
    photo:gent03,
    name: "Brian",
    expertise: "Leak Repair",
  
   },
]
export const posts = [
  {
    id: 1,
    title: 'Drone Roof inspection',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....',
    author: 'Our Team',
    date: '24 April 2024',
    readTime: '5 mins read',
    views: '2k',
    image: drone
  },
  {
    id: 2,
    title: 'Choosing color for your Roof',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....',
    author: 'Our Team',
    date: '24 April 2024',
    readTime: '5 mins read',
    views: '2k',
    image: paints,
  },
];
