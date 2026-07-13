import { memo } from "react";

import Card from "@/components/ui/Card";

function WhyChooseCard({ item }) {
  return (
    <Card>

      <h3 className="text-xl font-semibold text-white">
        {item.title}
      </h3>


      <p className="mt-4 leading-7 text-slate-400">
        {item.description}
      </p>

    </Card>
  );
}

export default memo(WhyChooseCard);