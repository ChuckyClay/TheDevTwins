import {
  SkillsHero,
  SkillsGrid,
  Technologies,
  Workflow,
  SkillsCTA,
} from "@/components/skills";
import { SEO } from "@/components/seo";

import { seo } from "@/data/seo";

export default function Skills() {
  return (
    <>
      <SEO {...seo.skills} />

      <SkillsHero />

      <SkillsGrid />

      <Technologies />

      <Workflow />

      <SkillsCTA />
    </>
  );
}