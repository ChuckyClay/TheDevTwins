import { memo } from "react";

import { cn } from "@/utils/cn";

function Card({
  children,
  className,
  as: Component = "div",
}) {
  return (
    <Component
      className={cn(
        "rounded-3xl border border-slate-800 bg-slate-900 p-8",
        className
      )}
    >
      {children}
    </Component>
  );
}

export default memo(Card);