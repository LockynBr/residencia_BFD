import { useState, useEffect } from "react";
import { estadosBrasileiros, cidadesPorEstado } from "/src/data/brasil.js";

import FormField from "../FormFields";
import FormSelect from "../FormSelect";

export default function Endereco({ formData, handleChange, errors }) {
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
      <FormField
        label="Logradouro"
        name="logradouro"
        value={formData.logradouro}
        onChange={handleChange}
        error={errors?.logradouro}
        placeholder="Nome da rua, avenida, etc."
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Número"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
          placeholder="Número"
        />
        <FormField
          label="Complemento"
          name="complemento"
          value={formData.complemento}
          onChange={handleChange}
          placeholder="Bloco 2, apartamento 005"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="CEP"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          error={errors?.cep}
          placeholder="00000-000"
        />
        <FormField
          label="Bairro"
          name="bairro"
          value={formData.bairro}
          onChange={handleChange}
          error={errors?.bairro}
          placeholder="Bairro"
        />
        
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormSelect
          label="Estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          error={errors?.estado}
          options={estadosBrasileiros.map((estado) => ({
            value: estado.sigla,
            label: estado.nome,
          }))}
        />
        <FormSelect
          label="Cidade"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          error={errors?.cidade}
          disabled={!formData.estado}
          options={cidades.map((cidade) => ({
            value: cidade,
            label: cidade,
          }))}
        />
      </div>
    </div>
  );
}
