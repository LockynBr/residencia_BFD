import {
  LayoutDashboard,
  Users,
  Stethoscope,
  FileText,
  Settings,
} from "lucide-react";

export const sidebarMainData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },

  {
    title: "Usuários",
    icon: Users,
    path: "/usuarios",
  },

  {
    title: "Diagnósticos",
    icon: Stethoscope,
    path: "/diagnosticos",
  },

  {
    title: "Pacientes",
    icon: Users,
    path: "/pacientes",
  },

  {
    title: "Relatórios",
    icon: FileText,
    path: "/relatorios",
  },

  {
    title: "Sistema",
    icon: Settings,
    path: "/sistema",
  },
];