import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { testimonials } from "@/data/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24">

      <Container>

        <RevealGroup>

          <RevealItem>

            <SectionTitle
              badge="TESTIMONIALS"
              title="Trusted by Clients Who Value Quality"
              subtitle="Our goal is to build long-term partnerships by delivering reliable software, clear communication, and exceptional user experiences."
            />

          </RevealItem>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {testimonials.map((testimonial) => (
              <RevealItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </RevealItem>
            ))}

          </div>

        </RevealGroup>

      </Container>

    </section>
  );
}