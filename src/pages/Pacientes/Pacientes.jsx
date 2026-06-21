import { useState } from "react";

import usePacientes from "../../hooks/usePacientes";

import PacienteCard from "../../components/paciente/PacienteCard";
import PacienteDetailsModal from "../../components/paciente/PacienteDetailsModal";
import ExameFormModal from "../../components/paciente/ExameFormModal";

import SearchInput from "../../components/ui/SearchInput";

export default function Pacientes() {
  const [search, setSearch] = useState("");

  const [pacienteSelecionado, setPacienteSelecionado] =
    useState(null);

  const [isDetailsOpen, setIsDetailsOpen] =
    useState(false);

  const [isExameOpen, setIsExameOpen] =
    useState(false);

  const { pacientes, loading } = usePacientes();

  const pacientesFiltrados = pacientes.filter(
    (paciente) =>
      paciente.nomeCompleto
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      paciente.cpf?.includes(search)
  );

  const handleVisualizar = (paciente) => {
    setPacienteSelecionado(paciente);
    setIsDetailsOpen(true);
  };

  const handleAdicionarExame = (paciente) => {
    setPacienteSelecionado(paciente);
    setIsExameOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-neutral-100)]">
          Pacientes ({pacientes.length})
        </h1>

        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome ou CPF..."
          className="md:w-96"
        />
      </div>

      <div
        className="
          
          p-6
        "
      >
        {loading ? (
          <p className="text-gray-500">
            Carregando pacientes...
          </p>
        ) : pacientesFiltrados.length === 0 ? (
          <p className="text-gray-500">
            Nenhum paciente encontrado.
          </p>
        ) : (
          <div className="space-y-3">
            {pacientesFiltrados.map((paciente) => (
              <PacienteCard
                key={paciente.id}
                paciente={paciente}
                onVisualizar={handleVisualizar}
                onAdicionarExame={handleAdicionarExame}
              />
            ))}
          </div>
        )}
      </div>

      {isDetailsOpen && pacienteSelecionado && (
        <PacienteDetailsModal
          paciente={pacienteSelecionado}
          onClose={() => {
            setIsDetailsOpen(false);
            setPacienteSelecionado(null);
          }}
        />
      )}

      {isExameOpen && pacienteSelecionado && (
        <ExameFormModal
          paciente={pacienteSelecionado}
          onClose={() => {
            setIsExameOpen(false);
            setPacienteSelecionado(null);
          }}
        />
      )}
    </div>
  );
}