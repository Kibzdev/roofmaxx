// components/ContactForm.tsx
"use client";
import React, { useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import Button from './Button';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import { fetchServiceData } from '@/sanity/lib/fetch';
import { Service } from '@/types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getServices = async () => {
      const fetchedServices = await fetchServiceData();
      setServices(fetchedServices);
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

  return (
    <>
      <ToastContainer />
      <FadeIn>
        <form onSubmit={handleSubmit}>
          <h2 className="font-display text-base font-semibold text-sky-900 uppercase">
            Work Inquiries
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput label="Name" name="name" autoComplete="name" />
            <TextInput label="Email" type="email" name="email" autoComplete="email" />
            <TextInput label="Company" name="company" autoComplete="organization" />
            <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
            <TextInput label="Message" name="message" />
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-lg font-medium text-sky-800">Service</legend>
              </fieldset>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {loading ? (
                  <p>Loading services...</p>
                ) : (
                  services.map((service) => (
                    <RadioInput
                      key={service.identification.service_id}
                      label={service.identification.service_name}
                      name="service"
                      value={service.identification.service_id}
                    />
                  ))
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
