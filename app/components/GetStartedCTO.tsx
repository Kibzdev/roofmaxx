import React from 'react';
import clsx from 'clsx';

const GetStartedCTO: React.FC = () => {
  return (
    <div className={clsx("w-full flex flex-col md:flex-row items-center md:justify-center bg-red-500 text-white p-4", "md:p-8")}>
      <div className="flex  flex-col w-full md:w-auto md:text-left ">
        <h2 className="text-lg md:text-2xl text-center md:text-center font-bold uppercase text-white">Ready to Get Started</h2>
        <p className="mt-2 text-sm md:text-md font-medium tracking-wide text-center md:text-center">
          By entering your email, you’ll gain access to the latest innovations, expert advice,
        </p>
      </div>
      <form className={clsx("flex flex-col md:flex-row items-center mt-4 md:mt-0 w-full md:justify-center", "space-y-4 md:space-y-0 md:space-x-4")}>
        <input
          type="email"
          placeholder="Enter your email ..."
          className="form-input px-4 py-2 border w-2/3  border-gray-300 rounded-md text-sky-800 focus:outline-none focus:border-sky-800 hover:border-sky-700 focus:ring focus:ring-sky-900 md:w-auto"
        />
        <button
          type="submit"
          className="bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-md transition-colors w-1/2 md:w-auto"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default GetStartedCTO;
