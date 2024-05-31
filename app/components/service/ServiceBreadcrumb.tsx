import Link from 'next/link';
import { BREADCRUMB_DATA } from "@/constants";
import clsx from 'clsx';

// Define an interface for breadcrumb items
interface BreadcrumbItem {
  _id: string; // Assuming _id is a string, adjust the type as needed
  path: string;
  label: string;
}

const ServiceBreadcrumbNav: React.FC = () => {
  return (
    <nav className="flex w-full items-center bg-red-500 justify-center">
      <ul className={clsx('flex space-x-4 p-2 text-white')}>
        {BREADCRUMB_DATA.map((item: BreadcrumbItem) => (
          <li key={item._id}>
            <Link href={item.path}>
              <p className="hover:text-gray-300">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ServiceBreadcrumbNav;
