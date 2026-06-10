import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";


export default function Usuarios() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-neutral-100)]">
          Usuários
        </h1>

      
      </div>

      <div
        className="
          rounded-xl
          border
          border-[var(--color-neutral-200)]
          bg-white
          p-6
        "
      >
        <p className="text-gray-500">
          Nenhum usuário cadastrado.
        </p>
      </div>
    </div>
  );
}