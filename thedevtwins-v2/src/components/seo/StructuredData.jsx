import { Helmet } from "react-helmet-async";

import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/data/schema";

export default function StructuredData() {
  return (
    <Helmet>

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

    </Helmet>
  );
}