import Button from "./Button";
import Modal from "./Modal";

export default function SuccessModal({
  isOpen,
  title,
  message,
  onClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
    >
      <p className="mb-6 text-gray-600">
        {message}
      </p>

      <div className="flex justify-end">
        <Button
          onClick={onClose}
          className="w-32"
        >
          OK
        </Button>
      </div>
    </Modal>
  );
}