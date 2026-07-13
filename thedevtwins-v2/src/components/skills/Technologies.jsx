import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { technologies } from "@/data/technologies";

import TechnologyBadge from "@/components/skills/TechnologyBadge";

export default function Technologies() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Technologies We Use"
          subtitle="We leverage modern technologies and industry-standard tools to build reliable, scalable, and maintainable software solutions."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((technology) => (
            <TechnologyBadge
              key={technology}
              technology={technology}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}