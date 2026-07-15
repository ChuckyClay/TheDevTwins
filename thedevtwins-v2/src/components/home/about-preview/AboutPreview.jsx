import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import {
  Reveal,
  HoverCard,
} from "@/components/motion";

import { about } from "@/data/about";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-24">

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <Reveal direction="left">

            <div>

              <Badge>
                {about.badge}
              </Badge>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                {about.title}
              </h2>

              {about.description.map((paragraph) => (

                <p
                  key={paragraph}
                  className="mt-6 leading-8 text-slate-400"
                >
                  {paragraph}
                </p>

              ))}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {about.highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
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

              <div className="mt-10">

                <Link to={about.button.link}>

                  <Button
                    rightIcon={<ArrowRight size={18} />}
                  >
                    {about.button.text}
                  </Button>

                </Link>

              </div>

            </div>

          </Reveal>

          {/* Right */}

          <Reveal direction="right">

            <HoverCard>

              <div className="relative flex min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">

                {/* Glow */}

                <div className="absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                {/* Grid */}

                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

                <div className="relative text-center">

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">

                    <span className="text-4xl">
                      💻
                    </span>

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    The DevTwins
                  </h3>

                  <p className="mt-3 text-slate-400">
                    Professional Team Image
                    <br />
                    Coming Soon
                  </p>

                </div>

              </div>

            </HoverCard>

          </Reveal>

        </div>

      </Container>

    </section>
  );
}