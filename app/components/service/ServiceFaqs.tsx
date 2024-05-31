"use client"
import React, { useState } from 'react';
import { faqs } from '@/constants';
import clsx from 'clsx';

// Define an interface for each FAQ item
interface FaqItem {
  _id: string; // Assuming _id is a unique identifier
  question: string;
  answer: string;
}

const ServiceFaqs: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full rounded-3xl bg-white p-8">
      <h1 className="text-xl font-semibold mb-4">Frequently Asked Questions</h1>
      {faqs.map((faq: FaqItem) => (
        <div key={faq._id} className="mb-2">
          <button
            onClick={() => toggleFAQ(faq._id)}
            className={clsx("w-full text-left", {
              "font-bold": activeId === faq._id,
            })}
          >
            {faq.question}
          </button>
          <div
            className={clsx("transition-height duration-500 ease-in-out", {
              "h-auto p-4": activeId === faq._id,
              "h-0 overflow-hidden": activeId !== faq._id,
            })}
          >
            {activeId === faq._id && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFaqs;
