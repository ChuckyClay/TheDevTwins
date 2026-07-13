import { Link } from "react-router-dom";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

import { projects } from "@/data/projects";

import ProjectCard from "@/components/home/projects-preview/ProjectCard";

export default function ProjectsPreview() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects that demonstrate our experience in building modern, secure, and scalable digital solutions."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to={ROUTES.PROJECTS}>
            <Button>
              View All Projects
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}