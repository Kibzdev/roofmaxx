// components/ContactUs.tsx
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-white p-8 rounded-none w-full mx-auto space-y-8 md:space-y-0 md:space-x-8 mt-2">
      <div className="flex-1 bg-sky-800 w-full h-full py-8 px-8">
        <h2 className="text-2xl font-bold mb-4">We are Always Ready To Listen!</h2>
        <p className="mb-4">Tell us about yourself and we will contact you soon</p>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="first-name" className="block text-sm">First Name</label>
              <input type="text" id="first-name" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
            <div className="flex-1">
              <label htmlFor="last-name" className="block text-sm">Last Name</label>
              <input type="text" id="last-name" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm">Email</label>
              <input type="email" id="email" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm">Phone No</label>
              <input type="tel" id="phone" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none" />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm">Service</label>
            <select id="service" className="w-full p-2 bg-red-500 text-white border-b border-white outline-none">
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
          </div>
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded mt-4">SUBMIT</button>
        </form>
      </div>
      <div className="flex-1 text-left md:text-center bg-white items-center justify-center px-5 text-sky-800 w-full h-full">
        <h3 className="text-xl font-bold mb-4">CONTACT INFORMATION</h3>
        <p className="mb-4">Embakasi, Next to Coca-cola Bottles Factory</p>
        <p className="mb-4">
          <span className="font-bold">Email Us:</span> <br />
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
