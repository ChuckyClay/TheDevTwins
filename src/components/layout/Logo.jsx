import { Link } from "react-router-dom";

import logo from "@/assets/logo.png";

import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { cn } from "@/utils/cn";

export default function Logo({
  className,
  showTagline = true,
}) {
  return (
    <Link
      to={ROUTES.HOME}
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90",
        className
      )}
      aria-label={`${siteConfig.name} Home`}
    >
      <img
        src={logo}
        alt={siteConfig.name}
        className="h-12 w-12 object-contain transition duration-300 group-hover:rotate-6"
      />

      <div className="leading-tight">
        <h1 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-400">
          {siteConfig.name}
        </h1>

        {showTagline && (
          <p className="text-xs text-slate-500">
            {siteConfig.tagline}
          </p>
        )}
      </div>
    </Link>
  );
}