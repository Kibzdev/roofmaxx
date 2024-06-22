import React from 'react';
import clsx from 'clsx';
import Container from '../Container';
import FadeIn from '../FadeIn';

const OurClient: React.FC = () => {
  return (
    <Container>
      <FadeIn>
      <div className={clsx(
      "flex flex-col justify-center items-center",
      "bg-white p-8",
      "text-center",
      "sm:p-12 md:flex-row md:text-left"
    )}>
      <div className={clsx(
        "mb-8 md:mb-0",
        "md:flex md:flex-col md:justify-center md:mr-12 md:w-2/3"
      )}>
        <h1 className="text-4xl font-bold leading-tight text-sky-800 uppercase">How we work with our Clients.</h1>
        <p className="mt-4 text-gray-500 tracking-wider text-xl">
          Roofing is what we do best. Whether you’re in the market for a roof repair, waterproofing, guttering, roof painting or an entirely new roof installation, our skilled team has got you covered. We provide quality workmanship and satisfaction is guaranteed.
 
          ROOFMAX is the one stop Centre of Excellence for all your roofing requirements. We work round the country - installing, repairing and maintaining hundreds of roofs at the most affordable prices in the industry. 

          We use high-quality materials and skilled workmanship to exceed your expectations. Our prices and quality are the best in the industry. 

          Whatever the size of the project, we treat every new roof with the same importance, delivering excellent new roof installation service to every task. We give your roof tender loving care!

          Crowning Dream Homes Across Kenya: Welcome to Roofmax!!
        </p>
        
      </div>
      <div className="relative z-20 flex flex-col bg-gray-300 md:bg-red-500 md:ml-10 p-6 md:rounded-lg shadow-md w-full md:w-1/3 md:max-w-md justify-center md:mt-24">
        <h2 className="text-xl text-center font-bold mb-4 text-red-500 md:text-white uppercase">Schedule a Free Inspection</h2>
        <form className="space-y-4 flex flex-col items-center justify-center w-full">
          <input
            type="text"
            placeholder="Name"
            className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
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
          </select>
          <textarea
            placeholder="Message"
            className="md:w-full w-4/5 p-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
            rows={4}
          />
          <button
            type="submit"
            className="w-2/5 bg-red-500 md:bg-sky-800 text-white p-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
      </FadeIn>
       
    </Container>
   
  );
};

export default OurClient;
