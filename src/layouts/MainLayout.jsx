import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div
      className="flex 
    bg-gradient-to-b
      from-white
      via-[var(--color-neutral-100)]
    to-[var(--color-green-500)] 
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
