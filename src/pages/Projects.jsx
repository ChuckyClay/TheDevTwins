import {
  ProjectsHero,
  ProjectsList,
  ProjectDetails,
  ProjectsCTA,
} from "@/components/projects";
import { SEO } from "@/components/seo";

import { seo } from "@/data/seo";

export default function Projects() {
  return (
    <>
      <SEO {...seo.projects} />

      <ProjectsHero />

      <ProjectsList />

      <ProjectDetails />

      <ProjectsCTA />
    </>
  );
}