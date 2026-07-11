import { cn } from "@/utils/cn";

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  className,
}) {
  const variants = {
    primary:
      "border border-cyan-500/30 bg-cyan-500/10 text-cyan-400",

    secondary:
      "border border-slate-700 bg-slate-800 text-slate-300",

    success:
      "border border-green-500/30 bg-green-500/10 text-green-400",

    warning:
      "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400",

    danger:
      "border border-red-500/30 bg-red-500/10 text-red-400",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const roundedStyles = {
    sm: "rounded",
    md: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors duration-300",
        variants[variant],
        sizes[size],
        roundedStyles[rounded],
        className
      )}
    >
      {children}
    </span>
  );
}