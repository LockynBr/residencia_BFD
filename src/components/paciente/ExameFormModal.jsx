import { useState } from "react";

import DadosClinicos from "../forms/pacienteForms/DadosClinicos";
import ArquivoExame from "../forms/pacienteForms/ArquivoExame";

export default function ExameFormModal({
  paciente,
  onClose,
}) {
  const [formData, setFormData] = useState({
    hospitalClinica: "",
    medicoSolicitante: "",
    crm: "",
    dataExame: "",
    tipoExame: "",
    observacoes: "",
    alergias: "",
    arquivoExame: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSalvar = () => {
    console.log(
      "Paciente:",
      paciente.id,
      formData
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50">

  <div className="flex min-h-full items-start justify-center p-4 md:p-6">
      <div className="bg-white rounded-xl w-full max-w-4xl p-6 my-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">
            Adicionar Exame
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <DadosClinicos
          formData={formData}
          handleChange={handleChange}
        />

        <ArquivoExame
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md"
          >
            Cancelar
          </button>

          <button
            onClick={handleSalvar}
            className="px-4 py-2 bg-green-700 text-white rounded-md"
          >
            Salvar Exame
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}