import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function SidebarSubmenu({
  item,
  collapsed,
  setCollapsed,
  openMenu,
  toggleMenu,
}) {
  const location = useLocation();

  const hasActiveChild = item.children.some(
    (child) => child.path === location.pathname,
  );

  const Icon = item.icon;

  const isOpen = openMenu === item.title;

  return (
    <div>
      <button
        onClick={() => {
          if (collapsed) {
            setCollapsed(false);

            setTimeout(() => {
              toggleMenu(item.title);
            }, 250);

            return;
          }

          toggleMenu(item.title);
        }}
        className={`
  w-full
  flex
  items-center
  justify-between
  cursor-pointer

  px-4
  py-3

  rounded-2xl

  transition-all
  duration-300

  ${
    hasActiveChild
      ? "bg-[var(--color-green-500)]/20 text-white"
      : "text-[var(--color-neutral-200)] hover:bg-[var(--color-green-500)]/40"
  }
`}
      >
        <div
          className="
            flex
            items-center
            gap-3
            overflow-hidden
          "
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

              ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
            `}
          >
            {item.title}
          </span>
        </div>

        {!collapsed && (
          <ChevronDown
            size={16}
            className={`
              shrink-0
              transition-transform
              duration-500

              ${isOpen ? "rotate-180" : ""}
            `}
          />
        )}
      </button>

      {!collapsed && isOpen && (
        <div
          className="
              ml-10
              mt-2

              flex
              flex-col
              gap-1
            "
        >
          {item.children.map((child) => {
            const ChildIcon = child.icon;

            return (
              <NavLink
                key={child.path}
                to={child.path}
                end={child.path === "/usuarios" || child.path === "/pacientes"}
                className={({ isActive }) => `
                      flex
                      items-center
                      gap-2

                      px-3
                      py-2

                      rounded-xl

                      text-sm

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-[var(--color-green-500)]/50 text-white"
                          : "text-[var(--color-neutral-200)] hover:bg-[var(--color-green-500)]/30"
                      }
                    `}
              >
                <ChildIcon size={16} />

                <span>{child.title}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
