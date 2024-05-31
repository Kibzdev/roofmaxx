// components/Border.tsx
import React from 'react';
import clsx from "clsx";

// Define TypeScript types for the Border component props
interface BorderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  position?: 'top' | 'left';
  invert?: boolean;
  as?: React.ElementType;
}

const Border: React.FC<BorderProps> = ({
  className,
  position = "top",
  invert = false,
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={clsx(
        className,
        "relative before:absolute after:absolute",
        invert
          ? "before:bg-white after:bg-white/10"
          : "before:bg-sky-800 after:bg-sky-800/10",
        position === "top" &&
          "before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px",
        position === "left" &&
          "before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
      )}
      {...props}
    />
  );
};

export default Border;
