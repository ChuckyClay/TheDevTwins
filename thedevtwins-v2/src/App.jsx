import { StructuredData } from "@/components/seo";
import { ScrollProgress } from "@/components/motion";
import ScrollToTop from "@/components/layout/ScrollToTop";

import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <ScrollToTop />

      <AppRoutes />
    </>
  );
}