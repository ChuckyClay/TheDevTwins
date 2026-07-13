import { motion } from "framer-motion";

import { hero } from "@/data/hero";

import { fadeUp } from "@/animations";

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">
      {hero.stats.map((item) => (
        <motion.div
          key={item.id}
          variants={fadeUp}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center"
        >
          <h3 className="text-2xl font-bold text-cyan-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}