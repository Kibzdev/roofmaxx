import Link from "next/link";
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

// Define the type for the component's props
type ContactLinkProps = {
  phoneNumber: string;
};

const ContactLink: React.FC<ContactLinkProps> = ({ phoneNumber }) => {
  return (
    <div className="flex text-white text-sm items-center justify-center font-light no-underline">
      <Link href={`tel:${phoneNumber}`} passHref>
        <p className="flex px-2 text-white flex-inline underline-none hover:text-sky-800">
          <span className="mr-2"><FaPhoneAlt /></span>{phoneNumber}
        </p>
      </Link>
    </div>
  );
}

export default ContactLink;
