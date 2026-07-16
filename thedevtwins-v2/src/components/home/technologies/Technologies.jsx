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
              badge="TECH STACK"
              title="Technologies We Use"
              subtitle="Modern technologies carefully selected to build fast, secure and scalable digital products."
            />
          </RevealItem>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {technologies.map((technology) => (
              <RevealItem key={technology.id}>
                <TechnologyCard technology={technology} />
              </RevealItem>
            ))}

          </div>

        </RevealGroup>

      </Container>
    </section>
  );
}