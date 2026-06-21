import usePacienteForm from "../../hooks/usePacienteForm";

import CadastroPacienteTabs from "../../components/paciente/CadastroPacienteTabs";
import CadastroPacienteFooter from "../../components/paciente/CadastroPacienteFooter";
import PatientFormStepper from "../../components/paciente/PatientFormStepper";

export default function CadastroPaciente() {
  const {
    aba,

    setAba,

    formData,

    setFormData,

    errors,

    handleChange,

    avancar,

    voltar,

    cancelar,

    handleSubmit,
  } = usePacienteForm();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="bg-gradient-to-l
          from-[var(--color-green-700)]
          via-[var(--color-green-800)]
          to-[var(--color-green-800)] p-6"
      >
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] heading-font">
          Cadastro de paciente
        </h1>

        <p className="text-[var(--color-text-secondary)] body-font mt-1">
          Preencha os dados abaixo para registrar um novo paciente.
        </p>
      </div>

      <CadastroPacienteTabs aba={aba} setAba={setAba} />

      <div
        className="
          bg-gradient-to-tr
          from-[var(--color-neutral-100)]
          via-[var(--color-neutral-100)]
          to-[var(--color-neutral-200)]"
      >
        <PatientFormStepper
          aba={aba}
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
          errors={errors}
        />
      </div>

      <CadastroPacienteFooter
        aba={aba}
        avancar={avancar}
        voltar={voltar}
        cancelar={cancelar}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
