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

        ${
          collapsed
            ? "justify-center"
            : ""
        }

        gap-3
        px-4
        py-3
        rounded-2xl
        transition-all

        ${
          isActive
            ? "bg-[var(--color-green-500)]/50 text-[var(--color-neutral-100)]"
            : "text-[var(--color-neutral-200)] hover:bg-[var(--color-green-500)]/40"
        }
      `}
    >
      <Icon
        size={22}
        className="shrink-0"
      />

      {!collapsed && (
        <span className="whitespace-nowrap">
          {item.title}
        </span>
      )}
    </NavLink>
  );
}