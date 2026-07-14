import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { technologies } from "@/data/technologies";

import TechnologyCard from "./TechnologyCard";

export default function Technologies() {
  return (
    <section className="py-24">
      <Container>

        <RevealGroup>

          <RevealItem>
            <SectionTitle
              title="Technologies We Use"
              subtitle="We build reliable and scalable software using modern technologies across the frontend, backend, databases, and cloud ecosystem."
            />
          </RevealItem>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology) => (
              <RevealItem key={technology.id ?? technology.name}>
                <TechnologyCard technology={technology} />
              </RevealItem>
            ))}
          </div>

        </RevealGroup>

      </Container>
    </section>
  );
}