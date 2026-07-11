import { Hero } from "@/components/home/hero";
import { Technologies } from "@/components/home/technologies";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Technologies />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <CTA />
    </>
  );
}