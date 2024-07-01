// components/Office.tsx
import React from 'react';
import clsx from "clsx";

// Define TypeScript types for the Office component props
type OfficeProps = {
  name: string;         // Required string for the office name
  children: React.ReactNode; // React children, which can be any renderable content
  invert?: boolean;     // Optional boolean to determine style inversion
};

const Office: React.FC<OfficeProps> = ({ name, children, invert = false }) => {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-sky-800 text-sm md:text-xl"
      )}
    >
      <strong className={invert ? "text-white" : "text-red-500"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
};

// Define TypeScript types for the Offices component props
type OfficesProps = {
  invert?: boolean;
} & React.HTMLAttributes<HTMLUListElement>; // Extend common HTML ul attributes for additional native props support

const Offices: React.FC<OfficesProps> = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Nairobi" invert={invert}>
        Westlands
          <br />
        southeast of the central business district.
        </Office>
      </li>
      <li>
        <Office name="Embakasi" invert={invert}>
        Westslands
          <br />
        Opposite Cocacola
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
