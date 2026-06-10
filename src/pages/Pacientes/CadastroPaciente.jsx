import { useState } from "react";
import DadosPessoais from "../../components/forms/pacienteForms/DadosPessoais";
import Endereco from "../../components/forms/pacienteForms/Endereco";
import DadosClinicos from "../../components/forms/pacienteForms/DadosClinicos";


export default function CadastroPaciente() {
  const [aba, setAba] = useState(1);
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nomeCompleto: "",
    cpf: "",
    dataNascimento: "",
    sexoBiologico: "",
    telefone: "",
    email: "",
    // Endereço
    logradouro: "",
    numero: "",
    complemento: "",
    cep: "",
    bairro: "",
    estado: "",
    cidade: "",
    // Dados Clínicos
    hospitalClinica: "",
    medicoSolicitante: "",
    crm: "",
    dataExame: "",
    tipoExame: "",
    observacoes: "",
    alergias: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const avancar = () => {
    if (aba < 3) {
      setAba(aba + 1);
    }
  };

  const voltar = () => {
    if (aba > 1) {
      setAba(aba - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados completos:", formData);
    alert("Paciente cadastrado com sucesso!");
    // Aqui você envia para o backend
  };

  const cancelar = () => {
    if (window.confirm("Tem certeza que deseja cancelar? Os dados serão perdidos.")) {
      window.history.back();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header com gradiente */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 p-6">
        <h1 className="text-2xl font-bold text-white">Cadastro de paciente</h1>
        <p className="text-green-100 mt-1">
          Preencha os dados abaixo para registrar um novo paciente.
        </p>
      </div>

      {/* Indicador de abas */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <div
          className={`flex-1 text-center py-3 font-medium ${
            aba === 1
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          Dados Pessoais
        </div>
        <div
          className={`flex-1 text-center py-3 font-medium ${
            aba === 2
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          Endereço
        </div>
        <div
          className={`flex-1 text-center py-3 font-medium ${
            aba === 3
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          Dados Clínicos
        </div>
      </div>

      {/* Conteúdo das abas - SEM FORM AQUI */}
      {aba === 1 && (
        <DadosPessoais formData={formData} handleChange={handleChange} />
      )}
      {aba === 2 && (
        <Endereco formData={formData} handleChange={handleChange} />
      )}
      {aba === 3 && (
        <DadosClinicos formData={formData} handleChange={handleChange} />
      )}

      {/* Botões - SEM FORM TAMBÉM */}
      <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
        <button
          type="button"
          onClick={cancelar}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Cancelar
        </button>

        {aba > 1 && (
          <button
            type="button"
            onClick={voltar}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Voltar
          </button>
        )}

        {aba < 3 ? (
          <button
            type="button"
            onClick={avancar}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Avançar
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Confirmar
          </button>
        )}
      </div>
    </div>
  );
}