import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({
  children,
  offset = 120,
  className = "",
}) {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 1200],
    [0, offset]
  );

  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}