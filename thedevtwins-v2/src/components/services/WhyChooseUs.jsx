import {
  ShieldCheck,
  Cpu,
  Gauge,
  Users,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  RevealGroup,
  RevealItem,
  HoverCard,
} from "@/components/motion";

import { whyChooseUs } from "@/data/whyChooseUs";

const icons = {
  "Security First": ShieldCheck,
  "Modern Technologies": Cpu,
  "Performance Optimized": Gauge,
  "Client Focused": Users,
  "Scalable Solutions": TrendingUp,
  "Reliable Support": LifeBuoy,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24">

      <Container>

        <Reveal>

          <SectionTitle
            badge="WHY CHOOSE US"
            title="A Technology Partner You Can Trust"
            subtitle="We combine modern engineering practices, security, and a client-first mindset to deliver solutions that create lasting value."
          />

        </Reveal>

        <RevealGroup className="mt-16">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {whyChooseUs.map((item) => {

              const Icon = icons[item.title];

              return (

                <RevealItem key={item.id}>

                  <HoverCard>

                    <div className="group h-full rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 transition-all duration-300 hover:border-cyan-500/40">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">

                        <Icon size={30} />

                      </div>

                      <h3 className="mt-8 text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-8 text-slate-400">
                        {item.description}
                      </p>

                    </div>

                  </HoverCard>

                </RevealItem>

              );

            })}

          </div>

        </RevealGroup>

      </Container>

    </section>
  );
}