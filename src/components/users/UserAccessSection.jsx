import Input from "../ui/Input";

export default function UserAccessSection({
  formData,
  handleChange,
  mode = "create",
}) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-[var(--color-green-800)]">
        Dados de Acesso
      </h3>

      <Input
        label="Usuário"
        value={formData.username}
        onChange={(e) =>
          handleChange("username", e.target.value)
        }
      />

      {mode === "create" && (
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={(e) =>
              handleChange(
                "password",
                e.target.value
              )
            }
          />

          <Input
            label="Confirmar Senha"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleChange(
                "confirmPassword",
                e.target.value
              )
            }
          />
        </div>
      )}
    </section>
  );
}