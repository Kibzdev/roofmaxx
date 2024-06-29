import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  _key: string;
  question: string;
  answer: string;
}

interface NicheFAQProps {
  faqs: FAQ[];
}

const NicheFAQ: React.FC<NicheFAQProps> = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq._key} value={faq._key}>
          <AccordionTrigger className="text-lg md:text-xl font-semibold tracking-wider text-center text-sky-800">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-lg text-gray-700 tracking-wider leading-5 font-medium">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default NicheFAQ;
