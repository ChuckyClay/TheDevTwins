import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Parallax } from "@/components/motion";

import {
  Floating,
  Reveal,
} from "@/components/motion";

import { aboutPage } from "@/data/aboutPage";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">

      {/* Background */}

      <div className="absolute inset-0">

      <Parallax offset={-80}>
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </Parallax>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

      </div>

      <Container>

        <div className="relative grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <Reveal direction="left">

            <div>

              <Badge>
                {aboutPage.hero.badge}
              </Badge>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
                {aboutPage.hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                {aboutPage.hero.description}
              </p>

              <div className="mt-10">

                <Link to="/contact">

                  <Button
                    size="lg"
                    rightIcon={<ArrowRight size={18} />}
                  >
                    Start A Project
                  </Button>

                </Link>

              </div>

              <div className="mt-14 grid grid-cols-3 gap-6">

                {aboutPage.hero.stats.map((item) => (

                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center backdrop-blur-sm"
                  >
                    <h3 className="text-3xl font-bold text-cyan-400">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Reveal>

          {/* Right */}

          <Reveal direction="right">

            <Floating>

              <div className="flex h-[500px] items-center justify-center rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl shadow-cyan-500/10">

                <div className="text-center">

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10 text-4xl font-bold text-cyan-400">
                    DT
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    The DevTwins
                  </h3>

                  <p className="mt-3 text-slate-400">
                    Modern Software Development
                  </p>

                </div>

              </div>

            </Floating>

          </Reveal>

        </div>

      </Container>

    </section>
  );
}