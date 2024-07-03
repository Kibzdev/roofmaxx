import { urlFor } from '@/sanity/lib/sanityclient';
import Image from 'next/image';
import Link from 'next/link';
import { FaInfoCircle, FaExclamationTriangle, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

export const RichText = {
  types: {
    image: ({ value }: any) => (
      <div className="flex items-center justify-center">
        <Image
          src={urlFor(value).url()}
          alt="Post image"
          width={700}
          height={700}
          className="object-contain py-6"
        />
      </div>
    ),
    icon: ({ value }: any) => {
      const iconType = value.iconType;
      const iconSize = 24;
      let IconComponent;

      switch (iconType) {
        case 'info':
          IconComponent = <FaInfoCircle size={iconSize} className="text-blue-500" />;
          break;
        case 'warning':
          IconComponent = <FaExclamationTriangle size={iconSize} className="text-yellow-500" />;
          break;
        case 'error':
          IconComponent = <FaTimesCircle size={iconSize} className="text-red-500" />;
          break;
        case 'success':
          IconComponent = <FaCheckCircle size={iconSize} className="text-green-500" />;
          break;
        default:
          IconComponent = null;
      }

      return (
        <div className="flex items-center justify-center py-2">
          {IconComponent}
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5 md:text-lg text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal md:text-lg text-gray-700">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="md:text-lg text-gray-700">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold text-sky-800">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-10 font-bold text-sky-800">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-10 font-bold text-sky-800">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl py-10 font-bold text-sky-800">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-sky-800 border-l-4 pl-5 py-5 my-5 md:text-lg text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <span className="underline">{children}</span>,
    'strike-through': ({ children }: any) => <span className="line-through">{children}</span>,
    subscript: ({ children }: any) => <sub>{children}</sub>,
    superscript: ({ children }: any) => <sup>{children}</sup>,
    highlight: ({ children }: any) => <span className="bg-yellow-200">{children}</span>,
    code: ({ children }: any) => <code className="bg-gray-200 p-1 rounded">{children}</code>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline md:text-lg text-gray-700">
          {children}
        </Link>
      );
    },
    red: ({ children }: any) => <span className="text-red-500">{children}</span>,
    gray: ({ children }: any) => <span className="text-gray-700">{children}</span>,
    blue: ({ children }: any) => <span className="text-sky-800">{children}</span>,
    customColor: ({ children, value }: any) => (
      <span style={{ color: value?.hex }}>{children}</span>
    ),
  },
};
