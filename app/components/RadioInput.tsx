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
        className="h-6 w-6 flex-none appearance-none rounded-full border border-sky-800/20 outline-none checked:border-[0.5rem] checked:border-sky-800 focus-visible:ring-1 focus-visible:ring-sky-800 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-sky-800">{label}</span>
    </label>
  );
};

export default RadioInput;
