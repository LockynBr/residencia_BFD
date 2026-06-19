export default function PacienteDetailsModal({
  paciente,
  onClose,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Dados do Paciente
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Nome:</strong>{" "}
            {paciente.nomeCompleto}
          </p>

          <p>
            <strong>CPF:</strong>{" "}
            {paciente.cpf}
          </p>

          <p>
            <strong>Telefone:</strong>{" "}
            {paciente.telefone}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {paciente.email}
          </p>

          <p>
            <strong>Cidade:</strong>{" "}
            {paciente.cidade}
          </p>

          <p>
            <strong>Estado:</strong>{" "}
            {paciente.estado}
          </p>
        </div>
      </div>
    </div>
  );
}