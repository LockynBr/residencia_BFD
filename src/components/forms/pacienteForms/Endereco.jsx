import { useState, useEffect } from "react";

// Dados simulados de estados e cidades
const estadosBrasileiros = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
];

const cidadesPorEstado = {
  SP: ["São Paulo", "Campinas", "Santos", "Ribeirão Preto", "Sorocaba"],
  RJ: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
  PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"],
};

export default function Endereco({ formData, handleChange }) {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    if (formData.estado) {
      setCidades(cidadesPorEstado[formData.estado] || []);
    } else {
      setCidades([]);
    }
  }, [formData.estado]);

  return (
    <div className="p-6 space-y-4">
      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Logradouro
        </label>
        <input
          type="text"
          name="logradouro"
          value={formData.logradouro}
          onChange={handleChange}
          placeholder="Nome da rua, avenida, etc."
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-green-900 body-font text-sm font-medium mb-1">
            Número
          </label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="Número"
            className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
          />
        </div>
        <div>
          <label className="block text-green-900 body-font text-sm font-medium mb-1">
            Complemento
          </label>
          <input
            type="text"
            name="complemento"
            value={formData.complemento}
            onChange={handleChange}
            placeholder="Bloco 2, apartamento 005"
            className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-green-900 body-font text-sm font-medium mb-1">
            CEP
          </label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            placeholder="00000-000"
            className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
          />
        </div>
        <div>
          <label className="block text-green-900 body-font text-sm font-medium mb-1">
            Bairro
          </label>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            placeholder="Bairro"
            className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-green-900 body-font text-sm font-medium mb-1">
            Estado
          </label>
          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base"
          >
            <option value="">Selecione</option>
            {estadosBrasileiros.map((estado) => (
              <option key={estado.sigla} value={estado.sigla}>
                {estado.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-green-900 body-font text-sm font-medium mb-1">
            Cidade
          </label>
          <select
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            disabled={!formData.estado}
            className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed"
          >
            <option value="">Selecione</option>
            {cidades.map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}