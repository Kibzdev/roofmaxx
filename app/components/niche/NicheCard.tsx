import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Niche } from '@/types';

interface NicheCardProps {
  niche: Niche;
  serviceSlug: string;
}

const NicheCard: React.FC<NicheCardProps> = ({ niche, serviceSlug }) => {
  const bannerUrl = niche.niche_banner?.asset.url;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <Link href={`/services/${serviceSlug}/niches/${niche.slug.current}`}>
        {bannerUrl && (
          <Image
            src={bannerUrl}
            alt={`${niche.niche_name} banner`}
            width={400}
            height={200}
            style={{ objectFit: 'cover' }}
            className="w-full"
          />
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-sky-800 uppercase text-center">{niche.niche_name}</div>
          <p className="text-red-700  text-center font-medium hover:bg-red-500 hover:text-white hover:py-4">View Details</p>
        </div>
      </Link>
    </div>
  );
};

export default NicheCard;
