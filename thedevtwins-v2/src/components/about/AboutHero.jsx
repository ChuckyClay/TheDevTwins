import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

import { aboutPage } from "@/data/aboutPage";

export default function AboutHero() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <Badge>
            {aboutPage.hero.badge}
          </Badge>


          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            {aboutPage.hero.title}
          </h1>


          <p className="mt-6 text-lg leading-8 text-slate-400">
            {aboutPage.hero.description}
          </p>

        </div>
      </Container>
    </section>
  );
}