import clsx from "clsx";
import Link from "next/link";
import React from 'react';

// Define a type for the props
type LogoProps = {
    className?: string;
} & React.HTMLProps<HTMLHeadingElement>;

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
   <Link href={"/"}>
      <h2 className={clsx("text-3xl font-bold text-white hover:text-gray-50 duration-300", className)}
           {...props}
      >RoofMax</h2>
   </Link>
  )
}

export default Logo;
