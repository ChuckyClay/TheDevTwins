import { Link } from "react-router-dom";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

import { services } from "@/data/services";

import ServiceCard from "@/components/home/services-preview/ServiceCard";

export default function ServicesPreview() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="We deliver end-to-end digital solutions that help businesses establish, improve and secure their online presence."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to={ROUTES.SERVICES}>
            <Button>
              View All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}