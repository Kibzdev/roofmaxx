import { cert, certified, checkmark, cofferedceiling, commercial, contractor, drone, festus, flatceiling, gent01, gent02, gent03, goal, gutter, kev, mambo, mary, nyki, osoro, paints, residential, roofing, roofrepair, security, servicebg,spcfloor, tech, tinceiling } from "../public/assets";
export const navData = [
  { _id: '101', title: "Home", href:"#home"},
  { _id: '102', title: "Services", href:"#services"},
  { _id: '103', title: "About", href:"#about"},
  { _id: '104', title: "Gallery", href:"#gallery"},
  { _id: '105', title: "Contact", href:"#contact"},
];
// constants/paths.js
export const quickLinks = [
  { id: '1', label: 'Privacy Policy', path: '/privacy' },
  { id: '2', label: 'Terms & Conditions', path: '/terms' },
  { id: '4', label: 'Contact', path: '/contact' },
];
export const servicesLinks = [
  { id: '1', label: 'Roof Installation', path: '/services/roof-installation' },
  { id: '2', label: 'Roof Replacement', path: '/services/roof-replacement' },
  { id: '3', label: 'Roof Repair', path: '/services/roof-repair' },
  { id: '4', label: 'Roof Painting', path: '/services/roof-painting' },
  { id: '5', label: 'Gutter Replacement', path: '/services/gutter-replacement' },
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
  { _id: '400',
    icon: contractor,
    title:"Expertise",
    brief:" With over [number] years of industry experience, Roofing Max boasts a team of highly skilled and trained professionals dedicated to delivering unparalleled expertise and craftsmanship in every project.",
    

  },
  { _id: '401',
    icon: tech,
    title:"Technology ",
    brief:"We leverage the latest in roofing technology, from drone inspections to energy-efficient materials, to provide cutting-edge solutions that are both durable and environmentally friendly",
  
  },
  { _id: '402',
    icon: cert,
    title:"Quality",
    brief:"- At Roofing Max, quality is non-negotiable. We source premium materials and adhere to stringent quality standards to ensure durability, longevity, and resilience in every roofing solution we deliver."

  },
  { _id: '403',
    icon: checkmark,
    title:"Satisfaction",
    brief:"At our roofing company, safety isn't just a priority—it's ingrained in every aspect of our operations. From the moment we begin planning a project to the final inspection, we're committed to providing a safe environment for our team members, clients, and communities."
  },
  { _id: '404',
    icon: goal,
    title:"Customer Centric",
    brief:"What sets Roofing Max apart is our relentless pursuit of perfection and our unwavering commitment to our customers' needs. Unlike our competitors, we don't just fix roofs; we protect homes and families with integrity, professionalism, and care."

  },
  { _id: '405',
    icon: security,
    title:"Safety",
    brief:"Our top priority is safety. With rigorous protocols, trained professionals, and state-of-the-art equipment, we ensure that every roofing solution is executed with the utmost care, protecting both our team and your property."

  },
 
]
export const teamMembers= [
  {
    _id: '600',
    photo:festus,
    name: "Festus",
    expertise: "Leak Repair",
  
   },
   {
    _id: '601',
    photo:osoro,
    name: "Osoro",
    expertise: "Leak Repair",
  
   },
   {
    _id: '602',
    photo:mambo,
    name: "Mambo",
    expertise: "Leak Repair",
  
   },
]
export const posts = [
  {
    id: '1',
    title: 'Drone Roof inspection',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....',
    author: 'Our Team',
    date: '24 April 2024',
    readTime: '5 mins read',
    views: '2k',
    image: drone
  },
  {
    id: '2',
    title: 'Choosing color for your Roof',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....',
    author: 'Our Team',
    date: '24 April 2024',
    readTime: '5 mins read',
    views: '2k',
    image: paints,
  },
];
export const BREADCRUMB_DATA = [
  { _id: 'customizations', label: 'Customizations', path: '/customizations' },
  { _id: 'lightingIntegration', label: 'Lighting Integration', path: '/lighting-integration' },
  { _id: 'pricing', label: 'Pricing', path: '/pricing' },
  { _id: 'projects', label: 'Projects', path: '/projects' },
  { _id: 'process', label: 'Process', path: '/process' }
];
export const SERVICE_DESC_DATA = {
  _id: 'serviceDesc',
  content: `ROOFMAX offer the best ceiling installations in Kenya with outstanding service, professional finish and business integrity. We guarantee ceiling installations that are both professional and aesthetically pleasing. No job is too big or small, and ROOFMAX transforms both first time small homes into havens, and brought additional layers of excellence to large luxury homes as well. We specialize in creating ceilings that not only elevate the aesthetics of a space but also enhance its functionality, making your interiors truly exceptional. We offer superior products, quality installations and service that is unmatched.`,
  sidePanel: [
    { _id: 'drywall', label: 'Drywall Ceiling' },
    { _id: 'suspended', label: 'Suspended (Drop) Ceiling' },
    { _id: 'tile', label: 'Ceiling Tile' },
    { _id: 'coffered', label: 'Coffered Ceiling' },
    { _id: 'acoustic', label: 'Acoustic Ceiling' },
    { _id: 'woodPanel', label: 'Wood Panel Ceiling' },
    { _id: 'tin', label: 'Tin Ceiling' }
  ]
};
export const SERVICE_BENEFITS = [
  { _id: '2000', title: 'High Quality Materials', description: 'Only the best materials are used for durability and aesthetics.' },
  { _id: '2001', title: 'Expert Installation', description: 'Professional installation by certified technicians.' },
  { _id: '2002', title: 'Custom Designs', description: 'Customize designs to meet unique tastes and requirements.' },
  { _id: '2003', title: 'Energy Efficient', description: 'Ceilings that help reduce energy costs by improving insulation.' },
  { _id: '2004', title: 'Long-Lasting Warranty', description: 'Each installation comes with a comprehensive warranty for peace of mind.' }
];
export const SLIDER_IMAGES = [
  { _id: 1, src: flatceiling, alt: 'Coved Ceiling' },
  { _id: 2, src:cofferedceiling, alt: 'Coffered Ceiling' },
  { _id: 3, src: tinceiling, alt: 'Wood Panel Ceiling' }
];
export const faqs = [
  { _id: '3000', question: "What types of ceilings can you install?", answer: "We install a variety of ceiling types including drywall, suspended, coffered, and more." },
  { _id: '3001', question: "How long does a ceiling installation take?", answer: "Installation time varies based on ceiling type and room size, but typically ranges from a few days to a week." },
  { _id: '3002', question: "Do you offer customized ceiling designs?", answer: "Yes, we provide custom designs to match your specific aesthetic and functional needs." },
  { _id: '3003', question: "Is my presence required during installation?", answer: "It is not necessary for you to be present, but we recommend checking in periodically." },
  { _id: '3004', question: "What is the cost of ceiling installation?", answer: "Costs vary depending on the ceiling type and size of the area. Contact us for a detailed quote." },
  { _id: '3005', question: "Are your workers licensed and insured?", answer: "Yes, all our technicians are fully licensed and insured for your peace of mind." },
  { _id: '3006', question: "How do I maintain my new ceiling?", answer: "We will provide you with maintenance tips specific to the type of ceiling installed." },
  { _id: '3007', question: "Do you remove old ceiling material?", answer: "Yes, we can handle the removal and disposal of old ceiling material." },
  { _id: '3008', question: "What warranty do you offer on installations?", answer: "We offer a comprehensive warranty that covers materials and labor." },
  { _id: '3009', question: "How do I schedule a consultation?", answer: "You can schedule a consultation by contacting us via phone, email, or our website." }
  // Additional FAQs can be added here
];
export const SERVICE_INTRO = {
  callToAction: {
    text: "Call us Today!",
    phone: "800-756-0809",
    subText: "and get a FREE MORTGAGE Quote",
  },
  services: [
    {
      _id: 'service1',
      title: 'Residential',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
      image: residential
    },
    {
      _id: 'service2',
      title: 'Commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
      image: commercial
    },
  ],
};
export const servicesData = [
  {
    _id: '1000',
    title: "ROOF REPAIR",
    services: [
      "Leak Repairs",
      "Shingle Replacement",
      "Flashing Repair",
      "Gutter Cleaning and Repair",
      "Roof Ventilation Repair",
      "Roof Inspection",
      "Flat Roof Repair"
    ]
  },
  {
    _id: '1001',
    title: "Ceiling Installation",
    services:[
      "Drywall Ceiling Installation",
      "Suspended (Drop) Ceiling Installation",
      "Ceiling Tile Installation",
      "Coffered Ceiling Installation",
      "Acoustic Ceiling Installation",
      "Wood Panel Ceiling Installation",
      "Tin Ceiling Installation"
    ]
  },
  {
    _id: '1002',
    title: "Solar Cleaning",
    services:[
      "Residential Solar Panel Cleaning",
      "Commercial Solar Panel Cleaning",
      "Industrial Solar Panel Cleaning",
      "Bird Proofing and Pest Control",
      "Debris Removal",
      "Waterless Cleaning Options",
      "Solar Panel Recoating"
    ]
  },
  {
    _id: '1003',
    title: "ROOFTOP WATERPROOFING",
    services: [
      "Waterproof Membrane Installation",
      "Roof Coating",
      "Roof Sealing",
      "Roof Caulking",
      "Drainage Solutions",
      "Thermal Insulation",
      "Waterproofing Accessories"
    ]
  },
  {
    _id: '1004',
    title: "Roof Inspection",
    services: [
      "Drone Roof Inspection",
      "Structural Inspection",
      "Leak Detection",
      "Flashing and Sealant Inspection",
      "Gutter and Downspout Inspection",
      "Attic Inspection",
      "Thermal Imaging Inspection"
    ]
  },
  {
    _id: '1005',
    title: "Roof Cleaning",
    services: [
      "Soft Washing",
      "Pressure Washing",
      "Chemical Roof Cleaning",
      "Eco-Friendly Cleaning Solutions",
      "Roof Coating and Sealing",
      "Gutter Cleaning",
      "Roof Stain Removal"
    ]
  }
];
export const projectGallerys = [
  {
   _id: '500',
   img:nyki,
   location: "Nanyuki",
   service: "ROOF REPLACEMENT",
   imgNo:1
  },
  {
   _id: '501',
   img:nyki,
   location: "Kitale",
   service: "ROOF CLEANING",
   imgNo:2
  },
  {
   _id: '502',
   img:nyki,
   location: "Thika",
   service: "ROOF INSPECTION",
   imgNo:3
  },
  {
   _id: '503',
   img:nyki,
   location: "Kisumu",
   service: "ROOF PAINTING",
   imgNo:5,
  },
  {
   _id: '505',
   img:nyki,
   location: "Nyeri",
   service: "Leak Repair",
   imgNo:6
  },
  {
   _id: '504',
   img:nyki,
   location: "Ngong",
   service: "Gutter Installation",
   imgNo:7,
  },
  {
   _id: '505',
   img:nyki,
   location: "Nyeri",
   service: "Leak Repair",
   imgNo: 8,
  },
  {
   _id: '505',
   img:nyki,
   location: "Nyeri",
   service: "Leak Repair",
   imgNo:9,
  },
  
]

export const serviceCarouselCards = [
  {
    _id: '600',
    photo:roofrepair,
   },
   {
    _id: '601',
    photo:spcfloor,
   },
   {
    _id: '603',
    photo:gutter,
   },
]