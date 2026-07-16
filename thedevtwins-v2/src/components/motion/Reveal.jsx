import { motion } from "framer-motion";

import {
  fadeUp,
  slideLeft,
  slideRight,
  slideUp,
  slideDown,
} from "@/animations";

const variants = {
  fade: fadeUp,
  left: slideLeft,
  right: slideRight,
  up: slideUp,
  down: slideDown,
};

export default function Reveal({
  children,
  direction = "fade",
  className = "",
}) {
  return (
    <div className="overflow-x-clip">
      <motion.div
        className={className}
        variants={variants[direction]}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}