import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { StructuredData } from "@/components/seo";
import PageLoader from "@/components/ui/PageLoader";

import MainLayout from "@/layouts/MainLayout";

import { ROUTES } from "@/constants/routes";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Projects = lazy(() => import("@/pages/Projects"));
const Skills = lazy(() => import("@/pages/Skills"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <>
      <StructuredData />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.SKILLS} element={<Skills />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}