import { herobg } from '@/public/assets';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative w-full sm:mt-9 h-screen bg-slate-5 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
      <div className="flex flex-col bg-slate-50 md:bg-red-500 p-6 ml-6 md:rounded-lg shadow-md w-full md:w-1/3 md:max-w-md justify-center">
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
            placeholder="Address"
            className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="City"
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
            className="w-full p-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
            rows={4}
          />
          <button
            type="submit"
            className=" w-2/5 md:bg-sky-800 bg-red-500 text-white  p-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="relative mt-40  md:mt-0  w-full md:w-2/3 h-96 md:h-full  flex justify-center items-center">
        <Image
          src={herobg}
          alt="Hero Image"
          objectFit="cover"
          className="md:rounded-lg"
          width={1200}
          height={640}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
