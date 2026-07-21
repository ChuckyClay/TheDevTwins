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

import logoImage from "@/assets/images/about-preview.jpeg";

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
                      className="shrink-0 text-cyan-400"
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

          {/* Right — DevTwins Logo */}

          <Reveal direction="right">

            <HoverCard>

              <div className="relative h-[450px] overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/70 shadow-2xl shadow-cyan-500/5 sm:h-[360px] lg:h-[520px]">

                <img
                  src={logoImage}
                  alt="The DevTwins logo"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                />

              </div>

            </HoverCard>

          </Reveal>

        </div>

      </Container>

    </section>
  );
}