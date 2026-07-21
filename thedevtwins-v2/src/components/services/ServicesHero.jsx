import { Code2 } from "lucide-react";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

import {
  Reveal,
  Floating,
} from "@/components/motion";

import { servicesPage } from "@/data/servicesPage";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-28">

      <Container>

        <Reveal>

          <div className="relative mx-auto max-w-4xl text-center">

            <Floating>

              <Badge className="inline-flex items-center gap-2">

                <Code2 size={16} />

                {servicesPage.hero.badge}

              </Badge>

            </Floating>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">

              {servicesPage.hero.title}

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

              {servicesPage.hero.description}

            </p>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}