import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";

export default function ProjectDetails() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Project Case Studies"
          subtitle="A closer look at how we approach real-world software challenges."
        />

        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                  {project.category}
                </span>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  {project.status}
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-4 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Problem
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Solution
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {project.solution}
                  </p>
                </div>

              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-white">
                  Key Features
                </h3>

                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-xl bg-slate-800 px-4 py-3 text-slate-300"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}