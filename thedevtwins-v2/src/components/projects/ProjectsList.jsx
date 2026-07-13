import { useState } from "react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";

import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";


export default function ProjectsList() {

  const [activeCategory, setActiveCategory] = useState("All");


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

        <SectionTitle
          title="Featured Projects"
          subtitle="A collection of applications and solutions we have developed."
        />


        <ProjectFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />


        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>


      </Container>

    </section>
  );
}