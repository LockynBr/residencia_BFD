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
          text-neutral-400
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
          border-neutral-200
          rounded-lg
          bg-white
          text-green-900
          body-font
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
        "
      />
    </div>
  );
}