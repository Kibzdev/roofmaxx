// components/ContactForm.tsx
import React from "react";
import FadeIn from "./FadeIn";
import Button from "./Button";
import TextInput from './TextInput';
import RadioInput from './RadioInput';

const ContactForm: React.FC = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-sky-900 uppercase">
          Work Inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-lg font-medium text-sky-800">Service</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="Roof Installation – $50K" name="budget" value="25" />
              <RadioInput label="Roof Painting" name="budget" value="50" />
              <RadioInput label="Roof Cleaning" name="budget" value="100" />
              <RadioInput label="Gutter Cleaning" name="budget" value="150" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10 py-4 px-8 bg-sky-800 text-white">
          Submit
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
