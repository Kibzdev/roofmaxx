import React from 'react';
import SocialIcons from './SocialIcons';
import EmailLink from './EmailLink';
import ContactLink from './ContactLink';
import BookingDock from './diaspora/BookingDock';

const TopBar: React.FC = () => {
  const email = 'info@roofmax.co.ke';
  const subject = 'Customer Inquiry';
  const body = 'Hello, I would like more information about your services.';
  const phoneNumber = '+254713147147';

  return (
    <div className="fixed flex bg-red-500 justify-between items-center h-16 w-full z-50 md:px-4">
      <div className="flex items-center justify-center gap-2  mx-auto w-full md:w-1/2">
        <ContactLink phoneNumber={phoneNumber}/>
        <EmailLink email={email} subject={subject} body={body}/>
      </div>
      <div className="hidden md:flex gap-2 text-sky-800 items-center justify-center w-1/2">
        <SocialIcons />
      </div>
      <div className='flex-end  md:justify-end items-end w-full  relative bg-amber-300'>
        <BookingDock/>
      </div>
    </div>
  );
}

export default TopBar;
