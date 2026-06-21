import { isValidEmail } from "../utils/validators";

export function validatePacienteField(name, value) {
  switch (name) {
    case "nomeCompleto":
      return !value.trim()
        ? "Nome do paciente precisa ser preenchido"
        : "";

    case "cpf":
      if (!value.trim()) {
        return "CPF precisa ser preenchido";
      }

      if (value.replace(/\D/g, "").length !== 11) {
        return "CPF inválido";
      }

      return "";

    case "telefone":
      if (!value.trim()) {
        return "Telefone precisa ser preenchido";
      }

      if (value.replace(/\D/g, "").length !== 11) {
        return "Telefone inválido";
      }

      return "";

    case "email":
      if (!value.trim()) {
        return "E-mail precisa ser preenchido";
      }

      if (!isValidEmail(value)) {
        return "E-mail inválido";
      }

      return "";

    case "logradouro":
      return !value.trim()
        ? "Logradouro precisa ser preenchido"
        : "";

    case "cep":
      return !value.trim()
        ? "CEP precisa ser preenchido"
        : "";

    case "bairro":
      return !value.trim()
        ? "Bairro precisa ser preenchido"
        : "";

    case "estado":
      return !value
        ? "Estado precisa ser selecionado"
        : "";

    case "cidade":
      return !value
        ? "Cidade precisa ser selecionada"
        : "";

    default:
      return "";
  }
}