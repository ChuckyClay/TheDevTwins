import { socials } from "../../constants/socials";
import { cn } from "../../utils/cn";

export default function SocialLinks({
  size = "md",
  className,
}) {
  const sizes = {
    sm: "h-9 w-9 text-base",
    md: "h-10 w-10 text-lg",
    lg: "h-12 w-12 text-xl",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        className
      )}
    >
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className={cn(
              "inline-flex items-center justify-center rounded-xl",
              "border border-slate-800 bg-slate-900",
              "text-slate-300 transition-all duration-300",
              "hover:border-cyan-500 hover:text-cyan-400",
              sizes[size]
            )}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}