// components/CoreValues.tsx

import React from 'react';
import Image from 'next/image';

const CoreValues: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 relative">
            <Image src="/icons/integrity.png" alt="Integrity Icon" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Integrity</h3>
          <p className="text-gray-600">We uphold the highest standards of integrity in all our actions.</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 relative">
            <Image src="/icons/innovation.png" alt="Innovation Icon" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">We constantly strive for innovation to better serve our clients.</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 relative">
            <Image src="/icons/teamwork.png" alt="Teamwork Icon" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
          <p className="text-gray-600">We work together, across boundaries, to meet the needs of our customers.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 relative">
            <Image src="/icons/integrity.png" alt="Integrity Icon" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Integrity</h3>
          <p className="text-gray-600">We uphold the highest standards of integrity in all our actions.</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 relative">
            <Image src="/icons/innovation.png" alt="Innovation Icon" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">We constantly strive for innovation to better serve our clients.</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 relative">
            <Image src="/icons/teamwork.png" alt="Teamwork Icon" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
          <p className="text-gray-600">We work together, across boundaries, to meet the needs of our customers.</p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
