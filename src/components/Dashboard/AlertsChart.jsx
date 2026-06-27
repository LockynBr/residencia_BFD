import React from 'react';
import { XCircle, AlertTriangle, FileText, Clock } from 'lucide-react';

// const alerts = [
//   { id: 1, text: 'Exames não processados corretamente', count: 12, icon: <XCircle className="w-5 h-5 text-red-500" />, textCol: 'text-red-500' },
//   { id: 2, text: 'Pacientes que não retiraram os exames', count: 8, icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, textCol: 'text-amber-500' },
//   { id: 3, text: 'Aguardando análise IA e revisão médica', count: 4, icon: <FileText className="w-5 h-5 text-orange-500" />, textCol: 'text-orange-500' },
//   { id: 4, text: 'Exames em processamento', count: 15, icon: <Clock className="w-5 h-5 text-blue-500" />, textCol: 'text-blue-500' },
// ];

const alertConfig = {
  red: {
    icon: <XCircle className="w-5 h-5 text-red-500" />,
    textCol: "text-red-500",
  },

  yellow: {
    icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    textCol: "text-amber-500",
  },

  orange: {
    icon: <FileText className="w-5 h-5 text-orange-500" />,
    textCol: "text-orange-500",
  },

  blue: {
    icon: <Clock className="w-5 h-5 text-blue-500" />,
    textCol: "text-blue-500",
  },
};

export default function AlertsChart({ alerts = [] }) {
  return (
    <div className="bg-secondary-100/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-sm h-[340px] flex flex-col transition-all duration-300 hover:bg-secondary-100/90 hover:translate-y-[-4px] hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-bold text-sm">Alertas e Pendências</h3>
        <span className="text-gray-300 cursor-pointer hover:text-gray-500 transition-colors">•••</span>
      </div>
      
      <div className="flex flex-col gap-2.5 flex-1 justify-center">
        {alerts.map((alert) => {
  const config = alertConfig[alert.color];

  return (
    <div
      key={alert.id}
      className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-white/20 shadow-xs"
    >
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-white rounded-full shadow-sm flex items-center justify-center">
          {config.icon}
        </div>

        <span className="text-xs font-semibold text-gray-700">
          {alert.text}
        </span>
      </div>

      <span className={`text-sm font-bold pr-2 ${config.textCol}`}>
        {alert.count}
      </span>
    </div>
  );
})}
      </div>
    </div>
  );
}