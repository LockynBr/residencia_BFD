import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div
      className="flex 
    bg-gradient-to-tr
      from-[var(--color-green-200)]
      via-[var(--color-green-200)]
    to-[var(--color-neutral-100)]
    min-h-screen"
    >
      <Sidebar />

      <main
        className="
          flex-1
          p-8
          overflow-auto
        "
      >
        <Outlet />
      </main>
    </div>
  );
}
