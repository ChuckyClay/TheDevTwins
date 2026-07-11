import Card from "@/components/ui/Card";


export default function ProjectCard({ project }) {
  return (
    <Card>

      {/* Project Image */}
      <div className="flex h-48 items-center justify-center rounded-xl bg-slate-800">
        <span className="text-slate-500">
          Project Preview
        </span>
      </div>


      {/* Category + Status */}
      <div className="mt-6 flex flex-wrap gap-2">

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
          {project.category}
        </span>


        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          {project.status}
        </span>

      </div>


      {/* Title */}
      <h3 className="mt-5 text-2xl font-semibold text-white">
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
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
          >
            {technology}
          </span>
        ))}

      </div>


      {/* Links */}
      <div className="mt-8 flex gap-5">

        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            Live Demo
          </a>
        )}


        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            GitHub
          </a>
        )}

      </div>


    </Card>
  );
}