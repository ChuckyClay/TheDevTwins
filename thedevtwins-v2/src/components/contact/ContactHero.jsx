import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import { contactPage } from "@/data/contactPage";

export default function ContactHero() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <Badge>
            {contactPage.hero.badge}
          </Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            {contactPage.hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {contactPage.hero.description}
          </p>

        </div>
      </Container>
    </section>
  );
}