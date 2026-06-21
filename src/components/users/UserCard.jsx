import Card from "../ui/Card";
import Button from "../ui/Button";

export default function UserCard({
  usuario,
  traduzirPerfil,
  traduzirStatus,
  onEdit,
  onDelete,
}) {
  return (
    <Card
      className="h-full min-h-[380px] border border-[var(--color-white-400)]
      bg-gradient-to-l from-[var(--color-white-200)] via-[var(--color-white-300)] to-[var(--color-white-300)]
      drop-shadow-xl drop-shadow-green-800/60
      transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101
      flex flex-col"
    >
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-bold text-[var(--color-green-500)]">
          {usuario.nome}
        </h3>

        <p className="text-sm text-[var(--color-green-500)]">
          E-mail: {usuario.email}
        </p>

        <p className="text-sm text-[var(--color-green-500)]">
          Perfil: {traduzirPerfil(usuario.tipo_usuario)}
        </p>

        <p className="text-sm text-[var(--color-green-500)]">
          Status: {traduzirStatus(usuario.status)}
        </p>

        <p className="text-sm text-[var(--color-green-500)]">
          CPF: {usuario.cpf || "Não informado"}
        </p>

        <p className="text-sm text-[var(--color-green-500)]">
          Telefone: {usuario.telefone || "Não informado"}
        </p>

        {usuario.tipo_usuario === "doctor" && (
          <>
            <p className="text-sm text-[var(--color-green-500)]">
              CRM: {usuario.crm || "Não informado"}
            </p>

            <p className="text-sm text-[var(--color-green-500)]">
              CRM/UF: {usuario.crm_uf || "Não informado"}
            </p>
          </>
        )}
      </div>

      <div className="mt-6 flex gap-2">
        

        <Button
          variant="danger"
          className="w-full drop-shadow-xl drop-shadow-green-200/80"
          onClick={() => onDelete(usuario)}
        >
          Excluir
        </Button>

        <Button
          variant="secondary"
          className="w-full drop-shadow-xl drop-shadow-green-200/80"
          onClick={() => onEdit(usuario)}
        >
          Editar
        </Button>
      </div>
    </Card>
  );
}
