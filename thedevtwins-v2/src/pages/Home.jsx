import { Hero } from "@/components/home/hero";
import { Technologies } from "@/components/home/technologies";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

import { SEO } from "@/components/seo";

import {
  AnimatedSection,
  PageTransition,
} from "@/components/motion";

import { seo } from "@/data/seo";

export default function Home() {
  return (
    <>
      <SEO {...seo.home} />

      <PageTransition>

        <Hero />

        <AnimatedSection direction="left">
          <Technologies />
        </AnimatedSection>

        <AnimatedSection direction="right">
          <AboutPreview />
        </AnimatedSection>

        <AnimatedSection direction="left">
          <ServicesPreview />
        </AnimatedSection>

        <AnimatedSection direction="right">
          <ProjectsPreview />
        </AnimatedSection>

        <AnimatedSection direction="left">
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection direction="right">
          <CTA />
        </AnimatedSection>

      </PageTransition>
    </>
  );
}