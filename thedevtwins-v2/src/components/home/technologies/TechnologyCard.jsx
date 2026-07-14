import { motion } from "framer-motion";

import Card from "@/components/ui/Card";

export default function TechnologyCard({ technology }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="group text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">

        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
          {technology.name}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {technology.category}
        </p>

      </Card>
    </motion.div>
  );
}