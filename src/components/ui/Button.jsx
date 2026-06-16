export default function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}) {
  const variants = {
    primary: `
      bg-[var(--color-green-500)]
      text-[var(--color-text-primary)]
      hover:bg-[var(--color-green-700)]
    `,

    secondary: `
      bg-[var(--color-green-500)]
      text-[var(--color-text-primary)]
      hover:opacity-90
    `,

    danger: `
      bg-[var(--color-danger)]
      text-[var(--color-text-primary)]
      hover:opacity-90
    `,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        h-11
        w-64
        rounded-xl

        text-sm
        font-medium

        shadow-md
        transition

        cursor-pointer

        disabled:cursor-not-allowed
        disabled:opacity-50

        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}