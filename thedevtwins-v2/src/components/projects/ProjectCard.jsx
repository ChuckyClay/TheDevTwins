import { memo } from "react";
import { ExternalLink, Github } from "lucide-react";

import Card from "@/components/ui/Card";
import { HoverCard } from "@/components/motion";

function ProjectCard({ project }) {
  return (
    <HoverCard>
      <Card className="group overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        {/* Project Preview */}
        <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

          <div className="absolute inset-0 bg-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="relative text-slate-500 transition-colors duration-300 group-hover:text-cyan-400">
            Project Preview
          </span>

        </div>

        {/* Category + Status */}

        <div className="mt-6 flex flex-wrap items-center gap-3">

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

        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
          {project.title}
        </h3>

        {/* Description */}

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-sm text-slate-300 transition duration-300 hover:border-cyan-500 hover:text-cyan-400"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">

          <div className="flex gap-3">

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                <Github size={18} />
                GitHub
              </a>
            )}

            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}

          </div>

        </div>

      </Card>
    </HoverCard>
  );
}

export default memo(ProjectCard);