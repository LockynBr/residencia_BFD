//componentes de input reutilizáveis, como campos de texto, senhas, etc.

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon: LeftIcon,
  rightIcon: RightIcon,
  onRightIconClick,
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        className="
          text-xs
          font-medium
          text-green-900
        "
      >
        {label}
      </label>

      <div className="relative w-full">
        {LeftIcon && (
          <LeftIcon
            size={20}
            className="
              absolute
              left-3
              top-1/2
              z-10
              -translate-y-1/2
              text-green-900
            "
          />
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            h-11
            w-full
            rounded-xl
            border
            border-green-500

            pl-10
            pr-10

            text-sm
            outline-none
            transition

            focus:border-green-700
            focus:ring-2
            focus:ring-green-200
          "
        />

        {RightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            aria-label="Mostrar ou ocultar senha"
            className="
              absolute
              right-3
              top-1/2
              z-10
              -translate-y-1/2

              cursor-pointer

              text-green-900
              transition-colors
              hover:text-green-700
            "
          >
            <RightIcon size={20} />
          </button>
        )}
      </div>
    </div>
  );
}