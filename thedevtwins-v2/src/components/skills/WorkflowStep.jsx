import { memo } from "react";

import {
  Search,
  PencilRuler,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
} from "lucide-react";

import { HoverCard } from "@/components/motion";

const icons = {
  Planning: PencilRuler,
  Design: Search,
  Development: Code2,
  Testing: Bug,
  Deployment: Rocket,
  Maintenance: LifeBuoy,
};

function WorkflowStep({ step, index }) {
  const Icon = icons[step.title] || Code2;

  return (
    <HoverCard>

      <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        <div className="absolute right-6 top-6 text-5xl font-black text-slate-800">
          0{index + 1}
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:bg-cyan-500">

          <Icon
            size={30}
            className="text-cyan-400 transition duration-300 group-hover:text-slate-950"
          />

        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">
          {step.title}
        </h3>

        <p className="mt-4 leading-8 text-slate-400">
          {step.description}
        </p>

      </div>

    </HoverCard>
  );
}

export default memo(WorkflowStep);