import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from 'react';

// Statically defined style constants
const baseStyles = {
  solid: "inline-flex justify-center rounded-lg py-2 px-8 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline: "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-offset-2 transition-colors",
} as const;

const variantStyles = {
  solid: {
    sky: "relative overflow-hidden bg-sky-800 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-sky-700 active:bg-sky-900 active:text-white/80 before:transition-colors",
    gray: "bg-gray-100 text-red-600 hover:border-gray-200 active:bg-gray-300 active:text-red-700/80",
    white: "bg-white text-white hover:border-gray-200 active:bg-gray-300 active:text-white",
  },
  outline: {
    red: "border-red-600 text-sky-700 hover:border-red-500 active:bg-red-700",
    white: "border-white text-white hover:border-white/80 active:bg-white",
  }
} as const;

// Type definitions for variants and colors
type Variant = keyof typeof variantStyles;
type Color = keyof typeof variantStyles[Variant];

// Defining a more precise conditional type for the ButtonProps
type ButtonProps = {
  variant?: Variant;
  color?: Color;
  className?: string;
  href?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', color = "gray", className, href, ...props }, ref) => {
    // Dynamically pick color based on the current variant
    const colorStyles = variantStyles[variant][color as Color];
    className = clsx(baseStyles[variant], colorStyles, className);

    if (href) {
      // Using Link with automatic <a> tag handling
      return (
        <Link href={href} passHref>
          {/* Applying ref and className directly to Link as Next.js 14 handles <a> automatically */}
          <span ref={ref as React.Ref<HTMLAnchorElement>} className={className} {...props} />
        </Link>
      );
    } else {
      return <button ref={ref as React.Ref<HTMLButtonElement>} className={className} {...props} />;
    }
  }
);

Button.displayName = 'Button';

export default Button;
