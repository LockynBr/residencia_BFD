export default function Switch({ checked, onChange, disabled = false }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`
        relative
        inline-flex
        h-8
        w-14
        items-center
        rounded-full
        transition-colors
        duration-200
        cursor-pointer
        ${checked ? 'bg-[var(--color-green-500)]' : 'bg-gray-300'}
      `}
    >
      <span
        className={`
          inline-block
          h-7
          w-7
          transform
          rounded-full
          bg-white
          transition-transform
          duration-200
          ${checked ? 'translate-x-7' : 'translate-x-0.5'}
        `}
      />
    </button>
  );
}
