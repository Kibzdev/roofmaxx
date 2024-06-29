import React from 'react';
import SocialIcons from './SocialIcons';
import EmailLink from './EmailLink';
import ContactLink from './ContactLink';

const TopBar: React.FC = () => {
  const email = 'info@roofmax.com';
  const subject = 'Customer Inquiry';
  const body = 'Hello, I would like more information about your services.';
  const phoneNumber = '+254713147147';

  return (
    <div className="fixed flex bg-red-500 justify-between items-center h-12 w-full z-50">
      <div className="flex items-center md:justify-center sm:justify-between gap-2 mx-auto md:w-1/2">
        <ContactLink phoneNumber={phoneNumber}/>
        <EmailLink email={email} subject={subject} body={body}/>
      </div>
      <div className="hidden md:block gap-2 text-sky-800 items-center justify-center w-1/2">
        <SocialIcons />
      </div>
    </div>
  );
}

export default TopBar;
