import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { process } from "@/data/process";

import ProcessCard from "./ProcessCard";


export default function Process() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          title="Our Development Process"
          subtitle="A structured approach that helps us deliver reliable and high-quality digital solutions."
        />


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {process.map((step) => (
            <ProcessCard
              key={step.id}
              step={step}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}