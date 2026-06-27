import { useEffect, useState } from "react";

import Cards from "../../components/Dashboard/Cards";
import StatusChart from "../../components/Dashboard/StatusChart";
import LineChart from "../../components/Dashboard/LineChart";
import BarChart from "../../components/Dashboard/BarChart";
import AlertsChart from "../../components/Dashboard/AlertsChart";

import { buscarDashboard } from "../../services/dashboardService";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function carregarDashboard() {
      try {
        const data = await buscarDashboard();

        setDashboardData(data);
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      }
    }

    carregarDashboard();
  }, []);

  if (!dashboardData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Carregando dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 transparent min-h-screen w-full flex flex-col gap-6 font-sans">

      <Cards data={dashboardData.cards} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <StatusChart data={dashboardData.statusExames} />
        </div>

        <div className="lg:col-span-2">
          <LineChart data={dashboardData.examesPorDia} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <BarChart data={dashboardData.tiposExames} />
        </div>

        <div className="lg:col-span-2">
          <AlertsChart alerts={dashboardData.alertas} />
        </div>
      </div>

    </div>
  );
}