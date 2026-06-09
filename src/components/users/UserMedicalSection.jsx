import Input from "../ui/Input";
import Select from "../ui/Select";

export default function UserMedicalSection({ formData, handleChange }) {
  if (formData.role !== "doctor") {
    return null;
  }

  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-semibold text-[var(--color-green-800)]">
        Dados Profissionais
      </h3>

      <div className="grid items-end grid-cols-2 gap-4">
        <Input
          label="CRM"
          value={formData.crm}
          onChange={(e) => handleChange("crm", e.target.value)}
        />

        <Select
          label="Conselho / UF"
          value={formData.crmUf}
          onChange={(e) => handleChange("crmUf", e.target.value)}
        >
          <option value="">Selecione</option>

          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </Select>
      </div>
    </section>
  );
}
