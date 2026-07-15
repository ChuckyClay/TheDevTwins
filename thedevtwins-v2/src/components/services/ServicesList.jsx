import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { services } from "@/data/services";

import ServiceCard from "./ServiceCard";

export default function ServicesList() {
  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <SectionTitle
            badge="WHAT WE DO"
            title="Professional Services Tailored To Your Business"
            subtitle="We provide complete software solutions, from planning and development to deployment, security and long-term support."
          />

        </Reveal>

        <RevealGroup className="mt-16">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <RevealItem key={service.id}>

                <ServiceCard
                  service={service}
                />

              </RevealItem>

            ))}

          </div>

        </RevealGroup>

      </Container>

    </section>
  );
}