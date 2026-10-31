import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

import {
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { ROUTES } from "@/constants/routes";
import { services } from "@/data/services";

import ServiceCard from "./ServiceCard";

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-24">

      <Container>

        <RevealGroup>

          <RevealItem>

            <SectionTitle
              badge="OUR SERVICES"
              title="Helping Businesses Build Better Digital Products"
              subtitle="We combine design, development, cybersecurity and networking expertise to deliver complete digital solutions that scale with your business."
            />

          </RevealItem>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.slice(0, 6).map((service) => (
              <RevealItem key={service.id}>
                <ServiceCard service={service} />
              </RevealItem>
            ))}

          </div>

          <RevealItem>

            <div className="mt-14 flex justify-center">

              <Link to={ROUTES.SERVICES}>

                <Button
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Explore All Services
                </Button>

              </Link>

            </div>

          </RevealItem>

        </RevealGroup>

      </Container>

    </section>
  );
}