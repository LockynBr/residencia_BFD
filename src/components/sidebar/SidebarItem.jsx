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
            ? "bg-white/20 text-white"
            : "text-white hover:bg-white/10"
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