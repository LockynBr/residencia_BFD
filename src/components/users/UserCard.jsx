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
      className="h-full min-h-[320px] border border-[var(--color-green-700)]
    bg-linear-to-tr
      from-[var(--color-green-800)]
      via-[var(--color-green-700)]
    to-[var(--color-green-500)] 
    shadow-xl
        
    flex flex-col"
    >
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
          {usuario.nome}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)]">
          E-mail: {usuario.email}
        </p>

        <p className="text-sm text-[var(--color-text-secondary)]">
          Perfil: {traduzirPerfil(usuario.tipo_usuario)}
        </p>

        <p className="text-sm text-[var(--color-text-secondary)]">
          Status: {traduzirStatus(usuario.status)}
        </p>

        <p className="text-sm text-[var(--color-text-secondary)]">
          CPF: {usuario.cpf || "Não informado"}
        </p>

        <p className="text-sm text-[var(--color-text-secondary)]">
          Telefone: {usuario.telefone || "Não informado"}
        </p>

        {usuario.tipo_usuario === "doctor" && (
          <>
            <p className="text-sm text-[var(--color-text-secondary)]">
              CRM: {usuario.crm || "Não informado"}
            </p>

            <p className="text-sm text-[var(--color-text-secondary)]">
              CRM/UF: {usuario.crm_uf || "Não informado"}
            </p>
          </>
        )}
      </div>

      <div className="mt-6 flex gap-2">
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onEdit(usuario)}
        >
          Editar
        </Button>

        <Button
          variant="danger"
          className="w-full"
          onClick={() => onDelete(usuario)}
        >
          Excluir
        </Button>
      </div>
    </Card>
  );
}
