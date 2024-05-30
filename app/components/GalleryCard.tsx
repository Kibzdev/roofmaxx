// components/GalleryCard.tsx
import Image from "next/image";
import React from 'react';

// Define the type for the props
type GalleryCardProps = {
    img: string; // URL for the image
    title: string; // Title of the gallery card
    brief: string; // Description or brief of the gallery card
};

const GalleryCard: React.FC<GalleryCardProps> = ({ img, title, brief }) => {
  return (
    <div className="relative w-full h-[340px] p-4 border rounded-lg overflow-hidden">
      <Image src={img} alt={brief} layout="fill" objectFit="cover" />
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-white">{brief}</p>
    </div>
  );
}

export default GalleryCard;
