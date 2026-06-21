import Button from "../ui/Button";

export default function PacienteCard({
  paciente,
  onVisualizar,
  onAdicionarExame,
}) {
  return (

    <div className="rounded-xl p-1 bg-gradient-to-r from-[var(--color-white-300)] via-[var(--color-white-400)] to-[var(--color-green-500)] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
      <div className="flex p-6 rounded-[10px] items-center justify-between bg-gradient-to-l from-[var(--color-white-200)] via-[var(--color-white-300)] to-[var(--color-white-300)]">
        <div>
          <h2 className="text-xl font-semibold text-[var(--color-green-700)]">
            {paciente.nomeCompleto}
          </h2>

          <p className="text-sm text-[var(--color-green-500)]">CPF: {paciente.cpf}</p>

          <p className="text-sm text-[var(--color-green-500)]">
            Telefone: {paciente.telefone}
          </p>

          <p className="text-sm text-[var(--color-green-500)]">{paciente.email}</p>
        </div>

        <div className="flex flex-row gap-2">
          <Button
            variant="tertiary"
            className="w-[150px]  drop-shadow-xl drop-shadow-green-200/80"
            onClick={() => onVisualizar(paciente)}
          >
            Visualizar
          </Button>                                   

          <Button
            variant="primary"
            className="w-[150px]  drop-shadow-xl drop-shadow-green-200/80"
            onClick={() => onAdicionarExame(paciente)}
          >
            Adicionar Exame                                                                       
          </Button>

         
        </div>
      </div>
    </div>
  );
}
