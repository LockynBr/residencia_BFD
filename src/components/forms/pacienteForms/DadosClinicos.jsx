export default function DadosClinicos({ formData, handleChange }) {
  return (
    <div className="p-6 space-y-4">
      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Hospital/Clínica
        </label>
        <input
          type="text"
          name="hospitalClinica"
          value={formData.hospitalClinica}
          onChange={handleChange}
          placeholder="Nome do Hospital ou clinica do exame"
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Médico solicitante
        </label>
        <input
          type="text"
          name="medicoSolicitante"
          value={formData.medicoSolicitante}
          onChange={handleChange}
          placeholder="Nome do médico solicitante do exame"
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          CRM do médico solicitante
        </label>
        <input
          type="text"
          name="crm"
          value={formData.crm}
          onChange={handleChange}
          placeholder="CRM000000-UF"
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Data do exame
        </label>
        <input
          type="date"
          name="dataExame"
          value={formData.dataExame}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base"
        />
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Tipo de exame
        </label>
        <select
          name="tipoExame"
          value={formData.tipoExame}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base"
        >
          <option value="">Selecione</option>
          <option value="mamografia">Mamografia</option>
          <option value="ressonancia">Ressonância Magnética</option>
          <option value="tomografia">Tomografia</option>
          <option value="ultrassom">Ultrassom</option>
          <option value="raiox">Raio-X</option>
        </select>
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Observações clínicas
        </label>
        <textarea
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
          rows="3"
          placeholder="Observações clínicas..."
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>

      <div>
        <label className="block text-green-900 body-font text-sm font-medium mb-1">
          Alergias
        </label>
        <textarea
          name="alergias"
          value={formData.alergias}
          onChange={handleChange}
          rows="2"
          placeholder="Alergias do paciente..."
          className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900 body-font text-base placeholder:text-neutral-400"
        />
      </div>
    </div>
  );
}