import { motion } from "framer-motion";

import { staggerContainer } from "@/animations";

export default function RevealGroup({
  children,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}