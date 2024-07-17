import React from 'react';
import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

// Define the type for each social media profile
interface SocialMediaProfile {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SocialMediaProfiles: SocialMediaProfile[] = [
  
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61560885807834",
    icon: BsFacebook,
  },
  {
    title: "Instagram",
    href: "https://www.facebook.com/mabatiyetu",
    icon: BsLinkedin,
  },
  { title: "Twitter", href: "https://www.facebook.com/mabatiyetu", icon: BsTwitter },
];

// Define TypeScript types for the SocialMedia component props
interface SocialMediaProps {
  className?: string;
  invert?: boolean;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-sky-800",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-sky-500 "
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
