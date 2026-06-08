import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function SidebarSubmenu({
  item,
  collapsed,
}) {
  const [open, setOpen] = useState(false);

  const Icon = item.icon;

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-3
          rounded-2xl
          text-white
          hover:bg-white/10
          transition-all
        "
      >
        <div className="flex items-center gap-3">
          <Icon size={20} />

          {!collapsed && (
            <span>{item.title}</span>
          )}
        </div>

        {!collapsed && (
          <ChevronDown
            size={18}
            className={`
              transition-transform
              ${open ? "rotate-180" : ""}
            `}
          />
        )}
      </button>

      {!collapsed && open && (
        <div
          className="
            ml-10
            mt-2
            flex
            flex-col
            gap-2
          "
        >
          {item.children.map((child) => (
            <NavLink
              key={child.title}
              to={child.path}
              className={({ isActive }) =>
                `
                  text-sm
                  transition-all

                  ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white"
                  }
                `
              }
            >
              {child.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}