"use client";
import React from 'react';
import SectionIntro from '../SectionIntro';
import Link from 'next/link';
import Container from '../Container';
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from "@/components/ui/card";
import ServiceCarouselCard from './ServiceCarouselCard';
import { serviceCarouselCards } from '@/constants';

type ServiceCarouselCard = {
  _id: string;
  photo: string;  // URL for the expert's photo
};

const ServicesBlock = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <SectionIntro subtitle="Our Best" title="Our Top Services">
      </SectionIntro>

      <div className='flex md:flex-row w-full items-center justify-between flex-col-reverse'>
        <div className='flex md:w-1/2 w-full'>
          <Container className='mt-10'>
            <div className='grid grid-cols-1 gap-4'>
              <Link href="/services/roof-installation">
                <p className='font-bold text-lg md:text-3xl text-red-500 flex items-center'>
                  <span className='text-sky-800 mr-2'>→</span>New Roof Installation
                </p>
              </Link>
              <Link href="/services/roof-installation">
                <p className='font-bold text-lg md:text-3xl text-red-500 flex items-center'>
                  <span className=' text-sky-800 mr-2'>→</span>Roof Repairs
                </p>
              </Link>
              <Link href="/services/roof-installation">
                <p className='font-bold text-lg md:text-3xl text-red-500 flex items-center'>
                  <span className=' text-sky-800 mr-2'>→</span>Rain Gutter Installation
                </p>
              </Link>
              <Link href="/services/roof-installation">
                <p className='font-bold text-lg md:text-3xl text-red-500 flex items-center'>
                  <span className=' text-sky-800  mr-2'>→</span>Water Proofing
                </p>
              </Link>
              <Link href="/services/roof-installation">
                <p className='font-bold text-lg md:text-3xl text-red-500 flex items-center'>
                  <span className='text-sky-800 mr-2'>→</span>Gypsum Installation
                </p>
              </Link>
              <Link href="/services/roof-installation">
                <p className='font-bold text-lg md:text-3xl text-red-500 flex items-center'>
                  <span className='text-sky-800 mr-2'>→</span>SPC Flooring
                </p>
              </Link>
            </div>
          </Container>
        </div>

        <div className='flex w-full md:w-1/2 justify-center'>
          <Carousel setApi={setApi} className="flex max-w-6xl">
            <CarouselContent>
              {serviceCarouselCards.map((serviceCarouselCard: ServiceCarouselCard) => (
                <CarouselItem key={serviceCarouselCard._id} className="basis-full sm:basis-1/2  lg:basis-1/3">
                  <Card className="w-full">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ServiceCarouselCard {...serviceCarouselCard} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black border border-white p-2 rounded-full shadow-lg z-10 hover:bg-[#ef4444] hover:text-white" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ef4444] text-white border border-white p-2 rounded-full shadow-lg z-10 hover:bg-white hover:text-[#ef4444]" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
