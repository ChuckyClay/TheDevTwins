import { StructuredData } from "@/components/seo";
import { ScrollProgress } from "@/components/motion";
import ScrollToTop from "@/components/layout/ScrollToTop";
import BackToTop from "@/components/layout/BackToTop";

import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <BackToTop />
      <ScrollToTop />

      <AppRoutes />
    </>
  );
}