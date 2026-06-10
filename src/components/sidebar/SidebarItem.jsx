import { NavLink } from "react-router-dom";

export default function SidebarItem({
  item,
  collapsed,
}) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => `
        flex
        items-center
        gap-3

        px-4
        py-3

        rounded-2xl

        overflow-hidden

        transition-all
        duration-300

        ${
          isActive
            ? "bg-[var(--color-green-500)]/50 text-[var(--color-neutral-100)]"
            : "text-[var(--color-neutral-200)] hover:bg-[var(--color-green-500)]/40"
        }
      `}
    >
      <div
        className="
          w-6
          flex
          justify-center
          shrink-0
        "
      >
        <Icon size={22} />
      </div>

      <span
        className={`
          whitespace-nowrap
          overflow-hidden

          transition-all
          duration-300

          ${
            collapsed
              ? "w-0 opacity-0"
              : "w-auto opacity-100"
          }
        `}
      >
        {item.title}
      </span>
    </NavLink>
  );
}