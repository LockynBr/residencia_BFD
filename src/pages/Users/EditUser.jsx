import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserForm from "../../components/users/UserForm";
import SuccessModal from "../../components/ui/SuccessModal";

export default function EditUser() {
  const { id } = useParams();

  const [usuario, setUsuario] =
    useState(null);

  const [apiDisponivel, setApiDisponivel] =
    useState(false);

  const [
    showSuccessModal,
    setShowSuccessModal,
  ] = useState(false);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        /*
         * Backend futuro:
         *
         * GET /api/usuarios/:id
         */

        const response = await fetch(
          `http://127.0.0.1:8000/api/usuarios/${id}/`
        );

        if (!response.ok) {
          throw new Error();
        }

        const data =
          await response.json();

        setUsuario(data.usuario);
        setApiDisponivel(true);
      } catch (error) {
        console.warn(
          "Endpoint de edição ainda não disponível."
        );

        setApiDisponivel(false);
      }
    }

    carregarUsuario();
  }, [id]);

  const handleSubmit = async (
    formData
  ) => {
    try {
      /*
       * Backend futuro:
       *
       * PUT /api/usuarios/:id
       */

      const response = await fetch(
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

      if (!response.ok) {
        throw new Error();
      }

      setShowSuccessModal(true);
    } catch (error) {
      alert(
        "Endpoint de atualização ainda não disponível."
      );
    }
  };

  return (
    <>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">
          Editar Usuário
        </h1>

        <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-6">
          {!apiDisponivel ? (
            <div className="space-y-2">
              <p className="font-medium text-gray-700">
                Integração em andamento
              </p>

              <p className="text-sm text-gray-500">
                A tela de edição já está pronta.
                Estamos aguardando o endpoint do backend para carregar e atualizar os dados do usuário.
              </p>
            </div>
          ) : (
            <UserForm
              mode="edit"
              initialData={usuario}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        title="Alteração realizada"
        message="Usuário atualizado com sucesso."
        onClose={() =>
          setShowSuccessModal(false)
        }
      />
    </>
  );
}