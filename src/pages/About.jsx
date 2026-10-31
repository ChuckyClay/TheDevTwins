import {
  AboutHero,
  Story,
  Team,
  MissionVision,
  Values,
  AboutCTA,
} from "@/components/about";
import { SEO } from "@/components/seo";

import { seo } from "@/data/seo";


export default function About() {
  return (
    <>
      <SEO {...seo.about} />

      <AboutHero />

      <Story />

      <Team />

      <MissionVision />

      <Values />

      <AboutCTA />
    </>
  );
}