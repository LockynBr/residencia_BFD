import { useState } from "react";

import { Menu, ChevronLeft } from "lucide-react";

import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { sidebarMainData } from "./SidebarMainData";
import { sidebarFooterData } from "./SidebarFooterData";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        min-h-screen
        h-auto
        transition-all
        duration-300
        p-5

        ${collapsed ? "w-32" : "w-72"}
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

    min-h-[140vh]

    flex
    flex-col
  "
>
  <button
    onClick={() => setCollapsed(!collapsed)}
    className={`
      mb-6
      text-[var(--color-neutral-100)]

      ${
        collapsed
          ? "w-full flex justify-center"
          : "self-start"
      }
    `}
  >
    {collapsed ? (
      <Menu />
    ) : (
      <ChevronLeft />
    )}
  </button>

  <SidebarHeader
    collapsed={collapsed}
  />

  <div className="flex flex-col flex-1">
    <SidebarMenu
      items={sidebarMainData}
      collapsed={collapsed}
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
      />
    </div>
  </div>
</div>
    </aside>
  );
}
