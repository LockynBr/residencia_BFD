export default function DadosPessoais({ formData, handleChange }) {
  return (
    <div className="p-6 space-y-4">
      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Nome completo <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
          placeholder="Nome completo do paciente"
          required
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          CPF
        </label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf} 
          onChange={handleChange}
          placeholder="000.000.000-00"
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

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
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Sexo biológico
        </label>
        <select
          name="sexoBiologico"
          value={formData.sexoBiologico}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base"
        >
          <option value="">Selecionar</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Telefone
        </label>
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="(DDD) 9 0000-0000"
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="paciente@email.com"
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>
    </div>
  );
}