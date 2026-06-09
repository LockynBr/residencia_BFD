import Select from "../ui/Select";

export default function UserRoleSection({ formData, handleChange }) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-[var(--color-green-800)]">
        Permissões
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>

          <Select
            label="Perfil"
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            <option value="">Selecione</option>

            <option value="admin">Administrador</option>

            <option value="doctor">Médico</option>

            <option value="reception">Recepção</option>
          </Select>
        </div>

        <div>

          <Select
            label="Status"
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="active">Ativo</option>

            <option value="inactive">Inativo</option>
          </Select>
        </div>
      </div>
    </section>
  );
}
