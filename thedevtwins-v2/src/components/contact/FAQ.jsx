import { useState } from "react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { Reveal } from "@/components/motion";

import { contactFaq } from "@/data/contactFaq";

import FAQItem from "./FAQItem";

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-28">
      <Container>

        <Reveal>
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Answers to some of the questions we're asked most often."
          />
        </Reveal>

        <div className="mx-auto mt-16 max-w-4xl space-y-5">

          {contactFaq.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={activeId === item.id}
              onToggle={() =>
                setActiveId(
                  activeId === item.id ? null : item.id
                )
              }
            />
          ))}

        </div>

      </Container>
    </section>
  );
}