import { memo } from "react";

import {
  Code2,
  Database,
  ShieldCheck,
  Server,
  Palette,
  Cloud,
} from "lucide-react";

import Card from "@/components/ui/Card";

import { HoverCard } from "@/components/motion";

const icons = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Database Design": Database,
  "UI / UX Implementation": Palette,
  Cybersecurity: ShieldCheck,
  "Deployment & DevOps": Cloud,
};

function SkillCard({ skill }) {
  const Icon = icons[skill.title] || Code2;

  return (
    <HoverCard>

      <Card className="group h-full border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:bg-cyan-500">

          <Icon
            size={30}
            className="text-cyan-400 transition duration-300 group-hover:text-slate-950"
          />

        </div>

        <h3 className="mt-8 text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
          {skill.title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {skill.description}
        </p>

      </Card>

    </HoverCard>
  );
}

export default memo(SkillCard);