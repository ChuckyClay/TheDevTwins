import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { Reveal } from "@/components/motion";

import { skillsCta } from "@/data/skillsCta";

export default function SkillsCTA() {
  return (
    <section className="py-28">

      <Container>

        <Reveal>

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-8 py-20 text-center">

            {/* Background Glow */}

            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10">

                <MessageSquare
                  size={36}
                  className="text-cyan-400"
                />

              </div>

              <h2 className="mt-8 text-4xl font-extrabold text-white lg:text-5xl">
                {skillsCta.title}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                {skillsCta.description}
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <Link to={skillsCta.primaryButton.link}>
                  <Button>
                    {skillsCta.primaryButton.text}
                    <ArrowRight
                      size={18}
                      className="ml-2"
                    />
                  </Button>
                </Link>

                <Link to={skillsCta.secondaryButton.link}>
                  <Button variant="secondary">
                    {skillsCta.secondaryButton.text}
                  </Button>
                </Link>

              </div>

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}