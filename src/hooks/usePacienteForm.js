import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { pacienteInitialState } from "../constants/pacienteInitialState";
import { criarPaciente } from "../services/pacienteService";

import usePacienteValidation from "./usePacienteValidation";
import { formatCPF, formatPhone } from "../utils/formatters";
import { camposPorAba } from "../constants/pacienteTabs";

function normalizePacientePayload(data) {
  return {
    ...data,
    dataNascimento: data.dataNascimento || null,
    dataExame: data.dataExame || null,
  };
}

export default function usePacienteForm() {
  const navigate = useNavigate();

  const [aba, setAba] = useState(1);
  const [formData, setFormData] = useState(pacienteInitialState);

  const { errors, validateField, validateForm, validateStep } =
    usePacienteValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cpf") {
      formattedValue = formatCPF(value);
    }

    if (name === "telefone") {
      formattedValue = formatPhone(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    validateField(name, formattedValue);
  };

  const avancar = () => {
    const isValid = validateStep(formData, camposPorAba[aba]);

    if (!isValid) return;

    setAba((prev) => prev + 1);
  };

  const voltar = () => {
    setAba((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const cancelar = () => {
    const confirmar = window.confirm(
      "Tem certeza que deseja cancelar? Os dados serão perdidos."
    );

    if (confirmar) {
      navigate(-1);
    }
  };

  const resetForm = () => {
    setFormData(pacienteInitialState);
    setAba(1);
  };

  const handleSubmit = async () => {
    const isValid = validateForm(formData);

    if (!isValid) {
      alert("Existem campos obrigatórios não preenchidos.");
      return;
    }

    try {
      const payload = normalizePacientePayload(formData);

      const response = await criarPaciente(payload);

      console.log("RESPOSTA API:", response);

      alert("Paciente cadastrado com sucesso!");

      resetForm();
    } catch (error) {
      console.error("ERRO:", error);
    }
  };

  return {
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

    resetForm,
  };
}