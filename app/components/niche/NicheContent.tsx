'use client';
import React from 'react';
import Image from 'next/image';
import Container from '@/app/components/Container';
import SectionIntro from '@/app/components/SectionIntro';
import { Niche } from '@/types';

interface NicheContentProps {
  niche: Niche;
  bannerUrl: string;
}

const NicheContent: React.FC<NicheContentProps> = ({ niche, bannerUrl }) => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <h1 className="text-3xl font-bold mb-4 ">{niche.niche_name}</h1>
        {bannerUrl && (
          <Image
            src={bannerUrl}
            alt={`${niche.niche_name} banner`}
            width={800}
            height={400}
            style={{ objectFit: 'cover' }}
            className="w-full rounded"
          />
        )}
      </div>
      <Container>
        <div className="flex flex-col items-center justify-center container mx-auto px-4 py-8 w-full">
          <SectionIntro subtitle="Solutions For you" title={niche.niche_name} />
          <div className="flex items-center justify-center w-full">
            <p className="mt-4 text-center tracking-wider">{niche.niche_desc}</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center uppercase text-sky-800 tracking-wide">Benefits</h2>
            <p>{niche.niche_benefits}</p>
          </div>
          {niche.faqs && (
            <div className="flex flex-col mt-8 justify-center max-w-3xl items-center w-full">
              <h2 className="text-2xl font-bold mb-4 text-center text-sky-900">FAQs</h2>
              {niche.faqs.map((faq) => (
                <div key={faq._key} className="mb-4">
                  <h3 className="font-semibold text-sky-800 text-xl">{faq.question}</h3>
                  <p className="font-medium tracking-widest text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NicheContent;
