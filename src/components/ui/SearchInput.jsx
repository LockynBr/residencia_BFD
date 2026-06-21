import { Search } from "lucide-react";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Pesquisar...",
  className = "",
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-[var(--color-green-500)]
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          pl-10
          pr-4
          py-2
          border
          border-[var(--color-white-400)]
          rounded-xl
          bg-[var(--color-white-100)]
          text-[var(--color-green-800)]
          body-font
          focus:outline-none
          focus:ring-1
          focus:ring-green-500/80
        "
      />
    </div>
  );
}