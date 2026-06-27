import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Processados Corretamente', value: 45, color: '#43a047' },
  { name: 'Aguardando Revisão', value: 25, color: '#fbc02d' },
  { name: 'Laudos Gerados', value: 15, color: '#64b5f6' },
  { name: 'Não Processados Corretamente', value: 15, color: '#ef5350' },
];

export default function StatusChart( {data} ) {
  return (
    <div className="bg-secondary-100/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-sm h-[320px] relative transition-all duration-300 hover:bg-secondary-100/90 hover:translate-y-[-4px] hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-bold text-sm">Status dos Exames</h3>
        <span className="text-gray-300 cursor-pointer hover:text-gray-500 transition-colors">•••</span>
      </div>
      
      <div className="flex items-center justify-between h-[80%]">
        <div className="w-[50%] h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={55}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-[50%] flex flex-col gap-3 pl-2">
          {data?.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-[11px] font-bold text-gray-700 leading-tight">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}