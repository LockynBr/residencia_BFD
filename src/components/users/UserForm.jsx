import { useEffect, useState } from "react";

import UserPersonalSection from "./UserPersonalSection";
import UserAccessSection from "./UserAccessSection";
import UserRoleSection from "./UserRoleSection";
import UserMedicalSection from "./UserMedicalSection";
import UserActions from "./UserActions";

import { isValidEmail } from "../../utils/validators";

const initialState = {
  fullName: "",
  cpf: "",
  phone: "",

  email: "",
  confirmEmail: "",

  username: "",
  password: "",
  confirmPassword: "",

  role: "",
  status: "active",

  crm: "",
  crmUf: "",
};

export default function UserForm({
  onSubmit,
  initialData = null,
  mode = "create",
}) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialState,
        ...initialData,
      });
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      alert("Informe um e-mail válido.");
      return;
    }

    if (
      formData.email !== formData.confirmEmail
    ) {
      alert(
        "Os e-mails informados não coincidem."
      );
      return;
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <UserPersonalSection
        formData={formData}
        handleChange={handleChange}
      />

      <UserAccessSection
        formData={formData}
        handleChange={handleChange}
        mode={mode}
      />

      <UserRoleSection
        formData={formData}
        handleChange={handleChange}
      />

      <UserMedicalSection
        formData={formData}
        handleChange={handleChange}
      />

      <UserActions
        submitLabel={
          mode === "edit"
            ? "Atualizar Usuário"
            : "Salvar Usuário"
        }
      />
    </form>
  );
}