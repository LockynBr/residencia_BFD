import { useState } from "react";

import UserForm from "../../components/users/UserForm";
import SuccessModal from "../../components/ui/SuccessModal";

export default function CreateUser() {
  const [showSuccessModal, setShowSuccessModal] =
    useState(false);

  const handleCreateUser = async (userData) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/usuarios/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (data.sucesso) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-8 text-3xl font-bold text-[var(--color-green-800)]">
            Cadastro de Usuário
          </h1>

          <UserForm
            mode="create"
            onSubmit={handleCreateUser}
          />
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        title="Cadastro realizado"
        message="Usuário cadastrado com sucesso."
        onClose={() =>
          setShowSuccessModal(false)
        }
      />
    </>
  );
}