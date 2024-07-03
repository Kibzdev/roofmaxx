import React from 'react';
import clsx from 'clsx';
import Container from '../Container';

const GetStartedCTO: React.FC = () => {
  return (
    <Container>
      <div className={clsx("flex flex-col md:flex-row items-center justify-between bg-red-500 text-white p-4", "md:p-8")}>
        <div>
          <h2 className="text-2xl font-semibold">Ready to Get Started</h2>
          <p className="mt-2 text-sm md:text-lg font-medium tracking-wider">
            By entering your email, you’ll gain access to the latest innovations, expert advice,
          </p>
        </div>
        <form className={clsx("flex flex-col md:flex-row items-center mt-4 md:mt-0", "space-y-4 md:space-y-0 md:space-x-4")}>
          <input
            type="email"
            placeholder="Enter your email ..."
            className="form-input px-4 py-2 border border-gray-300 rounded-md text-sky-800 focus:outline-none focus:border-sky-800 hover:border-sky-700 focus:ring focus:ring-sky-900"
          />
          <button
            type="submit"
            className="bg-sky-900 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </Container>
  );
};

export default GetStartedCTO;
