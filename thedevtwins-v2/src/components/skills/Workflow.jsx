import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { Reveal } from "@/components/motion";

import { workflow } from "@/data/workflow";

import WorkflowStep from "./WorkflowStep";

export default function Workflow() {
  return (
    <section className="py-28">

      <Container>

        <Reveal>

          <SectionTitle
            title="Our Development Process"
            subtitle="Every project follows a proven workflow that ensures quality, transparency, and long-term maintainability."
          />

        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {workflow.map((step, index) => (
            <Reveal key={step.id}>
              <WorkflowStep
                step={step}
                index={index}
              />
            </Reveal>
          ))}

        </div>

      </Container>

    </section>
  );
}