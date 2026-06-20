// export default function PacienteDetailsModal({
//   paciente,
//   onClose,
// }) {
//   return (
//     <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//       <div className="bg-gradient-to-l from-[var(--color-white-200)] via-[var(--color-white-300)] to-[var(--color-white-300)] rounded-xl w-full max-w-3xl p-6">
//         <div className="flex justify-between items-center mb-6 ">
//           <h2 className="text-xl font-bold">
//             Dados do Paciente
//           </h2>

//           <button className="cursor-pointer" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         <div className="space-y-2">
//           <p>
//             <strong>Nome:</strong>{" "}
//             {paciente.nomeCompleto}
//           </p>

//           <p>
//             <strong>CPF:</strong>{" "}
//             {paciente.cpf}
//           </p>

//           <p>
//             <strong>Telefone:</strong>{" "}
//             {paciente.telefone}
//           </p>

//           <p>
//             <strong>Email:</strong>{" "}
//             {paciente.email}
//           </p>

//           <p>
//             <strong>Cidade:</strong>{" "}
//             {paciente.cidade}
//           </p>

//           <p>
//             <strong>Estado:</strong>{" "}
//             {paciente.estado}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function PacienteDetailsModal({
  paciente,
  onClose,
}) {
  const InfoItem = ({ label, value }) => (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500">
        {label}
      </span>

      <span className="font-medium">
        {value || "-"}
      </span>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-r from-[var(--color-white-300)] via-[var(--color-white-200)] to-[var(--color-white-200)] rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-4">
          <h2 className="text-2xl font-bold">
            Dados do Paciente
          </h2>

          <button
            onClick={onClose}
            className="cursor-pointer text-lg hover:text-red-500 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Dados Pessoais */}
          <section className="bg-gradient-to-l from-[var(--color-white-300)] via-[var(--color-white-200)] to-[var(--color-white-200)] rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">
              Dados Pessoais
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoItem
                label="Nome Completo"
                value={paciente.nomeCompleto}
              />

              <InfoItem
                label="CPF"
                value={paciente.cpf}
              />

              <InfoItem
                label="Data de Nascimento"
                value={paciente.dataNascimento}
              />

              <InfoItem
                label="Sexo Biológico"
                value={paciente.sexoBiologico}
              />

              <InfoItem
                label="Telefone"
                value={paciente.telefone}
              />

              <InfoItem
                label="E-mail"
                value={paciente.email}
              />
            </div>
          </section>

          {/* Endereço */}
          <section className="bg-gradient-to-l from-[var(--color-white-300)] via-[var(--color-white-200)] to-[var(--color-white-200)] rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">
              Endereço
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoItem
                label="CEP"
                value={paciente.cep}
              />

              <InfoItem
                label="Logradouro"
                value={paciente.logradouro}
              />

              <InfoItem
                label="Número"
                value={paciente.numero}
              />

              <InfoItem
                label="Complemento"
                value={paciente.complemento}
              />

              <InfoItem
                label="Bairro"
                value={paciente.bairro}
              />

              <InfoItem
                label="Cidade"
                value={paciente.cidade}
              />

              <InfoItem
                label="Estado"
                value={paciente.estado}
              />
            </div>
          </section>

          {/* Dados Clínicos */}
          <section className="bg-gradient-to-l from-[var(--color-white-300)] via-[var(--color-white-200)] to-[var(--color-white-200)] rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">
              Dados Clínicos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoItem
                label="Hospital / Clínica"
                value={paciente.hospitalClinica}
              />

              <InfoItem
                label="Médico Solicitante"
                value={paciente.medicoSolicitante}
              />

              <InfoItem
                label="CRM"
                value={paciente.crm}
              />

              <InfoItem
                label="Convênio"
                value={paciente.convenio}
              />
            </div>
          </section>

          {/* Exame */}
          <section className="bg-gradient-to-l from-[var(--color-white-300)] via-[var(--color-white-200)] to-[var(--color-white-200)] rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">
              Informações do Exame
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoItem
                label="Tipo de Exame"
                value={paciente.tipoExame}
              />

              <InfoItem
                label="Data do Exame"
                value={paciente.dataExame}
              />

              <InfoItem
                label="Status"
                value={paciente.status}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}