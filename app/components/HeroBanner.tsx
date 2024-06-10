import { herobg } from '@/public/assets';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative w-full mt-56 bg-  sm:mt-9 h-screen bg-slate-5 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
      <div className="flex flex-col bg-#C1CCCF md:bg-red-500 md:ml-10  p-6 md:rounded-lg shadow-md w-full md:w-1/3 md:max-w-md  justify-center md:mt-24">
        <h2 className="text-xl text-center font-bold mb-4 text-red-500 md:text-white uppercase">Schedule a Free Inspection</h2>
        <form className="space-y-4 flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Name"
            className="md:w-full w-4/5 py-2 px-2 border  border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
           className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Town"
            className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
          />
          <select className="md:w-full w-4/5 py-4 px-2 border border-gray-300 rounded bg-sky-800 text-white focus:bg-sky-600 focus:border-sky-600 focus:outline-none">
            <option>Choose Your Service</option>
            <option>Ceiling Installation</option>
            <option>Roof Installation</option>
            <option>Roof Repair</option>
            <option>Roof Painting</option>
            <option>Roof Cleaning</option>
            <option>Solar Cleaning</option>
            {/* Add more options as needed */}
          </select>
          <textarea
            placeholder="Message"
            className="md:w-full w-4/5 p-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
            rows={4}
          />
          <button
            type="submit"
            className="w-2/5 bg-red-500 md:bg-sky-800 text-white  p-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="relative mt-0 md:mt-0 w-full md:w-2/3  flex justify-center h-full">
        <Image
          src={herobg}
          alt="Hero Image"
          objectFit="cover"
          className="md:rounded-none"
          width={1200}
          height={640}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
