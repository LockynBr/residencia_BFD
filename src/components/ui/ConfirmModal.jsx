import Button from "./Button";
import Modal from "./Modal";

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
    >
      <p className="mb-6 text-gray-600">
        {message}
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={onCancel}
          className="w-32"
        >
          Cancelar
        </Button>

        <Button
          variant="danger"
          onClick={onConfirm}
          className="w-32"
        >
          Excluir
        </Button>
      </div>
    </Modal>
  );
}