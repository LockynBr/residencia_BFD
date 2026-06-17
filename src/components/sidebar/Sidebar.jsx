import { useState, useEffect, useRef } from "react";

import { Menu, ChevronLeft } from "lucide-react";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

import { sidebarMainData } from "./SidebarMainData";
import { sidebarFooterData } from "./SidebarFooterData";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setCollapsed(true);
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (title) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  return (
    <aside
      ref={sidebarRef}
      className={`
        transition-all
        duration-300
        p-5

        ${collapsed ? "w-34" : "w-72"}
      `}
    >
      <div
        className="
          rounded-3xl

          bg-gradient-to-b
          from-[var(--color-green-700)]
          via-[var(--color-green-800)]
          to-[var(--color-green-800)]

          shadow-[7px_1px_109px_12px_var(--color-green-500)]

          p-5

          min-h-[calc(120vh-40px)]

          flex
          flex-col
        "
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`
            mb-6
            text-[var(--color-neutral-100)]

            ${collapsed ? "w-full flex justify-center" : "self-start"}
          `}
        >
          {collapsed ? <Menu /> : <ChevronLeft />}
        </button>

        <SidebarHeader collapsed={collapsed} />

        <div className="flex flex-col flex-1">
          <SidebarMenu
            items={sidebarMainData}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            openMenu={openMenu}
            toggleMenu={toggleMenu}
          />

          <div
            className="
              mt-auto
              pt-4
              border-t
              border-white/20
            "
          >
            <SidebarMenu
  items={sidebarFooterData}
  collapsed={collapsed}
  setCollapsed={setCollapsed}
  openMenu={openMenu}
  toggleMenu={toggleMenu}
/>
          </div>
        </div>
      </div>
    </aside>
  );
}
