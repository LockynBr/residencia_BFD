import Input from "../ui/Input";

import { formatCPF, formatPhone } from "../../utils/formatters";

export default function UserPersonalSection({ formData, handleChange }) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-[var(--color-green-800)]">
        Dados Pessoais
      </h3>

      <Input
        label="Nome Completo"
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="CPF"
          placeholder="000.000.000-00"
          value={formData.cpf}
          onChange={(e) => handleChange("cpf", formatCPF(e.target.value))}
        />

        <Input
          label="Telefone"
          placeholder="(00) 0 0000-0000"
          value={formData.phone}
          onChange={(e) => handleChange("phone", formatPhone(e.target.value))}
        />
      </div>

      <Input
        label="E-mail"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <Input
        label="Confirmar E-mail"
        type="email"
        value={formData.confirmEmail}
        onChange={(e) => handleChange("confirmEmail", e.target.value)}
      />

      {formData.confirmEmail && formData.email !== formData.confirmEmail && (
        <p className="text-sm text-[var(--color-danger)]">
          Os e-mails não coincidem.
        </p>
      )}
    </section>
  );
}
