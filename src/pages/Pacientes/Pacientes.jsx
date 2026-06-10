import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";


export default function Pacientes() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-neutral-100)]">
          Pacientes
        </h1>

      <Button
  variant="primary"
  onClick={() => navigate("/pacientes/cadastro")}
  className="w-auto px-6"
>
  Novo Paciente
</Button>
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
          Nenhum paciente cadastrado.
        </p>
      </div>
    </div>
  );
}