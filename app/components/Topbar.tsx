import React from 'react';
import SocialIcons from './SocialIcons';
import EmailLink from './EmailLink';
import ContactLink from './ContactLink';
import BookingButton from './diaspora/BookingButton';

const TopBar: React.FC = () => {
  const email = 'info@roofmax.co.ke';
  const subject = 'Customer Inquiry';
  const body = 'Hello, I would like more information about your services.';
  const phoneNumber = '+254713147147';

  return (
    <div className="fixed flex bg-red-500 justify-between items-center h-16 w-full z-50 ">
    <div className="flex items-center justify-center w-full  md:gap-2  md:w-1/2">
      <ContactLink phoneNumber={phoneNumber} />
      <EmailLink email={email} subject={subject} body={body} />
    </div>
    <div className="hidden md:flex gap-2 text-sky-800 items-center justify-center w-1/2">
      <SocialIcons />
    </div>
    <div className="hidden md:flex justify-center items-center  md:w-full md:justify-end ">
      <BookingButton />
    </div>
  </div>
  

  );
}

export default TopBar;
