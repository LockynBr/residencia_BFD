import {
  Bot,
  UserRound,
  LogOut,
} from "lucide-react";

export const sidebarFooterData = [
  {
    title: "IA",
    icon: Bot,
    path: "/ia",
  },

  {
    title: "Conta",
    icon: UserRound,
    children: [
      {
        title: "Logout",
        icon: LogOut,
        action: "logout",
      },
    ],
  },
];