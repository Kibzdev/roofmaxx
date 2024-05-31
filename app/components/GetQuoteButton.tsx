import React from 'react';
import clsx from 'clsx';

// Define the component using TypeScript with React.FC
const GetQuoteButton: React.FC = () => {
  return (
    <div className={clsx('fixed top-62 right-0 w-full md:w-auto', 'z-50')}>
      <button 
        className={clsx(
          'bg-[#075985] text-white p-3 w-full md:w-auto',
          'rounded-l-full hover:bg-sky-500 transition-colors',
          'text-lg font-medium sm:p-2 sm:w-1/5'
        )}
      >
        Get a Quote
      </button>
    </div>
  );
};

export default GetQuoteButton;
