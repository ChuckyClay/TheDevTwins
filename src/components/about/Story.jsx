import {
  Code2,
  ShieldCheck,
  Server,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  Reveal,
  HoverCard,
} from "@/components/motion";

import { aboutPage } from "@/data/aboutPage";

const highlights = [
  {
    icon: <Code2 size={24} />,
    title: "Modern Development",
    description:
      "Building fast, scalable and maintainable applications.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Security First",
    description:
      "Every solution is built with security best practices.",
  },
  {
    icon: <Server size={24} />,
    title: "Backend Expertise",
    description:
      "Reliable APIs, databases and cloud-ready architectures.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Continuous Innovation",
    description:
      "Always improving with modern technologies and practices.",
  },
];

export default function Story() {
  return (
    <section className="relative py-24 overflow-hidden">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <Reveal direction="left">

            <div>

              <SectionTitle
                align="left"
                badge="OUR STORY"
                title={aboutPage.story.title}
                subtitle="Our journey, passion and commitment to building meaningful digital solutions."
              />

              <div className="mt-10 space-y-7">

                {aboutPage.story.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-8 text-slate-400"
                  >
                    {paragraph}
                  </p>
                ))}

              </div>

            </div>

          </Reveal>

          {/* Right */}

          <Reveal direction="right">

            <div className="grid gap-6 sm:grid-cols-2">

              {highlights.map((item) => (

                <HoverCard key={item.title}>

                  <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-sm transition-colors hover:border-cyan-500/40">

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                </HoverCard>

              ))}

            </div>

          </Reveal>

        </div>

      </Container>

    </section>
  );
}