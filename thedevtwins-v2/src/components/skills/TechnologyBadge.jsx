export default function TechnologyBadge({ technology }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-center font-medium text-slate-200 transition duration-300 hover:border-cyan-500 hover:text-cyan-400">
      {technology}
    </div>
  );
}