"use client";
import React, { useState, useEffect } from 'react';
import { fetchServiceData } from '@/sanity/lib/fetch'; // Adjust the import path as necessary
import { Service } from '../../types'; // Adjust the import path as necessary

const ScheduleForm: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]); // State to hold service data
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch services on component mount
  useEffect(() => {
    const loadServices = async () => {
      try {
        const serviceData = await fetchServiceData();
        setServices(serviceData);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <div className="relative z-20 flex flex-col bg-gray-300 md:bg-red-500 md:ml-10 p-6 md:rounded-lg shadow-md w-full md:w-1/3 md:max-w-md justify-center md:mt-24">
      <h2 className="text-xl text-center font-bold mb-4 text-red-500 md:text-white uppercase">Schedule a Free Inspection</h2>
      <form className="space-y-4 flex flex-col items-center justify-center">
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
          {services.map(service => (
            <option key={service.identification.service_id} value={service.identification.service_id}>
              {service.identification.service_name}
            </option>
          ))}
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
  );
};

export default ScheduleForm;
