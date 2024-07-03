import Image from "next/image";
import { herobg } from '@/public/assets';

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative mt-28 md:mt-36">
      <Image
        src={herobg}
        alt="banner image"
        className="w-full max-h-screen object-contain"
        width={1200}
        height={400}
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-7xl lg:text-[150px] font-bold">Roofmax</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
           Your Roofing , Partner
        </p>
      </div>
    </div>
  );
};

export default Hero;