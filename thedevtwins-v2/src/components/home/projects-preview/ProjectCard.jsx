import { memo } from "react";
import {
  ArrowRight
} from "lucide-react";

import Card from "@/components/ui/Card";

import { HoverCard } from "@/components/motion";

function ProjectCard({ project }) {
  return (
    <HoverCard>

      <Card className="group relative h-full overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        <div className="relative h-48 overflow-hidden rounded-xl bg-slate-900">

          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

          <div className="absolute inset-0 bg-cyan-500/0 transition duration-300 group-hover:bg-cyan-500/5" />

        </div>

        <div className="relative mt-6 flex h-full flex-col">

          {/* Category */}

          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            {project.category}
          </span>

          {/* Title */}

          <h3 className="mt-3 text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
            {project.title}
          </h3>

          {/* Description */}

          <p className="mt-4 flex-1 leading-7 text-slate-400">
            {project.description}
          </p>

          {/* Tech Stack */}

          <div className="mt-6 flex flex-wrap gap-2">

            {project.technologies.slice(0, 3).map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
              >
                {tech}
              </span>

            ))}

          </div>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">

            <span className="text-sm text-slate-500">
              {project.year}
            </span>

            <div className="flex items-center gap-2 font-medium text-cyan-400">

              View Project

              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-2"
              />

            </div>

          </div>

        </div>

      </Card>

    </HoverCard>
  );
}

export default memo(ProjectCard);