import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  fadeUp,
  slideLeft,
  slideRight,
} from "@/animations";

const variants = {
  up: fadeUp,
  left: slideLeft,
  right: slideRight,
};

export default function AnimatedSection({
  children,
  className = "",
  variant = "up",
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.25,
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
}