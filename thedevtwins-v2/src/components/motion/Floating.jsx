import { motion } from "framer-motion";

import { floating } from "@/animations";

export default function Floating({
  children,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      animate={floating.animate}
      transition={floating.transition}
    >
      {children}
    </motion.div>
  );
}