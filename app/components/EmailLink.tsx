import Link from "next/link";
import React from 'react';
import { MdEmail } from "react-icons/md";

// Define the props type for EmailLink
type EmailLinkProps = {
  email: string;
  subject?: string;
  body?: string;
};

const EmailLink: React.FC<EmailLinkProps> = ({ email, subject = '', body = '' }) => {
  // Construct the mailto link with proper URI encoding
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="flex text-white items-center justify-center font-light">
      <Link href={mailtoLink} passHref>
        <p className="flex px-2 text-white flex-inline underline-none hover:text-sky-800">
          <span className="flex items-center mr-2"><MdEmail className="text-center text-lg" /></span> {email}
        </p>
      </Link>
    </div>
  );
}

export default EmailLink;
