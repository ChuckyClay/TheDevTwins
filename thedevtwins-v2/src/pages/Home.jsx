import { Hero } from "@/components/home/hero";
import { Technologies } from "@/components/home/technologies";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

import AnimatedSection from "@/components/ui/AnimatedSection";

import { SEO } from "@/components/seo";

import { seo } from "@/data/seo";

export default function Home() {
  return (
    <>
      <SEO {...seo.home} />

      <Hero />

      <AnimatedSection>
        <Technologies />
      </AnimatedSection>

      <AnimatedSection>
        <AboutPreview />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesPreview />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsPreview />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  );
}