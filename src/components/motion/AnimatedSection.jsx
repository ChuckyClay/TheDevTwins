import { motion } from "framer-motion";

import {
  fadeUp,
  slideLeft,
  slideRight,
  slideUp,
  slideDown,
  viewport,
} from "@/animations";

const variants = {
  fade: fadeUp,
  left: slideLeft,
  right: slideRight,
  up: slideUp,
  down: slideDown,
};

export default function AnimatedSection({
  children,
  direction = "fade",
  className = "",
  as = "section",
}) {
  const MotionComponent = motion[as];

  return (
    <div className="overflow-hidden">
      <MotionComponent
        className={className}
        variants={variants[direction]}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {children}
      </MotionComponent>
    </div>
  );
}