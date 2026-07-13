import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { workflow } from "@/data/workflow";

import WorkflowStep from "@/components/skills/WorkflowStep";

export default function Workflow() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Our Development Workflow"
          subtitle="Every successful project follows a structured process that ensures quality, transparency, and long-term maintainability."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((step, index) => (
            <WorkflowStep
              key={step.id}
              step={step}
              index={index}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}