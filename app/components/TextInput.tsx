// components/TextInput.tsx
import React, { useId } from "react";

// Define TypeScript types for the TextInput component props
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  const id = useId();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer text-base font-medium block w-full border border-neutral-300 bg-transparent px-3 pb-2 pt-6 text-sky-800 ring-2 ring-transparent transition focus:border-sky-800 focus:outline-none focus:ring-sky-800 group-first:rounded-t-xl group-last:rounded-b-xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-1/2 -mt-1.5 origin-left text-sm/3 text-sky-800 transition-all duration-200 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-sky-800 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-sky-800"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
