import { memo } from "react";

import Card from "@/components/ui/Card";

function ProcessCard({ step }) {
  return (
    <Card>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-cyan-400">
        {step.id}
      </div>


      <h3 className="mt-6 text-xl font-semibold text-white">
        {step.title}
      </h3>


      <p className="mt-4 leading-7 text-slate-400">
        {step.description}
      </p>

    </Card>
  );
}

export default memo(ProcessCard);