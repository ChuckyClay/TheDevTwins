import { memo } from "react";
import {
  Globe,
  Monitor,
  Server,
  Palette,
  Shield,
  Network,
  Settings,
  ArrowRight,
} from "lucide-react";

import Card from "@/components/ui/Card";

import {
  HoverCard,
  MagneticButton,
} from "@/components/motion";

const icons = {
  globe: Globe,
  monitor: Monitor,
  server: Server,
  palette: Palette,
  shield: Shield,
  network: Network,
  settings: Settings,
};

function ServiceCard({ service }) {
  const Icon = icons[service.icon];

  return (
    <HoverCard>

      <Card className="group h-full">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">

          <Icon size={30} />

        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">
          {service.title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {service.description}
        </p>

        <MagneticButton className="mt-8 inline-flex">

          <button className="flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300">

            Learn More

            <ArrowRight size={18} />

          </button>

        </MagneticButton>

      </Card>

    </HoverCard>
  );
}

export default memo(ServiceCard);