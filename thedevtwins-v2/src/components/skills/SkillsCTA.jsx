import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { skillsCta } from "@/data/skillsCta";

export default function SkillsCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border border-slate-800 bg-slate-900 px-8 py-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            {skillsCta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            {skillsCta.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link to={skillsCta.primaryButton.link}>
              <Button>
                {skillsCta.primaryButton.text}
              </Button>
            </Link>

            <Link to={skillsCta.secondaryButton.link}>
              <Button variant="secondary">
                {skillsCta.secondaryButton.text}
              </Button>
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}