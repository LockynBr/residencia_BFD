import SidebarItem from "./SidebarItem";
import SidebarSubmenu from "./SidebarSubmenu";

export default function SidebarMenu({
  items,
  collapsed,
  setCollapsed,
  openMenu,
  toggleMenu,
}) {
  return (
    <nav className="flex flex-col gap-2">
      {items.map((item) =>
        item.children ? (
          <SidebarSubmenu
            item={item}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            openMenu={openMenu}
            toggleMenu={toggleMenu}
          />
        ) : (
          <SidebarItem key={item.title} item={item} collapsed={collapsed} />
        ),
      )}
    </nav>
  );
}
