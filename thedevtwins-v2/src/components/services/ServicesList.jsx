import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { services } from "@/data/services";

import ServiceCard from "./ServiceCard";

export default function ServicesList() {
  return (
    <section className="py-20 lg:py-24">

      <Container>

        <RevealGroup>

          <RevealItem>

            <SectionTitle
              badge="OUR SERVICES"
              title="Solutions Built Around Your Business"
              subtitle="From beautiful websites to scalable software platforms and secure backend systems, we build digital products that help businesses grow."
            />

          </RevealItem>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (
              <RevealItem key={service.id}>
                <ServiceCard service={service} />
              </RevealItem>
            ))}

          </div>

        </RevealGroup>

      </Container>

    </section>
  );
}