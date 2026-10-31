import {
  CheckCircle2,
  CircleAlert,
  Lightbulb,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { projects } from "@/data/projects";

export default function ProjectDetails() {
  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <SectionTitle
            badge="CASE STUDIES"
            title="Behind Every Successful Project"
            subtitle="Every project starts with understanding a real problem, designing an effective solution and delivering software built for long-term success."
          />

        </Reveal>

        <RevealGroup className="mt-20">

          <div className="space-y-16">

            {projects.map((project) => (

              <RevealItem key={project.id}>

                <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 lg:p-10">

                  {/* Header */}

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">

                      {project.category}

                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {project.status}
                    </span>

                    <span className="ml-auto text-sm text-slate-500">

                      {project.year}

                    </span>

                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-white">

                    {project.title}

                  </h2>

                  <p className="mt-5 max-w-4xl leading-8 text-slate-400">

                    {project.description}

                  </p>

                  {/* Problem & Solution */}

                  <div className="mt-12 grid gap-8 lg:grid-cols-2">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">

                      <div className="flex items-center gap-3">

                        <CircleAlert className="text-red-400" />

                        <h3 className="text-xl font-semibold text-white">

                          Problem

                        </h3>

                      </div>

                      <p className="mt-5 leading-8 text-slate-400">

                        {project.problem}

                      </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">

                      <div className="flex items-center gap-3">

                        <Lightbulb className="text-cyan-400" />

                        <h3 className="text-xl font-semibold text-white">

                          Solution

                        </h3>

                      </div>

                      <p className="mt-5 leading-8 text-slate-400">

                        {project.solution}

                      </p>

                    </div>

                  </div>

                  {/* Features */}

                  <div className="mt-12">

                    <h3 className="text-2xl font-semibold text-white">

                      Key Features

                    </h3>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">

                      {project.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
                        >

                          <CheckCircle2
                            size={18}
                            className="text-cyan-400"
                          />

                          <span className="text-slate-300">

                            {feature}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* Technologies */}

                  <div className="mt-12">

                    <h3 className="text-2xl font-semibold text-white">

                      Technology Stack

                    </h3>

                    <div className="mt-6 flex flex-wrap gap-3">

                      {project.technologies.map((technology) => (

                        <span
                          key={technology}
                          className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300"
                        >

                          {technology}

                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </RevealItem>

            ))}

          </div>

        </RevealGroup>

      </Container>

    </section>
  );
}