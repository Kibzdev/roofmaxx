import React from 'react';
import clsx from 'clsx';
import Container from '../Container';

const GetStartedCTO: React.FC = () => {
  return (
    <Container>
      <div className={clsx("flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4", "md:p-8")}>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Ready to Get Started</h2>
        <p className="text-gray-600 mt-2">
          Nulla Lorem mollit cupidatat irure. nulla duis ullamco cillum dolor. 
          Voluptate exercitation incididunt aliquip.
        </p>
      </div>
      <form className={clsx("flex flex-col md:flex-row items-center mt-4 md:mt-0", "space-y-4 md:space-y-0 md:space-x-4")}>
        <input
          type="email"
          placeholder="Enter your email ..."
          className="form-input px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
    </Container>
    
  );
};

export default GetStartedCTO;
