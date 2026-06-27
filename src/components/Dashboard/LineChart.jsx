import React from 'react';
import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';

// const data = [
//   { name: 'Seg', valor: 58, color: '#43a047' },
//   { name: 'Ter', valor: 81, color: '#43a047' },
//   { name: 'Qua', valor: 68, color: '#fbc02d' },
//   { name: 'Qui', valor: 15, color: '#ef5350' },
//   { name: 'Sex', valor: 62, color: '#43a047' },
//   { name: 'Sáb', valor: 63, color: '#43a047' },
//   { name: 'Dom', valor: 57, color: '#43a047' },
// ];

export default function LineChart( {data} ) {
  return (
    <div className="bg-secondary-100/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-sm h-[320px] transition-all duration-300 hover:bg-secondary-100/90 hover:translate-y-[-4px] hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-bold text-sm">Exames Processados por Dia</h3>
        <span className="text-gray-300 cursor-pointer hover:text-gray-500 transition-colors">•••</span>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <ReLineChart data={data ?? []} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#e5e7eb/50" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 500 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="valor" 
            stroke="#43a047" 
            strokeWidth={2}
            dot={(props) => {
              const { cx, cy, payload } = props;
              return <Dot cx={cx} cy={cy} r={5} fill={payload.color} stroke={payload.color} />;
            }}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
}