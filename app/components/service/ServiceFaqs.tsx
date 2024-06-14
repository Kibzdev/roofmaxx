'use client';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

interface ServiceFaqsProps {
  faqs: FaqItem[];
}

const ServiceFaqs: React.FC<ServiceFaqsProps> = ({ faqs = [] }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full rounded-3xl bg-white p-8">
      <h1 className="text-xl font-semibold mb-4">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq: FaqItem) => (
          <AccordionItem key={faq._key || uuidv4()} value={faq._key || uuidv4()}>
            <AccordionTrigger className="w-full text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="transition-height duration-500 ease-in-out">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFaqs;
