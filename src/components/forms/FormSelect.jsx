export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  required = false,
  disabled = false,
}) {
  return (
    <div>
      <label className="block text-green-900 body-font text-sm font-medium mb-1">
        {label}

        {required && (
          <span className="text-danger ml-1">*</span>
        )}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full
          px-3
          py-2
          rounded-md
          bg-white
          body-font
          text-base
          focus:outline-none
          focus:ring-2
          focus:ring-green-500

          ${
            error
              ? "border border-red-500"
              : "border border-neutral-200"
          }
        `}
      >
        <option value="">Selecione</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}