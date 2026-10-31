import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  Reveal,
  Floating,
} from "@/components/motion";

import { servicesCta } from "@/data/servicesCta";

export default function ServicesCTA() {
  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-8 py-20 text-center">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            <Floating>

              <Badge className="relative inline-flex items-center gap-2">

                <BriefcaseBusiness size={16} />

                {servicesCta.badge}

              </Badge>

            </Floating>

            <h2 className="relative mt-8 text-4xl font-bold text-white md:text-5xl">

              {servicesCta.title}

            </h2>

            <p className="relative mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

              {servicesCta.description}

            </p>

            <div className="relative mt-12 flex flex-wrap justify-center gap-5">

              <Link to={servicesCta.primaryButton.link}>

                <Button>

                  {servicesCta.primaryButton.text}

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Button>

              </Link>

              <Link to={servicesCta.secondaryButton.link}>

                <Button variant="secondary">

                  {servicesCta.secondaryButton.text}

                </Button>

              </Link>

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}