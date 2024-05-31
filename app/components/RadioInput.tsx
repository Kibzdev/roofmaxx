// components/RadioInput.tsx
import React from 'react';

// Define TypeScript types for the RadioInput component props
interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; // Required label prop for the radio input
}

const RadioInput: React.FC<RadioInputProps> = ({ label, ...props }) => {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio" // Ensure the input type is set to radio
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  );
};

export default RadioInput;
