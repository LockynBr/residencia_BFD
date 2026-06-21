export default function FormTextArea({
  label,
  name,
  value,
  onChange,
  error,
  rows = 3,
  placeholder = "",
}) {
  return (
    <div>
      <label className="block text-green-900 body-font text-sm font-medium mb-1">
        {label}
      </label>

      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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