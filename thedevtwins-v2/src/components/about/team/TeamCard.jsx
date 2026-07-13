import { memo } from "react";

import Card from "@/components/ui/Card";

function TeamCard({ member }) {
  return (
    <Card>

      <div className="flex flex-col items-center text-center">

        <div className="flex h-32 w-32 items-center justify-center rounded-full border border-slate-700 bg-slate-800">
          <span className="text-sm text-slate-500">
            Image
          </span>
        </div>


        <h3 className="mt-6 text-2xl font-semibold text-white">
          {member.name}
        </h3>


        <p className="mt-2 text-cyan-400">
          {member.role}
        </p>


        <p className="mt-4 leading-7 text-slate-400">
          {member.description}
        </p>


        <div className="mt-6 flex flex-wrap justify-center gap-2">

          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </Card>
  );
}

export default memo(TeamCard);