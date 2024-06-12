import Image from 'next/image';
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

// Define the type for the props
type ServiceCarouselCardProps = {
  photo: string;     // URL for the photo
  
};

const ServiceCarouselCard: React.FC<ServiceCarouselCardProps> = ({ photo }) => {
  return (
    <Card className="border-b-4 border-b-[#ef4444] bg-[#075985] shadow-b-md shadow-[#ef4444] lg:w-80 md:w-96 w-full">
      <CardHeader className="relative w-full h-64 sm:h-80 flex justify-center items-center bg-gray-200 overflow-hidden rounded-sm shadow-lg shadow-black">
        <Image
          src={photo}
          alt={photo} // Update alt to reflect the name or a more descriptive text
          fill
          sizes="100vw"
          className="rounded-sm object-cover hover:grayscale-0 transition duration-300 ease-in-out"
        />
      </CardHeader>
    </Card>
  );
}

export default ServiceCarouselCard;
