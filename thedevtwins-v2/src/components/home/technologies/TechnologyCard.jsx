import { memo } from "react";

import Card from "@/components/ui/Card";

function TechnologyCard({ technology }) {
  return (
    <Card className="text-center">
      <h3 className="text-xl font-semibold text-white">
        {technology}
      </h3>
    </Card>
  );
}

export default memo(TechnologyCard);