import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

export default function UserActions({
  loading,
  submitLabel = "Salvar Usuário",
}) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-4 pt-4">
      <Button
        type="button"
        variant="danger"
        onClick={() => navigate("/usuarios")}
      >
        Cancelar
      </Button>

      <Button
        type="submit"
        variant="primary"
        disabled={loading}
      >
        {submitLabel}
      </Button>
    </div>
  );
}