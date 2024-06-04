import React from "react";
import clsx from "clsx";

// Define a type for the props that the Container component will accept
interface ContainerProps {
  as?: React.ElementType; // Allows any valid JSX element type as a tag
  className?: string; // Optional string for additional className
  children?: React.ReactNode; // ReactNode includes anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
}

const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  className,
  children,
}) => {
  return (
    <Component className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;
