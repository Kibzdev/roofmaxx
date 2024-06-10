// components/TestimonialCard.tsx
import Image from 'next/image';
import { mary } from "../../public/assets";

const TestimonialCard: React.FC = () => {
  return (
    <div className="relative bg-sky-800 text-white p-8 rounded-lg md:max-w-4xl mx-auto w-full">
      <div className="absolute  left-24 top-16 md:top-0 md:left-0 w-32 h-32 bg-sky-600 clip-path-diagonal transform -translate-y-16 -translate-x-16"></div>
      <div className="relative flex items-center space-x-6">
        <div className="flex-shrink-0">
          <Image
            src={mary}
            alt="Michael Kizongo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className='flex flex-col items-center ml-4'>
          <svg
            className="w-8 h-8 text-white mb-4 "
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 10c1.66 0 2.99-1.34 2.99-3S6.66 4 5 4 2 5.34 2 7s1.34 3 3 3zm1-7h2V0H6c-1.66 0-3 1.34-3 3v2h3V3zm12 7c1.66 0 2.99-1.34 2.99-3S19.66 4 18 4s-3 1.34-3 3 1.34 3 3 3zm1-7h2V0h-3c-1.66 0-3 1.34-3 3v2h3V3z" />
          </svg>
          <p className="font-light  text-sm  mdtext-lg text-center">
            The installation itself was seamless. The crew arrived on time,
            worked diligently, and made sure to clean up thoroughly at the end
            of each day. What I appreciated most was their attention to detail;
            they didnt cut any corners, and the craftsmanship is evident in
            the finished product. My new roof not only looks fantastic, but I
            also feel confident in its durability and weather resistance.
          </p>
          <div className="mt-4">
            <span className="block text-xl font-semibold">Michelle Kizongo</span>
            <span className="block text-base text-blue-300">Customer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
