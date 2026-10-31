import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { Reveal } from "@/components/motion";

import { skills } from "@/data/skills";

import SkillCard from "@/components/skills/SkillCard";

export default function SkillsGrid() {
  return (
    <section className="py-28">

      <Container>

        <Reveal>

          <SectionTitle
            title="Core Competencies"
            subtitle="From frontend interfaces to backend architecture and security, we build reliable software using modern technologies and industry best practices."
          />

        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (
            <Reveal key={skill.id}>
              <SkillCard skill={skill} />
            </Reveal>
          ))}

        </div>

      </Container>

    </section>
  );
}