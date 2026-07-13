import { memo } from "react";

import Card from "@/components/ui/Card";

function ServiceCard({ service }) {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-white">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {service.description}
      </p>
    </Card>
  );
}

export default memo(ServiceCard);