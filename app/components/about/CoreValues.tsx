import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

// Importing images
import collaborationIcon from '../../../public/assets/icons/tech.svg';
import trustIcon from '../../../public/assets/icons/certified.svg';
import transparencyIcon from '../../../public/assets/icons/reliable.svg';
import integrityIcon from '../../../public/assets/icons/security.svg';


interface ValueProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className={clsx("flex flex-col items-center justify-center  bg-white shadow-md rounded-lg p-6 text-center", "hover:shadow-lg transition-shadow duration-300 ")}>
      <Image src={icon} alt={`${title} icon`} width={50} height={50}  />
      <h3 className="text-lg font-bold text-sky-800 mt-4 mb-2 uppercase">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CoreValue: React.FC = () => {
  return (
      <div className={clsx("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-8")}>
      <ValueCard 
        icon={collaborationIcon.src}
        title="Collaboration"
       
        description="Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal."
      />
      <ValueCard 
        icon={trustIcon.src}
        title="Trust"
        description="Trust will help us foster a positive and productive environment that delivers value to our users and customers."
      />
      <ValueCard 
        icon={transparencyIcon.src}
        title="Transparency"
        description="Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed."
      />
      <ValueCard 
        icon={integrityIcon.src}
        title="Integrity"
        description="Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal."
      />
    </div>
   
    
  );
};

export default CoreValue;
