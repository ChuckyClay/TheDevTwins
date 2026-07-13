import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import HeroStats from "@/components/home/hero/HeroStats";

import { hero } from "@/data/hero";

import {
  fadeUp,
  staggerContainer,
} from "@/animations";

export default function HeroContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <Badge>
          {hero.badge}
        </Badge>
      </motion.div>

      <motion.div variants={fadeUp}>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
          {hero.title.first}

          <span className="block bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            {hero.title.highlight}
          </span>

          {hero.title.last}
        </h1>
      </motion.div>

      <motion.div variants={fadeUp}>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {hero.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-wrap gap-4"
      >
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
      </motion.div>

      <motion.div variants={fadeUp}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}