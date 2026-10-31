import { Code2 } from "lucide-react";

export default function TechnologyCard({ technology }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50">

      <div className="mb-4 rounded-2xl bg-cyan-500/10 p-4 text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Code2 size={26} />
      </div>

      <h3 className="font-semibold text-white transition group-hover:text-cyan-400">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {technology.category}
      </p>

    </div>
  );
}