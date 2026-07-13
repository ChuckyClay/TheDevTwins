import { motion } from "framer-motion";

import { slideLeft } from "@/animations";

export default function HeroImage() {
  return (
    <motion.div
      className="flex items-center justify-center"
      variants={slideLeft}
      initial="hidden"
      animate="visible"
    >
      <div className="flex h-[420px] w-full max-w-lg items-center justify-center rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl shadow-cyan-500/10">
        <span className="text-center text-lg text-slate-500">
          Custom Hero Illustration
          <br />
          Coming Soon
        </span>
      </div>
    </motion.div>
  );
}