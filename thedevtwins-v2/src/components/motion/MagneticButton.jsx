import { motion } from "framer-motion";

import {
  buttonHover,
  buttonTap,
} from "@/animations";

export default function MagneticButton({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={buttonHover}
      whileTap={buttonTap}
      className={className}
    >
      {children}
    </motion.div>
  );
}