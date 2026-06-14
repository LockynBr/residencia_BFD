import { useState } from "react";
import DadosPessoais from "../../components/forms/pacienteForms/DadosPessoais";
import Endereco from "../../components/forms/pacienteForms/Endereco";
import DadosClinicos from "../../components/forms/pacienteForms/DadosClinicos";
import ArquivoExame from "../../components/forms/pacienteForms/ArquivoExame";

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
    // Arquivo do Exame
    arquivoExame: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const avancar = () => {
    if (aba < 4) {
      setAba(aba + 1);
    }
  };

  const voltar = () => {
    if (aba > 1) {
      setAba(aba - 1);
    }
  };

  const handleSubmit = () => {
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
      {/* Header com gradiente usando cores do tema */}
      <div className="bg-gradient-to-r from-green-800 to-green-500 p-6">
        <h1 className="text-2xl font-bold text-white heading-font">
          Cadastro de paciente
        </h1>
        <p className="text-neutral-100 body-font mt-1">
          Preencha os dados abaixo para registrar um novo paciente.
        </p>
      </div>

      {/* Indicador de abas */}
      <div className="flex border-b border-neutral-200 bg-neutral-100">
        <button
          onClick={() => setAba(1)}
          className={`flex-1 text-center py-3 font-medium transition-all duration-200 body-font ${
            aba === 1
              ? "text-green-700 border-b-2 border-green-700 bg-white"
              : "text-green-900 hover:text-green-600 hover:bg-neutral-50"
          }`}
        >
          Dados Pessoais
        </button>
        <button
          onClick={() => setAba(2)}
          className={`flex-1 text-center py-3 font-medium transition-all duration-200 body-font ${
            aba === 2
              ? "text-green-700 border-b-2 border-green-700 bg-white"
              : "text-green-900 hover:text-green-600 hover:bg-neutral-50"
          }`}
        >
          Endereço
        </button>
        <button
          onClick={() => setAba(3)}
          className={`flex-1 text-center py-3 font-medium transition-all duration-200 body-font ${
            aba === 3
              ? "text-green-700 border-b-2 border-green-700 bg-white"
              : "text-green-900 hover:text-green-600 hover:bg-neutral-50"
          }`}
        >
          Dados Clínicos
        </button>
        <button
          onClick={() => setAba(4)}
          className={`flex-1 text-center py-3 font-medium transition-all duration-200 body-font ${
            aba === 4
              ? "text-green-700 border-b-2 border-green-700 bg-white"
              : "text-green-900 hover:text-green-600 hover:bg-neutral-50"
          }`}
        >
          Arquivo do Exame
        </button>
      </div>

      {/* Conteúdo das abas */}
      <div className="bg-white">
        {aba === 1 && (
          <DadosPessoais formData={formData} handleChange={handleChange} />
        )}
        {aba === 2 && (
          <Endereco formData={formData} handleChange={handleChange} />
        )}
        {aba === 3 && (
          <DadosClinicos formData={formData} handleChange={handleChange} />
        )}
        {aba === 4 && (
          <ArquivoExame 
            formData={formData} 
            handleChange={handleChange}
            setFormData={setFormData}
          />
        )}
      </div>

      {/* Botões */}
      <div className="flex justify-end gap-3 p-6 border-t border-neutral-200 bg-neutral-100">
        <button
          type="button"
          onClick={cancelar}
          className="px-4 py-2 border border-neutral-200 rounded-md text-green-900 bg-white hover:bg-neutral-100 transition-colors cursor-pointer body-font"
        >
          Cancelar
        </button>

        {aba > 1 && (
          <button
            type="button"
            onClick={voltar}
            className="px-4 py-2 border border-neutral-200 rounded-md text-green-900 bg-white hover:bg-neutral-100 transition-colors cursor-pointer body-font"
          >
            Voltar
          </button>
        )}

        {aba < 4 ? (
          <button
            type="button"
            onClick={avancar}
            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors cursor-pointer font-medium body-font"
          >
            Avançar
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors cursor-pointer font-medium body-font"
          >
            Confirmar
          </button>
        )}
      </div>
    </div>
  );
}