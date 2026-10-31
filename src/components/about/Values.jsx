import {
  ShieldCheck,
  Sparkles,
  Award,
  Handshake,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  HoverCard,
} from "@/components/motion";

import { aboutPage } from "@/data/aboutPage";

const icons = {
  Quality: Award,
  Security: ShieldCheck,
  Innovation: Sparkles,
  Reliability: Handshake,
};

export default function Values() {
  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <SectionTitle
            badge="OUR VALUES"
            title="The Principles That Guide Everything We Build"
            subtitle="These values shape our decisions, our development process, and the relationships we build with every client."
          />

        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {aboutPage.values.map((value) => {

            const Icon = icons[value.title];

            return (

              <Reveal
                key={value.id}
                direction="up"
              >

                <HoverCard>

                  <div className="group h-full rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 transition-all duration-300 hover:border-cyan-500/40">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                      <Icon size={28} />

                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-white">

                      {value.title}

                    </h3>

                    <p className="mt-5 leading-8 text-slate-400">

                      {value.description}

                    </p>

                  </div>

                </HoverCard>

              </Reveal>

            );

          })}

        </div>

      </Container>

    </section>
  );
}