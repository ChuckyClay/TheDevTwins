import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import {
  Floating,
  Reveal,
} from "@/components/motion";

import { projectsCta } from "@/data/projectsCta";

export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      </div>

      <Container>

        <Reveal>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-8 py-20 text-center lg:px-20">

            <Floating>

              <Badge className="inline-flex items-center gap-2">

                <BriefcaseBusiness size={16} />

                {projectsCta.badge}

              </Badge>

            </Floating>

            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl">

              {projectsCta.title}

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

              {projectsCta.description}

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link to={projectsCta.primaryButton.link}>

                <Button>

                  {projectsCta.primaryButton.text}

                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />

                </Button>

              </Link>

              <Link to={projectsCta.secondaryButton.link}>

                <Button variant="secondary">

                  {projectsCta.secondaryButton.text}

                </Button>

              </Link>

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}