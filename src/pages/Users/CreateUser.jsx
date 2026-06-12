import UserForm from "../../components/users/UserForm";


export default function CreateUser() {
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

      console.log(data);

      alert(data.mensagem);
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-[var(--color-green-800)]">
          Cadastro de Usuário
        </h1>

        <UserForm onSubmit={handleCreateUser} />
      </div>
    </div>
  );
}

// Nesta etapa foi criada a estrutura inicial do endpoint de usuários, permitindo a comunicação entre o front-end (React)
//  e o back-end (Django).
// As decisões de modelagem foram baseadas nos campos presentes nas telas disponibilizadas pelo front-end,
//  buscando manter consistência entre a interface e a estrutura de dados.
// Atualmente o endpoint já está preparado para receber requisições de cadastro e persistir os dados no banco SQLite. 
// Algumas regras de negócio mais específicas (como validações avançadas, permissões por perfil e autenticação completa) 
// serão implementadas nas próximas etapas conforme o refinamento dos requisitos.
// A estratégia adotada foi priorizar uma estrutura flexível e de fácil evolução, permitindo 
// ajustes futuros sem impacto significativo na integração já realizada.