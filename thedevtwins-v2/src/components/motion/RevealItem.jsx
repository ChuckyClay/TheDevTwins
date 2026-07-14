import { motion } from "framer-motion";

import { staggerItem } from "@/animations";

export default function RevealItem({
  children,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}