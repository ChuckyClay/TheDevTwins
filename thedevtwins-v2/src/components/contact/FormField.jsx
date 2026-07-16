export default function FormField({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  rows = 5,
  value,
  onChange,
  options = [],
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-3 flex items-center gap-2 font-medium text-slate-300"
      >
        {Icon && (
          <Icon
            size={18}
            className="text-cyan-400"
          />
        )}

        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
        >
          <option value="">
            Select...
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
        />
      )}

    </div>
  );
}