import React from "react";
import {
  CheckCircle,
  Clock,
  FileText,
  Calendar,
  Filter,
  ChevronDown,
} from "lucide-react";

export default function Cards({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* 120 Exames Concluídos - Mantido original */}
      <div className="p-5 text-white bg-green-700 border border-green-800 rounded-2xl flex justify-between items-start shadow-sm relative transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
        <div>
          <h3 className="text-4xl font-bold mb-1">
            {data?.examesConcluidos ?? 0}
          </h3>
          <p className="text-xs font-semibold text-neutral-100/90">
            Exames Concluídos
          </p>
        </div>
        <div className="p-1.5 rounded-full text-white bg-white/20">
          <CheckCircle className="w-5 h-5" />
        </div>
      </div>

      {/* 75 Aguardando Análise - Mantido original */}
      <div className="p-5 text-white bg-green-500 border border-green-700 rounded-2xl flex justify-between items-start shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
        <div>
          <h3 className="text-4xl font-bold mb-1">
            {data?.aguardandoAnalise ?? 0}
          </h3>
          <p className="text-xs font-bold text-neutral-100/90">
            Aguardando Análise
          </p>
        </div>
        <div className="text-white p-1">
          <Clock className="w-6 h-6" />
        </div>
      </div>

      {/* 56 Laudos Gerados - Mantido original com fundo bg-green-200 */}
      <div className="p-5 text-white bg-green-200 border border-green-500 rounded-2xl flex justify-between items-start shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
        <div>
          <h3 className="text-4xl font-bold mb-1">
            {data?.laudosGerados ?? 0}
          </h3>
          <p className="text-xs font-bold text-neutral-100/90">
            Laudos Gerados
          </p>
        </div>
        <div className="p-1.5 rounded-full text-white bg-white/20">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      {/* Período - Atualizado para o estilo translúcido */}
      <div className="bg-secondary-100/70 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-sm flex items-center gap-3 transition-all duration-300 hover:bg-secondary-100/90 hover:translate-y-[-4px] hover:shadow-lg">
        <div className="text-gray-700">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            Período
          </p>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs font-bold text-gray-600">
              01/05/2025 - 31/05/2025
            </span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Filtros - Atualizado para o estilo translúcido */}
      <div className="bg-secondary-100/70 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-sm flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-secondary-100/90 hover:translate-y-[-4px] hover:shadow-lg">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-700" />
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Filtros
            </p>
            <p className="text-xs font-bold text-gray-600">
              Selecionar filtros
            </p>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}
