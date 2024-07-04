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
      <h1 className="text-lg  md:text-xl font-semibold mb-4 uppercase text-red-500">FAQS</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq: FaqItem) => (
          <AccordionItem key={faq._key || uuidv4()} value={faq._key || uuidv4()}>
            <AccordionTrigger className=" text-lg  md:text-xl font-semibold tracking-wider text-center text-sky-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="transition-height duration-500 ease-in-out">
              <p className="text-lg text-gray-500 tracking-wider leading-5 font-medium">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFaqs;
