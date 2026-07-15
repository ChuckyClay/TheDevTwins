import { memo } from "react";
import { motion } from "framer-motion";

import { projectCategories } from "@/constants/projectCategories";

function ProjectFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4">

      {projectCategories.map((category) => {

        const active =
          activeCategory === category;

        return (

          <motion.button
            key={category}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              active
                ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                : "border-slate-700 bg-slate-900 text-slate-400 hover:border-cyan-500 hover:text-cyan-400"
            }`}
          >
            {category}
          </motion.button>

        );
      })}

    </div>
  );
}

export default memo(ProjectFilter);