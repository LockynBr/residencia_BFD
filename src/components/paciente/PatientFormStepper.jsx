import DadosPessoais from "../forms/pacienteForms/DadosPessoais";
import Endereco from "../forms/pacienteForms/Endereco";
import DadosClinicos from "../forms/pacienteForms/DadosClinicos";
import ArquivoExame from "../forms/pacienteForms/ArquivoExame";

export default function PatientFormStepper({
  aba,
  formData,
  handleChange,
  setFormData,
}) {
  switch (aba) {
    case 1:
      return (
        <DadosPessoais
          formData={formData}
          handleChange={handleChange}
        />
      );

    case 2:
      return (
        <Endereco
          formData={formData}
          handleChange={handleChange}
        />
      );

    case 3:
      return (
        <DadosClinicos
          formData={formData}
          handleChange={handleChange}
        />
      );

    case 4:
      return (
        <ArquivoExame
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
      );

    default:
      return null;
  }
}