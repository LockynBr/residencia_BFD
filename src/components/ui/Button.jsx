//componente de botão estilizado para ser usado em formulários, com aparência personalizada

export default function Button({
  children,
  type = "button",
}) {
  return (
    <button
      type={type}
      className="
        h-11
        w-64
        rounded-xl

        bg-[var(--color-green-500)]
        text-[var(--color-neutral-100)]
        text-sm
        font-medium

        shadow-md
        transition

        hover:bg-[var(--color-green-700)]

        cursor-pointer
      "
    >
      {children}
    </button>
  );
}