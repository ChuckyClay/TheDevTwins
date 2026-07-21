import {
  FolderKanban,
  Code2,
  ShieldCheck,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import {
  Reveal,
  Floating,
} from "@/components/motion";

import { projectsPage } from "@/data/projectsPage";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden py-28">

      <Container>

        <Reveal>

          <div className="relative mx-auto max-w-4xl text-center">

            <Floating>

              <Badge className="inline-flex items-center gap-2">

                <FolderKanban size={16} />

                {projectsPage.hero.badge}

              </Badge>

            </Floating>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">

              {projectsPage.hero.title}

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

              {projectsPage.hero.description}

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-10">

              <div className="flex items-center gap-3">

                <Code2 className="text-cyan-400" />

                <span className="text-slate-300">
                  Modern Stack
                </span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-cyan-400" />

                <span className="text-slate-300">
                  Secure Development
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FolderKanban className="text-cyan-400" />

                <span className="text-slate-300">
                  Real Projects
                </span>

              </div>

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}