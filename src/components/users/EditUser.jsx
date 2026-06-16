import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserForm from "../../components/users/UserForm";

export default function EditUser() {
  const { id } = useParams();

  const [usuario, setUsuario] =
    useState(null);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/usuarios/${id}/`
        );

        const data =
          await response.json();

        setUsuario(data.usuario);
      } catch (error) {
        console.error(error);
      }
    }

    carregarUsuario();
  }, [id]);

  const handleSubmit = async (
    formData
  ) => {
    try {
      await fetch(
        `http://127.0.0.1:8000/api/usuarios/${id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            formData
          ),
        }
      );

      alert(
        "Usuário atualizado com sucesso!"
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (!usuario) {
    return (
      <p>Carregando usuário...</p>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">
        Editar Usuário
      </h1>

      <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-6">
        <UserForm
          mode="edit"
          initialData={usuario}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}