// components/UspPointsList.tsx
import React from 'react';
import { usps } from "@/constants";
import UspPointsCard from './UspPointCard';
import Container from './Container';

// Define the type for a single USP (Unique Selling Point)
type Usp = {
  _id: string;
  // Add other properties that UspPointsCard expects
  [key: string]: any; // Replace with specific fields used by UspPointsCard for better type safety
};

const UspPointsList: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-row items-center justify-center w-full flex-wrap">
      {usps.map((usp: Usp, _id) => (
        <UspPointsCard key={usp._id} {...usp} />
      ))}
    </div>
    </Container>
    
  );
}

export default UspPointsList;
