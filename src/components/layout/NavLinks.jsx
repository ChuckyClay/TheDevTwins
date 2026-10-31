import { NavLink } from "react-router-dom";

import { navigation } from "@/constants/navigation";
import { cn } from "@/utils/cn";

export default function NavLinks({
  direction = "horizontal",
  onNavigate,
  className,
}) {
  const directionClasses = {
    horizontal: "flex items-center gap-8",
    vertical: "flex flex-col gap-2",
  };

  return (
    <nav
      className={cn(directionClasses[direction], className)}
      aria-label="Primary Navigation"
    >
      {navigation.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
              isActive
                ? "bg-cyan-500/10 text-cyan-400"
                : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}