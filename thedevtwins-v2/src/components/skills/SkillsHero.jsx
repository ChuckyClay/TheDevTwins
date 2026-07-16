import {
  Code2,
  ShieldCheck,
  Server,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import {
  Floating,
  Reveal,
} from "@/components/motion";

import { skillsPage } from "@/data/skillsPage";

export default function SkillsHero() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      </div>

      <Container>

        <Reveal>

          <div className="relative mx-auto max-w-4xl text-center">

            <Floating>

              <Badge className="inline-flex items-center gap-2">

                <Code2 size={16} />

                {skillsPage.hero.badge}

              </Badge>

            </Floating>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">

              {skillsPage.hero.title}

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

              {skillsPage.hero.description}

            </p>

            {/* Highlights */}

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">

                <Code2
                  className="mx-auto text-cyan-400"
                  size={34}
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  Modern Development
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Modern frontend and backend
                  development using current
                  technologies.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">

                <Server
                  className="mx-auto text-cyan-400"
                  size={34}
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  Scalable Systems
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Reliable architectures designed
                  for performance, growth and
                  maintainability.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">

                <ShieldCheck
                  className="mx-auto text-cyan-400"
                  size={34}
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  Security First
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Security best practices integrated
                  throughout the development
                  lifecycle.
                </p>

              </div>

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}