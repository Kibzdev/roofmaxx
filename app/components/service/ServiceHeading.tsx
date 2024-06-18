import React, { useEffect } from 'react';

const ServicesHeading: React.FC = () => {
  useEffect(() => {
    const heading = document.getElementById('animated-heading');
    if (heading) {
      const text = heading.innerText;
      heading.innerHTML = '';
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.style.animationDelay = `${index * 0.1}s`;
        if (char === ' ') {
          span.innerHTML = '&nbsp;'; // Handle space
        } else {
          span.innerText = char;
        }
        heading.appendChild(span);
      });
    }
  }, []);

  return (
    <div className='flex w-full items-center justify-center py-8'>
      <h1 id="animated-heading" className='text-sky-800 md:text-4xl border-l-8 border-l-red-500 font-bold text-center px-6 uppercase'>
        Our Range Of Services
      </h1>
    </div>
  );
};

export default ServicesHeading;
