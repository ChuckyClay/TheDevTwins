import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import { skillsPage } from "@/data/skillsPage";

export default function SkillsHero() {
  return (
    <section className="py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <Badge>
            {skillsPage.hero.badge}
          </Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            {skillsPage.hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {skillsPage.hero.description}
          </p>

        </div>

      </Container>
    </section>
  );
}