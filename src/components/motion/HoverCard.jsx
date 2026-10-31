import { motion } from "framer-motion";

import { cardHover } from "@/animations";

export default function HoverCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      whileHover={cardHover}
    >
      {children}
    </motion.div>
  );
}