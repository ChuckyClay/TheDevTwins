import { memo } from "react";

function Textarea({
  label,
  error,
  className = "",
  id,
  rows = 5,
  resize = false,
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-300"
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        rows={rows}
        className={`
          w-full rounded-xl border border-slate-700
          bg-slate-900 px-4 py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all duration-300
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
          disabled:cursor-not-allowed
          disabled:opacity-60
          ${resize ? "resize-y" : "resize-none"}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default memo(Textarea);