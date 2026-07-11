export default function WorkflowStep({
  step,
  index,
}) {
  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
        {index + 1}
      </div>

      <h3 className="text-xl font-semibold text-white">
        {step.title}
      </h3>

    </div>
  );
}