import { useState } from "react";

import { validatePacienteField } from "../validations/pacienteValidation";

export default function usePacienteValidation() {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const error = validatePacienteField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return !error;
  };

  const validateForm = (formData) => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = validatePacienteField(key, value);

      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateStep = (formData, campos) => {
  const newErrors = {};

  campos.forEach((campo) => {
    const error = validatePacienteField(
      campo,
      formData[campo]
    );

    if (error) {
      newErrors[campo] = error;
    }
  });

  setErrors((prev) => ({
    ...prev,
    ...newErrors,
  }));

  return Object.keys(newErrors).length === 0;
};

  return {
  errors,
  validateField,
  validateForm,
  validateStep,
};
}