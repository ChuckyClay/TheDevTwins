import {
  Target,
  Eye,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  HoverCard,
} from "@/components/motion";

import { aboutPage } from "@/data/aboutPage";

export default function MissionVision() {
  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <SectionTitle
            badge="OUR PURPOSE"
            title="Mission & Vision"
            subtitle="Everything we build is guided by a clear mission and a long-term vision of delivering technology that creates lasting value."
          />

        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <Reveal direction="left">

            <HoverCard>

              <div className="h-full rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Target size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  Our Mission
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  {aboutPage.mission}
                </p>

              </div>

            </HoverCard>

          </Reveal>

          {/* Vision */}

          <Reveal direction="right">

            <HoverCard>

              <div className="h-full rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Eye size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  Our Vision
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  {aboutPage.vision}
                </p>

              </div>

            </HoverCard>

          </Reveal>

        </div>

      </Container>

    </section>
  );
}