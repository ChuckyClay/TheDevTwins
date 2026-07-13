import { memo } from "react";

import Card from "@/components/ui/Card";

function ProjectCard({ project }) {
  return (
    <Card>
      <p className="text-sm font-medium text-cyan-400">
        {project.category}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {project.description}
      </p>
    </Card>
  );
}

export default memo(ProjectCard);