// components/GalleryCard.tsx
import Image from "next/image";
import React from 'react';

// Define the type for the props
type GalleryCardProps = {
    img: string; // URL for the image
    title: string; // Title of the gallery card
    
};

const GalleryCard: React.FC<GalleryCardProps> = ({ img, title, }) => {
  return (
    <div className="relative w-full h-[340px] p-4 border rounded-lg overflow-hidden">
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
      <h3 className="text-white text-lg font-bold">{title}</h3>
    
    </div>
  );
}

export default GalleryCard;
