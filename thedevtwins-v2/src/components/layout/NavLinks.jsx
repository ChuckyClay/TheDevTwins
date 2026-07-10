import { NavLink } from "react-router-dom";

import { navigation } from "../../constants/navigation";
import { cn } from "../../utils/cn";

export default function NavLinks({
  direction = "horizontal",
  onNavigate,
  className,
}) {
  const directionClasses = {
    horizontal: "flex items-center gap-8",
    vertical: "flex flex-col items-start gap-2",
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
              "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
              "hover:text-cyan-400",
              isActive
                ? "text-cyan-400"
                : "text-slate-300"
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}