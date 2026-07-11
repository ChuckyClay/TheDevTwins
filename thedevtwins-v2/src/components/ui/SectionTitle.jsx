import Badge from "@/components/ui/Badge";
import { cn } from "@/utils/cn";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const subtitleAlignment = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <div
      className={cn(
        "mb-16",
        alignment[align],
        className
      )}
    >
      {badge && (
        <Badge className="mb-5">
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg",
            subtitleAlignment[align]
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}