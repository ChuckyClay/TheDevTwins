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
      <Card className="group relative h-full overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

        {/* Glow */}

        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col">

          {/* Icon */}

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">

            <Icon
              size={26}
              className="text-cyan-400"
            />

          </div>

          <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
            {service.title}
          </h3>

          <p className="mt-4 flex-1 leading-7 text-slate-400">
            {service.description}
          </p>

          <div className="mt-6 flex items-center gap-2 font-medium text-cyan-400">

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