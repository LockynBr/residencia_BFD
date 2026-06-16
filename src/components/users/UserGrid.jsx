import UserCard from "./UserCard";

export default function UserGrid({
  usuarios,
  traduzirPerfil,
  traduzirStatus,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {usuarios.map((usuario) => (
        <UserCard
          key={usuario.id}
          usuario={usuario}
          traduzirPerfil={traduzirPerfil}
          traduzirStatus={traduzirStatus}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}