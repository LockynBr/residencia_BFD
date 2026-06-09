import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";

import Usuarios from "../pages/Users/Usuarios";
import CreateUser from "../pages/Users/CreateUser";

import Pacientes from "../pages/Pacientes/Pacientes";
import Diagnosticos from "../pages/Diagnosticos/Diagnosticos";
import Relatorios from "../pages/Relatorios/Relatorios";
import Sistema from "../pages/Sistema/Sistema";
import IA from "../pages/IA/IA";
import Conta from "../pages/Conta/Conta";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/usuarios/novo" element={<CreateUser />} />

        <Route path="/pacientes" element={<Pacientes />} />

        <Route path="/diagnosticos" element={<Diagnosticos />} />

        <Route path="/relatorios" element={<Relatorios />} />

        <Route path="/sistema" element={<Sistema />} />

        <Route path="/ia" element={<IA />} />

        <Route path="/conta" element={<Conta />} />
      </Route>
    </Routes>
  );
}
