import {
  HoverCard,
  RevealGroup,
} from "@/components/motion";

import { hero } from "@/data/hero";

export default function HeroStats() {
  return (
    <RevealGroup className="grid grid-cols-3 gap-5 pt-4">

      {hero.stats.map((item) => (
        <HoverCard key={item.id}>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 backdrop-blur-sm">

            <h3 className="text-3xl font-black text-cyan-400">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.label}
            </p>

          </div>

        </HoverCard>
      ))}

    </RevealGroup>
  );
}