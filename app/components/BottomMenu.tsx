import Link from 'next/link';
import { HomeIcon, MailIcon, ChatIcon } from '@heroicons/react/solid';

const BottomMenu: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
      <div className="flex justify-around py-2">
        <Link href="/" className="flex flex-col items-center text-center text-sky-800">
          <HomeIcon className="w-6 h-6" />
          <span className="text-sm">Home</span>
        </Link>
        <a href="https://wa.me/yourwhatsapplink" className="flex flex-col items-center text-center text-sky-800">
          <ChatIcon className="w-6 h-6" />
          <span className="text-sm">WhatsApp</span>
        </a>
        <a href="mailto:youremail@example.com" className="flex flex-col items-center text-center text-sky-800">
          <MailIcon className="w-6 h-6" />
          <span className="text-sm">E-mail</span>
        </a>
      </div>
    </div>
  );
};

export default BottomMenu;
