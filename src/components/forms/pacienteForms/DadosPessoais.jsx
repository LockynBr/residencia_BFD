import FormField from "../FormFields";
import FormSelect from "../FormSelect"

export default function DadosPessoais({ formData, handleChange, errors }) {
  return (
    <div className="p-6 space-y-4">
      <FormField
        label="Nome completo"
        name="nomeCompleto"
        value={formData.nomeCompleto}
        onChange={handleChange}
        error={errors.nomeCompleto}
        required
        placeholder="Nome completo do paciente"
      />

      <FormField
        label="CPF"
        name="cpf"
        value={formData.cpf}
        onChange={handleChange}
        error={errors.cpf}
        placeholder="000.000.000-00"
      />

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Data de nascimento
        </label>
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base"
        />
      </div>

      <div>
        
        <FormSelect
          label="Sexo biológico"
          name="sexoBiologico"
          value={formData.sexoBiologico}
          onChange={handleChange}
          options={[
            {
              value: "masculino",
              label: "Masculino",
            },
            {
              value: "feminino",
              label: "Feminino",
            },
          ]}
        />
      </div>

      <FormField
        label="Telefone"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        error={errors.telefone}
        placeholder="(99) 99999-9999"
      />

      <FormField
        label="E-mail"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="paciente@email.com"
      />
    </div>
  );
}
