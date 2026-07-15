import { memo } from "react";
import {
  ArrowRight,
  Globe,
  MonitorSmartphone,
  Server,
  Palette,
  ShieldCheck,
  Network,
  Settings,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { HoverCard } from "@/components/motion";

const icons = {
  globe: Globe,
  monitor: MonitorSmartphone,
  server: Server,
  palette: Palette,
  shield: ShieldCheck,
  network: Network,
  settings: Settings,
};

function ServiceCard({ service }) {
  const Icon = icons[service.icon];

  return (
    <HoverCard>
      <Card className="group relative flex h-full flex-col overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative">

          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">

            <Icon
              size={30}
              className="text-cyan-400"
            />

          </div>

          <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
            {service.title}
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            {service.description}
          </p>

        </div>

        <div className="mt-auto pt-8">

          <div className="flex items-center gap-2 font-semibold text-cyan-400">

            Learn More

            <ArrowRight
              size={18}
              className="transition duration-300 group-hover:translate-x-2"
            />

          </div>

        </div>

      </Card>
    </HoverCard>
  );
}

export default memo(ServiceCard);