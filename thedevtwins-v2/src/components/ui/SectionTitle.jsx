import Badge from "./Badge";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={`
        mb-16
        ${alignment[align]}
        ${className}
      `}
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
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}