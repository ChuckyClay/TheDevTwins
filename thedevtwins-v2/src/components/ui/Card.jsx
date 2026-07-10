export default function Card({
  children,
  className = "",
  hover = true,
  bordered = true,
  padding = "md",
  as: Component = "div",
  onClick,
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <Component
      onClick={onClick}
      className={`
        rounded-2xl
        bg-slate-900
        transition-all
        duration-300
        ${bordered ? "border border-slate-800" : ""}
        ${hover ? "hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10" : ""}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}