export default function FormField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = "",
  type = "text",
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

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full
          px-3
          py-2
          rounded-md
          bg-white
          body-font
          text-base
          placeholder:text-neutral-400
          focus:outline-none
          focus:ring-2
          focus:ring-green-500

          ${
            error
              ? "border border-red-500"
              : "border border-neutral-200"
          }
        `}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}