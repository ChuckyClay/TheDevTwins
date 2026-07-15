import { useState } from "react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function ProjectsList() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <SectionTitle
            badge="FEATURED WORK"
            title="Projects That Reflect Our Expertise"
            subtitle="Each project demonstrates our commitment to performance, scalability, security and user experience."
          />

        </Reveal>

        <Reveal className="mt-12">

          <ProjectFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

        </Reveal>

        <RevealGroup className="mt-14">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredProjects.map((project) => (

              <RevealItem key={project.id}>

                <ProjectCard project={project} />

              </RevealItem>

            ))}

          </div>

        </RevealGroup>

      </Container>

    </section>
  );
}