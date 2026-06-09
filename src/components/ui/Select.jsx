export default function Select({
  label,
  value,
  onChange,
  children,
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        className="
          text-xs
          font-medium
          text-[var(--color-green-700)]
        "
      >
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="
          h-11
          w-full

          rounded-xl
          border
          border-[var(--color-green-500)]

          px-3

          text-sm
          outline-none
          transition

          focus:border-[var(--color-green-500)]
          focus:ring-2
          focus:ring-[var(--color-green-500)]
        "
      >
        {children}
      </select>
    </div>
  );
}