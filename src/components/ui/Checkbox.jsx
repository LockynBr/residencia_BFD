//componente de checkbox estilizado para ser usado em formulários, com aparência personalizada

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
}) {
  return (
    <label
      htmlFor={id}
      className="
        flex
        items-center
        gap-2
        cursor-pointer
      "
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="
          h-4
          w-4
        "
      />

      <span
        className="
          text-sm
          text-blue-900
        "
      >
        {label}
      </span>
    </label>
  );
}