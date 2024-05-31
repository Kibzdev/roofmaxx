import React from 'react';
import { SERVICE_DESC_DATA } from '@/constants';
import clsx from 'clsx';

// Define an interface for each item in the side panel
interface SidePanelItem {
  _id: string; // Assuming _id is a unique identifier
  label: string;
}

const NavigationCard: React.FC = () => {
  return (
    <div className={clsx('flex flex-col items-top sticky right-0 top-12 bg-gray-50 text-sky-800 p-4 rounded-lg shadow-md')}>
      <h2 className={clsx('text-lg font-bold mb-3')}>WHAT WE DO</h2>
      <ul>
        {SERVICE_DESC_DATA.sidePanel.map((item: SidePanelItem) => (
          <li key={item._id} className={clsx('py-1 hover:underline-offset-4 hover:underline-sky-800 cursor-pointer')}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationCard;
