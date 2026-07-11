import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { contactFaq } from "@/data/contactFaq";

import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Here are answers to some of the questions we receive most often."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {contactFaq.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}