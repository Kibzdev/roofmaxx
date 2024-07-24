import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

// Define the type for the component's props
type ContactLinkProps = {
  phoneNumber: string;
};

const ContactLink: React.FC<ContactLinkProps> = ({ phoneNumber }) => {
  return (
    <div className="flex text-white text-sm items-center justify-center font-light no-underline">
      <a href={`tel:${phoneNumber}`} className="flex px-2 text-white flex-inline no-underline hover:text-sky-800">
        <span className="mr-2 text-sm md:text-lg"><FaPhoneAlt /></span>{phoneNumber}
      </a>
    </div>
  );
}

export default ContactLink;
