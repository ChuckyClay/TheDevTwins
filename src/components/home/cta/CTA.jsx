import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  Reveal,
  HoverCard,
} from "@/components/motion";

import { cta } from "@/data/cta";

export default function CTA() {
  return (
    <section className="py-20 lg:py-24">

      <Container>

        <Reveal>

          <HoverCard>

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-8 py-16 text-center lg:px-16 lg:py-24">

              {/* Background Glow */}

              <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Grid */}

              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

              <div className="relative">

                <Badge>
                  {cta.badge}
                </Badge>

                <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight text-white lg:text-6xl">
                  {cta.title}
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                  {cta.description}
                </p>

                {/* Highlights */}

                <div className="mt-10 flex flex-wrap justify-center gap-8">

                  {cta.stats.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-cyan-400"
                      />

                      <span className="text-slate-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-12 flex flex-wrap justify-center gap-5">

                  <Link to={cta.primaryButton.link}>

                    <Button
                      size="lg"
                      rightIcon={<ArrowRight size={18} />}
                    >
                      {cta.primaryButton.text}
                    </Button>

                  </Link>

                  <Link to={cta.secondaryButton.link}>

                    <Button
                      variant="secondary"
                      size="lg"
                    >
                      {cta.secondaryButton.text}
                    </Button>

                  </Link>

                </div>

              </div>

            </div>

          </HoverCard>

        </Reveal>

      </Container>

    </section>
  );
}