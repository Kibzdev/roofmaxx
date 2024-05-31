// import React from 'react';
// import Image from "next/image";
// import { groq } from "next-sanity";
// import { client } from '@/sanity/lib/client';


// const query =  groq`
// *[_type == "service"] {
//   "serviceBannerUrl": service_banner.asset
// }
// ;
// `

// // Define the type for the props expected by the component
// interface ServiceBannerProps {
//   serviceId: string; // Adjust the type according to what serviceId is expected to be (string, number, etc.)
// }

// export default async function ServiceBanner (){
//   // const service = servicesBannerData.find(service => service.id === serviceId);
//   const serviceBanners = await  client.fetch(query)
//   console.log(serviceBanners)
//   return (
//     <div className="relative w-full h-64 sm:h-96 bg-gray-300">

//       <Image src={bgservice} alt="roofing" className="object-cover w-full h-full" width={1440} height={640} />
//     </div>
//   );
// };


