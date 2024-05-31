import { SERVICE_DESC_DATA } from "@/constants";
import clsx from 'clsx';

// Define an interface for the service description data
interface ServiceDescData {
  content: string;
}

const ServiceDesc: React.FC = () => {
  return (
    <div className={clsx('flex flex-col md:flex-row p-4 gap-4 bg-yellow-900')}>
      <div className={clsx('md:w-full')}>
        <h1 className={clsx('text-xl text-center uppercase font-bold mb-3')}>Ceiling Installation Services</h1>
        <p className="font-light text-center tracking-wide">{SERVICE_DESC_DATA.content}</p>
      </div>
    </div>
  );
};

export default ServiceDesc;
