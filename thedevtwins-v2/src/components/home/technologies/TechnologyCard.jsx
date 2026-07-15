import { Code2 } from "lucide-react";

import Card from "@/components/ui/Card";

import { HoverCard } from "@/components/motion";

export default function TechnologyCard({ technology }) {
  const name =
    typeof technology === "string"
      ? technology
      : technology.name;

  const category =
    typeof technology === "string"
      ? ""
      : technology.category;

  return (
    <HoverCard>

      <Card className="group relative overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex flex-col items-center text-center">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">

            <Code2 size={28} />

          </div>

          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
            {name}
          </h3>

          {category && (
            <p className="mt-2 text-sm text-slate-400">
              {category}
            </p>
          )}

        </div>

      </Card>

    </HoverCard>
  );
}