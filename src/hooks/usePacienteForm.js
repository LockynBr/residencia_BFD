import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { pacienteInitialState } from "../constants/pacienteInitialState";

// TODO: substituir pelo seu service real
// import pacienteService from "../services/pacienteService";

export default function usePacienteForm() {
  const navigate = useNavigate();

  const [aba, setAba] = useState(1);
  const [formData, setFormData] = useState(pacienteInitialState);

  // =========================
  // HANDLE CHANGE GENÉRICO
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // NAVEGAÇÃO ENTRE ABAS
  // =========================
  const avancar = () => {
    setAba((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const voltar = () => {
    setAba((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // =========================
  // CANCELAR
  // =========================
  const cancelar = () => {
    const confirmar = window.confirm(
      "Tem certeza que deseja cancelar? Os dados serão perdidos."
    );

    if (confirmar) {
      navigate(-1);
    }
  };

  // =========================
  // RESET FORM
  // =========================
  const resetForm = () => {
    setFormData(pacienteInitialState);
    setAba(1);
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async () => {
    try {
      console.log("Dados completos:", formData);

      // await pacienteService.create(formData);

      alert("Paciente cadastrado com sucesso!");

      resetForm();
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
      alert("Erro ao cadastrar paciente.");
    }
  };

  return {
    aba,
    setAba,

    formData,
    setFormData,

    handleChange,

    avancar,
    voltar,

    cancelar,
    handleSubmit,

    resetForm,
  };
}