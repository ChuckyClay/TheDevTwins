export default function FormField({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  rows = 5,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        />
      )}
    </div>
  );
}