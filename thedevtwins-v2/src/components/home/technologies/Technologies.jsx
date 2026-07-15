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

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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