import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        z-[9999]
        h-1
        w-full
        origin-left
        bg-gradient-to-r
        from-cyan-400
        via-cyan-500
        to-blue-500
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}