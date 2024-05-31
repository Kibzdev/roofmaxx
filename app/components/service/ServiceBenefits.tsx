import { SERVICE_BENEFITS } from '@/constants';
import clsx from 'clsx';

// Define an interface for each benefit item
interface BenefitItem {
  _id: string; // Assuming _id is used as a unique identifier
  title: string;
  description: string;
}

const ServiceBenefits: React.FC = () => {
  return (
    <div className={clsx('bg-white p-6', 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4')}>
      {SERVICE_BENEFITS.map((benefit: BenefitItem) => (
        <div key={benefit._id} className={clsx('rounded-lg shadow-lg p-4', 'flex flex-col items-start')}>
          <h3 className={clsx('text-lg font-bold mb-2')}>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceBenefits;
