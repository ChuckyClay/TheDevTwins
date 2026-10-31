import { socials } from "@/constants/socials";
import { cn } from "@/utils/cn";

export default function SocialLinks({
  size = "md",
  className,
}) {
  const sizes = {
    sm: "h-10 w-10 text-lg",
    md: "h-12 w-12 text-xl",
    lg: "h-14 w-14 text-2xl",
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4",
        className
      )}
    >
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className={cn(
              sizes[size],

              "group relative flex items-center justify-center overflow-hidden rounded-2xl",

              "border border-slate-800",

              "bg-slate-900/70 backdrop-blur-xl",

              "transition-all duration-500",

              "hover:-translate-y-2",

              "hover:rotate-3",

              "hover:border-cyan-500",

              "hover:shadow-xl",

              "hover:shadow-cyan-500/30"
            )}
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/20 opacity-0 transition duration-500 group-hover:opacity-100" />

            <Icon className="relative text-slate-300 transition duration-500 group-hover:scale-125 group-hover:text-cyan-400" />
          </a>
        );
      })}
    </div>
  );
}