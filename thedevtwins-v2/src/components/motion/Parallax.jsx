import { motion } from "framer-motion";

import {
  useParallaxSlow,
  useParallaxFast,
} from "@/animations";

export default function Parallax({
  children,
  speed = "slow",
  className = "",
}) {
  const slow = useParallaxSlow();
  const fast = useParallaxFast();

  const style =
    speed === "fast"
      ? fast
      : slow;

  return (
    <motion.div
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}