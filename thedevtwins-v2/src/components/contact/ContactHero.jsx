import {
  Mail,
  MessageCircle,
  Clock3,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import {
  Floating,
  Reveal,
} from "@/components/motion";

import { contactPage } from "@/data/contactPage";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container>

        <Reveal>

          <div className="relative mx-auto max-w-4xl text-center">

            <Badge>
              {contactPage.hero.badge}
            </Badge>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
              {contactPage.hero.title}
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              {contactPage.hero.description}
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Floating>

                <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-5 py-3">

                  <Mail
                    size={20}
                    className="text-cyan-400"
                  />

                  <span className="text-slate-300">
                    Quick Email Response
                  </span>

                </div>

              </Floating>

              <Floating>

                <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-5 py-3">

                  <MessageCircle
                    size={20}
                    className="text-cyan-400"
                  />

                  <span className="text-slate-300">
                    WhatsApp Support
                  </span>

                </div>

              </Floating>

              <Floating>

                <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-5 py-3">

                  <Clock3
                    size={20}
                    className="text-cyan-400"
                  />

                  <span className="text-slate-300">
                    Usually replies within 24 hours
                  </span>

                </div>

              </Floating>

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}