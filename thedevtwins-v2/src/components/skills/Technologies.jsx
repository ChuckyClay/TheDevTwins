import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { Reveal } from "@/components/motion";

import { technologies } from "@/data/technologies";

import TechnologyBadge from "./TechnologyBadge";

export default function Technologies() {
  return (
    <section className="py-28">

      <Container>

        <Reveal>

          <SectionTitle
            title="Technologies We Work With"
            subtitle="Our technology stack combines modern frameworks, secure backend solutions, cloud platforms, databases, and networking tools."
          />

        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {technologies.map((technology) => (
            <Reveal key={technology.id}>
              <TechnologyBadge technology={technology} />
            </Reveal>
          ))}

        </div>

      </Container>

    </section>
  );
}