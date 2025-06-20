import { Faq } from '@/sanity/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/Accordion';

export default function FAQSection({ section }: { section: Faq }) {
  const { heading, questions = [] } = section;
  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-primary">
          {heading}
        </h2>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto flex flex-col custom-spacing"
        >
          {questions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-primary bg-neutral-light"
            >
              <AccordionTrigger className="text-left cursor-pointer  text-lg text-secondary hover:text-secondary/90">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-primary">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
