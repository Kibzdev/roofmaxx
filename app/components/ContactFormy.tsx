"use client";
import React, { FormEvent, useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import Button from './Button';
import TextInput from './TextInput';
import { fetchServiceData } from '@/sanity/lib/fetch';
import { Service } from '@/types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [serviceSelected, setServiceSelected] = useState<boolean>(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [serviceName, setServiceName] = useState('');

  useEffect(() => {
    const getServices = async () => {
      const fetchedServices = await fetchServiceData();
      const sortedServices = fetchedServices.sort((a, b) =>
        a.identification.service_name.localeCompare(b.identification.service_name)
      );
      setServices(sortedServices);
      setLoading(false);
    };
    getServices();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Replace with your form submission logic
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit form.");
    }
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setServiceName(value);
    setServiceSelected(value !== '');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Data', name, email, phone, location, serviceName, message);
  };

  return (
    <>
      <ToastContainer />
      <FadeIn>
        <form onSubmit={onSubmit}>
          <h2 className="font-display text-base font-semibold text-sky-900 uppercase">
            Work Inquiries
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput 
              label="Name" 
              value={name}  
              onChange={(e) => setName(e.target.value)}
              name="name"  
              autoComplete="name" 
            />
            <TextInput 
              label="Email" 
              type="email" 
              name="email"  
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              autoComplete="email" 
            />
            <TextInput 
              label="Phone" 
              type="tel" 
              name="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel" 
            />
            <TextInput 
              label="Message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
              name="message" 
            />
            <div className={`border ${serviceSelected ? 'border-sky-800' : 'border-neutral-300'} px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl`}>
              <div className="mt-0">
                {loading ? (
                  <p>Loading services...</p>
                ) : (
                  <select
                    name="serviceName"
                    value={serviceName}
                    onChange={handleServiceChange}
                    className="block w-full p-2 border border-none rounded-md text-sky-800 focus:ring-sky-600 focus:border-sky-600"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => (
                      <option key={service.identification.service_id} value={service.identification.service_name}>
                        {service.identification.service_name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
          <Button type="submit" className="mt-10 py-4 px-8 bg-sky-800 text-white">
            Submit
          </Button>
        </form>
      </FadeIn>
    </>
  );
};

export default ContactForm;
