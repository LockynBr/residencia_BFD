import SidebarItem from "./SidebarItem";
import SidebarSubmenu from "./SidebarSubmenu";

export default function SidebarMenu({
  items,
  collapsed,
}) {
  return (
    <nav className="flex flex-col gap-2">
      {items.map((item) =>
        item.children ? (
          <SidebarSubmenu
            key={item.title}
            item={item}
            collapsed={collapsed}
          />
        ) : (
          <SidebarItem
            key={item.title}
            item={item}
            collapsed={collapsed}
          />
        )
      )}
    </nav>
  );
}