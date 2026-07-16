import { motion } from "framer-motion";
import { pageTransition } from "@/animations";

export default function PageTransition({ children }) {
  return (
    <div className="overflow-x-clip">
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="enter"
        exit="exit"
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}