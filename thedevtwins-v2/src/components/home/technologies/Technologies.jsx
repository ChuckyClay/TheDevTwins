import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { technologies } from "@/data/technologies";

import TechnologyCard from "./TechnologyCard";

export default function Technologies() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Technologies We Use"
          subtitle="We build reliable and scalable software using modern technologies across the frontend, backend, databases, and cloud ecosystem."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}