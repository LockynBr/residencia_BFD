import { useState } from "react";

import SuccessModal from "../../components/ui/SuccessModal";

export default function EditUser() {
  const [showSuccessModal, setShowSuccessModal] =
    useState(false);

  return (
    <>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">
          Editar Usuário
        </h1>

        <div className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-6">
          <p className="text-gray-500">
            Funcionalidade aguardando endpoint de atualização do backend.
          </p>
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