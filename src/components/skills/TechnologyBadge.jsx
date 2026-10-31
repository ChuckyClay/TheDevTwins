import { memo } from "react";

import {
  Code2,
  Database,
  Server,
  Wrench,
  Cloud,
  MonitorCog,
  Hammer,
} from "lucide-react";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Cloud: Cloud,
  Development: MonitorCog,
  "Build Tool": Hammer,
};

function TechnologyBadge({ technology }) {
  const Icon = icons[technology.category] || Code2;

  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 transition-all duration-300 group-hover:bg-cyan-500">

        <Icon
          size={22}
          className="text-cyan-400 transition-all duration-300 group-hover:text-slate-950"
        />

      </div>

      <h3 className="mt-5 font-semibold text-white">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {technology.category}
      </p>

    </div>
  );
}

export default memo(TechnologyBadge);