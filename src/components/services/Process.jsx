import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  RevealGroup,
  RevealItem,
  HoverCard,
} from "@/components/motion";

import { process } from "@/data/process";

export default function Process() {
  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <SectionTitle
            badge="OUR PROCESS"
            title="How We Bring Your Ideas To Life"
            subtitle="A structured development process that keeps every project organized, transparent and focused on delivering results."
          />

        </Reveal>

        <RevealGroup className="mt-16">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {process.map((step) => (

              <RevealItem key={step.id}>

                <HoverCard>

                  <div className="group h-full rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 transition-all duration-300 hover:border-cyan-500/40">

                    <span className="text-5xl font-extrabold text-cyan-500/20">

                      {step.number}

                    </span>

                    <h3 className="mt-6 text-2xl font-bold text-white">

                      {step.title}

                    </h3>

                    <p className="mt-5 leading-8 text-slate-400">

                      {step.description}

                    </p>

                  </div>

                </HoverCard>

              </RevealItem>

            ))}

          </div>

        </RevealGroup>

      </Container>

    </section>
  );
}