import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { testimonials } from "@/data/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="What People Say"
          subtitle="We value every project and strive to build lasting relationships through quality work, reliability, and professionalism."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}