import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { services } from "@/data/services";

import ServiceCard from "@/components/services/ServiceCard";


export default function ServicesList() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          title="What We Offer"
          subtitle="From websites to complete software systems, we provide solutions designed around your goals."
        />


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}