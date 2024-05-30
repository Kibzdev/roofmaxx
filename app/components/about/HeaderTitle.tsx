import React from 'react';
import Container from '../Container';

const HeaderTitle: React.FC = () => {
  return (
    <Container>
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col justify-between items-center py-6">
        <div className="flex items-center text-center">
          <h1 className="text-4xl font-bold leading-tight text-sky-800 uppercase">Our Company</h1>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-base tracking-wide text-gray-500 italic">
            when you need us to improve your business, then come with us to help your then come have reach it, you just sit and feel that goal
          </p>
        </div>
      </div>
    </div>
    </Container>
    
  );
}

export default HeaderTitle;
