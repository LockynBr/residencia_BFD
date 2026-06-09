import UserForm from "../../components/users/UserForm";

export default function CreateUser() {
  const handleCreateUser = async (
    userData
  ) => {
    console.log(userData);

    // integração futura com API
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-[var(--color-green-800)]">
          Cadastro de Usuário
        </h1>

        <UserForm
          onSubmit={handleCreateUser}
        />
      </div>
    </div>
  );
}