import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserGrid from "../../components/users/UserGrid";
import ConfirmModal from "../../components/ui/ConfirmModal";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/usuarios/");

        const data = await response.json();

        if (data.sucesso) {
          setUsuarios(data.usuarios);
        }
      } catch (error) {
        console.error(error);
      }
    }

    carregarUsuarios();
  }, []);

  const traduzirPerfil = (perfil) => {
    switch (perfil) {
      case "admin":
        return "Administrador";

      case "doctor":
        return "Médico";

      case "reception":
        return "Recepção";

      default:
        return perfil;
    }
  };

  const traduzirStatus = (status) => {
    switch (status) {
      case "active":
        return "Ativo";

      case "inactive":
        return "Inativo";

      default:
        return status;
    }
  };

  const handleEdit = (usuario) => {
    navigate(`/usuarios/editar/${usuario.id}`);
  };

  const handleDelete = (usuario) => {
    setSelectedUser(usuario);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      /*
    Endpoint futuro

    await fetch(
      `http://127.0.0.1:8000/api/usuarios/${selectedUser.id}/`,
      {
        method: "DELETE",
      }
    );
    */

      setUsuarios((prev) => prev.filter((item) => item.id !== selectedUser.id));

      setShowDeleteModal(false);
      setSelectedUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[var(--color-neutral-100)]">Usuários</h1>

      <div className="rounded-xl p-6">
        {usuarios.length === 0 ? (
          <p className="text-[var(--color-neutral-100)]">Nenhum usuário cadastrado.</p>
        ) : (
          <UserGrid
            usuarios={usuarios}
            traduzirPerfil={traduzirPerfil}
            traduzirStatus={traduzirStatus}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Excluir Usuário"
        message={`Deseja realmente excluir ${selectedUser?.nome}?`}
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
}
