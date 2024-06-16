import Image from 'next/image';
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Niche } from '@/types';

interface NicheCardProps {
  niches: Niche[];
}

const NicheCard: React.FC<NicheCardProps> = ({ niches }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
      {niches.map((niche) => (
        <Link key={niche.slug.current} href={`/niche/${niche.slug.current}`}>
          <Card className="border-b-4 border-b-[#ef4444] bg-[#075985] shadow-b-md shadow-[#ef4444] lg:w-80 md:w-80">
            <CardHeader className="relative w-full h-64 sm:h-80 flex justify-center items-center bg-gray-200 overflow-hidden rounded-sm shadow-lg shadow-black">
              {niche.niche_banner && niche.niche_banner.asset && (
                <Image
                  src={niche.niche_banner.asset.url}
                  alt={niche.niche_name}
                  layout="fill"
                  sizes="100vw"
                  className="rounded-sm object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                />
              )}
            </CardHeader>
            <CardContent className="text-center p-4">
              <h2 className="text-white text-lg font-bold mt-2 uppercase">{niche.niche_name}</h2>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default NicheCard;
