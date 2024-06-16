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

interface NicheFaqProps {
  faqs: FAQ[];
}

const NicheFaq: React.FC<NicheFaqProps> = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq._key} value={faq._key}>
          <AccordionTrigger className="text-lg font-medium tracking-wider text-center text-sky-800">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-medium text-gray-700 tracking-wider leading-5">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default NicheFaq;
