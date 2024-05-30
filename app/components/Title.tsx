// Title.tsx
import clsx from "clsx";
import React from 'react';

// Define the types for the props
type TitleProps = {
  title: string;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<TitleProps> = ({ title, className, ...props }) => {
  return (
    <h2 className={clsx("font-medium tracking-tight text-sky-800", className)} {...props}>
      {title}
    </h2>
  );
}

export default Title;
