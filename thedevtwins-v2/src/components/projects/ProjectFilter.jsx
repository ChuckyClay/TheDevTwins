import { memo } from "react";

import { projectCategories } from "@/constants/projectCategories";


function ProjectFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">

      {projectCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            activeCategory === category
              ? "bg-cyan-500 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default memo(ProjectFilter);