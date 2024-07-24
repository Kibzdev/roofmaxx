"use client";
import React, { useState, useEffect, FormEvent } from 'react';
import { fetchServiceData } from '@/sanity/lib/fetch'; // Adjust the import path as necessary
import { Service } from '../../../types'; // Adjust the import path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookF, FaInstagram, FaPlane, FaTwitter } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


interface ScheduleFormProps {
  className?: string;
}

const BookingDock:React.FC<ScheduleFormProps> = ({ className }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [serviceName, setServiceName] = useState('');

  useEffect(() => {
    const loadServices = async () => {
      try {
        const serviceData = await fetchServiceData();
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

    const formData = {
      name: name,
      email: email,
      phone: phone,
      town: location,
      serviceName: serviceName,
      message: message,
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Data', name, email, phone, location, serviceName, message);
  };

  return (
    <div className='h-16 md:h-24 flex justify-end items-center md:z-45 '>
      <div className='flex flex-col justify-center items-center '>
        <Sheet>
          <SheetTrigger asChild>
          <button className='flex gap-2 items-center justify-center md:px-8 px-2 md:mt-4 py-2 md:py-4 md:mr-8 text-sky-800 border-2 border-red-500/30 shadow-xl rounded-3xl group hover:bg-sky-800 hover:text-white'>
           <FaPlane className='text-sky-800 group-hover:text-red-500 mb-1 text-lg md:text-2xl rotate-[-45deg]' />
            <span className='w-full text-sm md:text-lg'>Diaspora Booking</span>
          </button>



          </SheetTrigger>
          <SheetContent className='bg-white w-full'>
            <SheetHeader>
              <SheetTitle className="text-xl text-center font-bold mb-4 text-red-500 md:text-white uppercase">Get a Free Quote</SheetTitle>
              <div className={`relative z-20 flex flex-col bg-gray-300 md:bg-red-500 p-6 md:rounded-lg shadow-md w-full md:max-w-md justify-center md:mt-24 ${className}`}>
      <ToastContainer />
      {/* <h2 className="text-xl text-center font-bold mb-4 text-red-500 md:text-white uppercase">Get a Free Quote</h2> */}
      <form className="space-y-4 flex flex-col items-center justify-center" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Country"
          className="md:w-full w-4/5 py-2 px-2 border border-red-300 shadow-lg rounded bg-sky-800 text-white focus:bg-sky-900 focus:border-red-500 focus:outline-none"
        />
        <select
          name="serviceName"
          onChange={(e) => setServiceName(e.target.value)}
          className="md:w-full w-4/5 py-4 px-2 border border-gray-300 rounded bg-sky-800 text-white focus:bg-sky-600 focus:border-sky-600 focus:outline-none"
        >
          <option>Choose Your Service</option>
          {services.map(service => (
            <option key={service.identification.service_id} value={service.identification.service_name}>
              {service.identification.service_name}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
    <p className="font-bold text-red-500">Follow Us on</p>
        <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-4">
          <a href="https://www.facebook.com/profile.php?id=61560885807834" className="text-red-500 hover:text-sky-800 text-2xl md:text-6xl"><FaFacebookF /></a>
          <a href="#" className="text-red-500 hover:text-sky-800 text-2xl md:text-6xl"><FaTwitter /></a>
          <a href="#" className="text-red-500 hover:text-sky-800 text-2xl md:text-6xl"><FaInstagram /></a>
        </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default BookingDock;
