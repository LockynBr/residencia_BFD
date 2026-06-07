//componente de botão estilizado para ser usado como link, com aparência de texto clicável

export default function LinkButton({
  children,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        text-sm
        font-medium
        text-[var(--color-primary)]
        transition
        hover:underline
      "
    >
      {children}
    </button>
  );
}