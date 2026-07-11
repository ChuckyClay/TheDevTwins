import { Link } from "react-router-dom";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { projectsCta } from "@/data/projectsCta";

export default function ProjectsCTA() {
  return (
    <section className="py-24">
      <Container>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-16 text-center md:px-12">

          <h2 className="text-4xl font-bold text-white">
            {projectsCta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            {projectsCta.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link to={projectsCta.primaryButton.link}>
              <Button>
                {projectsCta.primaryButton.text}
              </Button>
            </Link>

            <Link to={projectsCta.secondaryButton.link}>
              <Button variant="secondary">
                {projectsCta.secondaryButton.text}
              </Button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}