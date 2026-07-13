import { memo } from "react";

import Card from "@/components/ui/Card";

function SkillCard({ skill }) {
  return (
    <Card>
      <h3 className="text-2xl font-semibold text-white">
        {skill.title}
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        {skill.description}
      </p>
    </Card>
  );
}

export default memo(SkillCard);