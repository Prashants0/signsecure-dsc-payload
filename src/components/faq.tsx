import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

function FAQSection({ faqs }: { faqs: Array<FAQ> }) {
  return (
    <div className="mt-12 text-start">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem
            value={`item-${faq.id}`}
            key={faq.question}
            className="text-start"
          >
            <AccordionTrigger className="text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQSection;
