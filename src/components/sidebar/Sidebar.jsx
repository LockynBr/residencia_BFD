import { useState } from "react";

import { Menu, ChevronLeft } from "lucide-react";

import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import { sidebarMainData } from "./sidebarMainData";
import { sidebarFooterData } from "./sidebarFooterData";
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
    rounded-[32px]

    bg-gradient-to-b
    from-green-400
    via-green-600
    to-green-950

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
      text-white

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
