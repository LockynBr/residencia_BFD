import Button from "../ui/Button";

export default function PacienteCard({
  paciente,
  onVisualizar,
  onAdicionarExame,
}) {
  return (
    <div className="border border-neutral-200 rounded-xl p-4 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-green-900">
            {paciente.nomeCompleto}
          </h2>

          <p className="text-sm text-neutral-500">CPF: {paciente.cpf}</p>

          <p className="text-sm text-neutral-500">
            Telefone: {paciente.telefone}
          </p>

          <p className="text-sm text-neutral-500">{paciente.email}</p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="tertiary"
            className="w-full"
            onClick={() => onVisualizar(paciente)}
          >
            Visualizar
          </Button>

          <Button
            variant="primary"
            className="w-full"
            onClick={() => onAdicionarExame(paciente)}
          >
            Adicionar Exame
          </Button>

         
        </div>
      </div>
    </div>
  );
}
