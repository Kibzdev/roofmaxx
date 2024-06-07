import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/sanityclient'; // Update the import paths according to your project structure

// Assuming Service has the following structure
interface Service {
  _id: string;
  service_banner: { asset: { _ref: string } } | undefined;  // Update based on your exact type definition
}

interface Props {
  services: Service[];
}

const ServiceContent = ({ services }: Props) => {
  return (
    <div>
      {services.map((service) => {
        const imageUrl = service.service_banner ? urlFor(service.service_banner).url() : null; // Use urlFor to handle image URLs

        return (
          <div key={service._id} className="relative w-full h-64 sm:h-96 bg-gray-300">
            {imageUrl ? (
              <Image src={imageUrl} alt="Service Image" className="object-cover w-full h-full" width={1440} height={640} />
            ) : (
              <div className="flex items-center justify-center w-full h-full">No image available</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ServiceContent;
