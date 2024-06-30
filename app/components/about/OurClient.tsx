"use client"

import React, { useState, useEffect } from 'react';
import { fetchServiceData } from '@/sanity/lib/fetch'; // Adjust the import path as necessary
import { Service } from '../../../types'; // Adjust the import path as necessary
import { ToastContainer, toast } from 'react-toastify';
import clsx from 'clsx';
import Container from '../Container';
import FadeIn from '../FadeIn';

const OurClient: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]); // State to hold service data
  const [loading, setLoading] = useState(false);

    // Fetch services on component mount
    useEffect(() => {
      const loadServices = async () => {
        const serviceData = await fetchServiceData();
        setServices(serviceData);
      };
  
      loadServices();
    }, []);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
  
      const form = e.target as HTMLFormElement;
  
      const formData = {
        firstName: (form.elements.namedItem('first-name') as HTMLInputElement).value,
        lastName: (form.elements.namedItem('last-name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
        serviceId: (form.elements.namedItem('service') as HTMLSelectElement).value,
      };
  
      try {
        const response = await fetch('/api/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          toast.success('Form submitted successfully!');
        } else {
          toast.error('Failed to submit the form.');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <Container>
      <FadeIn>
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "bg-white p-8",
            "text-center",
            "sm:p-12 md:flex-row md:text-left"
          )}
        >
          <div
            className={clsx(
              "mb-8 md:mb-0",
              "md:flex md:flex-col md:justify-center md:mr-12 md:w-1/2"
            )}
          >
            <h1 className="text-4xl font-bold leading-tight text-sky-800 uppercase">
              How we work with our Clients.
            </h1>
            <p className="mt-4 text-gray-500 tracking-wider text-xl">
              Roofing is what we do best. Whether you’re in the market for a roof repair, waterproofing, guttering, roof painting or an entirely new roof installation, our skilled team has got you covered. We provide quality workmanship and satisfaction is guaranteed.
              <br />
              ROOFMAX is the one stop Centre of Excellence for all your roofing requirements. We work round the country - installing, repairing and maintaining hundreds of roofs at the most affordable prices in the industry.
              <br />
              We use high-quality materials and skilled workmanship to exceed your expectations. Our prices and quality are the best in the industry.
              <br />
              Whatever the size of the project, we treat every new roof with the same importance, delivering excellent new roof installation service to every task. We give your roof tender loving care!
              <br />
              Crowning Dream Homes Across Kenya: Welcome to Roofmax!!
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-col w-full md:w=[440px] bg-red-500 h-full py-8 px-8">
        <h2 className="text-2xl font-bold mb-4 text-white">We are Always Ready To Listen!</h2>
        <p className="mb-4 text-sky-800">Schedule Free  Quote</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="first-name" className="block text-sm font-semibold text-white">First Name</label>
              <input type="text" id="first-name" name="first-name" className="w-full p-2 bg-sky-800 text-white border-b border-white outline-none" />
            </div>
            <div className="flex-1">
              <label htmlFor="last-name" className="block text-sm font-semibold text-white">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="w-full p-2 bg-sky-800 text-white border-b border-white outline-none" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 bg-sky-800 text-white border-b border-white outline-none" />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-semibold text-white">Phone No</label>
              <input type="tel" id="phone" name="phone" className="w-full p-2 bg-sky-800 text-white border-b border-white outline-none" />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-white">Service</label>
            <select id="service" name="service" className="w-full p-2 bg-sky-800 text-white border-b border-white outline-none">
              {services.map(service => (
                <option key={service.identification.service_id} value={service.identification.service_id}>
                  {service.identification.service_name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-sky-800 text-white py-2 px-4 rounded mt-4" disabled={loading}>
            {loading ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
      </div>
           
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default OurClient;
