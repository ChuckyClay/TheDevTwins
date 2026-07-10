import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import { siteConfig } from "../../constants/site";
import { cn } from "../../utils/cn";

export default function Logo({
  className,
  showTagline = true,
}) {
  return (
    <Link
      to={ROUTES.HOME}
      className={cn(
        "inline-flex items-center gap-3",
        "transition-opacity duration-300 hover:opacity-90",
        className
      )}
      aria-label={`${siteConfig.name} Home`}
    >
      {/* Temporary Logo Mark */}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
        TD
      </div>

      <div className="leading-tight">
        <h1 className="text-lg font-bold tracking-tight text-white">
          {siteConfig.name}
        </h1>

        {showTagline && (
          <p className="text-xs text-slate-400">
            {siteConfig.tagline}
          </p>
        )}
      </div>
    </Link>
  );
}