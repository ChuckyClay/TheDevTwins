import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { skills } from "@/data/skills";

import SkillCard from "@/components/skills/SkillCard";

export default function SkillsGrid() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Core Competencies"
          subtitle="Our expertise spans the complete software development lifecycle, from planning and design to deployment and ongoing support."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}