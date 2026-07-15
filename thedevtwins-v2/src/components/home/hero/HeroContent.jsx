import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  MagneticButton,
  RevealGroup,
} from "@/components/motion";

import HeroStats from "./HeroStats";

import { hero } from "@/data/hero";

const highlights = [
  "Modern Web Applications",
  "Secure Backend Systems",
  "Cybersecurity Solutions",
];

export default function HeroContent() {
  return (
    <RevealGroup className="space-y-8">

      <Badge>
        {hero.badge}
      </Badge>

      <div>

        <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">

          {hero.title.first}

          <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            {hero.title.highlight}
          </span>

          {hero.title.last}

        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
          {hero.subtitle}
        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        <MagneticButton>

          <Link to={hero.primaryButton.link}>
            <Button size="lg">
              {hero.primaryButton.text}
            </Button>
          </Link>

        </MagneticButton>

        <MagneticButton>

          <Link to={hero.secondaryButton.link}>
            <Button
              variant="secondary"
              size="lg"
            >
              {hero.secondaryButton.text}
            </Button>
          </Link>

        </MagneticButton>

      </div>

      <div className="grid gap-3 sm:grid-cols-2">

        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle
              size={18}
              className="text-cyan-400"
            />

            <span className="text-slate-300">
              {item}
            </span>
          </div>
        ))}

      </div>

      <HeroStats />

    </RevealGroup>
  );
}