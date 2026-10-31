import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

import {
  RevealGroup,
  RevealItem,
} from "@/components/motion";

import { ROUTES } from "@/constants/routes";
import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectsPreview() {
  return (
    <section className="py-20 lg:py-24">

      <Container>

        <RevealGroup>

          <RevealItem>

            <SectionTitle
              badge="FEATURED PROJECTS"
              title="Solutions That Deliver Real Business Value"
              subtitle="Every project reflects our commitment to performance, security, scalability and exceptional user experience."
            />

          </RevealItem>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <RevealItem key={project.id}>
                  <ProjectCard project={project} />
                </RevealItem>
              ))}

          </div>

          <RevealItem>

            <div className="mt-14 flex justify-center">

              <Link to={ROUTES.PROJECTS}>

                <Button
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  View All Projects
                </Button>

              </Link>

            </div>

          </RevealItem>

        </RevealGroup>

      </Container>

    </section>
  );
}