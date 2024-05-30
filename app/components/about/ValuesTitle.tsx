import React from 'react';
import Container from '../Container';

const ValuesTitle: React.FC = () => {
  return (
    <Container>
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col justify-between items-center py-6">
        <div className="flex items-center text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-sky-800">Our Core Values</h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-base text-gray-500 italic">
            when you need us to improve your business, then come with us to help your then come have reach it, you just sit and feel that goal
          </p>
        </div>
      </div>
    </div>
    </Container>
    
  );
}

export default ValuesTitle;
