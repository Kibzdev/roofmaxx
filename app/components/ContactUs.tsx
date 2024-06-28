"use client";
import React, { useState, useEffect } from 'react';
import { fetchServiceData } from '@/sanity/lib/fetch'; // Adjust the import path as necessary
import { Service } from '../../types'; // Adjust the import path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from './Title';

const ContactUs: React.FC = () => {
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
    <div className="flex flex-col items-center md:flex-row md:justify-between text-white p-8 rounded-none w-full mx-auto space-y-8 md:space-y-0 md:space-x-8 mt-2">
      <ToastContainer />
      <div className="flex w-full md:w-3/5 bg-sky-800 flex-col h-full py-8 px-8">
        <h2 className="text-2xl font-bold mb-4">We are Always Ready To Listen!</h2>
        <p className="mb-4">Tell us about yourself and we will contact you soon</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="first-name" className="block text-sm">First Name</label>
              <input type="text" id="first-name" name="first-name" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
            <div className="flex-1">
              <label htmlFor="last-name" className="block text-sm">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm">Phone No</label>
              <input type="tel" id="phone" name="phone" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm">Service</label>
            <select id="service" name="service" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none">
              {services.map(service => (
                <option key={service.identification.service_id} value={service.identification.service_id}>
                  {service.identification.service_name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded mt-4" disabled={loading}>
            {loading ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
      </div>
      <div className="flex w-2/5 flex-col text-left md:text-center bg-white items-center justify-center px-5 text-sky-800 h-full">
        <h3 className="text-xl font-bold text-red-500 mb-4">CONTACT INFORMATION</h3>
        <p className="mb-4">Embakasi, Next to Coca-cola Bottles Factory</p>
        <p className="mb-4">
          <span className="font-bold text-red-500">Email Us:</span> <br />
          info@Roofingmax.com <br />
          sales@Roofingmax.com
        </p>
        <p className="mb-4">
          <span className="font-bold">Call Us:</span> <br />
          0702 667 667 <br />
          0701 667 667 <br />
          0703 667 667
        </p>
        <p className="font-bold">Follow Us on</p>
        <div className="flex justify-center md:justify-end space-x-4 mt-2">
          <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
