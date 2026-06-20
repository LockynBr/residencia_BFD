import Button from "../ui/Button";

export default function PacienteCard({
  paciente,
  onVisualizar,
  onAdicionarExame,
}) {
  return (

    <div className="rounded-xl p-1 bg-gradient-to-r from-[var(--color-white-300)] via-[var(--color-white-400)] to-[var(--color-green-500)] hover:shadow-md transition-shadow">
      <div className="flex p-6 rounded-[10px] items-center justify-between bg-gradient-to-l from-[var(--color-white-200)] via-[var(--color-white-300)] to-[var(--color-white-300)]">
        <div>
          <h2 className="text-xl font-semibold text-green-800">
            {paciente.nomeCompleto}
          </h2>

          <p className="text-sm text-[var(--color-green-500)]">CPF: {paciente.cpf}</p>

          <p className="text-sm text-[var(--color-green-500)]">
            Telefone: {paciente.telefone}
          </p>

          <p className="text-sm text-[var(--color-green-500)]">{paciente.email}</p>
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
