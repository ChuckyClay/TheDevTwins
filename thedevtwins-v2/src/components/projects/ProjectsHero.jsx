import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

import { projectsPage } from "@/data/projectsPage";


export default function ProjectsHero() {
  return (
    <section className="py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <Badge>
            {projectsPage.hero.badge}
          </Badge>


          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            {projectsPage.hero.title}
          </h1>


          <p className="mt-6 text-lg leading-8 text-slate-400">
            {projectsPage.hero.description}
          </p>

        </div>

      </Container>

    </section>
  );
}