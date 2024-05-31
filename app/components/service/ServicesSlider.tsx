import { useState } from 'react';
import { SLIDER_IMAGES } from '@/constants';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Image from "next/image";

// Define an interface for each slide in the slider
interface Slide {
  _id: string; // Assuming _id is a unique identifier
  src: string; // Image source URL
  alt: string; // Alternative text for the image
}

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const length = SLIDER_IMAGES.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SLIDER_IMAGES) || length <= 0) {
    return null;
  }

  return (
    <div className={clsx('relative flex items-center justify-center')}>
      <ChevronLeftIcon 
        className={clsx('absolute left-0 z-10 h-10 w-10 text-white cursor-pointer rounded-full bg-black bg-opacity-50')}
        onClick={prevSlide}
      />
      {SLIDER_IMAGES.map((slide: Slide, index: number) => (
        <div
          key={slide._id}
          className={clsx(index === current ? 'opacity-100' : 'opacity-0', 'ease-in-out duration-300')}
          style={{ transition: 'opacity 0.5s ease' }}
        >
          {index === current && (
            <Image src={slide.src} alt={slide.alt}  width={240} height={240} className={clsx('w-full h-auto')} />
          )}
        </div>
      ))}
      <ChevronRightIcon 
        className={clsx('absolute right-0 z-10 h-10 w-10 text-white cursor-pointer rounded-full bg-black bg-opacity-50')}
        onClick={nextSlide}
      />
      <div className={clsx('absolute bottom-3 flex')}>
        {SLIDER_IMAGES.map((slide: Slide, index: number) => (
          <span
            key={slide._id}
            className={clsx('h-3 w-3 mx-1 rounded-full', index === current ? 'bg-white' : 'bg-gray-500')}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
