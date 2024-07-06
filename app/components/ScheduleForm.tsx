"use client";
import React, { useState, useEffect } from 'react';
import { fetchServiceData } from '@/sanity/lib/fetch'; // Adjust the import path as necessary
import { Service } from '../../types'; // Adjust the import path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ScheduleFormProps {
  className?: string;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({ className }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const serviceData = await fetchServiceData();
        serviceData.sort((a, b) => a.identification.service_name.localeCompare(b.identification.service_name)); // Sort services by name
        setServices(serviceData);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    loadServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      town: (form.elements.namedItem('town') as HTMLInputElement).value,
      serviceId: (form.elements.namedItem('serviceId') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
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
    <div className={`relative z-20 flex flex-col bg-gray-300 md:bg-red-500 p-6 md:rounded-lg shadow-md w-full md:w-1/3 md:max-w-md justify-center md:mt-24 ${className}`}>
      <ToastContainer />
      <h2 className="text-xl text-center font-bold mb-4 text-red-500 md:text-white uppercase">Schedule a Free Inspection</h2>
      <form className="space-y-4 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <input
          type="text"
          name="town"
          placeholder="Town"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <select
          name="serviceId"
          className="md:w-full w-4/5 py-4 px-2 border border-gray-300 rounded bg-sky-800 text-white focus:bg-sky-600 focus:border-sky-600 focus:outline-none"
        >
          <option>Choose Your Service</option>
          {services.map(service => (
            <option key={service.identification.service_id} value={service.identification.service_id}>
              {service.identification.service_name}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder="Message"
          className="md:w-full w-4/5 p-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
          rows={4}
        />
        <button
          type="submit"
          className="w-2/5 bg-red-500 md:bg-sky-800 text-white p-2 rounded mt-4"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
