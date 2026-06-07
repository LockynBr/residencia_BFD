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

        bg-green-800
        text-white
        text-sm
        font-medium

        shadow-md
        transition

        hover:bg-green-900

        cursor-pointer
      "
    >
      {children}
    </button>
  );
}