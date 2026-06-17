import {
  LayoutDashboard,
  Users,
  UserPlus,
  Stethoscope,
  FileText,
  Settings,
  UserRound,
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
    children: [
      {
        title: "Lista Usuários",
        icon: Users,
        path: "/usuarios",
      },
      {
        title: "Novo Usuário",
        icon: UserPlus,
        path: "/usuarios/novo",
      },
    ],
  },

  {
    title: "Pacientes",
    icon: Stethoscope,
    children: [
      {
        title: "Lista Pacientes",
        icon: Stethoscope,
        path: "/pacientes",
      },
      {
        title: "Novo Paciente",
        icon: UserPlus,
        path: "/pacientes/cadastro",
      },
    ],
  },

  {
    title: "Diagnósticos",
    icon: FileText,
    path: "/diagnosticos",
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