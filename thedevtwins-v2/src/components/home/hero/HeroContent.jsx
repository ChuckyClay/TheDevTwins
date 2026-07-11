import { Link } from "react-router-dom";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import HeroStats from "@/components/home/hero/HeroStats";

import { hero } from "@/data/hero";

export default function HeroContent() {
  return (
    <div>
      <Badge>
        {hero.badge}
      </Badge>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
        {hero.title.first}

        <span className="block bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            {hero.title.highlight}
        </span>

        {hero.title.last}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        {hero.subtitle}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link to={hero.primaryButton.link}>
          <Button>
            {hero.primaryButton.text}
          </Button>
        </Link>

        <Link to={hero.secondaryButton.link}>
          <Button variant="secondary">
            {hero.secondaryButton.text}
          </Button>
        </Link>
      </div>

      <HeroStats />
    </div>
  );
}