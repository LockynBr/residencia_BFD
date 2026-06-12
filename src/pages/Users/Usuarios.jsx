/*
|--------------------------------------------------------------------------
| Listagem de Usuários
|--------------------------------------------------------------------------
|
| Esta página consulta a API de usuários do backend e exibe os registros
| cadastrados no sistema.
|
| Sempre que a tela é carregada, é feita uma requisição para obter a lista
| atualizada de usuários, permitindo visualizar os dados salvos no banco.
|
*/

import { useEffect, useState } from "react";


export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/usuarios/"
        );

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

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">
        Usuários
      </h1>

      <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-6">
        {usuarios.length === 0 ? (
          <p className="text-gray-500">
            Nenhum usuário cadastrado.
          </p>
        ) : (
          <div className="space-y-4">
            {usuarios.map((usuario) => (
              <div
                key={usuario.id}
                className="rounded-lg border border-gray-200 p-4"
              >
                <p className="font-bold">
                  {usuario.nome}
                </p>

                <p className="text-sm text-gray-600">
                  E-mail: {usuario.email}
                </p>

                <p className="text-sm text-gray-600">
                  Perfil: {traduzirPerfil(usuario.tipo_usuario)}
                </p>

                <p className="text-sm text-gray-600">
                  Status: {traduzirStatus(usuario.status)}
                </p>

                <p className="text-sm text-gray-600">
                  CPF: {usuario.cpf || "Não informado"}
                </p>

                <p className="text-sm text-gray-600">
                  Telefone: {usuario.telefone || "Não informado"}
                </p>

                {usuario.tipo_usuario === "doctor" && (
                  <>
                    <p className="text-sm text-gray-600">
                      CRM: {usuario.crm || "Não informado"}
                    </p>

                    <p className="text-sm text-gray-600">
                      CRM/UF: {usuario.crm_uf || "Não informado"}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}